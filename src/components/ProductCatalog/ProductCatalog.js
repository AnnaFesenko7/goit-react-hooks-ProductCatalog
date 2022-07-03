import { useNavigate, useSearchParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner, Alert } from 'react-bootstrap';
import AppPagination from 'components/AppPagination/AppPagination';
import {
  GalleryList,
  Card,
  Thumb,
  Title,
  Description,
  Image,
} from './ProductCatalog.styled';
import { useProducts } from '../../hooks/useProducts';

export default function ProductCatalog() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const activePage = Number(params.get('pageNumber')) || 1;
  const searchQuery = params.get('searchQuery') || null;
  console.log(searchQuery);
  const { products, isLoading, error, pageCount } = useProducts(
    activePage,
    searchQuery
  );

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {isLoading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </div>
    );
  }
  if (error) {
    return (
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <Alert variant="danger">Oop! Something went wrong!</Alert>
      </div>
    );
  }
  return (
    <>
      <GalleryList>
        {products.map(({ thumbnail, title, description, id }) => (
          <Card
            key={id}
            onClick={() => {
              navigate(`/about/${id}`);
            }}
          >
            <Image src={thumbnail} height="200" />
            <Thumb>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </Thumb>
          </Card>
        ))}
      </GalleryList>
      <AppPagination
        pageCount={pageCount}
        activePage={activePage}
        // onPageNavigate={onPageNavigate}
      />
    </>
  );
}
