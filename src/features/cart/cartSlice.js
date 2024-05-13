import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const defaultState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    shipping: 500,
    tax: 0,
    orderTotal: 0,
}

const cartSlice = createSlice({
    name: "cart",
initialState: defaultState,
reducers: {
    addItem:(state , {payload}) => {
        const { product } = payload;

        const item = state.cartItems.find((i) => i.cartID === product.id);

        if(item) {
            item.amount += product.amount;
        } else {
            state.cartItems.push(product);
        }
        state.numItemsInCart += product.amount;
        state.cartTotal += product.price;
        state.tax = 0.1 * state.cartTotal;
        state.orderTotal = state.cartTotal + state.shipping + state.tax;
        localStorage.setItem("cart" , JSON.stringify(state));
        toast.success("Item added to curt")
    },
    clearCart: (state) => {
        localStorage.setItem("cart", JSON.stringify(defaultState));
        return defaultState;
    },
    removeItem: (state , {paylad}) => {
        const {cartID} = paylad;
        const product = state.cartItems.find((i) => i.cartID === cartID);
        state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);

        state.numItemsInCart -= product.amount;
        cartSlice.caseReducers.calulateTotal(state);
        toast.success("Cart update")
    },
    editItem: (state , {paylad}) => {
        const { cartID , amount } = paylad;
        const item = state.cartItems.find((i) => i.cartID === cartID);
        state.numItemsInCart += amount - item.amount;
        state.cartTotal += item.price * (amount - item.amount);
        item.amount = amount;
        cartSlice.caseReducers.calulateTotal(state);
        toast.success("Cart update")
    },
    calulateTotal: ( state ) => {
        state.tax = 0.1 * state.cartTotal;
        state.orderTotal = state.cartTotal + state.shipping + state.tax;
        localStorage.setItem("cart", JSON.stringify(state))
    }

},
});

export const { addItem , clearCart , removeItem , editItem } = cartSlice.actions;
export default cartSlice.reducer;
