This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Architecture

The code is structured as such

```
api/        // Logic to retrieve the data
components/ // Common components that can be used across pages
types/      // Interfaces and types used across files
```

## Assumptions

The assumptions are as such:

1. API returns a reasonable number of hotels (including the reviews), so pagination is not required

   - Otherwise the endpoint should contain an additional offset parameter

2. For `HotelPage`, it is assumed that there is a separate endpoint to fetch individual hotels. Given that there is only a single endpoint, it simulates this by fetching all hotels and filtering based on the id.

## Testing

Tests are written using Jest and React Testing Library.

## Disclaimers

Personally, I am not familiar with React Testing Library. My current project at work does not have any frontend tests, something that the QAs in the division has pointed out is a problem. There were several reasons for this that I won't delve into. My point is that due to my unfamiliarity and the time constraint, I do not know the best practices to frontend testing, so the tests implemented are not my best work.

I also used ChatGPT to generate boilerplate code for this takehome assignment.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
