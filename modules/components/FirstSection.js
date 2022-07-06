import React, { useState, useEffect } from 'react'
import styles from '../../styles/Pages.module.css'
import Image from 'next/image'

export default function FirstSection() {
    const [imgWidth, setImgWidth] = useState(0)
    useEffect(() => {
        if (window.innerWidth > 500) {
            setImgWidth(534)
        }
        else {
            setImgWidth(380)
        }
    },[])


    return (
        <>

            <div className={styles.nameBlock} style={{ marginTop: imgWidth == 380 ? '100px' : '232px', marginBottom: imgWidth == 380 ? '0px' : '56px' }}>
                Роспись стен. Интерьерные картины.
            </div>
            <div className={styles.mainFrame}>
                <div className={styles.contentFrame}>
                    <div className={styles.textFrame31}>
                        Художественная роспись стен на заказ в Москве и Московской области<br /><br />

                        Интерьерные картины на заказ<br /><br />

                        Художник Ольга Григорьевых

                    </div>
                    <div className={styles.button} style={{ backgroundColor: '#AFE3F0', margin: imgWidth == 534 ? '0 0 40px 10px' : '0 auto 40px auto' }} onClick={()=>document.getElementById('backSection').scrollIntoView({block:'center'})}>
                        Заказать звонок
                    </div>
                </div>
                <div className={styles.imgFrame} style={{ width: imgWidth, height: imgWidth }}>
                    <Image src='/Painting1.jpg' width={imgWidth} height={imgWidth} />
                </div>

            </div>

        </>
    )
}