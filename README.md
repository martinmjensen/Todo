# Todo app

## Check out the todo app here: [Link to demo](https://martinmjensen.github.io/Todo/)

**This a todo app is created with React, Redux and Redux Saga.**

The app uses the following dependencies:
- redux
- redux saga
- react spring
- sass


## Features

### Basic functionality
The todo does the typical todo-functionality; load todos, add todo, toggle completed state and remove todo. This is all done asynchronously using Redux Saga. Saga is a powerful middleware that handle all side-effects and ensures that the action creators stay pure.

### Responsiveness
The app is fully responsive and can be both enjoyed on the mobile as well as on desktop. Styling is done by using sass and each component has its own styling – thereby adhering to reacts component reusability principle.

### Accessibility
Good support for accessibility. All of the app functions are fully accessible through the keyboard, and the accessibility tree is descriptive using semantic tags and aria-labels.

## Ways to improve

Due to limited development time the app has several areas where improvement would be useful. Such areas include:

#### Testing
Tests would help ensuring that the app runs correctly and that none of the functionality is broken when implementing new features / changes. Especially Redux and Saga would practical to have tests for. It would also be practical to test important components like the todo container.

#### Accessibility
Even though the app is quite accessible, not enough time has been spent testing and ensuring accessibility for all uses groups. To do this, I would follow the guidelines given by the Digitaliseringsdirektoratet: https://uu.difi.no/krav-og-regelverk/wcag-20-standarden

#### User experience
Due to time constraints the async functionality and subsequent delays that this entails, the user experience is not optimal. I experimented with doing all the changes in the local store and sending requests to the server in the background. This improved the app speed and user experience greatly but lead to rewriting much of the backend logic for creating new todos etc. This also meant that the app displayed a representation of what was on the server, but not the actual server content.

#### Animation
Another way to improve the experience is animations. Currently the app only has one animation; when the todo items are rendered. Having React Spring as a dependency for just one fade in is a bit overkill, but I thought that I’d definitely add more animations in the future.
