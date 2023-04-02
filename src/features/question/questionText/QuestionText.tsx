import React, {FC, useRef, useState} from 'react';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import styles from './QuestionText.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';

interface IProps {
    text?: string;
}

const ariaLabel = { 'aria-label': 'description' };

const QuestionText:FC<IProps> = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const [text, setText] = useState(props.text || 'Question text')
    const input = useRef<HTMLInputElement>(null)
    return (
        <div className={styles.questionText}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
            >
                {
                isEditing
                    ?
                <Input value={text}
                       inputProps={ariaLabel} />
                    :
                    <div className={styles.readMode}
                         onClick={() => setIsEditing(true)}>
                        {text}
                    </div>
                }
            </Box>
            {/*//        ref={input}*/}
            {/*//        value={text}*/}
            {/*//        onChange={() => setText(input.current?.value || '')}*/}

        </div>
    );
}

export default QuestionText