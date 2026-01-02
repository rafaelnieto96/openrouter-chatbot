// Quick action buttons component providing preset prompts for common AI assistant tasks

import { FaBug, FaBolt, FaFileAlt } from "react-icons/fa";
import { FaF } from "react-icons/fa6";

// Predefined quick action configuration with icons, labels, and pompts
const QUICK_ACTIONS = [
  {
    icon: FaFileAlt,
    label: "Write documentation",
    prompt: "Help me write documentation for my project",
  },
  {
    icon: FaBolt,
    label: "Optimize code",
    prompt: "Help me optimize this code for performance",
  },
  {
    icon: FaBug,
    label: "Debug code",
    prompt: "Help me find and fix bugs in my code",
  },
];

const QuickActions = ({ onSelect }) => (
  <div className="text-center">
    {/* Section description */}
    <div className="flex flex-col justify-center gap-2 sm:fkex-row sm:flex-wrap sm:gap-3">
      {QUICK_ACTIONS.map(({ icon: Icon, label, prompt }) => (
        <button
          key={label}
          onClick={() => onSelect(prompt)}
          className="group flex items-center justify-center gap-2 px-4 py-2.5 bg-linear-to-r from-zinc-900/60 to-zinc-800/80 hover:from-zinc-800/80 hover:from-zinc-800/80 hover:to-zinc-700/80 border border-zinc-700/50 hover:border-zinc-600/50 rounded-xl text-zinc-300 hover:text-zinc-200 transition-all duration-200 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 sm:justify-start"
        >
          {/* Action label */}
          <span className="text-center sm:text-left">{label}</span>
        </button>
      ))}
    </div>
  </div>
);

export default QuickActions;
