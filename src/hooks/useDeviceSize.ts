import { useState, useEffect } from 'react'

export enum DeviceWidth {
  Desktop,
  Tablet,
  Mobile,
}

const DeviceWidthBreakpoints = {
  Desktop: 1024,
  Tablet: 768,
  Mobile: 480,
};

function getDeviceWidth(width: number) {
  if (width < DeviceWidthBreakpoints.Mobile) {
    return DeviceWidth.Mobile;
  } else if (width < DeviceWidthBreakpoints.Tablet) {
    return DeviceWidth.Tablet;
  }

  return DeviceWidth.Desktop;
}

export function useDeviceSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount


  return [getDeviceWidth(windowSize.width), windowSize] as const;
}

/**
 * create a number range from start (inclusive) to end (exclusive)
 * @param start 
 * @param end 
 */
function enumerate(start: number, end: number) {
  return Array.from({ length: end - start }).map((_, i) => i + start);
}


export function byDeviceWidth(deviceWidth: DeviceWidth) {
  return <V>(sizeMappings: {[key in DeviceWidth]?: V }) => {
    const widths = [DeviceWidth.Mobile, DeviceWidth.Tablet, DeviceWidth.Desktop];

    const targetIndex = widths.indexOf(deviceWidth);

    const target = enumerate(targetIndex, widths.length)
      .map(i => widths[i])
      .find(width => sizeMappings[width] !== undefined);

    if (target !== undefined) {
      return sizeMappings[target];
    }

    const fallback = enumerate(0, widths.length)
      .map(i => widths[i])
      .find(width => sizeMappings[width] !== undefined);
    
    if (fallback === undefined) {
      throw new Error("No size mapping found for this byDeviceWidth usage!");
    }

    return sizeMappings[fallback];;
  }
}