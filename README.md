# Random Password Generator

Project to create a random password generator using only HTML, CSS and Vanilla JS

**🔗 Live preview:** https://crystaltai.github.io/random-password-generator/

## Built with

### Technologies

- HTML
- CSS
- JS

### Tools

- Visual Studio Code
- Git and GitHub

### Third party code

- [Google Fonts](https://fonts.google.com/)

## Summary

### What I learned

- Practiced utilizing the ASCII chart to identify characters and using String.fromCharCode() to convert the character code to the respective character
- When submitting a form, used event.preventDefault() to disable the default behavior of reloading a page and wiping out the user's option selections and generated password
- Avoid using magic numbers (a number in code that seems arbitrary and has no context or meaning), which was put into practice with the ASCII chart codes; instead of inputing the ASCII numbers directly, created an ascii object with the ASCII ranges

### Project Summary

3/3/22

- Created a random password generator that allows a user to customize the following options:
  - Password Length: # of characters (between 8 - 128)
  - Uppercase Characters: toggle to include/exclude
  - Number Characters: toggle to include/exclude
  - Symbol Characters: toggle to include/exclude
