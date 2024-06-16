import { FC } from 'react'

import { useContainer } from './useContainer'
import {Question3} from "../ui/Question3.tsx";

export const Container: FC = () => <Question3 {...useContainer()} />

export type Question3Props = ReturnType<typeof useContainer>
