import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import cartReducer from "../features/cartSlice";

// Load initial state from localStorage
const savedState = (() => {
  try {
    const item = localStorage.getItem("cartState");
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error("Failed to lead cart from localStorage:", error);
    return null;
  }
})();

const preloadedState = savedState
  ? JSON.parse(savedState)
  : {
      cartItems: [],
      totalAmount: 0,
      status: "idle",
      error: null,
      quantity: 0,
    };

const store = createStore(cartReducer, preloadedState, applyMiddleware(thunk));

// Save state to localStorage on every change
store.subscribe(() => {
  localStorage.setItem("cartState", JSON.stringify(store.getState()));
});

export default store;
