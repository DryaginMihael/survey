import React, {useState, FC, useEffect, useRef, ReactElement, ReactHTMLElement} from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import styles from './Page.module.css';
import Checkbox from "../question/checkbox/Checkbox";
import Input from "../question/input/Input";
import Select from "../question/select/Select";
import RadioGroup from "../question/radiogroup/RadioGroup";

interface IProps {
    page: number;
    activePage: number;
}

const questions = [<Input/>, <Select/>, <RadioGroup/>, <Checkbox/>]

const Page:FC<IProps> = ({page, activePage}) => {
    const [questionList, setQuestions] = useState(questions);
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (page === activePage) {
            ref.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }, [activePage])

    return (
        <div className={styles.page} ref={ref}>
            <h4 className={styles.heading}>Страница {page}</h4>
            {
                questionList.map((question, i) => (
                    <div key={i} className={styles.block}>
                        {question}
                    </div>
                ))
            }
            <div
                className={styles.addButton}
                onClick={() => setQuestions([...questionList, <Checkbox/>])}
            >
                +
            </div>
        </div>
    );
}

export default Page