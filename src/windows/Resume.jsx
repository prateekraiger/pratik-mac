import React from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import WindowsControls from "#components/WindowsControls";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  const [numPages, setNumPages] = React.useState(null);

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
      <div style={{ width: "800px", height: "600px", overflow: "auto", backgroundColor: "white", padding: "20px" }}>
        <Document
          file="/files/resume.pdf"
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          <Page pageNumber={1} />
        </Document>
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
