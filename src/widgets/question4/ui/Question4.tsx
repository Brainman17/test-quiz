import {memo} from 'react'
import {questions} from "../../../shared/constants/data.ts";
import s from './Question4.module.css'
import {Question4Props} from "../container";
import {Button, Input} from 'antd';

const { TextArea } = Input;

export const Question4 = memo(({changeStep}: Question4Props) => {
  return (
    <div className={s.container}>
        <h1 className={s.title}>{questions[3].question}</h1>
        <TextArea
            placeholder="Напишите свой ответ"
            className="custom"
            style={{ height: 100 }}
        />
        <Button type="primary" danger className={s.btn} onClick={changeStep}>Ответить</Button>
    </div>
  )
})
