import cv from "../assets/resume/OmarCV.pdf";

export const ResumeDownload = () => {
  const url = cv;

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "OmarCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  downloadResume();
};
