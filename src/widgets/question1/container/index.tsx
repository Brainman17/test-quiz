import { FC } from 'react'

import { useContainer } from './useContainer'
import {Question1} from "../ui/Question1";

export const Container: FC = () => <Question1 {...useContainer()} />

export type Question1Props = ReturnType<typeof useContainer>
