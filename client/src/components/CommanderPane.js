import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";


function CommanderPane() {
  const [commanderData, setCommanderData] = useState(null); // initialize with null

  // On page load
  useEffect(() => {
    const initializeCommander = async () => {
      try {
        const response = await axios.get('https://api.scryfall.com/cards/random?q=is%3Acommander');
        setCommanderData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // initializeCommander();
  }, []);

  const newCommander = async () => {
    try {
      const response = await axios.get('https://api.scryfall.com/cards/random?q=is%3Acommander');
      setCommanderData(response.data);
    } catch (error) {
      console.error('Error fetching commander data: ', error);
    }
  }

  // Do nothing for now
  const dislikeCommander = async () => {

    newCommander();
  }

  // Add commander to saved commanders in database
  const likeCommander = async () => {
    // Make post request to back-end with commander data to save
    axios.post('http://localhost:8080/saveCommander', commanderData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });

    newCommander();
  }

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
      <Button onClick={dislikeCommander} variant="danger">Dislike</Button>{' '}
      <Button onClick={likeCommander} variant="success">Like</Button>{' '}
    </Container>
  );
}

export default CommanderPane;