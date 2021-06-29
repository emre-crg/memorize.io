import React, { useRef, useState } from 'react'
import cn from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

import styles from './style.module.scss'

import SwiperCore, { Pagination, Navigation } from 'swiper/core'

SwiperCore.use([Pagination, Navigation])


function ViewCardPage() {
  return (
      <Swiper
      pagination={{
        type: "fraction"
      }}
      navigation={true}
      className={cn("mySwiper", styles.container)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  )
}

export default ViewCardPage
