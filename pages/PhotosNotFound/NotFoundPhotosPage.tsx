import { NotFound } from '../../entities/ui/NotFond/NotFound';
import cls from './NotFoundPhotosPage.module.scss';

export interface PhotosNotFoundProps {
    className?: string
}

export const NotFoundPhotosPage = (props:PhotosNotFoundProps) => {
    const { className } = props;
    return (
        <div className={cls.NotFoundPage}>
            <NotFound />
        </div>
    );
};
