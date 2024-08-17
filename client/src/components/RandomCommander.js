"use client";
import { use, Suspense } from 'react';

import axios from "axios";

import Container from "react-bootstrap/esm/Container";


// TODO: make a call to Scryfall API to get commander image + data
function getRandomCommander() {
  return axios.get('https://api.scryfall.com/cards/random?q=is%3Acommander ').then((response) => response.data);
}

function CommanderPane() {
  return (
    <Container>
      <Container className="image-container">
        {/* Use scryfall API to get an image here under a function above. */}
        <h1>Coammnder ID: </h1>
      </Container>
      <Container className="button-container">
        {/* Put buttons here to "swipe left or right" on commanders */}
        
      </Container>
    </Container>
  );
}
export default CommanderPane;