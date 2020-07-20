import React, { FC } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import { setStore } from '../../store';
import { routes } from '../../routes';
// import Bugsnag from '@bugsnag/js';
// import BugsnagPluginReact from '@bugsnag/plugin-react';
// import { renderRoutes } from 'react-router-config';
import { useTransition, animated } from 'react-spring';
import shortid from 'shortid';
import { Navbar } from '../Navbar';
import { AppContainer } from './styles';
import { PageContainer } from '../../components/styles/containers/styles';

export const AppRoute: FC<any> = ({
  component: Page,
  title,
  path,
  publicRoute = false,
}) => {
  const history = useHistory();
  const location = useLocation();

  const transitions = useTransition(location, (location) => location.pathname, {
    initial: { opacity: 0, transform: 'translate3d(0, 0%,0)' },
    from: { opacity: 0, transform: 'translate3d(0, 0%,0' },
    enter: { opacity: 1, transform: 'translate3d(0, 0%,0)' },
    leave: { opacity: 0, transform: 'translate3d(0, 0%,0' },
    config: {
      duration: 300,
    },
  });

  return (
    <Route path={path}>
      {transitions.map(({ item: location, props, key }) => (
        <animated.div key={key} style={props}>
          <PageContainer>
            <Page history={history} title={title} />
          </PageContainer>
        </animated.div>
      ))}
    </Route>
  );
};

export const App = (props: any) => {
  const renderRoutes = () =>
    routes.map((props) => <AppRoute key={shortid.generate()} {...props} />);

  return (
    <Provider store={setStore()}>
      <Router>
        <AppContainer>
          <Navbar />

          <Switch>{renderRoutes()}</Switch>
        </AppContainer>
      </Router>
    </Provider>
  );
};
