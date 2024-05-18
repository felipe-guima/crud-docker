import React from 'react';
import styled from 'styled-components';
import GlobalStyle from "../../styles/global.js";
import Navbar from '../../components/Navbar';
import Rodape from '../../components/Rodape/index.js';
import Carossel from '../../components/Carossel';

// Estilos para a seção de conteúdo
const Container = styled.div`
  max-width: 800px;
  margin: 60px auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const Sobre = () => {
  return (
    <>
    <Navbar/>
    <Carossel/>
    <Container>
      <Title>Sobre Nós</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue
        semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
      </Paragraph>
      <Paragraph>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.
        Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.
      </Paragraph>
    </Container>
    <GlobalStyle/>
    <Rodape/>
    </>
  );
};

export default Sobre;
