import { memo } from 'react'
import {Button, Checkbox, Flex} from 'antd';
import { Question1Props } from '../container'
import {questions} from "../../../shared/constants/data.ts";
import s from './Question1.module.css'

export const Question1 = memo(({ onChange, changeStep }: Question1Props) => {
  return (
    <div className={s.container}>
        <h1 className={s.title}>{questions[0].question}</h1>
        <Flex vertical={true}>
            <Checkbox.Group options={questions[0].answers} onChange={onChange} className={s.group}/>
        </Flex>
        <Button type="primary" danger className={s.btn} onClick={changeStep}>Ответить</Button>
    </div>
  )
})
