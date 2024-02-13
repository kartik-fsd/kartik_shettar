import TransitionComponent from "../Components/Transition/Transition";
import pdf from "../assets/kartikshettar.pdf";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { Link } from "react-router-dom";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";

import { Helmet } from "react-helmet";
import BottomButton from "../Components/Resume_Button/BottomButton";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
let resizeTimer;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState(1200);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const shareLink = "https://drive.google.com/file/d/17v9NKEkvkx9ZtLvN1MvBXy0aF6xsR-7f/view?usp=drive_link"

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleResize = () => {
    // Debounce window resize
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => setWidth(window.innerWidth), 300);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    pdfjs.getDocument(pdf).promise.then((doc) => {
      setNumPages(doc.numPages);
    });

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Only render PDF pages when numPages is available
  const renderPdfPages = () => {
    if (numPages) {
      return new Array(numPages).fill().map((_, index) => (
        <Document file={pdf} key={index} className="w-full">
          <Page pageNumber={index + 1} scale={width > 786 ? 1.3 : 0.6} />
        </Document>
      ));
    }
    return null;
  };

  return (
    <TransitionComponent>
      <Helmet>
        <title>Kartik Shettar - Full Stack and Frontend Developer</title>
        <meta
          name="description"
          content="Explore Kartik Shettar's resume, highlighting skills as a Full Stack and Frontend Developer."
        />
        <meta
          property="og:title"
          content="Kartik Shettar - Full Stack and Frontend Developer"
        />
        <meta
          property="og:description"
          content="View Kartik Shettar's resume and discover skills in full-stack and frontend development."
        />
        <meta property="og:url" content="URL_TO_YOUR_RESUME_PAGE" />

        {/* Twitter Cards meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Kartik Shettar - Full Stack and Frontend Developer"
        />
        <meta
          name="twitter:description"
          content="Explore Kartik Shettar's resume, highlighting skills as a Full Stack and Frontend Developer."
        />
        <meta name="twitter:url" content="URL_TO_YOUR_RESUME_PAGE" />
      </Helmet>
      <div className="min-h-screen my-10 flex items-center justify-center">
        <div className="max-w-4xl bg-white shadow-lg p-4 rounded-lg">
          <div className="flex gap-x-2 justify-end">
            <div className="relative inline-block ">
              <button
                type="button"
                className="rounded-md px-3 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-neutral-700 text-neutral-700"
                title="Share the resume"
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                onClick={toggleDropdown}
              >
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-neutral-700 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-neutral-700 transition duration-300 group-hover:text-white ease">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    />
                  </svg>
                </span>
              </button>
              {isDropdownOpen && (
          <div
            id="dropdown"
            className="z-20 absolute w-24 bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-300"
          >
            <nav className="flex flex-wrap items-center justify-around p-2">
              <EmailShareButton
                url={shareLink}
                body={shareLink}
                subject="Kartik Shettar's Resume"
              >
                <EmailIcon size={30} round className="m-1" />
              </EmailShareButton>

              <FacebookShareButton url={shareLink}>
                <FacebookIcon size={30} round className="m-1" />
              </FacebookShareButton>

              <LinkedinShareButton url={shareLink}>
                <LinkedinIcon size={30} round className="m-1" />
              </LinkedinShareButton>

              <TelegramShareButton url={shareLink}>
                <TelegramIcon size={30} round className="m-1" />
              </TelegramShareButton>

              <TwitterShareButton url={shareLink}>
                <XIcon size={30} round className="m-1" />
              </TwitterShareButton>

              <WhatsappShareButton url={shareLink}>
                <WhatsappIcon size={30} round className="m-1" />
              </WhatsappShareButton>
            </nav>
          </div>
        )}
            </div>
            <Link
              to={pdf}
              download="Kartik-shettar"
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-3 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-neutral-700 text-neutral-700"
              title="Download the resume"
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-neutral-700 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-neutral-700 transition duration-300 group-hover:text-white ease ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
                  />
                </svg>
              </span>
            </Link>
          </div>
          <section className="py-5 flex flex-col justify-center items-center">
            {/* Only render PDF pages when numPages is available */}
            {renderPdfPages()}
          </section>

      <BottomButton pdf={pdf}/>
        </div>
      </div>
    </TransitionComponent>
  );
};

export default Resume;
