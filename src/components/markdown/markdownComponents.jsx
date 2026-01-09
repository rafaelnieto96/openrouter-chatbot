// Custom React components for rendering Markdown content in the assistant response

import CodeBlock from './CodeBlock';

// Helper function to create styled HTML elements with consistent className
const asTag = (Tag, className) => ({ children }) => <Tag className={className}>{children}</Tag>;

// Configuration object mapping markdown elements to React components with custom styling
const markdownComponents = {
    // Code block with syntax highlighting
    code: CodeBlock,
    
    // Tables with horizontal scrolling for mobile
    table: ({ children }) => (
        <div className="overflow-x-auto my-4">
            <table className="min-w-full border-collapse border border-zinc-700">
                {children}
            </table>
        </div>
    ),
    
    // Blockquote with blue accent border
    blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-zinc-300 bg-zinc-800/50 p-2 pb-1 rounded-r-lg mb-3">
            {children}
        </blockquote>
    ),
    
    // Horizontal rules
    hr: () => <hr className="border-zinc-700 my-4" />,
    
    // Table header with dark background
    th: asTag('th', 'border border-zinc-700 bg-zinc-800 px-4 py-2 text-left font-semibold'),
    
    // Table data cells
    td: asTag('td', 'border border-zinc-700 px-4 py-2'),
    
    // Heading styles (h1-h4)
    h1: asTag('h1', 'text-2xl font-bold text-white mb-3 mt-4'),
    h2: asTag('h2', 'text-xl font-semibold text-white my-3'),
    h3: asTag('h3', 'text-lg font-semibold text-white my-2'),
    h4: asTag('h4', 'text-base font-semibold text-white my-2'),
    
    // Paragraphs
    p: asTag('p', 'mb-3 text-zinc-200 leading-relaxed'),
    
    // Lists (unordered and ordered)
    ul: asTag('ul', 'list-disc list-inside space-y-1 mb-3 ml-2'),
    ol: asTag('ol', 'list-decimal list-inside space-y-1 mb-3 ml-2'),
    
    // List items
    li: asTag('li', 'text-zinc-200'),
}

export default markdownComponents;