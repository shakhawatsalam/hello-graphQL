import { db } from "../../db.js";
export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent, { productId }, context) => {
            return db.products.find((pd) => pd.id === productId);
        },
        categories: () => db.categories,
        category: (parent, { categoryId }, context) => {
            return db.categories.find((pd) => pd.id === categoryId);
        },
    },
    Product: {
        category: ({ categoryId }, args, context) => {
            return db.categories.find((category) => category.id === categoryId);
        },
        reviews: ({ id }, args, context) => {
            return db.reviews.filter((review) => review.productId === id);
        },
    },
    Category: {
        products: ({ id }, args, context) => {
            return db.products.filter((product) => product.categoryId === id);
        },
    },
};
