# simple-react-router
This is an simple react router which is like [react-router](https://github.com/ReactTraining/react-router)

## How to start
You can clone the repo and build with this commands.

```command
// clone
git clone git@github.com:xwchris/simple-react-router.git

cd simple-react-router

// install
npm install

// build
npm run build
```

Then, you will get `/dist/simple-react-router.js` which can be imported to you project.

## API
Like [react-router](https://github.com/ReactTraining/react-router), but [simple-react-router](https://github.com/xwchris/simple-react-router) only provide three components `BrowserRouter`, `Route` and `history`.

### BrowserRouter
#### mode
the history mode. the value can be `history` or `hash`. default `hash`

```
<BrowserRouter mode="history"></BrowserRouter>
```

### Route
#### path
when the url pathname match the path, it will render the component

#### component
the component to be rendered if matched

#### exact
only match if url pathname equals path. default `false`

```
// Person is and React Component
<Route path="/person/:personId" component={Person}><Route>
```

### Link
#### to
the path you want to navigate

```
<Link to="/">click me<Link>
```

### Usage
Here is a [live example](https://codepen.io/xwchris/pen/PdNyJQ) of simple-react-router
```reactjs
// react home.js

import React from 'react';
import { BrowserRouter, Route, Link } from 'simple-react-router';

const Test = () => <h1>Test Page</h1>;

const Mine = ({ match }) => <h1>Mine Page {match.params.id}</h1>;

const Result = () => <h1>Result Page</h1>;

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter mode="history">
          <ul>
            <li><Link to="/">Test</Link></li>
            <li><Link to="/mine/4">Mine</Link></li>
            <li><Link to="/mine/3">Mine</Link></li>
            <li><Link to="/result">result</Link></li>
          </ul>

          <div style={{ backgroundColor: 'red' }}>
            <Route path='/' component={Test} exact></Route>
            <Route path='/mine/:id' component={Mine}></Route>
            <Route path='/result' component={Result}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Home;
```
