## Changing resource queries

- Change database slug as per opendatasoft on parent page
  File: CityTemplate.js
  44: const getCategories = useCallback(() => {
  45: const retrievedInfo = getData("resource-data-test", resourceQuery).then(
  46: (res) => res.records
  47: );

- Change resource query if you want to group entries by something other than measurement. Keep the alias as measurement
  File: CityTemplate.js
  31: const resourceQuery = `/records?refine=city:${cityname}&limit=20&select=sheet_title as measurement&group_by=sheet_title`;

- Change database slug as per opendatasoft on resource page
  File: Resources.js
  116: const retrievedInfo = Promise.all(
  117: sub.map((query) =>
  118: getData("resource-data-test", query).then((res) => res.records)
  119: )
  120: );

- Change all references to category on resource page & change query to add more columns if needed. Keep category name under alias "measurements" to avoid messing other things up
  File: Resources.js
  104: const getResources = useCallback(() => {
  105: const createSubResourceQuery = (measurement) => {
  106: return `/records?refine=city:${cityname}&limit=10&select=address as address,name as name,url as url,email,phone,description&where=sheet_title="${measurement}"${ 107: searchStringQuery.length > 0 ? "AND '" + searchStringQuery + "'" : "" 108: }`;
  109: };

- Change database slug on SuggestedCities pages
  File: SuggestedCities.js
  71: const retrievedInfo = Promise.all(
  72: queries.map((query) =>
  73: getData("resource-data-test", query).then((res) => res.records)
  74: )
  75: );

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Atrribution links
