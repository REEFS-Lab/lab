import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";


const ImageCarousel = ({images}) => {
    return (
        <div className="image-slider">
            <SimpleImageSlider
                width="100%"
                height="100%"
                images={images}
                showBullets={true}
                showNavs={true}
                style={{ width: "100%", height: "600px", position: "relative" }}
                slideDuration={0.6}
                autoPlay={true}
            />

        </div>
    )
}

export default ImageCarousel