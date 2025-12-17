import Link from 'next/link'
import { ReactElement } from 'react';

interface ViewRecipeLinkProps {
    recipe_id: number;
    children?: React.ReactNode;
}

export default function ViewRecipeLink({ recipe_id }: ViewRecipeLinkProps) {
    return (
        <button className=''>
            <Link href={{
                pathname: `recipes/${recipe_id}`,
            }}><p>Ver receta</p></Link>
        </button>
    )
}