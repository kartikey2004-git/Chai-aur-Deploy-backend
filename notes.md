- Nodejs : open source cross platform Javascript runtime environment

How to create a empty node application ?

- node packager manager se ek app ko intialise krna (npm init) : a utility

- npm init: This command is used to create a new package.json file for a Node.js project.

package.json contains

- Package name
- Version
- Description
- Entry point (index.js by default)
- Test command
- Git repository
- Keywords
- Author
- License

npm init -y
The -y flag (or --yes) automates the process.

It skips the interactive prompts and creates a package.json file with default values

scripts commands helps when deploying on server

Express : web framework for Node.js

- Hot Reloading: React mein jaise hi hum file save krte automatically sab kuch restart krdiya jata backend pe humare liye , toh humein pata hi nhi lgta and code process hoke computer mein jaa chuka h

and phirse se updated code ko lane ke liye phir se processing krni pdti h

Solution : nodemon

Hot Reloading refers to the ability of a development environment or framework to automatically refresh or update the app when code changes, without the need to reload the entire application manually.

It updates only the parts of the application that were modified, allowing developers to see changes immediately while preserving the state of the app.

How Hot Reloading Works?

- Detects changes: Hot reloading detects changes in the source files (e.g., JavaScript, CSS, etc.) as you write or save the code.

- Updates in place: It injects the updated modules into the running application. The app continues running, and only the modified code gets replaced.

- Preserves state: Unlike a full page reload, hot reloading attempts to preserve the current state of the app, which is useful when you don’t want to lose the current form data, user inputs, or other app states.



Hot Reloading vs Live Reloading

Hot Reloading:

- Partial refresh: Updates only the parts of the app that have changed.

- Preserves state: Keeps the app’s state intact while applying changes-

Live Reloading:

- Full refresh: Reloads the entire app when a file changes.

- Loses state: Does not preserve the state of the app during a reload.

:::: Benefits of Hot Reloading ::::

• Faster Development: Immediate feedback without needing to manually refresh the browser or rerun the app.

• Maintains State: Useful when testing UI components or working on complex applications where state management is crucial.

• Improves Productivity: Reduces the downtime between writing code and seeing the results.


Example in React
In React development, when using tools like Webpack, Vite, or Create React App:

If you modify a component’s code, the changes will be automatically reflected in the browser without losing the state of the app (like form inputs or selections).


Use Cases
UI Development: Adjusting UI components, styling, or adding functionality to a form.

Single-Page Applications: Developing apps that have a lot of user interaction where maintaining state is important.


- app constantly listen krti h , server constantly listen krta h for different routes

dotenv package
deploy in production in digital ocean , Azure , AWS , heroku , railway , seenode , render , cyclic.sh

to avoiding crypto mining...