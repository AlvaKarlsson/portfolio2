# A quiz about the city Kalmar
A simple but fun game for the person who wants to learn some information about the city Kalmar, located in the southern part of Sweden. Directly when the user opens the page, they will have the first question displayed for them to answer. When the button is pressed, they will immediately see if the answer is correct or not within an alert box. When that is dismissed they will be able to continue to the next question. At the end there is a summary that shows how many points they got in total.

![Responsive design](https://user-images.githubusercontent.com/114992573/201468070-0e2a68ff-340b-4dcc-9d58-c5c0876fa5a4.png)

## Features
- Header
  - The header tells the player the name of the game, clear and simple. 

![Header](https://user-images.githubusercontent.com/114992573/201467470-fbebc434-f6fc-4f99-9221-65fb67b99c2c.png)


- The quiz questions
  - Further down the page the player will find the question that is asked and three following alternatives for the question, where one of them is correct and the others not.
  - When the player has decided what answer they want to submit, they press the button "Check Answer" so directly see if they were correct or not. 
  - If it was right, a text that says "It was right!" will appear in green. If it was wrong, the text will say "That was wrong..." in red. After that, the player can press the button "Next question" and question 2 will appear with new alternatives. If no answer is chosen, it will appear a text that says "No choice picked".

![Question](https://user-images.githubusercontent.com/114992573/201467701-48871e39-4920-40f1-9602-ac9edcbcd2d4.png)
![Wrong](https://user-images.githubusercontent.com/114992573/201467726-d503b0cf-989f-4017-8b79-e90addce52b5.png)
![Right](https://user-images.githubusercontent.com/114992573/201467749-838ef402-ba20-4e3d-8872-237ce0e83c5e.png)

- The end of the quiz
  - When all the answers are submitted, the player will have a textbox that shows the total score at the end. They will also have the option to play again if they want to and the game will start over.

![End picture](https://user-images.githubusercontent.com/114992573/201468247-58da2a44-7a23-4cca-8d53-1b54fa0cdb3e.png)

### Features to ad in the future
- I would love to add even more questions in the future so it will be a longer quiz, but with the amount of time we had for the project, I decided to have at least three questions to start with.

## Tests
- The quiz is tested in different browsers: Google Chrome, Mozilla FireFox, Microsoft Edge and on my iPhone.
- The quiz works and shows the correct text for the answers and if none is chosen, it will say that as well to the user.
- The text is easy to read and the site is easy to navigate.
- The site is responsive and works with all different screen sizes.
- The site is checked via DevTools Lighthouse and got good scores as well:

![Lighthouse](https://user-images.githubusercontent.com/114992573/201468572-c6b35c1c-04eb-4473-8ec0-52d229015c6c.png)

### Bugs
- When the site was deployed, the site had some issues to load the background picture for the different screen sizes and found out that the link to the images was written wrong: 
```
background: url("/assets/img/background.jpg");
```
So i changed the link so it was written in the correct way:
```
background: url("../img/background.jpg");
```

### Validator Tests
- HTML
  - No errors were found when the code was checked via the official W3C validator
- CSS
  - No errors were found when the code was checked via the official Jigsaw validator

### Unfixed Bugs
- No bugs that are unfixed

## Deploying the page
- To deploy the web page, I used the GitHub pages. Here is how I deployed the web page:
  - In the GitHub repository on my project page, I clicked the settings menu.
  - To the left in the settings menu, I searched for the section called Pages.
  - There I chose what branch source I wanted to use, and chose main in the dropdown menu.
  - After some minutes I refreshed the page using F5 and the site was deployed.

To come to the page, click [here](https://alvakarlsson.github.io/portfolio2/).

## Credits
### Mentoring
- All the code that's been written is checked by my mentor which I am very grateful of.

### Media
- The picture for the background was taken from my own photo library.
