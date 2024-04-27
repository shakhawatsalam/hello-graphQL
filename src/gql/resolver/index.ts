import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, { productId }, context: any) => {
      return db.products.find((pd) => pd.id === productId);
    },
    categories: () => db.categories,
    category: (parent: any, { categoryId }, context: any) => {
      return db.categories.find((pd) => pd.id === categoryId);
    },
  },
  Product: {
    category: ({ categoryId }, args: {}, context: any) => {
      return db.categories.find((category) => category.id === categoryId);
    },
    reviews: ({ id }, args: {}, context: any) => {
      return db.reviews.filter((review) => review.productId === id);
    },
  },
  Category: {
    products: ({ id }, args: {}, context: any) => {
      return db.products.filter((product) => product.categoryId === id);
    },
  },
};
