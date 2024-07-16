
import { Button, Container, Description, Image, } from "../../styles/GlobalStyles";
import { Wrapper, TextContainer, ImageContainer,  Title } from './heroStyle';
import hero from '../../assets/HeroImage.svg'
import AnimateSection from "../../styles/styleComponents/AnimateSection";
const Hero = () => {
  return (
    <AnimateSection>
    <Container id='Hero'>
      <Wrapper>
        <TextContainer>
          <Title>Estructura tu empresa y escala tu negocio exitosamente</Title>
          <Description fontWeight ='600'fontSize='1.5rem'>Generamos procesos medibles para un crecimiento sostenible.</Description>
          <Button>¡Obtén una Consulta Gratuita Ahora!</Button>
        </TextContainer>
        <ImageContainer>
          <Image src={hero} alt="Imagen ilustrada de una mano sosteniendo unas plantas, que representan el crecimiento de una empresa al recibir las  consultorías de conexión."/>
        </ImageContainer>
      </Wrapper>
    </Container>
    </AnimateSection>
  )
}

export default Hero