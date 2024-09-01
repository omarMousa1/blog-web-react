import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ErrorValidation = () => {
  const formRef = useRef();

  const [subject, setSubject] = useState("");
  const [subjectTouched, setSubjectTouched] = useState(false);
  const [subjectInvalid, setSubjectInvalid] = useState(false);

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);

  const [message, setMessage] = useState("");
  const [messageTouched, setMessageTouched] = useState(false);
  const [messageInvalid, setMessageInvalid] = useState(false);

  const [emailSent, setEmailSent] = useState(false);

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    if (subjectTouched) validationSubjectMethod(subject);
  }, [subject, subjectTouched]);

  useEffect(() => {
    if (emailTouched) validationEmailMethod(email);
  }, [email, emailTouched]);

  useEffect(() => {
    if (messageTouched) validationMessageMethod(message);
  }, [message, messageTouched]);

  const validationSubjectMethod = (subject) => {
    setSubjectInvalid(subject === "");
  };

  const validationEmailMethod = (email) => {
    const emailReg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    setEmailInvalid(!emailReg.test(email));
  };

  const validationMessageMethod = (message) => {
    setMessageInvalid(message === "");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    validationSubjectMethod(subject);
    validationEmailMethod(email);
    validationMessageMethod(message);

    setSubjectTouched(true);
    setEmailTouched(true);
    setMessageTouched(true);

    if (
      subjectInvalid ||
      emailInvalid ||
      messageInvalid ||
      subject === "" ||
      email === "" ||
      message === ""
    ) {
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (res) => {
          console.log("The e-mail has been sent: ", res.text);
          console.log("Status of e-mail: ", res.status);
          setEmailSent(true);
          setSubject("");
          setEmail("");
          setMessage("");
          setSubjectTouched(false);
          setEmailTouched(false);
          setMessageTouched(false);
          setTimeout(() => {
            setEmailSent(false);
          }, 4000);
        },
        (error) => {
          console.log("There was an error:", error.text);
          setEmailSent(false);
        }
      );
  };
  return {
    formRef,
    subject,
    subjectTouched,
    subjectInvalid,
    email,
    emailTouched,
    emailInvalid,
    message,
    messageTouched,
    messageInvalid,
    emailSent,
    handleSubjectChange,
    handleEmailChange,
    handleMessageChange,
    sendEmail,
    setSubjectTouched,
    setEmailTouched,
    setMessageTouched,
  };
};
