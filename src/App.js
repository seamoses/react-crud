import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Route exact path='/create' component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={Read} />
        </div>

        <Route path='/update' component={Update} />
      </div>
    </Router>
  );
}

export default App;
/* import './App.css';
import React from 'react';
import { Table,Button } from 'semantic-ui-react'
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


function App() {
  const setData = (data) => {
    console.log(data);
  }
  
  return (
    
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Route exact path='/create' component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={Read} />
        </div>
        <div>
    
        <Link to='/update'>
    <Table.Cell> 
    <Button onClick={() => setData()}>Update</Button>
     </Table.Cell>
    
      </Link>
        </div>  
     
      
      
      <Route path='/update' component={Update} />
        
      

   
        
      </div>
      
    </Router>
  );
}


export default App; */