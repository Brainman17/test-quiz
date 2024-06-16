import {useEffect, useState} from "react";
import s from './Timer.module.css'

type Props = {
    timer: number
}

export const Timer = ({timer}: Props) => {
    const [minutes, setMinutes] = useState(timer);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (minutes === 0 && seconds === 0) {
                clearInterval(timer);
            } else if (seconds === 0) {
                setMinutes(prevMinutes => prevMinutes - 1);
                setSeconds(59);
            } else {
                setSeconds(prevSeconds => prevSeconds - 1);
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [minutes, seconds]);

    return (
        <div className={s.container}>
            <h1 className={s.timer}>{`${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`}</h1>
        </div>
    );
};
