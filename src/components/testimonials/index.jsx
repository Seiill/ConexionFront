import React, { useState } from 'react';
import { Container, Description, Image, Button } from '../../styles/GlobalStyles';
import { Title } from '../services/servicesStyle';
import { Wrapper, Wrapp, TextContainer, ImageContainer, TitleTest, Subtitle, DescContainer, Circle, AnimatedWrapper } from './testimonialsStyle';
import AnimateSection from '../../styles/styleComponents/AnimateSection';
import { testimonialsData } from '../../util/data';
import Icon1 from '../../assets/Imagen salterra.jpg';


const imageMap = {
  'salterra': Icon1,
  'Paseador Canino chinchina': Icon1,
  'Pollolocura': Icon1,
};



const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonialsData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(testimonialsData) || testimonialsData.length <= 0) {
    return null;
  }

  return (
    <AnimateSection>
      <Container>
        <Wrapper>
          <Title>Lo que dicen de nosotros:</Title>
          <Button style={{ left: '50%' }} onClick={prevSlide}>&#9650;</Button>
          {testimonialsData.map((testimonial, index) => (
            <Wrapp key={testimonial.id}>
              {index === current && (
                <AnimatedWrapper
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <TextContainer>
                    <TitleTest>{testimonial.title}</TitleTest>
                    <Subtitle>{testimonial.subtitle}</Subtitle>
                    <DescContainer>
                      <Description>{testimonial.description}</Description>
                    </DescContainer>
                  </TextContainer>
                  <ImageContainer>
                    <Circle>
                      <Image src={imageMap[testimonial.imageKey]} alt={testimonial.title} />
                    </Circle>
                  </ImageContainer>
                </AnimatedWrapper>
              )}
            </Wrapp>
          ))}
          <Button style={{ left: '50%' }} onClick={nextSlide}>&#9660;</Button>
        </Wrapper>
      </Container>
    </AnimateSection>
  );
}

export default Testimonials;
