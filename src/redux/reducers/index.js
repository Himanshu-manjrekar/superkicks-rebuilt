// Combine Reducers
import { combineReducers } from "redux"; 

import {
	// addToCartReducer,
	// genderReducer,
	productReducer,
	selectedProductReducer
} from './productReducers';

const allReducers = combineReducers({
	allProducts: productReducer,
	selectedProduct: selectedProductReducer,
	// addToCart: addToCartReducer,
})

export default allReducers;