import styled from 'styled-components';
import { Card } from '../category/CategoryCard';
import { categoryData } from '../category/categoryData';
import { CategoryNav } from './SwiperNavButton';
// Swiper 관련 모듈 Import
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Section = styled.section`
  position: relative;
  max-width: 1200px;
  padding: 1rem;
  margin: 0 auto;
`;

const CardButton = styled.button`
  &:hover {
    .title {
      color: var(--primaryColor);
    }
  }
`;

export const Category = () => {
  return (
    <Section>
      <div className="relative">
        <Swiper
          grabCursor={true}
          slidesPerView={10}
          spaceBetween={45}
          navigation={{
            prevEl: '.swiper-prev',
            nextEl: '.swiper-next',
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {categoryData.map(item => (
            <SwiperSlide>
              <CardButton>
                <Card>
                  <img src={item.img} alt={item.title} />
                </Card>
                <div className="title">
                  <span>{item.title}</span>
                </div>
              </CardButton>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <CategoryNav />
    </Section>
  );
};
