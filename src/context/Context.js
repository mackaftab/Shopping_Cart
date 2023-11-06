
    //  id: faker.string.uuid(),
    //  name : faker.commerce.productName(),
    //  price: faker.commerce.price(),
    //  image: faker.image.urlLoremFlickr({ category: 'fashion' }),
    //  inStock: faker.helpers.arrayElement([1,3,5,6,7]),
    //  fastDelivery: faker.datatype.boolean(),
    //  ratings: faker.helpers.arrayElement([1,2,3,4,5])
       
import { createContext, useContext, useReducer } from "react";
import {faker} from "@faker-js/faker";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
  const products = [...Array(50)].map(() => ({
     id: faker.string.uuid(),
     name : faker.commerce.productName(),
     price: faker.commerce.price(),
     image: faker.image.urlLoremFlickr(),
     inStock: faker.helpers.arrayElement([1,3,5,6,7]),
     fastDelivery: faker.datatype.boolean(),
     ratings: faker.helpers.arrayElement([1,2,3,4,5])
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;