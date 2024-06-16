import {memo} from 'react'
import {Button, Radio} from 'antd';
import { Question2Props} from '../container'
import {questions} from "../../../shared/constants/data.ts";
import s from './Question2.module.css'

export const Question2 = memo(({value, onChange, changeStep}: Question2Props) => {
  return (
    <div className={s.container}>
        <h1 className={s.title}>{questions[1].question}</h1>
        <Radio.Group options={questions[1].answers} onChange={onChange} value={value} />
        <Button type="primary" danger className={s.btn} onClick={changeStep}>Ответить</Button>
    </div>
  )
})
