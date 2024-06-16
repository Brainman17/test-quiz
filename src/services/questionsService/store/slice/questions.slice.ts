import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {QuestionsSteps} from "../lib/types.ts";
import {questions} from "../../../../shared/constants/data.ts";

export const questionsSlice = createSlice({
    initialState: {
        questionsSteps: 1,
        correctAnswers: 0,
        question1: questions[0].answers,
        question2: questions[1].answers[0],
        question3: '',
    },
    name: 'questionsReducer',
    reducers: {
        setQuestionsSteps: (state, action: PayloadAction<QuestionsSteps>) => {
            state.questionsSteps = action.payload
        },
        setAnswers: (state, action: PayloadAction<number>) => {
            state.correctAnswers = action.payload
        },
        checkFirstQuestion: (state, action: PayloadAction<string[]>) => {
            if(action.payload.includes('Symbol')) return
            state.correctAnswers = state.correctAnswers + 1

            // Проверяем, если пользователь чекнул Symbol, то ответ неправильный
        },
        checkSecondQuestion: (state, action: PayloadAction<string>) => {
            if(questions[1].answers[2] !== action.payload) return
            state.correctAnswers = state.correctAnswers + 1

            // Проверяем, если пользователь чекнул не третий вариант в массиве questions[1].answers ,
            // то ответ неправильный
        },
        checkThreeQuestion: (state, action: PayloadAction<string>) => {
            if(action.payload.toLocaleLowerCase().trim() !== questions[2].answers[0]) return
            state.correctAnswers = state.correctAnswers + 1

            // Проверяем, если пользователь ввел не super, то неверно
        }
    },
})

export const questionsActions = questionsSlice.actions
