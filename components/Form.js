import React from "react";

const Form = () => {
  const inputFocusClassnames =
    "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500";
  return (
    <form
      name="contact"
      method="POST"
      className="bg-white shadow-md overflow-hidden rounded-md lg:my-auto select-none"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact"></input>
      <div className="outer bg-white">
        <div className="form-body__wrapper px-4 md:px-3 py-4 bg-white">
          <div className="grid lg:grid-cols-6 grid-cols-12 gap-4">
            <div className="col-span-8">
              <label
                htmlFor="full_name"
                className="block text-sm font-medium text-gray-700"
              >
                Full name
              </label>
              <input
                type="text"
                name="full_name"
                id="full_name"
                autoComplete="given-name"
                className={`mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md px-2 py-2 ${inputFocusClassnames}`}
                required
              />
            </div>
            <div className="col-span-12">
              <label
                htmlFor="email_address"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="text"
                name="email_address"
                id="email_address"
                autoComplete="email"
                className={`mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md px-2 py-2 ${inputFocusClassnames}`}
                required
              />
            </div>
            <div className="col-span-12">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Drop us a line
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                className={`shadow-sm mt-1 block w-full sm:text-sm border border-gray-300 rounded-md px-2 py-2 ${inputFocusClassnames}`}
                placeholder="for Tyk inquiries and others"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="form-button__wrapper px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            aria-label="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-base font-medium text-white bg-argo-blue-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
