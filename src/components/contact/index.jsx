import { useState } from 'react';
import { Container, Button } from '../../styles/GlobalStyles';
import { Formulario, Wrapp, LabelAnimate, InputWrapper, Input, Textarea } from './contactStyle';
import AnimateSection from '../../styles/styleComponents/AnimateSection';

const ContactUs = () => {
  const [formState, setFormState] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    ciudad: "",
    mensaje: "",
  });

  const [focused, setFocused] = useState({
    nombre: false,
    correo: false,
    telefono: false,
    ciudad: false,
    mensaje: false,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormState({ ...formState, [id]: value });
  };

  const handleFocus = (id) => {
    setFocused({ ...focused, [id]: true });
  };

  const handleBlur = (id) => {
    setFocused({ ...focused, [id]: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      console.error("La URL del script no está configurada");
      alert("Hubo un problema con la configuración. Por favor, contacta al administrador.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('nombre', formState.nombre);
      formData.append('correo', formState.correo);
      formData.append('telefono', formState.telefono);
      formData.append('ciudad', formState.ciudad);
      formData.append('mensaje', formState.mensaje);

      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log("Formulario enviado");
        alert("Formulario enviado con éxito");
        setFormState({
          nombre: "",
          correo: "",
          telefono: "",
          ciudad: "",
          mensaje: "",
        });
      } else {
        console.error("Error al enviar el formulario");
        alert("Hubo un problema al enviar el formulario. Por favor, inténtelo de nuevo.");
      }
    } catch (error) {
      console.error("Error al enviar el formulario", error);
      alert("Hubo un problema al enviar el formulario. Por favor, inténtelo de nuevo.");
    }
  };

  return (
    <AnimateSection>
      <Container id="contacto">
        <Formulario onSubmit={handleSubmit}>
          <Wrapp>
            <InputWrapper>
              <LabelAnimate
                htmlFor="nombre"
                isFocused={focused.nombre || formState.nombre}
              >
                Nombre
              </LabelAnimate>
              <Input
                type="text"
                id="nombre"
                value={formState.nombre}
                onChange={handleInputChange}
                onFocus={() => handleFocus("nombre")}
                onBlur={() => handleBlur("nombre")}
                required
              />
            </InputWrapper>

            <InputWrapper>
              <LabelAnimate
                htmlFor="correo"
                isFocused={focused.correo || formState.correo}
              >
                Correo
              </LabelAnimate>
              <Input
                type="email"
                id="correo"
                value={formState.correo}
                onChange={handleInputChange}
                onFocus={() => handleFocus("correo")}
                onBlur={() => handleBlur("correo")}
                required
              />
            </InputWrapper>

            <InputWrapper>
              <LabelAnimate
                htmlFor="telefono"
                isFocused={focused.telefono || formState.telefono}
              >
                Teléfono
              </LabelAnimate>
              <Input
                type="tel"
                id="telefono"
                value={formState.telefono}
                onChange={handleInputChange}
                onFocus={() => handleFocus("telefono")}
                onBlur={() => handleBlur("telefono")}
              />
            </InputWrapper>

            <InputWrapper>
              <LabelAnimate
                htmlFor="ciudad"
                isFocused={focused.ciudad || formState.ciudad}
              >
                Ciudad
              </LabelAnimate>
              <Input
                type="text"
                id="ciudad"
                value={formState.ciudad}
                onChange={handleInputChange}
                onFocus={() => handleFocus("ciudad")}
                onBlur={() => handleBlur("ciudad")}
              />
            </InputWrapper>

            <InputWrapper>
              <LabelAnimate
                htmlFor="mensaje"
                isFocused={focused.mensaje || formState.mensaje}
              >
                Mensaje
              </LabelAnimate>
              <Textarea
                id="mensaje"
                value={formState.mensaje}
                onChange={handleInputChange}
                onFocus={() => handleFocus("mensaje")}
                onBlur={() => handleBlur("mensaje")}
                placeholder="¡Hola! Necesito más información sobre las consultorías que ofrecen para mi empresa."
               required
              />
            </InputWrapper>

            <Button $width='70%' type="submit">Enviar</Button>
          </Wrapp>
        </Formulario>
      </Container>
    </AnimateSection>
  );
};

export default ContactUs;
