import { ActionTypes } from "./action-types";

export const setProducts = (products) => {
	return {
		type: ActionTypes.SET_PRODUCTS,
		payload: products
	}
}

export const selectedProduct = (products) => {
	return {
		type: ActionTypes.SELECTED_PRODUCT,
		payload: products
	}
}

export const removeSelectedProduct = () => {
	return {
		type: ActionTypes.REMOVE_SELECTED_PRODUCT,
	}
}

export const addToCart = (products) => {
	return {
		type: ActionTypes.ADD_TO_CART,
		payload: products
	}
}

export const setImage = (image) => {
	return {
		type: ActionTypes.SET_IMAGE,
		payload: image
	}
}
export const selectedImage = (image) => {
	return {
		type: ActionTypes.SELECTED_IMAGE,
		payload: image
	}
}