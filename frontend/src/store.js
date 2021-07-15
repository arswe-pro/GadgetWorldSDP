import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cartReducers } from './Redux/reducers/cartReducers';
import {
    orderCreateReducers,
    orderDeliverReducers,
    orderDetailsReducers,
    orderListMyReducers,
    orderListReducers,
    orderPayReducers,
} from './Redux/reducers/orderReducers';
import {
    productCreateReducers,
    productDeleteReducers,
    productDetailsReducers,
    productReducers,
    productReviewCreateReducers,
    productTopRatedReducers,
    productUpdateReducers,
} from './Redux/reducers/productReducers';
import {
    userDeleteReducers,
    userDetailsReducers,
    userListReducers,
    userLoginReducers,
    userRegisterReducers,
    userUpdateProfileReducers,
    userUpdateReducers,
} from './Redux/reducers/userReducers';

const reducer = combineReducers({
    productList: productReducers,
    productDetails: productDetailsReducers,
    productDelete: productDeleteReducers,
    productCreate: productCreateReducers,
    productUpdate: productUpdateReducers,
    productReviewCreate: productReviewCreateReducers,
    productTopRated: productTopRatedReducers,
    //
    cart: cartReducers,
    //
    userLogin: userLoginReducers,
    userRegister: userRegisterReducers,
    userDetails: userDetailsReducers,
    userUpdateProfile: userUpdateProfileReducers,
    userList: userListReducers,
    userDelete: userDeleteReducers,
    userUpdate: userUpdateReducers,
    //
    orderCreate: orderCreateReducers,
    orderDetails: orderDetailsReducers,
    orderPay: orderPayReducers,
    orderDeliver: orderDeliverReducers,
    orderListMy: orderListMyReducers,
    orderList: orderListReducers,
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {};

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
    },
    userLogin: {
        userInfo: userInfoFromStorage,
    },
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
