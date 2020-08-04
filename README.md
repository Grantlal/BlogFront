# Grant's Blog
Well hello there. This repository is a personal project of mine so that I have a place where I can eventually upload blog posts and discuss fun things like technology and 
snowboarding. For now this is a basic web application built using react that has some blog entries in it. Honestly anyone feel free to open any fun discussions or feature requests so that I have work and somebody I can try to impress. Below are the more important node commands I might need for reference later. Have fun dissecting code!
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### Docker Stuff

Welcome to where I have been having a field day so far. I will list some of the most important commands and their functionality I have found so far. :) Also I installed docker such that I have to run sudo beforehand err'time. Go figure. 

So lets start with building a new image. The following command builds a new image and names it with the tag "grantlal/blog". Also way too many times I forget to add the period at the end. Don't do it that way. 
sudo docker build -t grantlal/blog .

After building an image we'll have to actually allow it to run. The command below will start a new container to run named BloggyFresh mapped to port 3001 from the image we created previously, grantlal/blog.
sudo docker run --name BloggyFresh -p 3001:3000 -it -d grantlal/blog