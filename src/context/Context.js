import { createContext, useContext, useReducer, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { cartReducer } from './Reducers';

const Cart = createContext();

const Context = ({ children }) => {
  const { data } = useFetch('https://fakestoreapi.com/products');

  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });
  useEffect(() => {
    if (data) {
      dispatch({ type: 'LOAD_DATA', payload: data });
    }
  }, [data]);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
