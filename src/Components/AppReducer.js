
export const initialState={
    transaction:[]
}

export const Appreducer= (state,action)=>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return  {
                ...state,
                ///since it returns an array ,,we can put this functio filter into the state..1
                transaction:state.transaction.filter(transaction=>transaction.id !==action.payload)
            }
            case 'ADD_TRANSACTION':
                return {
                    ...state,
                    transaction:[action.payload,...state.transaction]
                }
        default:
            ///it has to return a state as the must..!
            return state;
    }
}