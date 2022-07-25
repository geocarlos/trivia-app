import { Check2Circle, XCircle } from 'react-bootstrap-icons';
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
                {isUserAnswerCorrect ? <Check2Circle className={classes.resultIcon} size="25" color="green" /> :
                    <XCircle className={classes.resultIcon} size="25" color="red" />}
                <span dangerouslySetInnerHTML={{ __html: sanitize(question) }} />
            </p>
        </div>
    )
}

export default ResultItem;