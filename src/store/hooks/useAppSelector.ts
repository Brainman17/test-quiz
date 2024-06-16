import { useSelector } from 'react-redux'
import {RootState} from "../types/types.ts";

export const useAppSelector = useSelector.withTypes<RootState>()
