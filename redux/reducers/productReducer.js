import { ActionTypes } from "../constants/acttion-types"

const initialState = {
  products: [
    {
      id: 1,
      name: "Product 1",
      category: programmer,
    }
  ]
}

export const productReducer = (state, action) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default: return state;
  }
};
