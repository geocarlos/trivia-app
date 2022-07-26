import { useContext, useEffect, useMemo } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import sanitize from 'sanitize-html';
import { ActionTypes, AppContext } from '../context/AppContext';
import ErrorView from './ErrorView';
import classes from './Quiz.module.scss';

function Quiz() {
    const { dispatch, state: { currentQuestionIndex, quizItems, error } } = useContext(AppContext);
    const currentQuestion = quizItems[currentQuestionIndex];

    const navigate = useNavigate();
    const params = useParams();

    const questionIndexFromUrl = useMemo(() => {
        const questionIndex = params?.question;
        if (questionIndex) {
            return parseInt(questionIndex, 10);
        }
        return null;
    }, [params]);

    useEffect(() => {
        if (questionIndexFromUrl !== null) {
            dispatch({ type: ActionTypes.SET_CURRENT_QUESTION, payload: questionIndexFromUrl });
        }
    }, [dispatch, questionIndexFromUrl]);

    const processUserAnswer = (answer: boolean) => {
        const questions = [...quizItems];
        questions[currentQuestionIndex].userAnswer = answer;
        dispatch({ type: ActionTypes.PROCESS_USER_ANSWER, payload: questions });
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < quizItems.length) {
            navigate(`/quiz/${nextQuestionIndex}`)
        } else {
            navigate('/result');
        }
    }

    if (!currentQuestion) {
        return <Navigate to="/" replace />
    }

    return error ? <ErrorView /> : (
        <div className={classes.Quiz}>
            <h2>{currentQuestion.category}</h2>
            <Card className={classes.question}>
                <p dangerouslySetInnerHTML={{ __html: sanitize(currentQuestion.question) }} />
            </Card>
            <p>{currentQuestionIndex + 1} / {quizItems.length}</p>
            <div className={classes.userAnswer}>
                <Button onClick={() => processUserAnswer(true)} variant="primary">True</Button>
                <Button onClick={() => processUserAnswer(false)} variant="secondary">False</Button>
            </div>
        </div>
    )
}

export default Quiz;