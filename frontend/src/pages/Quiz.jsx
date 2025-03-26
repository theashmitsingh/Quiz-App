import React from "react";

const Quiz = () => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Uploaded file:", file.name);
    }
  };
  return (
    <div className="p-10">
      {/* Generate a Quiz Section */}
      <h1 className="text-4xl font-semibold mb-5">Generate a Quiz</h1>
      <div className="flex gap-3 mb-10">
        <label
          htmlFor="file-upload"
          className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md cursor-pointer"
        >
          Upload PDF File
        </label>
        <input
          id="file-upload"
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={handleFileUpload}
        />
        <h1 className="text-zinc-600 mt-2">OR</h1>
        <input
          className="h-10 w-[40%] bg-zinc-200 rounded-md pl-5"
          placeholder="Enter text here..."
        />
        <button className="bg-red-600 cursor-pointer hover:bg-red-700 text-white px-3 py-2 rounded-md">
          Generate
        </button>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-5">
        {/* Previous Quiz Section */}
        <div className="col-span-2 bg-zinc-100 p-5 rounded-md">
          <h2 className="text-2xl font-semibold mb-3">Previous Quiz</h2>
          <ul className="space-y-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <li key={index} className="bg-red-100 p-3 rounded-md">
                Quiz {index + 1}
              </li>
            ))}
          </ul>
        </div>

        {/* Progress Bar and AI Chatbot Section */}
        <div className="flex flex-col gap-5 relative -top-40">
          <div className="bg-zinc-100 p-5 rounded-md">
            <h2 className="text-2xl font-semibold mb-3">Progress Bar</h2>
            <div className="bg-zinc-300 h-8 rounded-full overflow-hidden">
              <div className="bg-black h-full w-[50%]"></div>
            </div>
          </div>

          <div className="bg-zinc-100 p-5 rounded-md relative -top-1 mt-5">
            <h2 className="text-2xl font-semibold mb-3">AI ChatBot</h2>
            <div className="bg-zinc-200 h-96 rounded-md mb-3"></div>
            <div className="flex gap-3">
              <input
                className="flex-1 h-10 bg-zinc-200 rounded-md pl-5"
                placeholder="Enter your query..."
              />
              <button className="bg-zinc-600 hover:bg-zinc-700 text-white px-3 py-2 rounded-md">
                Ask
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
