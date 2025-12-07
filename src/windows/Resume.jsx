import React from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import WindowsControls from "#components/WindowsControls";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  const [numPages, setNumPages] = React.useState(null);
  const [error, setError] = React.useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onDocumentLoadError = (error) => {
    setError(error);
    console.error("PDF load error:", error);
  };

  return (
    <>
      <div id="window-header">
        <WindowsControls target="resume" />
        <h2>Resume.pdf</h2>
        <a
          href="/files/resume.pdf"
          download
          className="cursor-pointer"
          title="Download Resume"
        >
          <Download className="icon" />
        </a>
      </div>
      {error ? (
        <div style={{ padding: "20px", color: "red" }}>
          Error loading PDF: {error.message}
        </div>
      ) : (
        <Document
          file="/files/resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
        >
          <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
        </Document>
      )}
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
