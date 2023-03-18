export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
