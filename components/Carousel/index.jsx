import { useState, useEffect } from 'react';
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/autoplay'
import * as Styled from './Carousel.styles'
import Text from '../Text'
import Card from '../Card'
import client from '../../lib/sanity'


import Box from '../Box'
// import Swiper core and required modules

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);
// Import Swiper styles

const Carousel = (data, responsive) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, [])

  const { title, items, type } = data

  return (
    <Styled.CarouselSection>
      <Styled.Carousel
        key={isClient ? 'client' : 'server'}

        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true
        }}
        // Responsive breakpoints
        breakpoints={{
          // when window width is >= 320px
          520: {
            slidesPerView: 1,
            autoplay: false

          },
          // when window width is >= 480px
          900: {
            slidesPerView: 2,
            autoplay: false
          },
        }

        }

      >
        <Box css={{ py: '$5' }} slot="container-start">
          <Text css={{
            maxWidth: '80%',
            '@bp2': {
              width: '60%',
              pb: '$5'
            },
            '@bp1': {
              width: '100%',
              pb: '0'
            }

          }} as="h3">{title}</Text>
        </Box>

        {items.map((item) => (
          <SwiperSlide key={item._id}>
            <Card type={type}  {...item} />
          </SwiperSlide>
        ))}



      </Styled.Carousel>
    </Styled.CarouselSection >
  )
}

export default Carousel


