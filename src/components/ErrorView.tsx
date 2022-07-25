import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import classes from './ErrorView.module.scss';

function ErrorView() {
    const navigate = useNavigate();
    return (
        <div className={classes.ErrorView}>
            <h2>Oh, no!</h2>
            <p>Something went wrong fetching questions. Please try again.</p>
            <Button onClick={() => navigate('/')}>OK</Button>
        </div>
    );
}

export default ErrorView;