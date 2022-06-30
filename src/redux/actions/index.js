import * as actionTypes from '../carttypes';

export const addToCart = (item, qty, color) => {
    return{
        type: actionTypes.ADD_TO_CART,
        payload:{
            item: item,
            qty: qty,
            color: color,
        }
    }
}

export const removeFromCart = (item,color) =>{
    return{
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            item: item,
            color: color
        }
    }
}

export const removeQty = (item,color) =>{
    return{
        type: actionTypes.REMOVE_QTY,
        payload: {
            item:item,
            color: color
        }
    }
}

export const loadCurrentItem = (item) => {
    return{
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item
    }
} 