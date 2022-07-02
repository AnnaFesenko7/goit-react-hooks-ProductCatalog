import { useParams } from 'react-router-dom';
import { useDetails } from 'hooks/useDetails';
import { Spinner, Alert } from 'react-bootstrap';

const Details = () => {
  const params = useParams();
  const productId = params.productId;
  const { productDetails, isLoading, error } = useDetails(productId);
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
        <Alert variant="danger">Not found any information</Alert>
      </div>
    );
  }
  const { images, title, description, price, brand, rating } = productDetails;
  return (
    <>
      <h1>{title}</h1>
      <p>Price: {price} $</p>
      <p>Brand: {brand}</p>
      <p>Rating: {Math.ceil(rating * 10)} %</p>
      {images?.map((image, index) => (
        <div key={index}>
          <img src={image} alt="" />
        </div>
      ))}
      <p> {description}</p>
    </>
  );
};
export default Details;
