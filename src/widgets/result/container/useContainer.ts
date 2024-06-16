import {useAppSelector} from "../../../store/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../../store/hooks/useAppDispatch.ts";
import {questionsActions} from "../../../services/questionsService/store/slice/questions.slice.ts";

export const useContainer = () => {
  const correctAnswers = useAppSelector(state => state.questionsReducer.correctAnswers)
  const dispatch = useAppDispatch();

  const startAgain = () => {
    dispatch(questionsActions.setQuestionsSteps(1))
  }
  return {correctAnswers, startAgain}
}
