import {useState} from "react";
import type {RadioChangeEvent} from "antd";
import {questionsActions} from "../../../services/questionsService/store/slice/questions.slice.ts";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../store/hooks/useAppSelector.ts";

export const useContainer = () => {
  const {question2, questionsSteps} = useAppSelector(state => state.questionsReducer)

  const [value, setValue] = useState(question2);

  const dispatch = useDispatch();

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    setValue(value);
  };

  const changeStep = () => {
    if(value) {
      dispatch(questionsActions.checkSecondQuestion(value))
      dispatch(questionsActions.setQuestionsSteps(questionsSteps + 1))
    }
  }

  return { value, onChange, changeStep }
}
