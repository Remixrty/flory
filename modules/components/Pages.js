import React from 'react'
import CarouselPaint from './CarouselPaint'
import CarouselWall from './CarouselWall'
import FirstSection from './FirstSection'
import FourthSection from './FourthSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import styles from '../../styles/Pages.module.css'

export default function Pages() {

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <FirstSection /></div>
                <div className='row'>
                    <SecondSection /></div>
                <div className='row'>
                    <ThirdSection /></div>
                <div className='row'></div>
            </div>
            <CarouselPaint />
            <CarouselWall />

            <div className='container'>
                <div className='row'><FourthSection /></div>
            </div>
        </>
    )
}