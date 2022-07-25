import { useCallback, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { ActionTypes, AppContext } from '../context/AppContext';
import classes from './Result.module.scss';
import ResultItem from './ResultItem';

function Result() {
    const { state: { quizItems }, dispatch } = useContext(AppContext);
    const score = quizItems.filter(q => q.userAnswer === q.correctAnswer).length;

    const handlePlayAgainClick = useCallback(() => {
        dispatch({type: ActionTypes.RESET_GAME_TO_PLAY_AGAIN});
    }, []);

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
            <div className={classes.playAgainBtn}>
                <Button onClick={handlePlayAgainClick} >
                    Play Again?
                </Button>
            </div>
        </div>
    );
}

export default Result;