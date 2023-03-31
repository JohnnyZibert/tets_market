import React, { ReactNode } from 'react';
import Head from 'next/head';
import cls from './MainContainer.module.scss';

interface IProps {
    children: ReactNode
}

const MainContainer = ({ children }: IProps) => (
    <>
        <Head>
            <title>Главная страница</title>
        </Head>
        <div className={cls.mainContainer}>{children}</div>
    </>
);

export default MainContainer;
