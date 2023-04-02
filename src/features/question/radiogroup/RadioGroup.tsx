import React, {FC} from 'react';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import styles from './RadioGroup.module.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import QuestionText from "../questionText/QuestionText";

interface IProps {}

const RadioGroupQuestion:FC<IProps> = (props) => {

    return (
        <div className={styles.radioGroup}>
            <FormControl sx={{
                '& > :not(style)': { m: 1 },
            }}>
                <FormLabel sx={{ m: 0 }}><QuestionText/></FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
        </div>
    );
}

export default RadioGroupQuestion