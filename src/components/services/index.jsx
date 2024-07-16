import { Button, Container,  Description,  Image } from '../../styles/GlobalStyles'
import { Title, Wrapper, ImageWrapp, Subtitle, ServicesGrid, ServicesCard } from './servicesStyle'
import Icon1 from '../../assets/ServicesImage.svg'
import { services } from '../../util/data'
import AnimateSection from '../../styles/styleComponents/AnimateSection'
const Services = () => {
  return (
    <AnimateSection>
    <Container id="servicios">
      <Wrapper>
        <Title>Nuestros servicios empresariales</Title>
        <ImageWrapp>
            <Image src={Icon1} />
        </ImageWrapp>
        <ServicesGrid>
          {services.map((item)=>(
            <ServicesCard key={item.id}>
              <Subtitle>{item.sub}</Subtitle>
              <Description>{item.desc}</Description>
            </ServicesCard>))}
            <ServicesCard style={{justifyContent:'flex-end'}} key="button">
            <Button style={{height: '60%',}}>Organiza y escala tu Empresa hoy!</Button>
          </ServicesCard>
        </ServicesGrid>
      </Wrapper>
    </Container>
    </AnimateSection>
  )
}

export default Services