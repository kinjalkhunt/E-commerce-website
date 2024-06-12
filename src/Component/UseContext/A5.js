import React, { useContext } from "react";
import { MyfirstContext } from "./A1";




function A5() {
    const contextApiData = useContext(MyfirstContext)
    console.log("data ===",contextApiData);

    return(
        <>
            <h1>this is A5 component</h1>
        </>
    )
    
}
export default A5;
