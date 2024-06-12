import React from "react";
import A2 from "./A2"
import { createContext } from "react";

const MyfirstContext = createContext();

function A1() {

    return (
        <>
    
        <h1>this is A1 component</h1>

            <MyfirstContext.Provider value={{ name: "kinjal", surname: "khunt" }}>

                <A2 />
            </MyfirstContext.Provider>
        </>
    )

}
export default A1;
export {MyfirstContext}

// browser par run kari consolma jovanu ek data form browser dwra run thayel jova malshe ane ek aapna dwara inserr karelo jova malshe