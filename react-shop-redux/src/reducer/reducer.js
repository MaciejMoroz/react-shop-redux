import { ACTION_TYPES } from "../actions/actions";


const initState = { product: null, isLoading: true, isError: false };

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_TYPES.PRODUCT_FETCH:
            return { ...initState };
            case ACTION_TYPES.PRODUCT_FETCH_SUCCESS:
            return { product: action.product, isLoading: false, isError: false };
        case ACTION_TYPES.PRODUCT_FETCH_ERROR:
            return { product: null, isLoading: false, isError: true };
        default:
            return state;
    }
};
export default reducer;

