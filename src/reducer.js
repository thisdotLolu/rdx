import { CLEAR_CART, DECREASE, INCREASE, REMOVE } from "./actions"

// export default function reducer(state, action) {
//   switch (action.type) {
//     case CLEAR_CART:
//       return { ...state, cart: [] };

//     default:
//       return state;
//   }
// }


export default function reducer(state, action){
    if(action.type === CLEAR_CART){
        return {...state, cart:[]};
    }
    if(action.type === DECREASE){
        console.log('you decreased')
        let tempCart=[];
        if(action.payload.amount === 1){
            tempCart = state.cart.filter(ct=>ct.id !== action.payload.id)
        }
        else{
            tempCart = state.cart.map(cartItem=>{
                if(cartItem.id === action.payload.id){
                    cartItem = {...cartItem, amount:cartItem.amount - 1}
                    if(cartItem.amount < 1){
                        cartItem = { }
                    }
                }
                return cartItem
            })
        }
        

        return {...state, cart:tempCart}
    }
    if(action.type === INCREASE){
        let tempCart = state.cart.map(cartItem=>{
            if(cartItem.id === action.payload.id){
                cartItem = {...cartItem, amount:cartItem.amount + 1}
            }
            return cartItem;  
        })
        return {...state, cart:tempCart}
        
        
        // console.log('you increase')
        // return {
        //     ...state,
            // cart:state.cart.filter(ct=>{
            //     if (ct.id === action.payload.id){
            //         return ct.amount++  
            //     }
            //     else{
            //         return ct
            //     }
            // })
        // }
    }
    if(action.type === REMOVE){
        return {
            ...state,
            cart:state.cart.filter(ct=>ct.id !== action.payload.id)
        }
    }

    return state
}