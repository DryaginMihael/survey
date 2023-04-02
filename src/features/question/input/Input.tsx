import React, {FC} from 'react';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import styles from './Input.module.css';
import QuestionText from "../questionText/QuestionText";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface IProps {}

const Input:FC<IProps> = (props) => {

    return (
        <div className={styles.input}>
            <QuestionText/>
            <Box
                component="form"
                sx={{ m: 1 }}
                noValidate
                autoComplete="off"
            >
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </Box>
        </div>
    );
}

export default Input