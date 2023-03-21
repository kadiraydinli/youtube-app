import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import homeReducer from './reducers/HomeData';

let initialState = {};

let reducers = combineReducers({
    getVideos: homeReducer
});

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;