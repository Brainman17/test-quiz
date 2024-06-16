import { FC } from 'react'

import { useContainer } from './useContainer'
import {Question2} from "../ui/Question2.tsx";

export const Container: FC = () => <Question2 {...useContainer()} />

export type Question2Props = ReturnType<typeof useContainer>
