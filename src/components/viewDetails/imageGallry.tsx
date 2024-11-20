 'use client'
import ReactImageGallery from 'react-image-gallery';

const ImageGallry = ({ detailPhoto,coverPhoto }: { detailPhoto:string[],coverPhoto:string}) => {
    let images: object[] = [{ original:coverPhoto, thumbnail: coverPhoto }]
    const img = detailPhoto?.forEach(v=>images.push({original:v,thumbnail:v}))
    


    return (
        <div>
            <div>
                <ReactImageGallery
                    showFullscreenButton={false}
                    showPlayButton={false}
                    thumbnailPosition="bottom"
                    useBrowserFullscreen={false}
                    showNav={false}
                    items={images}
                />
            </div>
        </div>
    );
};

export default ImageGallry;