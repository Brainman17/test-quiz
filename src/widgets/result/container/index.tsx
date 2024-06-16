import { FC } from 'react'

import { useContainer } from './useContainer'
import {Total} from "../ui/Total.tsx";

export const Container: FC = () => <Total {...useContainer()} />

export type ResultProps = ReturnType<typeof useContainer>
