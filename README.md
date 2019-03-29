# Spellchecker
This repo contains our team project for Week 4 of Founders and Coders - Spellchecker!

Spellchecker is a website that lets ~~users~~ Hogwarts students quickly search a large list of ~~words~~ spells, receiving autocomplete suggestions while they type.

**Elevator Pitch:**

"OWLs around the corner? Mislaid your Remembrall? Flourish and Blotts sold their last copy of *A History Of Magic*? Don't worry - Spellchecker has your back. Just don't let Snape see you on your phone during class!"

**Heroku link:** https://w4-spellchecker.herokuapp.com/

**GitHub repo link:** https://github.com/FAC-Sixteen/spellchecker

![snep](https://media.giphy.com/media/iGUTUvreEawwg/giphy.gif)

## User Story
The user needs to be able quickly find and select words from a list of suggestions while they type.

Their web browser sends requests to a remote Node.js server which retrieves the spells from a database. Striking a good balance between performance (page load speed) and user experience (real time spell recommendations) is important.

## :floppy_disk: How to install the project

1. `git clone git@github.com:FAC-Sixteen/spellchecker`
2. cd into the directory on your computer
3. run `npm i` to install node modules
4. Run `npm start` to run the website on a nodemon local server on port 8000 (http://localhost:8000)
5. You can do `npm test` to run tests on handler.js

## :chart_with_upwards_trend: Our process

1. Brainstormed ideas, picked one together
2. [Whiteboarded the user journey and project file structure](https://www.figma.com/file/IaKkfSXC5Cuz4LO3t3oCUjZO/Untitled?node-id=0%3A1)
3. Set up Node.js server
4. Write tests for handler functions 
5. Write handler functions querying user input against dummy spell list
6. Connect handler functions to the server
7. Separate router and server into separate files
8. Add keyboard navigation
9. Make responsive and look great

## :clock6: Stretch goals
- Wand cursor
- Ability for user to POST their own spells to the database
- A sparkly visual spell effect on spell selection
- Some kind of custom event for choosing an unforgivable curse

----------

## 🏋️‍ What we struggled with  
### Importing images via the server

![](https://media.giphy.com/media/tpwwhv1BLd31e/giphy.gif)

We couldn't understand why the handler function in our handler.js file wouldn't process <img> requests. We never diagnosed the cause of the problem, but modularizing handler.js into three separate handler functions made it easier to find a workaround.

### Reaching the 404 error page

![](https://img2.thejournal.ie/inline/1781162/original/?width=450&version=1781162)

We struggled to catch all the possible 404 requests in our router.js file. Many requests that should have resulted in a 404 were not reaching our beautiful 404 page. This made us sad (until we fixed it).

### Keying through spells on the DOM

![](https://media.giphy.com/media/aYzxVt2lMrZXW/giphy.gif)

Adding keyboard navigation to the autocompleted spells list was tricky - but, in the end, doable!

### Favicons

![errors](https://i.ibb.co/zGHYYfK/errors.png)

Apparently, most web browsers' default behaviour is to look for your favicon in the **root directory**. Moving it to a subfolder seems to cause problems.

### HEROKU

Heroku deployment was trickier than expected. Our main problem was that there was a conflict with one of our dev dependencies (nodemon) we used for testing caused the Heroku app to crash. Once we spotted the error, we fixed it by removing a line from our package.json.

If we did this project again, we might try deploying a work-in-progress version to Heroku earlier on.

![](https://media.giphy.com/media/FnOaCzlDn0HgA/giphy.gif)

------------

## :bulb: What we learned
### How to make fetch requests (a shorter, newer alternative to XMLHttpRequests)

![](https://media.giphy.com/media/l1KdbHUPe27GQsJH2/giphy.gif)

### The difference between the server, the router and the handler(s)


![](https://media.giphy.com/media/o9hzIlJ4ijpAs/giphy.gif) ![](https://media.giphy.com/media/103t71VKmtY1UY/giphy.gif) ![](https://media.giphy.com/media/5UvS10Ih8f04w/giphy.gif)


### Keeping unrelated things in separate sections makes code easier to debug
![](https://media.giphy.com/media/R55sOeBR22ogg/giphy.gif)

![biggie](https://i.ibb.co/37MBxdt/biggie.png)
