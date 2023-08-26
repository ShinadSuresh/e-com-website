import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Body() {
  return (
    <>
      <Card className="bg-dark text-white" style={{ width: "1500px" }}>
        <Card.Img
          src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-hero-image-bg.jpg"
          alt="Hero"
          style={{ maxWidth: "100%", height: "auto" }} // Inline styles for responsiveness
        />

        <Card.ImgOverlay className="d-flex align-items-center justify-content-start">
          <Container>
            <Row>
              <Col md={6} lg={5}>
                <div className="text-left">
                  <Card.Title className="mb-4">
                    <h1>Love the Planet</h1>
                    <h1>We Walk On</h1>
                  </Card.Title>
                  <Card.Text className="mb-4">
                    Bibendum fermentum, aenean donec pretium aliquam blandit
                    tempor imperdiet arcu arcu ut nunc in dictum mauris at ut.
                  </Card.Text>
                  <Link to="/ShopMen" className="mr-3">
                    <Button variant="light" size="lg" className="px-5">
                      Shop Men
                    </Button>
                  </Link>
                  {"  "}
                  <Link to="/ShopWomen">
                    <Button variant="light" size="lg" className="px-5">
                      Shop Women
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default Body;
