import React, { useState, useEffect } from 'react'
import styles from '../../styles/Pages.module.css'
import Image from 'next/image'


export default function SecondSection() {
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
                <div className={styles.imgFrame} style={{ width: imgWidth, height: imgWidth }}>
                    <Image src='/about_me.jpg' width={imgWidth} height={imgWidth} />
                </div>
                <div className={styles.contentFrame}>
                    <div className={styles.nameBlock}>
                        Обо мне
                    </div>
                    <div className={styles.textFrame20}>
                        Приветствую Вас!<br />
                        Меня зовут Ольга, я профессиональный художник.<br /><br />

                        Творю и работаю в свободном динамичном стиле, основанном на отсутствии набросков.<br />
                        Мои картины всегда рождаются из опыта, идеи, настроения, которые я исследую непосредственно
                        на бумаге или холсте, полностью погружаясь в процесс.<br />
                        В галерее вы можете посмотреть примеры картин и заказать что-то особое по цвету,
                        размеру и сюжету для своего интерьера!<br />

                    </div>
                    <div className={styles.button} style={{ backgroundColor: 'rgba(229, 123, 172, 0.6)', margin: imgWidth == 534 ? '0 0 0 10px' : 'auto' }}>
                        Интерьерные картины
                    </div>
                </div>


            </div>
        </>
    )
}
