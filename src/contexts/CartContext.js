import { createContext, useContext ,useReducer} from "react"
import { cartReducer } from "../reducers";

const initialStates = {
    cartList:[],
    total:0
    
}

const CartContext =createContext(initialStates);

export const CartProvider=({children})=>{
    const [state,dispatch] = useReducer(cartReducer,initialStates)
    function addToCart(product){
        const updatedList = state.cartList.concat(product);
        const updatedTotal = state.total + product.price;

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                cartList: updatedList,
                total: updatedTotal
            }
        })
    }

    function removeFromCart(product){
        const updatedList = state.cartList.filter(item => item.id !== product.id);
        const updatedTotal = state.total - product.price;

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                cartList: updatedList,
                total: updatedTotal
            }
        })
    }

    function clearCart(){
        dispatch({
            type: "CLEAR_CART",
            payload: {
                cartList: [],
                total: 0
            }
        })
    }

    
    const value={
        total:state.total,
        cartList:state.cartList,
        addToCart,
        removeFromCart,
        clearCart
    }
    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart=()=>(useContext(CartContext));