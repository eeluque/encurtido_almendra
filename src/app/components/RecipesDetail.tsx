interface RecipesDetail {
    title: string,
    description: string,
    children?: React.ReactNode;
    recipe_id: number;
    product_id?: number;
    body: string,
}

export default function RecipesDetail({ title, description, children, recipe_id }: RecipesDetail) {

    return (
        <div className="m-2">
            <ul>
                <li className="font-semibold">{title}</li>
                <li className="italic">{description}</li>
                {children}
            </ul>
        </div>
    )
}