import {Checkbox, GetProp} from "antd";
import {useDispatch} from "react-redux";
import {questionsActions} from "../../../services/questionsService/store/slice/questions.slice.ts";
import {useAppSelector} from "../../../store/hooks/useAppSelector.ts";
import {useState} from "react";

export const useContainer = () => {
  const dispatch = useDispatch();
  const step = useAppSelector(state => state.questionsReducer.questionsSteps);

  const [checkedValue, setCheckedValue] = useState<string[]>([]);

  const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {

    setCheckedValue(checkedValues as string[])
  }

  const changeStep = () => {
    dispatch(questionsActions.checkFirstQuestion(checkedValue));
    dispatch(questionsActions.setQuestionsSteps(step + 1))
  }

  return { onChange, changeStep, checkedValue }
}
