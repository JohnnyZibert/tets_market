import {
    ButtonHTMLAttributes, FC, memo, ReactNode,
} from 'react';
import Link from 'next/link';
import cls from './Button.module.scss';
import { classNames, Mods } from '../../lib/classNames/classNames';

export enum ButtonTheme {
    DANGER = 'danger',
    SUCCESS = 'success',
    DEFAULT = 'default',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}
export enum TypeButton {
    BLOCK ='block_btn',
    INLINE ='inline_btn'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children: ReactNode
    LinkModeBtn: boolean
    btnType: TypeButton
    href: string
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.DEFAULT,
        disabled,
        size = ButtonSize.XL,
        LinkModeBtn = false,
        btnType = TypeButton.BLOCK,
        href,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[size]]: true,
        [cls[btnType]]: btnType,
    };

    return (
        <>
            {LinkModeBtn ? (
                <Link href={href} className={classNames(cls.Button, mods, [className])}>{children}</Link>
            ) : (
                <button
                    type="button"
                    className={classNames(cls.Button, mods, [className])}
                    disabled={disabled}
                    {...otherProps}
                >
                    {children}
                </button>
            )}
        </>
    );
});
