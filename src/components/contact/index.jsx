import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../../styles/theme';
import { Container } from '../../styles/GlobalStyles';
const ContactUs = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías manejar la lógica para enviar el formulario
        console.log('Formulario enviado');
    };

    return (
      <Container id="contacto">
        <Formulario onSubmit={handleSubmit}>
          <Wrapp>
            <LabelAnimate htmlFor="nombre">Nombre</LabelAnimate>
            <Input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
            />

            <LabelAnimate htmlFor="correo">Correo</LabelAnimate>
            <Input
                type="email"
                id="correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
            />

            <LabelAnimate htmlFor="telefono">Teléfono</LabelAnimate>
            <Input
                type="tel"
                id="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
            />

            <LabelAnimate htmlFor="ciudad">Ciudad</LabelAnimate>
            <Input
                type="text"
                id="ciudad"
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
            />

            <LabelAnimate htmlFor="mensaje">Mensaje</LabelAnimate>
            <Textarea
                id="mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
            />

            <Button type="submit">Enviar</Button>
            </Wrapp>
        </Formulario>
        </Container>
    );
};

const Formulario = styled.form`
    display: flex;
    width: 100%;
    height: 100vh;
background-color: ${theme.colors.blue};
color: ${theme.colors.primary};
 align-items: center;
    justify-content: center;
`;

const LabelAnimate = styled(motion.label)`
    display: block;
    margin-bottom: 5px;
    font-weight: ${theme.fontWeight.medium};
`;

const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
`;

const Textarea = styled.textarea`
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    resize: vertical;
    min-height: 150px;
`;
const Wrapp = styled.div`
width: 70%;
    display: flex;
    margin: auto;
    flex-direction: column;
    padding: 2rem;
}
`

const Button = styled.button`
    background-color: ${theme.colors.blue};
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

export default ContactUs;
