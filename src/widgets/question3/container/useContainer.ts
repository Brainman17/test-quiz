import {useAppSelector} from "../../../store/hooks/useAppSelector.ts";
import {useDispatch} from "react-redux";
import {questionsActions} from "../../../services/questionsService/store/slice/questions.slice.ts";
import {ChangeEvent} from "react";

export const useContainer = () => {
  const step = useAppSelector(state => state.questionsReducer.questionsSteps)

  const dispatch = useDispatch();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(questionsActions.checkThreeQuestion(e.target.value))
  }

  const changeStep = () => {
      dispatch(questionsActions.setQuestionsSteps(step + 1))
  }

  return { onChange, changeStep }
}
