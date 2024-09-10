import React from "react";

const ResumeDownload = () => {
  // Use the preview URL for embedding
  const pdfUrl =
    "https://drive.google.com/file/d/1Ef08XZJcRXBbCCEKXlAjx4k1GYkEV5wn/preview";

  return (
    <>
      <div className="flex justify-center items-center space-x-10">
        <div className="border-2 border-gray-300 rounded-xl shadow-lg w-full md:w-1/2 h-96 md:h-[80vh] overflow-hidden bg-white">
          <iframe
            src={pdfUrl}
            className="w-full h-full rounded-xl"
            title="Google Drive PDF Viewer"
          />
        </div>
        <div className="text-white">
          <a
            href="https://drive.google.com/uc?export=download&id=1Ef08XZJcRXBbCCEKXlAjx4k1GYkEV5wn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-800 transition">
              Download PDF
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default ResumeDownload;

// https://drive.google.com/file/d/1Ef08XZJcRXBbCCEKXlAjx4k1GYkEV5wn/view?usp=sharing
// https://drive.google.com/uc?export=download&id=1Ef08XZJcRXBbCCEKXlAjx4k1GYkEV5wn
