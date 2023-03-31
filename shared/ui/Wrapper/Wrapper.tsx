import { ReactNode } from 'react';
import cls from './Wrapper.module.scss';

interface IProps {
    children: ReactNode
}

export const Wrapper = ({ children }: IProps) => (
    <div className={cls.wrapper}>
        {children}
    </div>
);
