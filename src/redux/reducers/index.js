// Combine Reducers
import { combineReducers } from "redux"; 

import {
	addToCartReducer,
	// genderReducer,
	productReducer,
	selectedProductReducer,
	setImagereducer,
	// selectedImageReducer
} from './productReducers';

const allReducers = combineReducers({
	allProducts: productReducer,
	selectedProduct: selectedProductReducer,
	addToCart: addToCartReducer,
	setImage: setImagereducer,
	// selectedImage: selectedImageReducer, 
})

export default allReducers;