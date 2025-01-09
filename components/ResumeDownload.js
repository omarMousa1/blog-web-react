import cv from "../assets/resume/OmarResume.pdf";

export const ResumeDownload = () => {
  const url = cv;

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "OmarResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  downloadResume();
};
