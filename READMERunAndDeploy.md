# 🤓👆 Running your first development environment:

1. Clone the repository and navigate to it
2. Type `cd Tiny-React-MD3` into the terminal
3. Type `npm install` into the terminal, this will download all required dependencies
4. Type `npm run dev` (or, if you want to expose the website to your local network, use `npm run dev -- --host` instead) into the terminal, this will create a localhost development environment
5. That's it! Get to building and have fun!

# 🔥 Deploying with [Firebase](https://firebase.google.com/)

1. Go to https://firebase.google.com/ and start a Firebase project.
2. Navigate to the Tiny-React-MD3 root folder and type `npm install -g firebase-tools` into the terminal.
3. Type `firebase login` and follow the instructions to log in using the google account that created the Firebase project.
4. Type `firebase init hosting` into the terminal. Select `Use an existing project` and choose the Firebase project from the list.
5. Use `dist` as your public directory
6. Configure the project as a single-page app by typing `y` when prompted.
7. Type `npm run deploy` into the console to build and deploy the app using Firebase.
8. (Optional) Configure "Firebase Storage" inside your Firebase project to host and serve any static assets.
