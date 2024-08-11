import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import './Custom.css';

function App() {
  return (
    <Container className="p-3">
      <h1 className="header">EDH Tinder!</h1>

      {/* Create a tab for commanders that have been liked */}



      {/* Create a container for the commander image */}

      <Container className="p-5">
        <h2>Commander:</h2>

        {/* TODO: remove/replace */}
        <div class="card">
          <img src="https://placehold.co/200x400" class="card-img-top"/>

          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

      </Container>

      {/* Create buttons */}
      <Button className="rounded-circle p-4">Like</Button>


    </Container>
  );
}
export default App;