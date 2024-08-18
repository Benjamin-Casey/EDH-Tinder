# EDH Tinder

Get random commanders (images taken from scryfall) and accept or decline them.

# Steps:

1. Build front end template:

    > Literally just buttons and another tab for saved commanders

2. See if I can host this on github


## Scrap notes:

- Get images from scryfall:
  - We can make one request every 100ms (10 requests/second) 
    - **NOTE** this is TOTAL, not per user. This means it's better to keep all commanders stored locally.
      - For a test we'll just use the scryfall implementation and MAKE SURE we're limiting requests
  - Create a queue of upcoming commanders for users and keep populating them.
    - Stored locally in memory
- SQLite database tracks commanders that the user has seen or not
  

  # To do:

- Set up database for saved commanders