import React, { useState } from 'react';
import Photos from '../entities/ui/Photos/Photos';
import { Pagination } from '../entities/ui/Pagination/Pagination';
import MainContainer from '../shared/ui/MainContainer/MainContainer';
import { Wrapper } from '../shared/ui/Wrapper/Wrapper';

export interface IPhoto {
    status: {
        new: string
        top: string
    }
    url: string
    title: string
    brand: string
    id: number
}

export interface IPhotoData {
    photos: IPhoto[]
}

const Index = ({ photos }:IPhotoData) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(15);
    const [disable, setDisable] = useState({ prev: false, next: false });

    const pageCount = Math.ceil(photos.length / perPage);

    const lastPhotoIndex = currentPage * perPage;

    const firstIndex = lastPhotoIndex - perPage;

    const countPhotos = photos.slice(firstIndex, lastPhotoIndex);

    const nextBtn = () => {
        if (currentPage < pageCount) {
            setCurrentPage((prev) => prev + 1);
            setDisable({ prev: false, next: false });
        }
        if (currentPage === pageCount) { setDisable({ prev: false, next: true }); }
    };

    const prevBtn = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
            setDisable({ prev: false, next: false });
        }
        if (currentPage <= 1) {
            setDisable({ prev: true, next: false });
        }
    };

    return (
        <MainContainer>
            <Wrapper>
                <Photos photos={countPhotos} />
                <Pagination
                    totalCountPage={photos.length}
                    perPage={perPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    prevBtn={prevBtn}
                    nextBtn={nextBtn}
                    disable={disable}
                />
            </Wrapper>
        </MainContainer>
    );
};

export default Index;

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${150}`);
    const photos = await response.json();
    return {
        props: { photos },
    };
}
