const initialStateCart = {
  cartItems: [],
  totalAmount: 0,
  status: "idle",
  error: null,
  quantity: 0,
};

export default function cartReducer(state = initialStateCart, action) {
  switch (action.type) {
    case "cart/add": {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );

      let newCartItems;
      if (existingItem) {
        newCartItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: (item.quantity || 1) + (action.payload.quantity || 1),
              }
            : item,
        );
      } else {
        newCartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: action.payload.quantity || 1 },
        ];
      }

      return {
        ...state,
        cartItems: newCartItems,
        totalAmount: newCartItems.reduce(
          (total, item) => total + item.price * (item.quantity || 1),
          0,
        ),
      };
    }
    case "cart/remove": {
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      );
      return {
        ...state,
        cartItems: newCartItems,
        totalAmount: newCartItems.reduce(
          (total, item) => total + item.price * (item.quantity || 1),
          0,
        ),
      };
    }
    case "cart/increase": {
      const newCartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item,
      );
      return {
        ...state,
        cartItems: newCartItems,
        totalAmount: newCartItems.reduce(
          (total, item) => total + item.price * (item.quantity || 1),
          0,
        ),
      };
    }
    case "cart/decrease": {
      const newCartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) - 1) }
          : item,
      );
      return {
        ...state,
        cartItems: newCartItems,
        totalAmount: newCartItems.reduce(
          (total, item) => total + item.price * (item.quantity || 1),
          0,
        ),
      };
    }

    default:
      return state;
  }
}

export function addToCart(item) {
  return {
    type: "cart/add",
    payload: item,
  };
}

export function removeFromCart(item) {
  return {
    type: "cart/remove",
    payload: item,
  };
}

export function increaseCart(item) {
  return {
    type: "cart/increase",
    payload: item,
  };
}

export function decreaseCart(item) {
  return {
    type: "cart/decrease",
    payload: item,
  };
}
