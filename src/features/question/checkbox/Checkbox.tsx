import React, {FC, useState} from 'react';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import styles from './Checkbox.module.css';
import QuestionText from "../questionText/QuestionText";
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface IProps {}

const CheckboxGroup:FC<IProps> = (props) => {

    const [state, setState] = useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { gilad, jason, antoine } = state;

    return (
        <div className={styles.checkbox}>
            <Box sx={{ display: 'flex' }}>
                <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
                    <FormLabel component="legend"><QuestionText/></FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                            }
                            label="Gilad Gray"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={jason} onChange={handleChange} name="jason" />
                            }
                            label="Jason Killian"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                            }
                            label="Antoine Llorca"
                        />
                    </FormGroup>
                </FormControl>
            </Box>
        </div>
    );
}

export default CheckboxGroup