import React, { useState, FC } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import styles from './Workspace.module.css';
import Page from "../page/Page";
import Sidebar from "../sidebar/Sidebar";
import page from "../page/Page";

interface IProps {}

const Workspace:FC<IProps> = (props) => {
    const [pages, setPages] = useState(Array.from(Array(10), (_, i) => i + 1))
    const [activePage, setActivePage] = useState(pages[0])

    const changePage = (i: number) => {
        setActivePage(i);
    }

    const addPage = () => {
        const newPageIndex = pages[pages.length - 1] + 1;
        setPages([...pages, newPageIndex])
        changePage(newPageIndex);
    }

    return (
        <div className={styles.workspace}>
            <div className={styles.header}>Header</div>
            <div className={styles.content}>
                <Sidebar pages={pages}
                         changePage={changePage}
                         addPage={addPage}/>
                <div className={styles.pageContent}>
                    <div className={styles.pages}>
                        {pages.map((page) =>
                            <Page activePage={activePage} page={page} key={page}/>
                        )}
                    </div>
                </div>
                <div className={styles.toolbar}>Toolbar</div>
            </div>
        </div>
    );
}

export default Workspace