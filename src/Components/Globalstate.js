import React from "react";
import { createContext,useReducer,useState } from "react";
import {Appreducer} from "./AppReducer";
import {initialState} from  "./AppReducer";
// const initialState={
//     transaction:[
//     //   { id: 1, text: 'Flower', amount: -20 },
//     //   { id: 2, text: 'Salary', amount: 300 },
//     //   { id: 3, text: 'Book', amount: -10 },
//     //   { id: 4, text: 'Camera', amount: 150 }
//     ]
// }
//creating the 
export const TransactionContext = createContext()
export const Globalprovider=({children})=>{
   const [state, dispatch]=useReducer(Appreducer,initialState)

   function deletetransaction(id){
    dispatch({type:"DELETE_TRANSACTION",
             payload:id
     })
   }
   function addtransaction(transaction){
    dispatch({type:"ADD_TRANSACTION",
             payload:transaction
     })
   }  
    return <TransactionContext.Provider value={{transactions:state.transaction,deletetransaction,addtransaction}}>
                 {children}
        </TransactionContext.Provider>
}