interface RecipesDetail {
    title: string,
    description: string,
    children?: React.ReactNode;
    recipe_id: number;
    product_id?: number;
    body: string,
}
import {
    Card,
    CardContent
} from "@/components/ui/card"

export default function RecipesDetail({ title, description, children, recipe_id }: RecipesDetail) {

    return (
        <Card>
            <CardContent>
                <ul>
                    <li className="font-semibold">{title}</li>
                    <li className="">{description}</li>
                    {children}
                </ul>
            </CardContent>
        </Card>
    )
}