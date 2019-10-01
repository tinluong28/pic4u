import React from 'react';
import ImageCard from './ImageCard';
import '../styles/ImageList.css';

const ImageList = (props) => {
    const images = props.images.map((image)=>(
        <ImageCard
            key={image.id} image={image} />
    ))
    return(
        <div className='imageList'>
            {props.notFound ? props.notFound : images}
        </div>
    )
}

export default ImageList;