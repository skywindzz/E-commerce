import React from 'react';
import './App.scss';
import HomePage from './pages/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/Header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

{
  /*exact is a boolean which is true by default, it means that the path has to be exactly the same as the path you give or else it won't render. in here if there is no exact, then when you click on /HATS path both HomePage and HatsPage will be rendered on the same page  */
}

{
  /*
  Switch: the moment a route inside switch tags find a match in the path it does not render anything else besides that route,basically it pick one router out of all the switch child and render
  */
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState = { currentUser: user };
      console.log(user);
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/HATS' component={HatsPage} />
          <Route path='/Shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
