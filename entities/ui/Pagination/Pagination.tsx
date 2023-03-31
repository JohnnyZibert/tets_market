import { memo } from 'react';
import { Button, ButtonSize, ButtonTheme } from '../../../shared/ui/Button/Button';
import cls from './Pagination.module.scss';

interface IProps {
    perPage: number
    totalCountPage: number
    currentPage: number
    prevBtn: ()=> void
    nextBtn: ()=> void
    disable: {
        prev: boolean
        next: boolean
    }
}

export const Pagination = memo((props:IProps) => {
    const {
        perPage, totalCountPage, currentPage, prevBtn, nextBtn, disable,
    } = props;

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCountPage / perPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={cls.paginateContainer}>
            <Button
                type="button"
                onClick={prevBtn}
                disabled={disable.prev}
                className={cls.btnPaginate}
                theme={ButtonTheme.SUCCESS}
                size={ButtonSize.M}
            >
                {'<'}
            </Button>
            <input className={cls.currentPage} type="text" value={currentPage} />
            <Button
                type="button"
                disabled={disable.next}
                onClick={nextBtn}
                className={cls.btnPaginate}
                theme={ButtonTheme.DANGER}
                size={ButtonSize.XL}
            >
                {'>'}
            </Button>
        </div>
    );
});
