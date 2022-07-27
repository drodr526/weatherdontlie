# RealSynch Developer Challenge

As you work on this challenge, keep in mind that the goal is to demonstrate not just your knowledge as a developer, but your ability to write code that is conducive to collaboration with others. You are encouraged to ask any questions that will allow you to better achieve those goals.

# Pre-installed Tech Stack

The following dependencies are already included in this repository. Incorporate as many or few as you find useful. You are also welcome to install any other tools, frameworks, or packages required to complete the challenge.

[Redux Toolkit](https://redux-toolkit.js.org/)

[React](https://reactjs.org/)

[Material UI](https://mui.com/)

[Express](https://expressjs.com/)

[Dotenv](https://www.npmjs.com/package/dotenv)

[ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) Configuration

# Prompt

Start by cloning this repository
```bash
git clone https://github.com/ReWattInc/rs_challenge.git
```
* Run `npm install` in both the root directory and react-ui folder

* `npm run start` executed from the root will start a node server for the backend on localhost:5000

* `npm run start` executed from /react-ui will launch the frontend web process on localhost:3000

The workspace contains boilerplate code for a simple fullstack app. You are tasked with adding the frontend and backend code necessary to allow some basic user interaction with the following APIs:

[balldontlie API](https://www.balldontlie.io/)

[Weather API](https://www.weatherapi.com/)

The completed app should enable the following user flow:

1. The user presses a button to show a list of all NBA basketball teams. The list data should be obtained in realtime from the balldontlie API.
2. The user is allowed to select one of the teams rendered in the previous step
3. Upon selecting a team, the app uses the Weather API to display current weather info for the city where the team is located

⚠️ How you achieve this flow is up to you. See the considerations in the next section, and reach out for clarification on any details that will help to inform your strategy 

⚠️ You will be asked to briefly demo your application and code via screenshare. Please confirm that you are able to run your app locally without issue
# Possible considerations

Below are some factors that may be worth considering as you determine how best to implement a solution

- Organizational structure
- Design patterns that encourage coding best practices
- Modularity
- Scalability
- Process environment and variable handling
- Security
- Readability (both semantic and syntactic)
- Facilitating upkeep and adding / removing of features
- Efficiency and optimization
- Error handling (both user and application)
- User experience (device, browser, loading etc)
