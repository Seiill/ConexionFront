
import { Container, Description, Image, Button  } from '../../styles/GlobalStyles'
import {Title } from '../services/servicesStyle'
import { Wrapper, Wrapp, TextContainer, ImageContainer,TitleTest, Subtitle, DescContainer, Circle} from './testimonialsStyle';
import Icon1 from '../../assets/Imagen salterra.jpg'
const Testimonials = () => {
  return (
    <Container>
   <Wrapper>
    <Title>Lo que dicen de nosotros:</Title>
    <Button style={{ left: '50%'}}>&#9650;</Button>
    <Wrapp>
      <TextContainer>
        <TitleTest>Salterra</TitleTest>
        <Subtitle>Yolanda Restrepo Jurado</Subtitle>
        <DescContainer>
          <Description>La asesoría para mi emprendimiento fue excelente. Me ayudaron con la inscripción en la Cámara de Comercio, el SENA y la creación de la marca. Definitivamente volvería a contratarlos.</Description>
        </DescContainer>
      </TextContainer>
      <ImageContainer>
        <Circle><Image src={Icon1}></Image></Circle>
      </ImageContainer>
    </Wrapp>
    <Button style={{ left: '50%'}}>&#9660;</Button>
   </Wrapper>
    </Container>
  )
}

export default Testimonials