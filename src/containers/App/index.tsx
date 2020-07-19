import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Switch,
} from 'react-router-dom';
import { setStore } from '../../store';
// import { routes } from '../../routes';
// import Bugsnag from '@bugsnag/js';
// import BugsnagPluginReact from '@bugsnag/plugin-react';
// import { renderRoutes } from 'react-router-config';
import { useTransition, animated } from 'react-spring';
import { Navbar } from '../Navbar';
import { AppContainer } from './styles';
import { Home } from '../Home';
import { Browse } from '../Browse';
import { ProductPage } from '../ProductPage';

export const App = (props: any) => {
  const location = useLocation();
  console.log('location:', location);

  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: 'translate(100%, 0)' },
    enter: { opacity: 1, transform: 'translate(0%, 0)' },
    leave: { opacity: 0, transform: 'translate(-50%, 0)' },
  });

  return (
    <Provider store={setStore()}>
      <Router>
        <AppContainer>
          <Navbar />
          {transitions.map(({ item: location, props, key }) => (
            <animated.div key={location.key} style={props}>
              {/* {renderRoutes(routes, props, { location: location })} */}
              <Switch location={location}>
                <Route path="/" exact component={Home} />
                <Route path="/browse" component={Browse} />
                <Route path="/product" component={ProductPage} />
              </Switch>
            </animated.div>
          ))}
        </AppContainer>
      </Router>
    </Provider>
  );
};
