import './App.css';
import ScrollToTop from 'Utils/ScrollToTop';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from 'Components/Layout/Header';
import Footer from 'Components/Layout/Footer';
import Homepage from 'Views/Homepage';
import About from 'Views/About';
import Contact from 'Views/Contact';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import React, { useEffect, useRef } from 'react';

function App() {
  // detecting warning banner
  const { enqueueSnackbar } = useSnackbar();
  const banner = useSelector((state) => state.bannerReducer?.banner);
  useEffect(() => {
    if (banner) {
      enqueueSnackbar(banner.string, { variant: banner.type });
    }
  }, [banner, enqueueSnackbar]);

  // to get rid of the useRef warning in strict mode
  const nodeRef = useRef(null);

  return (
    <div className="App">
      <HashRouter basename="/">
        <ScrollToTop />
        <Header />
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              nodeRef={nodeRef}
              key={location.key}
              classNames="fade"
              timeout={500}
            >
              <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
        />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
