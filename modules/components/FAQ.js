import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import styles from '../../styles/Pages.module.css'


export default function FAQ() {

    return (
        <>
            <div className={styles.faqFrame}>
                <p className={styles.nameBlock} style={{marginBottom:'32px'}}>Вопросы и ответы</p>
                <p className={styles.textBold20}>Из чего складывается стоимость?</p>
                <Accordion flush style={{ fontFamily: 'Montserrat' }}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><p className={styles.textFrame25} >Размер рисунка</p></Accordion.Header>
                        <Accordion.Body>
                            <p className={styles.textMed20}> Стоимость росписи напрямую зависит от площади рисунка - чем он больше, тем больше времени времени занимает процесс и больше затрачивается
                                краски для нанесения.<br/><br/>В стоимость включены материалы, а именно: краски, кисти, грунт, лак и прочие мелкие расходы + грунтовка стены</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><p className={styles.textFrame25}>Наличие эскиза</p></Accordion.Header>
                        <Accordion.Body>
                            <p className={styles.textMed20}>Возможно у вас есть готовый рисунок, который вы хотите перенести в ваш интерьер. <br/><br/>В этом случае я визуализирую его по масштабу стены
                                и при необходимости сделаю цветокоррекцию, чтобы иллюстрация максимально вписалась в пространство. <br/><br/>Эта услуга бесплатна.<br/><br/>
                                Если у вас нет готового эскиза, то я сделаю для вас авторский рисунок с учетом всех ваших пожеланий. В этом случае вы оплачиваете разработку эскиза.
                                <br/><br/>Стоимость услуги 8000 рублей.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><p className={styles.textFrame25}>Детализация</p></Accordion.Header>
                        <Accordion.Body>
                            <p className={styles.textMed20}>Eсть разные виды настенной росписи - от простых геометрических фигур и линий до сложных реалистичных изображений.
                            <br/><br/>Большое количество деталей, многосложные переходы цвета — очень кропотливая работа для художника.<br/><br/>
                                Стоимость простой росписи от 2000 руб/кв.м, роспись средней сложности - от 4000 руб/кв.м, высокая детализация в рисунке от 8000 руб/кв.м.
                                <br/><br/>  Каждый заказ расчитывается индивидуально.<br/><br/>
                                В галерее есть примеры работ с расчетом цены, исходя из площади стены и вида рисунка.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><p className={styles.textFrame25}>Местонахождение</p></Accordion.Header>
                        <Accordion.Body>
                            <p className={styles.textMed20}> Я работаю в пределах г.Москва. <br/><br/>Выезд в область на роспись 1-го дня + 10%  к полной стоимости росписи</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}