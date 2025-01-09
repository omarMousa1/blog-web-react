import React from "react";
import { ErrorValidation } from "../components/ErrorValidation";
import { SocialIcons } from "./SocialIcons";
import rejectIcon from "../assets/images/icons/reject.svg";
import correctIcon from "../assets/images/icons/correct.svg";
import { Conclusion } from "./Conclusion";

export const Form = () => {
  const {
    formRef,
    subject,
    subjectInvalid,
    email,
    emailInvalid,
    message,
    messageInvalid,
    emailSent,
    handleSubjectChange,
    handleEmailChange,
    handleMessageChange,
    sendEmail,
    setSubjectTouched,
    setEmailTouched,
    setMessageTouched,
  } = ErrorValidation();
  return (
    <section className="p-4 md:px-20">
      <h1 className="text-center text-[28px] md:text-[48px] text-black mb-5">
        Contant <span className="font-black ">Me</span>
      </h1>
      <div className="md:flex md:justify-center md:items-center">
        <form
          className="flex flex-col items-start md:w-2/4"
          onSubmit={sendEmail}
          ref={formRef}
        >
          <input
            className="border-black border-2 p-2 my-2 w-full"
            type="text"
            placeholder="Your subject"
            name="user-subject"
            value={subject}
            onChange={handleSubjectChange}
            onBlur={() => setSubjectTouched((prev) => !prev)}
          />
          {subjectInvalid && (
            <div className="flex justify-center items-center gap-x-1">
              <img src={rejectIcon} alt="Rejected" />
              <span className="text-red-700 font-bold text-sm">
                Fill the field with your subject!
              </span>
            </div>
          )}

          <input
            className="border-black border-2 p-2 my-2 w-full"
            type="email"
            placeholder="Your E-mail"
            name="user-email"
            value={email}
            onChange={handleEmailChange}
            onBlur={() => setEmailTouched((prev) => !prev)}
          />
          {emailInvalid && (
            <div className="flex justify-center items-center gap-x-1">
              <img src={rejectIcon} alt="Rejected" />
              <span className="text-red-700 font-bold text-sm">
                Fill the field with your E-mail!!
              </span>
            </div>
          )}

          <input
            className="border-black border-2 p-2 my-2 w-full"
            type="url"
            placeholder="Your URL website (if exists)*"
            name="user-url"
          />

          <textarea
            className="border-black border-2 p-2 my-2 w-full"
            rows={5}
            placeholder="How can I serve you?*"
            name="user-message"
            value={message}
            onChange={handleMessageChange}
            onBlur={() => setMessageTouched((prev) => !prev)}
          ></textarea>
          {messageInvalid && (
            <div className="flex justify-center items-center mb-2 gap-x-1">
              <img src={rejectIcon} alt="Rejected" />
              <span className="text-red-700 font-bold text-sm">
                Fill the field with your message!
              </span>
            </div>
          )}
          {emailSent && (
            <div className="flex justify-center items-center mb-2 gap-x-1">
              <img src={correctIcon} alt="Correct" />
              <span className="text-green-700 font-bold text-sm">
                Email sent successfully.
              </span>
            </div>
          )}
          <div className="flex justify-center items-center gap-x-2 mt-2">
            <button
              className="border-black border-2 p-2 font-bold text-white bg-black rounded-lg"
              type="submit"
            >
              Get in Touch
            </button>
            <SocialIcons />
          </div>
        </form>
        <div className="md:w-2/4">
          <Conclusion />
        </div>
      </div>
    </section>
  );
};
