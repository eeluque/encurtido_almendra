interface RecipesDetail {
    title: string,
    body: string,
}

export default function RecipesDetail({ title, body }: RecipesDetail) {

    return (
        <ul>
            <li>{title}</li>
            <li>{body}</li>
        </ul>
    )
}