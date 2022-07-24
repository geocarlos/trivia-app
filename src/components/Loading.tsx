import { Spinner } from 'react-bootstrap';
import classes from './Loading.module.scss';

function Loading() {
    return (
        <div className={classes.Loading}>
            <Spinner animation="border" />
        </div>
    )
}

export default Loading;