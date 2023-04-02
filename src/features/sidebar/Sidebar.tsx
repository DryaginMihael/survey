import React, { useState, FC } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import styles from './Sidebar.module.css';

interface IProps {
    pages: number[];
    changePage: (i: number) => void;
    addPage: () => void;
}

const Sidebar:FC<IProps> = (props) => {
    return (
        <div className={styles.page}>
            {
                props.pages.map((i) =>
                    <div
                        key={i}
                        className={styles.button}
                        onClick={() => props.changePage(i)}>
                        {i}
                    </div>
                )
            }
            <div
                className={styles.button}
                onClick={() => props.addPage()}>
                +
            </div>
        </div>
    );
}

export default Sidebar