import {memo} from 'react'
import {Button, Input} from 'antd';
import {questions} from "../../../shared/constants/data.ts";
import s from './Question3.module.css'
import {Question3Props} from "../container";

export const Question3 = memo(({onChange, changeStep}: Question3Props) => {

  return (
    <div className={s.container}>
        <h1 className={s.title}>{questions[2].question}</h1>
        <Input placeholder="Впишите слово" onChange={onChange}/>
        <Button type="primary" danger className={s.btn} onClick={changeStep}>Ответить</Button>
    </div>
  )
})
