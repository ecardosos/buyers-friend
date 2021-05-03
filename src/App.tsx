import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.scss';

import HeaderBar from './components/HeaderBar/HeaderBar';
import Sidebar from './components/Sidebar/Sidebar';
import SaleSection from './components/SaleSection/SaleSection';
import ReportSection from './components/ReportSection/ReportSection';

function App() {
  return (
    <div className="App">
      <Router>        
        <Route exact path="/">
          <Redirect to="/sale"/>
        </Route>
        <HeaderBar/>
        <Sidebar/>
      
        <div className='page-content'>
          <Route exact path="/sale" component={SaleSection} />
          <Route path="/report" component={ReportSection} />
        </div>      
      </Router>
    </div>
  );
}

export default App;
