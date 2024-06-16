import {memo} from 'react'
import s from './Total.module.css'
import {ResultProps} from "../container";
import {Button, Result} from "antd";
import { SmileOutlined } from '@ant-design/icons';


export const Total = memo(({correctAnswers, startAgain}: ResultProps) => {
  return (
    <div className={s.container}>
        <Result
            icon={<SmileOutlined />}
            title={`Правильных ответов: ${correctAnswers}`}
            extra={<Button type="primary" onClick={startAgain}>Начать заново</Button>}
        />
    </div>
  )
})
