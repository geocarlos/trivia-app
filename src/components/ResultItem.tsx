import { Dash, Plus } from 'react-bootstrap-icons';
import sanitize from 'sanitize-html';
import classes from './ResultItem.module.scss';

export type ResultItemProps = {
    question: string;
    isUserAnswerCorrect: boolean;
}

function ResultItem({ question, isUserAnswerCorrect }: ResultItemProps) {
    return (
        <div className={classes.ResultItem} key={question.replace(/\s/g, '_')}>
            <p>
                {isUserAnswerCorrect ? <Plus size="30" color="green" /> : <Dash size="30" color="red" />}
                <span dangerouslySetInnerHTML={{ __html: sanitize(question) }} />
            </p>
        </div>
    )
}

export default ResultItem;