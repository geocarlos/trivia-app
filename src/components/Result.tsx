import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import classes from './Result.module.scss';
import ResultItem from './ResultItem';

function Result() {
    const { state: { quizItems } } = useContext(AppContext);
    const score = quizItems.filter(q => q.userAnswer === q.correctAnswer).length;

    if (!quizItems.length) {
        return <Navigate to="/" replace />
    }

    return (
        <div className={classes.Result}>
            <h2>You scored</h2>
            <h2>{score} / {quizItems.length}</h2>
            {quizItems.map(({ question, correctAnswer, userAnswer }) => (
                <ResultItem
                    key={question.replace(/\s/g, '_')}
                    isUserAnswerCorrect={correctAnswer === userAnswer}
                    question={question}
                />
            ))}
        </div>
    );
}

export default Result;