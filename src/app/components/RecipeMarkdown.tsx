import ReactMarkdown from "react-markdown";

interface RecipeMarkdownProps {
  instructions: string | null;
}

export default function RecipeMarkdown({ instructions }: RecipeMarkdownProps) {
  return (
    <div className="prose prose-neutral mt-4 max-w-none prose-headings:font-semibold prose-headings:text-card-foreground prose-p:text-card-foreground prose-li:text-card-foreground prose-strong:text-card-foreground">
      <ReactMarkdown>{instructions ?? "_Sin instrucciones por ahora._"}</ReactMarkdown>
    </div>
  );
}
