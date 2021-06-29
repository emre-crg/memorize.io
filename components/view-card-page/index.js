import React, { useRef, useState, useEffect } from 'react'
import cn from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

import styles from './style.module.scss'

import SwiperCore, { Pagination, Navigation } from 'swiper/core'

SwiperCore.use([Pagination, Navigation])


function ViewCardPage( {children, setId, ...props }) {

  const [card, setCard] = useState();
  // const [url, setUrl] = useState();


  useEffect(async () => {

    const result = await fetch(`http://localhost:4001/card/setId/${setId}`)
    const data = await result.json()

    setCard(data);
    console.log(result)
  });



  return (
    <div className={styles.sliderContainer}>
    
    { card ? 

    <Swiper
    pagination={{
      type: "fraction"
    }}
    navigation={true}
    className="mySwiper"
  >
    { card.map(element => {
        return <SwiperSlide>{element.term}</SwiperSlide>;
    }) }

{/* 
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 5</SwiperSlide>
    <SwiperSlide>Slide 6</SwiperSlide>
    <SwiperSlide>Slide 7</SwiperSlide>
    <SwiperSlide>Slide 8</SwiperSlide>
    <SwiperSlide>Slide 9</SwiperSlide> */}
    
    </Swiper>          
    
    :     
    <p>Loading...</p> }
  </div>
  )
}

export default ViewCardPage
