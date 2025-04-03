import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const AddContact = () => {

  const {store, dispatch} =useGlobalReducer()

    return (
        <div className="text-center mt-5">
            <h1>AddContact</h1>
            <p>
            
            </p>
        </div>
    );
}; 

