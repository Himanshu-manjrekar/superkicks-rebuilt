import { ActionTypes } from "../actions/action-types";

 
const initialState = {
	products: [],
	totalPrice: 0,
	totalQuantity: 0,
	image: 0,
}

export const productReducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case ActionTypes.SET_PRODUCTS:
			return {...state, products:payload }			
	
		default:
			return state;
	}
}

export const selectedProductReducer = (state = initialState, {type,payload}) => {
	switch (type) {
		case ActionTypes.SELECTED_PRODUCT:
			return {...state, ...payload}
		case ActionTypes.REMOVE_SELECTED_PRODUCT:
			return {}
	
		default:
			return state;
	}
}

export const addToCartReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			const { product, qty } = action.payload;
			const  check = state.products.find(pr => pr.id === product.id);
			if (check) {
				return state;				
			} else {
				const Tprice = state.totalPrice + product.price * qty;
				console.log("Price",Tprice)
				const Tqty = state.totalQuantity + qty;
				product.qty = qty; 
				return { 
					...state,
					products: [...state.products, product],
					totalPrice: Tprice,
					totalQuantity: Tqty,
					}
			}
		
		default:
			return state;
	}
}

export const setImagereducer = (state = initialState, {type,payload} ) => {
	switch (type) {
		case ActionTypes.SET_IMAGE:
			// console.log("From Reducer",payload.img);
			return {
				...state.image,
				img: payload
			};

		default:
			return state;
	}
}

