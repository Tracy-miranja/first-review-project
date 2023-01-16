## How to solve this challenge?

1. Clone this repository.
2. Read the "Challenge description" below in order to understand the challenge as a whole.
3. Visit [Actions](../../actions) page in your repo and check the last workflow.
    - At the beginning you should see 5 tests passing and 36 failing.
    - Please watch the [How to use the auto-grading tests output?](https://www.loom.com/share/09cdd07df00a4a82a6e38759ef0b1751) video.
    - If you cannot see any auto-grading workflows on the  [Actions](../../actions) page, learn how to fix it in [this repo](https://github.com/microverse-students/autograding-troubles-js/blob/main/README.md).
5. Address each requirement one by one:
    - Make required changes to the:
       - [styles.css](./styles.css) file.
       - [index.html](./index.html) file.
    - Open the [index.html](./index.html) in your browser in order to check the result of your changes.
    - Commit your changes after each step.
    - Push your commit to the GitHub repo after each step.
    - Wait for the result of the "GitHub Classroom Workflow" action:
     - After completing each step you should see more tests passing.
     - **Once every requirement is fulfilled - congratulations, you solved this challenge!**


## Challenge description


1. Add `styles.css` as an external style sheet for the `index.html` file.
2. In the `index.html` file:
     - 2.1. Add a header with the name "Adam Smith". That should be the most important header in your document.
     - 2.2 Add a paragraph with bio:
        - Give it an id that equals "bio".
        - Use [Lorem ipsum](https://loremipsum.io/) generator to create a text for this paragraph.
        - Somewhere in the middle of that paragraph add a link to the main Linkedin page [https://www.linkedin](https://www.linkedin.com). 
    - 2.3. Add a header 2 with the text "Education history".
    - 2.4. Add a `div` below the "Education history" header:
        - Give it an id that equals "education".
        - Inside add your own education history as an ordered list.
    - 2.5. Add header 2 with the text "Projects".
    - 2.6. Add a `div` below the "Projects" header:
        - Give it an id that equals "projects".
        - Leave this div empty.
    - 2.7. Add header 2 with the text "Social media".
    - 2.8. Add a `div` below the "Social media" header:
        - Give it an id that equals "social".
        - Inside, add links to the main page of Facebook, Instagram, and Twitter as an unordered list:
           - The first link should lead to [https://www.facebook.com](https://www.facebook.com).
           - The second link should lead to [https://www.instagram.com](https://www.instagram.com).
           - The third link should lead to [https://twitter.com](https://twitter.com).
3. In the `styles.css` file:
    - 3.1. Make sure that all text is in white.
    - 3.2. Make sure that all text is centered.
    - 3.3. You should notice that ordered and unordered lists items look weird. Text is centered but numbers and bullet points are not. In order to fix that, make sure that the unordered list element and ordered list element have the property `display` set to `inline-block`. You can read more about this issue in [this article](https://perishablepress.com/css-center-align-list-left-align-text/).
    - 3.4. Make sure that header 1 uses  `'Domine', serif`  as a font. Note: we already imported this font for you in the first line of the `style.css` file. You can read how to do it in [this article](https://www.freecodecamp.org/news/how-to-use-google-fonts-in-your-next-web-design-project-e1ad48f1adfa/).
    - 3.5. Make sure that each h2:
        - Has top padding equals 40px;
        - Has white 0.5px thick border line only on the top.
    - 3.6. Make sure that all links in the bio paragraph are `aqua` blue.
    - 3.7. Make sure that all social media links are `#ffd540` yellow. In order to do that give them a class called "social-media-links".


### Troubleshooting

If you cannot see any auto-grading workflows on the [Actions](../../actions) page, learn how to fix it in [this repo](https://github.com/microverse-students/autograding-troubles-js/blob/main/README.md).
