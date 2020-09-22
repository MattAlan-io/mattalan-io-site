import React from 'react';
import { LORUM_IPSUM, LORUM_IPSUM_MEDIUM } from '../util/util';

type Props = {
  author: string;
  content?: string;
  title: string;
  imageSrc: string;
};

const Testemonial = ({ author, title, content, imageSrc }: Props) => {
  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 ">
      <div className="flex justify-center md:justify-end -mt-16">
        <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={imageSrc} />
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">{title}</h2>
        <p className="mt-2 text-gray-600">{LORUM_IPSUM_MEDIUM}</p>
      </div>
      <div className="flex justify-end mt-4">
        <a href="#" className="text-xl font-medium text-indigo-500">
          {author}
        </a>
      </div>
    </div>
  );
};

export default Testemonial;
