import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";

function addToLikedCommanders() {
  // TODO
}

function CommanderPane() {
  const [commanderData, setCommanderData] = useState(null); // initialize with null

  // On page load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.scryfall.com/cards/random?q=is%3Acommander');
        setCommanderData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // fetchData();

    console.log("Got commander data:");
    console.log(commanderData);
  }, []);

  return (
    <Container>
      <Container className="image-container p-3">
        {commanderData && ( // Check if data exists before rendering
          <img src={commanderData.image_uris.normal} alt={commanderData.name} /> // Access image URL from response
        )}
      </Container>
      {/* 
          On dislike, just get new commander.
          On like, add to database to display on the new tab page.
      */}
      <Button onClick={getNewCommander} variant="danger">Dislike</Button>{' '}
      <Button onClick={addToLikedCommanders} variant="success">Like</Button>{' '}
    </Container>
  );
}

export default CommanderPane;