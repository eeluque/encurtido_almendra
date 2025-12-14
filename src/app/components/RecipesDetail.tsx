interface RecipesDetail {
    title: string,
    body: string,
}

export default function RecipesDetail({ title, body }: RecipesDetail) {

    return (
        <div className="m-2">
            <ul>
                <li className="font-semibold">{title}</li>
                <li className="italic">{body}</li>
            </ul>
        </div>
    )
}