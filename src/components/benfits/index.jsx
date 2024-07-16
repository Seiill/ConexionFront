import { Container, Description, Image, Button } from '../../styles/GlobalStyles';
import { BenefitsCard, BenefitsFlex, Ul, Li } from './benefitsStyle';
import { Subtitle } from '../services/servicesStyle';
import Icon1 from '../../assets/Benefit1.svg';
import Icon3 from '../../assets/Benefit3.svg';
import Icon4 from '../../assets/Benefit4.svg';
import AnimateSection from '../../styles/styleComponents/AnimateSection';

const Benefits = () => {
  return (
    <AnimateSection>
    <Container>
      <BenefitsFlex className="split-70-30">
        <BenefitsCard className="left center">
          <Image src={Icon1} />
        </BenefitsCard>
        <BenefitsCard className="right">
          <Subtitle>Beneficios que tendrás con nuestra consultoría</Subtitle>
          <Description>
            Nuestras estrategias están diseñadas para impulsar el crecimiento de tu pyme, aumentando la rentabilidad y generando mayores utilidades.
          </Description>
        </BenefitsCard>
      </BenefitsFlex>
      <BenefitsFlex className="split-equal">
        <BenefitsCard className="bottom">
          <Image src={Icon3} />
        </BenefitsCard>
        <BenefitsCard className="bottom">
          <Ul>
            <Li>Acompañamiento personalizado.</Li>
            <Li>Organización y optimización de los procesos de cada área de trabajo.</Li>
            <Li>Medición de la productividad de tu equipo de trabajo.</Li>
            <Li>Mejorar la rentabilidad y las utilidades de tu pyme.</Li>
          </Ul>
          <Button>¡Solicita tu asesoría gratuita ahora!</Button>
        </BenefitsCard>
        <BenefitsCard className="bottom">
          <Image src={Icon4} />
        </BenefitsCard>
      </BenefitsFlex>
    </Container>
    </AnimateSection>
  );
};

export default Benefits;
