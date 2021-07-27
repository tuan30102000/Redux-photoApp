import './App.css';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import PhotoFeatures from './features/photo';
import './assets/style/style.scss'
import Header from './components/Header';

function App() {
  return (
    <div className="photo-app">
      <BrowserRouter>

        {/* <Button onClick={handleButtonClick}>Fetch Product List</Button> */}
        <Header />
        <Switch>
          <Redirect exact from="/" to="/photos" />

          <Route path="/photos" component={PhotoFeatures} />
          {/* <Route path="/sign-in" component={SignIn} /> */}
          {/* <Route component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
