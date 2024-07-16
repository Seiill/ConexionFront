
import { Container, Description, Image } from '../../styles/GlobalStyles'
import { Wrapper, ImageContainer, TextContainer, Subtitle, TextWrapp } from './aboutStyle'
import Icon from '../../assets/aboutUs.svg'
import AnimateSection from '../../styles/styleComponents/AnimateSection'


const AboutUs = () => {
  return (
    <AnimateSection>
    <Container id='nosotros'>
      <Wrapper>
        <ImageContainer>
          <Image src={Icon} alt='Imagen ilustrada de personas hablando sobre una empresa de consultoria empresaria dedicada ahacer crecer, los negocios y generar procesos y escalar empresas.'/>
        </ImageContainer>
        <TextContainer>
          <TextWrapp>
          <Subtitle>Nuestra misión</Subtitle>
          <Description>Acompañar a los microempresarios en la  toma de decisiones de valor para su empresa, permitiendo un crecimiento constante y medible a través del tiempo.</Description>
          </TextWrapp>
          <TextWrapp>
          <Subtitle>Nuestra visión</Subtitle>
          <Description>Generar una red de microempresarios que  nos permita medir la sostenibilidad con el apoyo de nuestra asesoría.</Description>
          </TextWrapp>
          <TextWrapp>
          <Subtitle>Somos</Subtitle>
          <Description>Somos una empresa de consultoría empresarial con un equipo interdisciplinario de profesionales creativos y emprendedores. Ayudamos a identificar oportunidades y solucionar dificultades, promoviendo la sostenibilidad empresarial con herramientas de valor y conocimiento. Acompañamos a las empresas en su crecimiento, formando una comunidad con los empresarios.</Description>
          </TextWrapp>
        </TextContainer>
      </Wrapper>
    </Container>
    </AnimateSection>
  )
}

export default AboutUs