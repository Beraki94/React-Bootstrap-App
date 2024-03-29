import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = () => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="images/react.jpg" />
        <Card.Body>
            <Card.Title>Front-End React JS</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">SELECT A COURSE</Button>
        </Card.Body>
        </Card> 
    </div>
  )
}

export default ProductCard