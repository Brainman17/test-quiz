import {QuestionType} from "../types/types.ts";

export const questions: QuestionType = [
    {
        question: 'Какие из указанных типов относятся к встроенным в TypeScript?',
        answers: ['Array', 'Symbol', 'Enum', 'Void']
    },
    {
        question: 'Что такое интерфейс в TypeScript?',
        answers: [
            'Место стыковки двух независимых объектов, систем',
            'Взаимодействие с лицом',
            'Интерфейс в TS определяет, какие свойства и методы должны присутствовать в объекте, а также их типы'
        ]
    },
    {
        question: 'С помощью какого ключевого слова можно вызвать конструктор базового класса из дочернего?',
        answers: ['super']
    },
    {
        question: 'В чем разница между extends и implements в TypeScript?',
        answers: []
    },
]