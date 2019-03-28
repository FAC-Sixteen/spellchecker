# Spellchecker
This repo contains our team project for Week 4 of Founders and Coders - Spellchecker!

Spellchecker is a website that lets ~~users~~ Hogwarts students quickly search a large list of ~~words~~ spells, receiving autocomplete suggestions while they type.

**Elevator Pitch:**

"OWLs around the corner? Mislaid your Remembrall? Flourish and Blotts all sold out of A History Of Magic? Don't worry - Spellchecker has your back. Just don't let Snape see you on your phone during class!"

**Heroku link:** https://w4-spellchecker.herokuapp.com/
**GitHub repo link:** https://github.com/FAC-Sixteen/spellchecker

![snep](https://media.giphy.com/media/iGUTUvreEawwg/giphy.gif)

## User Story
The user needs to be able quickly find and select words from a list of suggestions, as they type.

Their device needs to be able to connect to a remote Node.js server on which the spells database is hosted. Striking a good balance between performance and user experience is a key concern.

## :floppy_disk: How to install the project

1. `git clone git@github.com:FAC-Sixteen/spellchecker`
2. cd into the directory
3. run `npm i` to install node modules
4. `npm test` can be run for the tests (test that handler.js server responses reach the scripts.js DOM functions)
5. open the local index.html file

## :chart_with_upwards_trend: Our process
![](https://github.com/FAC-Sixteen/spellchecker/blob/master/user-journey)
Our User Journey Plan
![](https://github.com/FAC-Sixteen/spellchecker/blob/master/site-architecture)
Our Site Architecture Plan
1. Brainstormed ideas, picked one together
2. Whiteboarded the user journey
3. Drew up the project file structure
4. Set up Node.js server
5. Write handler functions querying user input against dummy spell list
6. Connect handler functions to the server
7. Separate router and server into separate files
8. Add keyboard navigation
9. Make responsive and look great
10. Deploy to HEROKU

## :clock6: Stretch goals
- Wand cursor
- Ability for user to POST their own spells to the database
- A sparkly visual spell effect on spell selection
- Some kind of custom event for choosing an unforgivable curse

----------

## 🏋️‍ What we struggled with  
- Importing images via the server

![](https://media.giphy.com/media/tpwwhv1BLd31e/giphy.gif)

We couldn't understand why the handler function in our handler.js file wouldn't <img> requests to our DOM. We never diagnosed the cause of the problem, but we **magically** solved it by modularizing handler.js into three separate handler functions

**Lesson:** Modular code is often easier to debug than big catch-all functions

- Reaching the 404 error page

![](https://media.giphy.com/media/103t71VKmtY1UY/giphy.gif)

We struggled to catch all the possible 404 requests in our router.js file. Many requests that should have resulted in a 404 were not reaching our beautiful 404 page. This made us sad.

- Keying through spells on the DOM

![](https://media.giphy.com/media/aYzxVt2lMrZXW/giphy.gif)

Adding keyboard navigation to the autocompleted spells list was tricky - but, in the end, doable!

- Favicons



Apparently, most web browsers' default behaviour is to look for your favicon in the **root directory**. Moving it to a subfolder causes all kinds of problems.

![](https://imgflip.com/i/2x6thf)

- HEROKU

![](https://media.giphy.com/media/HpgnRUAhYKYAE/giphy.gif)

------------

## :bulb: What we learned
- How to make fetch requests (a shorter, newer alternative to XMLHttpRequests)
- The difference between the server and the router

![](https://media.giphy.com/media/o9hzIlJ4ijpAs/giphy.gif)
The server

![](https://media.giphy.com/media/103t71VKmtY1UY/giphy.gif)
The router

- Removing dev dependencies before deploying to Heroku saves headaches
- Keeping unrelated things in separate sections makes code easier to debug

![biggie](https://imgflip.com/i/2x6mps)
