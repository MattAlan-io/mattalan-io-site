import React from 'react';

import Card from '../../../components/card';
import ContentWrapper from '../../../components/content-wrapper';
import Section from '../../../components/section';
import MDImage from '../../../images/md.png';

const ContactSection = () => {
  return (
    <Section id="contact" className="text-black text-center bg-white">
      <ContentWrapper>
        <form onSubmit={formData => console.log({ formData })} className="w-full mx-auto max-w-3xl bg-white shadow p-8 text-gray-700 ">
          <div className="mb-6">
          <h2 className="w-full my-2 text-3xl font-bold leading-tight my-5">Get in touch!</h2>
          <p>We'd love to hear what you have in mind.</p>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="relative w-full appearance-none label-floating">
              <input
                className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                type="text"
                placeholder="Your name"
                required
              />
              <label
                htmlFor="name"
                className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
              >
                Your name
              </label>
            </div>
          </div>

          <div className="flex flex-wrap mb-6">
            <div className="relative w-full appearance-none label-floating">
              <input
                className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                type="text"
                placeholder="Your email"
                required
              />
              <label
                htmlFor="name"
                className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
              >
                Your email
              </label>
            </div>
          </div>

          <div className="flex flex-wrap mb-6">
            <div className="relative w-full appearance-none label-floating">
              <textarea
                className="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                id="message"
                placeholder="Message..."
              ></textarea>
              <label
                htmlFor="message"
                className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
              >
                Message...
              </label>
            </div>
          </div>

          <div className="">
            <button
              className="w-full shadow bg-maio-blue focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </ContentWrapper>
    </Section>
  );
};

export default ContactSection;
