import { useSelector } from "react-redux"
import { TypedUseSelectorHook } from "react-redux"
import { RootState } from "../redux/reducer/index"

export const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector