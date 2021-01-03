import React from "react";

const Form = () => {
  return (
    <form
      name="contact"
      method="POST"
      className="bg-white shadow overflow-hidden sm:rounded-md my-auto"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact"></input>
      <div className="outer bg-white">
        <div className="form-body__wrapper px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                for="full_name"
                className="block text-sm font-medium text-gray-700"
              >
                Full name
              </label>
              <input
                type="text"
                name="full_name"
                id="full_name"
                autoComplete="given-name"
                className="mt-1 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-2 py-3"
              />
            </div>
            <div className="col-span-6 sm:col-span-6">
              <label
                for="email_address"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="text"
                name="email_address"
                id="email_address"
                autoComplete="email"
                className="mt-1 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-2 py-3"
              />
            </div>
          </div>
        </div>
        <div className="form-button__wrapper px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-argo-blue-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
