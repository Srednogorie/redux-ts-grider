import {useSelector as _useSelector, TypedUseSelectorHook} from "react-redux";
import {rootState} from "../state";

export const useSelector: TypedUseSelectorHook<rootState> = _useSelector;
