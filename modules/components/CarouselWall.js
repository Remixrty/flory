import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import stylesCarousel from '../../styles/Carousel.module.css'
import stylesPages from '../../styles/Pages.module.css'

import Image from 'next/image';

export default function CarouselWall() {
    const [imgWidth, setImgWidth] = useState(0)

    var settings = {
        dots: false,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        adaptiveHeight: true,
        variableWidth: true,
        arrows: false
    }

    useEffect(() => {
        if (window.innerWidth > 800) {
            setImgWidth(534)
        }
        else {
            setImgWidth(300)
        }
    }, [])


    return (
        <>
            <div className={stylesCarousel.mainFrame} id='carouselWallSection'>
                <div className='container'>
                    <div className='row'>

                        <div className='carousel' style={{ height: imgWidth }}>
                            <Slider {...settings}>
                                <div className={stylesCarousel.itemBlock} style={{ width: imgWidth, height: imgWidth }}>
                                    <Image src='/rospis sten_1.jpg' width={imgWidth} height={imgWidth} />
                                </div>
                                <div className={stylesCarousel.itemBlock} style={{ width: imgWidth, height: imgWidth }}>
                                    <Image src='/rospis sten_2.jpg' width={imgWidth} height={imgWidth} />
                                </div>
                                <div className={stylesCarousel.itemBlock} style={{ width: imgWidth, height: imgWidth }}>
                                    <Image src='/rospis sten_3.jpg' width={imgWidth} height={imgWidth} />
                                </div>
                                <div className={stylesCarousel.itemBlock} style={{ width: imgWidth, height: imgWidth }}>
                                    <Image src='/rospis sten_4.jpg' width={imgWidth} height={imgWidth} />
                                </div>
                                <div className={stylesCarousel.itemBlock} style={{ width: imgWidth, height: imgWidth }}>
                                    <Image src='/rospis sten_5.jpg' width={imgWidth} height={imgWidth} />
                                </div>
                                <div className={stylesCarousel.itemBlock} style={{ width: imgWidth, height: imgWidth }}>
                                    <Image src='/rospis sten_6.jpg' width={imgWidth} height={imgWidth} />
                                </div>
                                <div className={stylesCarousel.itemBlock} style={{ width: imgWidth, height: imgWidth }}>
                                    <Image src='/rospis sten_7.jpg' width={imgWidth} height={imgWidth} />
                                </div>
                                <div className={stylesCarousel.itemBlock} style={{ width: imgWidth, height: imgWidth }}>
                                    <Image src='/rospis sten_8.jpg' width={imgWidth} height={imgWidth} />
                                </div>
                                <div className={stylesCarousel.itemBlock} style={{ width: imgWidth, height: imgWidth }}>
                                    <Image src='/rospis sten_9.jpg' width={imgWidth} height={imgWidth} />
                                </div>
                                <div className={stylesCarousel.itemBlock} style={{ width: imgWidth, height: imgWidth }}>
                                    <Image src='/rospis sten_10.jpg' width={imgWidth} height={imgWidth} />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className='row'>
                        <div className={stylesCarousel.contentBlock}>
                            <div className={stylesPages.button} style={{ width: '382px' }}>
                                Заказать роспись стен
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}