import { SectionID } from './util.types';

export function isNotNullOrUndefined<T>(value: T): value is Exclude<null | undefined, T> {
  return ![null, undefined].includes(value);
}

export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function scrollToSection(section: SectionID, position: ScrollLogicalPosition = 'start') {
  const element = document.getElementById(section);
  element.scrollIntoView({ behavior: 'smooth', block: position });
}

export const LORUM_IPSUM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
