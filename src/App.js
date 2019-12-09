import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { HostelProvider } from './context';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Hostels from './pages/Hostels';
import HostelInfo from './pages/HostelInfo';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <HostelProvider>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact={true} path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route exact={true} path='/hostels' component={Hostels} />
              <Route path='/hostels/:id' component={HostelInfo} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </HostelProvider>
    </div>
  );
}

export default App;
