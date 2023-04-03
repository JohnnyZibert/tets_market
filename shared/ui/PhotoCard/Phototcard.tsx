import React from 'react';
import cls from './PhotoCard.module.scss';
import { IPhoto } from '../../../pages';

export const PhotoCard = (props: IPhoto) => {
    const {
        brand, url, status, title,
    } = props;

    return (
        <div className={cls.photoCard}>
            <div className={cls.img}>
                <div className={cls.badge}>{status.new}</div>
                <img src={url} className={cls.photo} alt="photos" />
            </div>
            <h4>{title}</h4>
            <h5 className={cls.brand}>{`Brand: ${brand}`}</h5>
        </div>
    );
};
