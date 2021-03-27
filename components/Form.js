import React, { useRef, useState } from "react";
import { Close } from "components/Icons";
import styled from "styled-components";
import tw from "twin.macro";
import useDeviceDetect from "hooks/useDeviceDetect";

const InquiryItemsContainer = styled.div`
  ${tw`flex flex-col pt-4 px-4 space-y-2`}
`;
const InquiryItem = styled.div`
  ${tw`flex py-4 pl-3 pr-2 flex-grow-0 items-center rounded-lg text-white font-bold space-x-2`}
  max-width: fit-content;
  box-shadow: 0px 1px 4px 0px rgba(5, 217, 187, 1);
  height: 27px;
  background: #05d9bb;
`;
const Label = tw.label`block text-sm font-medium text-gray-700`;

const HiddenCheckbox = tw.input`hidden`;

const Input = tw.input`mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`;

const Textarea = tw.textarea`shadow-sm mt-1 block w-full sm:text-sm border border-gray-300 rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`;

const SubmitButton = tw.button`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-base font-medium text-white bg-argo-blue-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full relative`;

const Ping = ({ on }) => (
  <span
    class={`flex absolute h-3 w-3 top-1 right-1 -mt-1 -mr-1 ${
      on ? "opacity-100" : "opacity-0"
    }`}
  >
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
    <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
  </span>
);

const SUBMIT_DEFAULT_MESSAGE = "Send";
const SUBMIT_SUCCESS_MESSAGE = "Message Sent!";
const SUBMIT_ERROR_MESSAGE = "Please click to retry.";
const PING_ON = true;
const PING_OFF = false;

const Form = ({
  inquiryItems,
  priceModelsMap,
  removeInquiryItem,
  closeForm,
}) => {
  const ref = useRef();
  const { isMobile } = useDeviceDetect();
  const [pingOn, setPing] = useState(PING_OFF);
  const [submitButtonMessage, setSubmitButtonMessage] = useState(
    SUBMIT_DEFAULT_MESSAGE
  );
  const handleFormSubmitStatus = (statusMessage) => {
    setSubmitButtonMessage(statusMessage);
    if (isMobile) {
      setPing(PING_ON);
    }
  };
  const netlifyFormSubmit = async (e) => {
    e.preventDefault();
    if (isMobile && submitButtonMessage === SUBMIT_SUCCESS_MESSAGE) {
      setPing(PING_OFF);
      closeForm();
    }
    if (submitButtonMessage === SUBMIT_SUCCESS_MESSAGE) {
      ref.current.reset();
      removeInquiryItem("all");
      setSubmitButtonMessage(SUBMIT_DEFAULT_MESSAGE);
      return;
    }
    if (submitButtonMessage === SUBMIT_ERROR_MESSAGE) {
      setSubmitButtonMessage(SUBMIT_DEFAULT_MESSAGE);
      return;
    }
    let formData = new FormData(ref.current);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      handleFormSubmitStatus(SUBMIT_SUCCESS_MESSAGE);
      // isMobile && setTimeout(() => {
      //   closeForm()
      // }, 1000);
    } catch (error) {
      handleFormSubmitStatus(SUBMIT_ERROR_MESSAGE);
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      className="bg-white shadow-md overflow-hidden rounded-md lg:my-auto select-none"
      data-netlify="true"
      onSubmit={netlifyFormSubmit}
      ref={ref}
    >
      <InquiryItemsContainer>
        {inquiryItems.map((inquiryItemId) => (
          <>
            <InquiryItem key={inquiryItemId}>
              <span>{priceModelsMap[inquiryItemId]}</span>
              <Close
                size="20"
                onClick={() => removeInquiryItem(inquiryItemId)}
              />
            </InquiryItem>
            <HiddenCheckbox
              key={`${inquiryItemId}_h`}
              type="checkbox"
              name={priceModelsMap[inquiryItemId]}
              id={inquiryItemId}
              value="selected"
              readOnly
              checked
            />
          </>
        ))}
      </InquiryItemsContainer>
      <input type="hidden" name="form-name" value="contact"></input>
      <div className="outer bg-white">
        <div className="form-body__wrapper px-4 md:px-3 py-4 bg-white">
          <div className="grid lg:grid-cols-6 grid-cols-12 gap-4">
            <div className="col-span-8">
              <Label htmlFor="full_name">Full name</Label>
              <Input
                type="text"
                name="full_name"
                id="full_name"
                autoComplete="on"
                required
              />
            </div>
            <div className="col-span-12">
              <Label htmlFor="email_address">Email address</Label>
              <Input
                type="text"
                name="email_address"
                id="email_address"
                autoComplete="on"
                required
              />
            </div>
            <div className="col-span-12">
              <Label htmlFor="message">Drop us a line</Label>
              <Textarea
                id="message"
                name="message"
                rows="3"
                placeholder="for Tyk inquiries and others"
              ></Textarea>
            </div>
          </div>
        </div>
        <div className="form-footer px-4 py-3 bg-gray-50 text-right sm:px-6 ">
          <div className="form-button-wrapper relative">
            <SubmitButton type="submit" aria-label="submit">
              {submitButtonMessage}
            </SubmitButton>
            <Ping on={pingOn} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
