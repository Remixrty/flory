import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import stylesCarousel from '../../styles/Carousel.module.css'
import stylesPages from '../../styles/Pages.module.css'
// import Image from 'next/image';
import Image from 'next/image';

export default function CarouselPaint() {
    const [imgWidth, setImgWidth] = useState(0)
    useEffect(() => {
        if (window.innerWidth > 800) {
            setImgWidth(534)
        }
        else {
            setImgWidth(300)
        }
    }, [])

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

    return (
        <>
            <div className={stylesCarousel.mainFrame} id='carouselPaintSection'>
                <div className='container'>
                    <div className='row'>

                        <div className='carousel' style={{ height: imgWidth }}>
                            <Slider {...settings}>
                                <div className={stylesCarousel.itemBlock} style={{ width: imgWidth, height: imgWidth }}>
                                    <Image src='/Painting1.jpg' width={imgWidth} height={imgWidth} />
                                </div>
                                <div className={stylesCarousel.itemBlock} style={{ width: imgWidth, height: imgWidth }}>
                                    <Image src='/Painting2.jpg' width={imgWidth} height={imgWidth} />
                                </div>
                                <div className={stylesCarousel.itemBlock} style={{ width: imgWidth, height: imgWidth }}>
                                    <Image src='/Painting3.jpg' width={imgWidth} height={imgWidth} />
                                </div>
                                <div className={stylesCarousel.itemBlock} style={{ width: imgWidth, height: imgWidth }}>
                                    <Image src='/Painting4.jpg' width={imgWidth} height={imgWidth} />
                                </div>
                                <div className={stylesCarousel.itemBlock} style={{ width: imgWidth, height: imgWidth }}>
                                    <Image src='/Painting5.jpg' width={imgWidth} height={imgWidth} />
                                </div>
                                <div className={stylesCarousel.itemBlock} style={{ width: imgWidth, height: imgWidth }}>
                                    <Image src='/Painting6.jpg' width={imgWidth} height={imgWidth} />
                                </div>
                                <div className={stylesCarousel.itemBlock} style={{ width: imgWidth, height: imgWidth }}>
                                    <Image src='/Painting7.jpg' width={imgWidth} height={imgWidth} />
                                </div>
                                <div className={stylesCarousel.itemBlock} style={{ width: imgWidth, height: imgWidth }}>
                                    <Image src='/Painting8.jpg' width={imgWidth} height={imgWidth} />
                                </div>
                                <div className={stylesCarousel.itemBlock} style={{ width: imgWidth, height: imgWidth }}>
                                    <Image src='/Painting9.jpg' width={imgWidth} height={imgWidth} />
                                </div>
                                <div className={stylesCarousel.itemBlock} style={{ width: imgWidth, height: imgWidth }}>
                                    <Image src='/Painting10.jpg' width={imgWidth} height={imgWidth} />
                                </div>
                                <div className={stylesCarousel.itemBlock} style={{ width: imgWidth, height: imgWidth }}>
                                    <Image src='/Painting11.jpg' width={imgWidth} height={imgWidth} />
                                </div>
                            </Slider>
                        </div>
                    </div>

                    <div className='row'>
                        <div className={stylesCarousel.contentBlock}>
                            <div className={stylesPages.button} style={{ width: '382px' }}>
                                Получить каталог картин
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}