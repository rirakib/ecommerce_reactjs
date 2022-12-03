const productReducer = (state,action) => {
    
    switch (action.type) {
        case 'SET_LOADING':
            
            return {
                ...state,
                isLoading:true,
            }
        
        case 'API_ERROR':
            return {
                ...state,
                isLading:false,
                isError:true
            }

        case 'SET_API_DATA':
            const featured = action.payload.filter((currentElem) =>  currentElem.featured === true )
            
            return {
                ...state,
                isLoading:false,
                isError:false,
                product: action.payload,
                feature:featured
            }
            
        default:
            return {...state}
    }

}

export default productReducer