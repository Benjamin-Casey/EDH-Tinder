import RandomCommander from './components/RandomCommander.js';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function App() {
  return (
    <Container className="p-3">
      <h1 className="header">Howdy!</h1>

      {/* Create a tab for commanders that have been liked */}
      <Tabs className="mb-3">
        <Tab eventKey="random-commander" title="Random Commander">
          <RandomCommander />            
        </Tab>
        <Tab eventKey="saved-commanders" title="Saved Commanders">
          <h2>Here's tab 2</h2>
        </Tab>
      </Tabs >
    {/* </Container> */}


  {/* Create a container for the commander image */ }



  {/* Create buttons */ }
  <Button className="rounded-circle p-4">Like</Button>


    </Container >
  );
}
export default App;