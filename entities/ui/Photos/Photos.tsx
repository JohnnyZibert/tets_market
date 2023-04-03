import React from 'react';
import MainContainer from '../../../shared/ui/MainContainer/MainContainer';
import cls from './Photos.module.scss';
import { PhotoCard } from '../../../shared/ui/PhotoCard/Phototcard';
import { IPhotoData } from '../../../pages';
import { NotFoundPhotosPage } from '../../../pages/PhotosNotFound/NotFoundPhotosPage';

const Photos = ({ photos }: IPhotoData) => {
    const photosWithMarca = photos
        .map((photo) => ({ ...photo, brand: 'marka', status: { new: 'NEW', top: 'TOP' } }));

    if (!photosWithMarca) {
        return <NotFoundPhotosPage />;
    }

    return (
        <MainContainer>
            <div className={cls.photosContainer}>
                {photosWithMarca
                    .map((photo) => (
                        <PhotoCard
                            key={photo.id}
                            {...photo}
                        />
                    ))}
            </div>
        </MainContainer>
    );
};

export default Photos;
