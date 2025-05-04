export interface IProduct {
    name: string;
    description?: string;
    imageURL?: string;
    price: string
    createdAt: Date;
    updatedAt: Date;
}

export const productsArray = [
    {
        "name": "Encurtido Cebolla Morada",
        "description": "Encurtido clasico de cebolla morada, con un toque de comino y ajo como aromatizantes",
        "imageURL": "http://placeimg.com/640/480/tech",
        "price": "33.66",
        "createdAt": "2023-10-01T12:00:00Z",
        "updatedAt": "2023-10-01T12:00:00Z"
    },
    {
        "name": "Jalapeños encurtidos",
        "description": "Jalapeños encurtidos con un toque de comino y ajo como aromatizantes",
        "imageURL": "http://placeimg.com/640/480/tech",
        "price": "80.00",
        "createdAt": "2023-10-01T12:00:00Z",
        "updatedAt": "2023-10-01T12:00:00Z"
    },
];