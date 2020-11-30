import React,{createContext,useReducer} from 'react';
import ProductReducer from "./ProductReducer";
import shoes from "../components/Item.json";
import Footer from '../Footer';

const initialState = {
    cartData: JSON.parse(localStorage.getItem('cartData')) || [],
    totalAmount: JSON.parse(localStorage.getItem('totalAmount')) || 0,
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductReducer, initialState);
    function addToCart(id) {
        let addedItem;
        Object.entries(shoes).map((shoe) => {
            if (shoe[0] === id) {
                addedItem = shoe[1];
            }
            return addedItem;
        });
        let existedItem = false;
        state.cartData.map(shoe => {
            if (shoe.id === id) {
                existedItem = true;
            }
            return existedItem;
        });
        if (existedItem) {
            state.cartData.map(shoe => {
                if (shoe.id === id) {
                    shoe.quantity += 1;
                    shoe.changedPrice = shoe.quantity * addedItem.price;
                }
                return shoe;
            });
            let total = state.totalAmount + addedItem.price;
            localStorage.setItem('cartData', JSON.stringify(state.cartData));
            localStorage.setItem('totalAmount', JSON.stringify(total));
            dispatch({
                type: "ADD_EXISTING_PRODUCT",
                total,
            })
        } else {
            addedItem.quantity = 1;
            addedItem.changedPrice = addedItem.quantity * addedItem.price;
            let data = [...state.cartData, addedItem];
            let total = state.totalAmount + addedItem.price;
            console.log(data);
            localStorage.setItem('cartData', JSON.stringify(data));
            localStorage.setItem('totalAmount', JSON.stringify(total));
            dispatch({
                type: "ADD_PRODUCT",
                data,
                total,
            })
        }
    }

    function removeFromCart(id) {
        let removedItem;
        Object.entries(shoes).map(shoe => {
            if (shoe[0] === id) {
                removedItem = shoe[1]
            }
            return removedItem;
        })
        let newCartData = state.cartData.filter(shoe => id !== shoe.id);
        let total = state.totalAmount - (removedItem.price * removedItem.quantity);
        console.log(total);
        localStorage.setItem('cartData', JSON.stringify(newCartData));
        localStorage.setItem('totalAmount', JSON.stringify(total));
        if (state.cartData.length === 1) {
            localStorage.setItem('cartData', []);
            localStorage.setItem('totalAmount', JSON.stringify(0));
            dispatch({
                type: "EMPTY_CART",
                data: [],
                total: 0,
            })
        } else {
            dispatch({
                type: "REMOVE_PRODUCT",
                data: newCartData,
                total,
            })
        }
    }

    function addQuantity(id) {
        let addedItem;
        Object.entries(shoes).map((shoe) => {
            if (shoe[0] === id) {
                addedItem = shoe[1];
            }
            return addedItem;
        });
        let total = state.totalAmount + addedItem.price;
        state.cartData.map(shoe => {
            if (shoe.name === addedItem.name) {
                shoe.quantity += 1;
                shoe.changedPrice = shoe.quantity * shoe.price;
            }
            return shoe;
        });
        localStorage.setItem('cartData', JSON.stringify(state.cartData));
        localStorage.setItem('totalAmount', JSON.stringify(total));
        dispatch({
            type: "ADD_QUANTITY_1",
            total,
        })
    }

    function subtractQuantity(id) {
        let addedItem;
        state.cartData.map(shoe => {
            if (shoe.id === id) {
                addedItem = shoe
            }
            return addedItem;
        })
        if (addedItem.quantity === 1) {
            let newCartData = state.cartData.filter(shoe => shoe.id !== id);
            let total = state.totalAmount - (addedItem.price * addedItem.quantity);
            localStorage.setItem('cartData', JSON.stringify(newCartData));
            localStorage.setItem('totalAmount', JSON.stringify(total));
            dispatch({
                type: "REMOVE_PRODUCT",
                data: newCartData,
                total,
            })
        } else {
            addedItem.quantity -= 1;
            addedItem.changedPrice = addedItem.price * addedItem.quantity;
            let total = state.totalAmount - addedItem.price;
            state.cartData.map(shoe => {
                shoe.quantity = addedItem.quantity;
                shoe.changedPrice = addedItem.changedPrice;
                return shoe;
            })
            localStorage.setItem('cartData', JSON.stringify(state.cartData));
            localStorage.setItem('totalAmount', JSON.stringify(total));
            dispatch({
                type: "SUBTRACT_QUANTITY",
                total,
            })
        }
    }
    return (
        <GlobalContext.Provider value={{
            data: state.cartData,
            total: state.totalAmount,
            addToCart,
            removeFromCart,
            addQuantity,
            subtractQuantity,
        }}
        >
            {children}
            <Footer />
        </GlobalContext.Provider>
    )
}