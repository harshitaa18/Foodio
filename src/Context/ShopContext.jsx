import { createContext } from "react";
import { food_list } from "../Components/Assets/assets";

export const ShopContext = createContext(null)

const ShopContextProvider = (props)=>{
    const contextValue = {
        food_list
    }
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider