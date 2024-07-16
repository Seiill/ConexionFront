
import { Wrapper, Subtitle, Wrapp, TextContainer, TextBox, Underline} from './twoSectionStyle'
import { Button, Container, Description, Image } from '../../styles/GlobalStyles'
import consultoria from '../../assets/ConsultoriaSection.svg'
import { dataConsult } from '../../util/data'
import AnimateSection from '../../styles/styleComponents/AnimateSection'
const Consultoria = () => {
  return (
    <AnimateSection>
    <Container>
      <Wrapper>
        <Wrapp>
        <Description  color='#e54525' fontWeight ='600'fontSize='1.5rem'>¿Entra dinero, pero no se ve? ¿No sabes en qué se gasta o adónde se va?</Description>
        <Subtitle>Nuestra consultoría en dirección de empresas puede llevar tu PYME al siguiente nivel</Subtitle>
        <Button $hColor = '#05142B'$bgColor='#0F2A55'>Organiza y escala tu Empresa hoy!</Button>
        </Wrapp>
        <Wrapp>
        <Image src={consultoria}></Image>
        </Wrapp>
      </Wrapper>
      <Wrapper>
        <TextContainer>
          {dataConsult.map((item) =>(
            <TextBox key={item.id}>
            <Description >{item.desc}</Description>
            <Underline></Underline>
            </TextBox>
          ))}
        </TextContainer>
      </Wrapper>
      
    </Container>
    </AnimateSection>
  )
}

export default Consultoria