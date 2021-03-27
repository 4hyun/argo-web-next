import React, { useEffect } from "react";
import { Close } from "components/Icons";
import styled from "styled-components";
import tw from "twin.macro";

const InquiryItemsContainer = styled.div`
  ${tw`flex flex-col pt-4 px-4 space-y-2`}
`;
const InquiryItem = styled.div`
  ${tw`flex py-4 pl-3 pr-2 flex-grow-0 items-center rounded-lg text-white font-bold space-x-2`}
  /* tyk-green */
  max-width: fit-content;
  box-shadow: 0px 1px 4px 0px rgba(5, 217, 187, 1);
  height: 27px;
  background: #05d9bb;
  /* border-radius: 8px; */
  /* Inside Auto Layout */
  /*
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 8px 0px;
  */
`;

const Form = ({ inquiryItems, priceModelsMap, removeInquiryItem }) => {
  useEffect(() => {
    console.log("inquiryItems : ", inquiryItems);
  });
  const inputFocusClassnames =
    "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500";
  return (
    <form
      name="contact"
      method="POST"
      className="bg-white shadow-md overflow-hidden rounded-md lg:my-auto select-none"
      data-netlify="true"
    >
      <InquiryItemsContainer>
        {inquiryItems.map((inquiryItemId) => (
          <InquiryItem key={inquiryItemId}>
            <span>{priceModelsMap[inquiryItemId]}</span>
            <Close size="20" onClick={() => removeInquiryItem(inquiryItemId)} />
          </InquiryItem>
        ))}
      </InquiryItemsContainer>
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
