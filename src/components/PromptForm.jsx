// Main form component for user input, model selection, and file/image uploads

import {
  FaBrain,
  FaImage,
  FaFileAlt,
  FaTrash,
  FaPaperPlane,
  FaRobot,
  FaTimes,
} from "react-icons/fa";

// Reusable upload button component with hidden file input
const UploadButton = ({
  Icon,
  inputRef,
  accept,
  onChange,
  title,
  iconClass,
}) => (
  <label
    className="inline-flex items-center gap-2 px-3 py-2 bg-zinc-900/80 border border-zinc-700/50 rounded-xl text-sm text-zinc-200 shadow-inner cursor-pointer shrink-0 self-start"
    title={title}
  >
    <Icon className={`w-4 h-4 ${iconClass || ""}`} />
    <input
      type="file"
      ref={inputRef}
      accept={accept}
      onChange={onChange}
      className="hidden"
    />
    <span className="sr-only"></span>
  </label>
);

// Reusable remove/clear button component
const RemoveButton = ({ onClick }) => (
  <button
    className="p-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg text-zinc-300"
    type="button"
    onClick={onClick}
  >
    <FaTimes className="w-3 h-3" />
  </button>
);

// Main prompt form component with text input, file uploads, and model selection
const PromptForm = ({
  prompt,
  onPromptChange,
  onSubmit,
  onClearAll,
  models,
  selectedModel,
  onModelChange,
  isVisionModel,
  isNovaFileModel,
  onImageChange,
  onFileChange,
  imageData,
  fileAttachment,
  clearImage,
  clearFile,
  loading,
  imageInputRef,
  fileInputRef,
}) => {
  // Disable submit button if no valid content or currently loading
  const disableSubmit =
    (!prompt.trim() && !(isVisionModel && imageData) && !fileAttachment) ||
    loading;

  //Disable clear button if nothing to clear
  const disableClear = !prompt.trim() && !imageData && !fileAttachment;

  return (
    <div className="bg-linear-to-tr from-zinc-900/90 to-zinc-800/90 border border-zinc-700/50 rounded-2xl p-4 backdrop-blur-sm shadow-2xl sm:p-6">
      <form onSubmit={onSubmit}>
        <div className="relative">
          {/* Main text input for user prompts */}
          <textarea
            value={prompt}
            onChange={(e) => onPromptChange(e.target.value)}
            placeholder="Ask me anaything... I can help you build, debug, optimize, and explore your code."
            className="w-full bg-transparent border-none outline-none text-zinc-200 placeholder-zinc-500 resize-none text-sm loading-relaxed min-h-[60px] max-h-[110px] focus:placeholder-zinc-600 transition-colors sm:text-base sm:min-h-20"
            onKeyDown={(e) =>
              e.key === "Enter" && (e.metaKey || e.ctrlKey) && onSubmit(e)
            }
          ></textarea>
          {/* Upload buttons section - conditionally shown based on model capabilities */}
          <div className="mt-3 mb-2 flex flex-row items-center gap-3 flex-wrap">
            {/* Image upload button - only shown for vision-capable models */}
            {isVisionModel && (
              <UploadButton
                Icon={FaImage}
                inputRef={imageInputRef}
                accept="image/*"
                onChange={onImageChange}
                title="Attach image"
                iconClass="text-blue-300"
              />
            )}
            {/* File upload button - only shown for NovaFile-capable models */}
            {isNovaFileModel && (
              <UploadButton
                Icon={FaFileAlt}
                inputRef={fileInputRef}
                accept=".txt, .md, .markdown, .json, .js, .csv, .log, .yaml, .yml, .xml"
                onChange={onFileChange}
                title="Attach image (Nova only)"
                iconClass="text-amber-300"
              />
            )}
            {/* Image attachment preview */}
            {imageData && (
              <div className="flex items-center gap-2">
                <div className="w-16 h-16 rounded-lg overflow-hidden border border-zinc-700 bg-zinc-900">
                  <img
                    src={imageData}
                    alt="Upload image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <RemoveButton onClick={clearImage} />
              </div>
            )}
            {/* File attachment preview */}
            {fileAttachment && (
              <div className="flex items-center gap-2">
                <div className="px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-xs text-zinc-300 max-w-50 truncate">

                </div>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default PromptForm;