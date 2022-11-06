import React, {useState} from 'react'
import { openQuestions, ratedQuestions } from '../../../data/questions'

const CakeQuestion = ({count}) => {

const questions = [...openQuestions, ...ratedQuestions]
const question = questions[count]

    return (
        <h1>{question}</h1>
    )
}

export default CakeQuestion