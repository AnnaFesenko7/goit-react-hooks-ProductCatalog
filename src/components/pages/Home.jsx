import ProductCatalog from '../../components/ProductCatalog/ProductCatalog';
import { limitContext } from '../../contexts/limitsContext';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Styled = styled.div`
  padding-top: 60px;
  padding-bottom: 50px;
`;
const Home = () => {
  return (
    <Container>
      <Styled>
        <limitContext.Provider value={9}>
          <ProductCatalog />
        </limitContext.Provider>
      </Styled>
    </Container>
  );
};
export default Home;
