import React, { useState, useEffect } from 'react'
import styles from '../../styles/Pages.module.css'
import Image from 'next/image'


export default function ThirdSection() {
    const [imgWidth, setImgWidth] = useState(0)
    useEffect(() => {
        if (window.innerWidth > 800) {
            setImgWidth(534)
        }
        else {
            setImgWidth(380)
        }
    },[])

    return (
        <>

            <div className={styles.mainFrame}>
                <div className={styles.contentFrame}>
                    <div className={styles.nameBlock}>
                        Роспись стен
                    </div>
                    <div className={styles.textFrame25}>

                        Занимаюсь росписью стен, преображая обычное пространство в уникальное, красивое и стильное.<br /><br />

                        Если цветы, воздушность, нежность и пастельная графика -
                        ваше, то мое творчество найдет отражение в
                        росписи стен интерьера вашей гостиной, спальни, детской!

                    </div>
                    <div className={styles.button} style={{ backgroundColor: 'rgba(255, 0, 0, 0.1)', margin: imgWidth==534?'0 0 0 10px':'0 auto 40px auto'  }}>
                        Роспись стен
                    </div>
                </div>
                <div className={styles.imgFrame} style={{ width: imgWidth, height: imgWidth }}>
                    <Image src='/rospis sten_9.jpg' width={imgWidth} height={imgWidth} />
                </div>
            </div>
        </>
    )
}
