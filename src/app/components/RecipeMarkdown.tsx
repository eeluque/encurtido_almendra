import React from "react";
import ReactMarkdown from "react-markdown";

interface RecipeMarkdown {
    instructions: string | null;
}

export default function RecipeMarkdown({ instructions }: RecipeMarkdown) {

    return (
        <div className="prose">
            <ReactMarkdown>{instructions}</ReactMarkdown>
        </div>
    )

}