import CommanderPane from './components/CommanderPane';

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
        <Tab eventKey="random-commander" title="Random Commander" align="center">
          {/* TODO: import component, - move code for commander etc into a new file*/}
          <CommanderPane />
          {/* <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
          </Card> */}
        </Tab>
        <Tab eventKey="saved-commanders" title="Saved Commanders">
          <h2>Here's tab 2</h2>
        </Tab>
      </Tabs >

      {/* Create a container for the commander image */}



      {/* Create buttons */}
      {/* <Button className="rounded-circle p-4">Like</Button> */}


    </Container >
  );
}
export default App;