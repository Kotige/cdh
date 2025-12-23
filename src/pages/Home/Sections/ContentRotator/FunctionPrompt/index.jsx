export default function FunctionPrompt({
  input,
  constraints = [],
  language = "js",
}) {
  return (
    <div className="w-full h-full flex flex-col rounded-md border border-neutral-800">
      
      {/* Barra superior */}
      <div className="shrink-0 flex items-center gap-2 px-3 py-2 bg-[#252526] border-b border-neutral-800 text-[11px] text-neutral-400">
        <span className="w-2 h-2 rounded-full bg-red-500" />
        <span className="w-2 h-2 rounded-full bg-yellow-500" />
        <span className="w-2 h-2 rounded-full bg-green-500" />
        <span className="ml-3 font-mono">prompt.{language}</span>
      </div>

      <div className="flex-1 bg-[#1e1e1e]">
        <pre className="h-full p-4 font-mono text-xs sm:text-sm leading-relaxed whitespace-pre-wrap text-neutral-100">
<span className="text-purple-400">function</span>{" "}
<span className="text-blue-400">escreverHistoria</span>() {"{"}
{"\n"}
  <span className="text-teal-300">input</span>:{" "}
  <span className="text-amber-300">"{input}"</span>,
{"\n"}
  <span className="text-teal-300">constraints</span>: [
{"\n"}
{constraints.map((item, index) => (
  <span key={item}>
    {"    "}
    <span className="text-amber-300">"{item}"</span>
    {index < constraints.length - 1 ? "," : ""}
    {"\n"}
  </span>
))}
  ],
{"\n"}
  <span className="text-purple-400">return</span>:{" "}
  <span className="text-neutral-200">conto</span>
{"\n"}
{"}"}
        </pre>
      </div>
    </div>
  );
}
