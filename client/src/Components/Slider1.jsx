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
   
  axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2023-11-26&sortBy=publishedAt&apiKey=ec9c40f42256400982c1a48a403ec53f`)
  .then((res)=>{
    setNewsinfo(res.data.articles)
  })
    
  }, [])
  
  return (
   <>
     <Swiper
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
              <div className="slide"><img src={elem.urlToImage} alt="" /></div>
             
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
