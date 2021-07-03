import { ActionTypes } from "./action-types";

export const setProducts = (products) => {
	return {
		type: ActionTypes.SET_PRODUCTS,
		payload: products
	}
}

export const selectedProducts = (products) => {
	return {
		type: ActionTypes.SELECTED_PRODUCTS,
		payload: products
	}
}

export const removeSelectedProduct = () => {
	return {
		type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
	}
}

export const addToCart = (products) => {
	return {
		type: ActionTypes.ADD_TO_CART,
		payload: products
	}
}