import React, { useRef, useState, useEffect } from 'react'
import cn from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

import styles from './style.module.scss'

import SwiperCore, { Keyboard, Pagination, Navigation } from 'swiper/core'

import ReactCardFlip from 'react-card-flip'

SwiperCore.use([Keyboard, Pagination, Navigation])


function ViewCardPage( { children, setId, ...props }) {

  const [card, setCard] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);


  useEffect(async () => {

    let url = window.location.href.split('/');
    url = url[url.length-1]
    console.log("url", url)

    const result = await fetch(`http://localhost:4001/card/setId/${url}`)
    const data = await result.json()

    console.log(data)
    setCard(data);
  }, []);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }


  return (
    <div className={styles.sliderContainer}>
    
    { card ? 

    <Swiper
      keyboard={{
        enabled: true
      }}
      pagination={{
        type: "fraction"
      }}
      navigation={true}
      className="mySwiper"
  >
      { card.map(element => {
          return <SwiperSlide>  
                  <ReactCardFlip isFlipped={isFlipped} flipDirection={'vertical'} >
                      <div className={styles.flipTerm} >
                        <p>{element.term}</p>
                        <button onClick={handleClick}>Arka Yüzünü Çevir</button>
                      </div>

                      <div className={styles.flipDefinition} >
                        <p>{element.definition}</p>
                        <button onClick={handleClick}>Arka Yüzünü Çevir</button>
                      </div>

                  </ReactCardFlip>               
              </SwiperSlide>;
      }) }
    
    </Swiper>   
    :     
    <p>Loading...</p> }
  </div>
  )
}

export default ViewCardPage
