import { useDispatch } from 'react-redux'
import {AppDispatch} from "../types/types.ts";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
