import ProductCatalog from './ProductCatalog/ProductCatalog';
import { Gallery } from './App.styled';
import { limitContext } from 'contexts/limitsContext';
export const App = () => {
  return (
    <Gallery>
      <limitContext.Provider value={9}>
        <ProductCatalog />
      </limitContext.Provider>
    </Gallery>
  );
};
