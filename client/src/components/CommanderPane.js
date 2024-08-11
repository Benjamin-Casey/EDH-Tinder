import Container from "react-bootstrap/esm/Container";

function GetImage() {
  // TODO: make a call to Scryfall API to get commander image + data
}

function CommanderPane() {
  return (
    <Container>
      <Container className="image-container">
        {/* Use scryfall API to get an image here under a function above. */}

      </Container>
      <Container className="button-container">
        {/* Put buttons here to "swipe left or right" on commanders */}
        
      </Container>
    </Container>
  );
}
export default CommanderPane;