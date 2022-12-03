import { useContext, createContext, useEffect, useReducer } from "react";
import axios from "axios";

import reducer from '../reducer/productReducer'


const API = 'https://api.pujakaitem.com/api/products'
const initialSate = {
    isLoading:true,
    isError:false,
    product:[],
    feature:[]
}




const AppContext = createContext();



const AppProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,initialSate)

    const getProducts = async (url) => {

        dispatch({type:"SET_LOADING"})
    
        try {
            let res = await axios.get(url)
            let products = await res.data
            dispatch({type: "SET_API_DATA", payload:products})
        } catch (error) {
            dispatch({type:"API_ERROR"})
        }
        
    }



    useEffect(()=>{
        getProducts(API)
    },[])

    return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
}





const ProductContext = () => {
    return useContext(AppContext)
}



export {AppProvider,AppContext,ProductContext}