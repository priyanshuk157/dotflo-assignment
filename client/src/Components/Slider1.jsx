import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './slider.css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';

const Slider1 = () => {
  const [newsinfo , setNewsinfo]=useState([])

  useEffect(() => {
   
  axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=ec9c40f42256400982c1a48a403ec53f`)
  .then((res)=>{
    setNewsinfo(res.data.articles)
  })
     
  }, [])
  
  return (
   <>
     <Swiper
     style={{
      "--swiper-navigation-size": "45px",
      "--swiper-navigation-top-offset": "50%",
      "--swiper-navigation-sides-offset": "40px",
      "--swiper-navigation-color": "#fff"
    }}    
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >

        {newsinfo.map((elem , key)=>{


if(key<10){
  return(
    <>
    <SwiperSlide>
              <div className="slide"><img src={elem.urlToImage} alt="" /><div className='slidetext'>{elem.title}</div></div>
             
            </SwiperSlide></>
    )
}
return(
  <></>
)
        }
        )}
        
       
      </Swiper>
   </>
  )
}

export default Slider1
