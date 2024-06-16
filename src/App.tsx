import s from './App.module.css'
import {Timer} from "./shared/ui/Timer";
import {questions} from "./shared/constants/data.ts";
import {Question2} from "./widgets/question2";
import {Question1} from "./widgets/question1";
import {Question3} from "./widgets/question3";
import {Question4} from "./widgets/question4";
import {useAppSelector} from "./store/hooks/useAppSelector.ts";
import {useAppDispatch} from "./store/hooks/useAppDispatch.ts";
import {questionsActions} from "./services/questionsService/store/slice/questions.slice.ts";
import {useEffect} from "react";
import clsx from "clsx";
import {Total} from "./widgets/result";

function App() {

    const step = useAppSelector(state => state.questionsReducer.questionsSteps)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(questionsActions.setQuestionsSteps(step))
    }, [step, dispatch]);

  return (
      <div className={s.container}>
          {step === 5 ? <Total.widget /> : <>
              <div className={s.titleContainer}>
                  <h1 className={s.title}>Тестирование</h1>
                  <Timer timer={5} />
              </div>
              <div className={s.tabs}>
                  {questions.map((_, id) => (
                      <div className={clsx(s.tab, step === id + 1 ? s.active : '')} key={id}></div>
                  ))}
              </div>
              {step === 1 && <Question1.widget />}
              {step === 2 && <Question2.widget />}
              {step === 3 && <Question3.widget />}
              {step === 4 && <Question4.widget />}
          </>}
      </div>
  )
}

export default App
