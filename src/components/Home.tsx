import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { ActionTypes, AppContext } from '../context/AppContext';
import classes from './Home.module.scss';

function Home() {

    const { dispatch } = useContext(AppContext);
    const navigate = useNavigate();

    const beginQuiz = useCallback(() => {
        dispatch({type: ActionTypes.FETCH_QUESTIONS});
        navigate('/quiz');
    }, [dispatch])

    return (
        <div className={classes.Home}>
            <h2>Welcome to the Trivia Challenge!</h2>
            <p>
                You will be presented with 10 True or False questions.
            </p>
            <p>Can you score 100%?</p>
            <div className={classes.beginButton}>
                <Button onClick={beginQuiz} role="button" variant="primary">BEGIN</Button>
            </div>
        </div>
    );
};

export default Home;