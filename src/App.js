import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import routes from './routes/index';
import { GlobalProvider } from './context/Provider';
import { GeneralEditForm } from './context/generalContext';
import { GenericNotFound } from './containers/generaticNotFound';


function App() {
  
  return (
    <GlobalProvider>
      <GeneralEditForm>
      <Router>
        <Switch>
          {routes.map((route, index) => (<Route
            key={index}
            path={route.path}
            exact render={(props) => <route.component {...props} />}>
          </Route>))}
          <Route component={GenericNotFound} />
        </Switch>
      </Router>
      </GeneralEditForm>
    </GlobalProvider>
  );
}

export default App;
