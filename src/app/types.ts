// import React from 'react'
//
// declare global {
//     namespace JSX {
//         interface Element extends React.ReactElement<any, any> { }
//     }
// }

// id:1,
// title:'...',
// price:'...',
// category:'...',
// description:'...',
// image:'...'

interface BaseProduct {
    title: string;
    price: number;
    images: string;
    description: string;
}

export type Category  = string
    // name: string;
    // image: string;
// }

// export interface Category extends BaseCategory {
//     id: number;
// }



export interface Product extends BaseProduct {
    id: number;
    category: Category;
}

export interface CreateProduct extends BaseProduct {
    categoryId: number;
}
