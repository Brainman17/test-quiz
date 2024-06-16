import {questionsActions} from "../../../services/questionsService/store/slice/questions.slice.ts";
import {useAppSelector} from "../../../store/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../../store/hooks/useAppDispatch.ts";

export const useContainer = () => {
  const step = useAppSelector(state => state.questionsReducer.questionsSteps)
  const dispatch = useAppDispatch()

  const changeStep = () => {

    dispatch(questionsActions.setQuestionsSteps(step + 1))
  }
  return {changeStep}
}
