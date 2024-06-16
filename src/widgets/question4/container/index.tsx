import { FC } from 'react'

import { useContainer } from './useContainer'
import {Question4} from "../ui/Question4.tsx";

export const Container: FC = () => <Question4 {...useContainer()} />

export type Question4Props = ReturnType<typeof useContainer>
