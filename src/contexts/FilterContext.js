import { createContext, useContext, useReducer } from "react"
import { filterReducer } from "../reducers";

const FilterInitialState = {
    productList:[],
    sortBy:null,
    onlyInStock:false,
    bestSellerOnly:false,
    ratings:null
}

const FilterContext = createContext(FilterInitialState);

export const FilterProvider=({children})=>{
    const [state,dispatch] = useReducer(filterReducer,FilterInitialState)
    function initialProductList(products){
        dispatch({
            type: "PRODUCT_LIST",
            payload:{
                products: products
            }
        })
    }

    function inStock(products){
        return state.onlyInStock?products.filter(product => product.in_stock === true):products;
    }

    function bestSeller(products){
        return state.bestSellerOnly?products.filter(product =>product.best_seller ===true):products;
    }

    function sort(products){
        if(state.sortBy === "lowtohigh"){
            return products.sort((a,b)=>Number(a.price)-Number(b.price));
        }
        if(state.sortBy === "hightolow"){
            return products.sort((a,b)=>Number(b.price)-Number(a.price));
        }
        return products;
    }

    function rating(products){
        if(state.ratings ==="4STARSABOVE"){
            return products.filter(product=>product.rating>=4)
        }
        if(state.ratings ==="3STARSABOVE"){
            return products.filter(product=>product.rating>=3)
        }
        if(state.ratings ==="2STARSABOVE"){
            return products.filter(product=>product.rating>=2)
        }
        if(state.ratings ==="1STARSABOVE"){
            return products.filter(product=>product.rating>=1)
        }
        return products;
    }

    const filteredProductList = rating(sort(inStock(bestSeller(state.productList))));
    const value = {
        state,
        dispatch,
        productList:filteredProductList,
        initialProductList
    }

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter =()=>(useContext(FilterContext))