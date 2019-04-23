import React, { Component } from 'react';
import './App.css';
import Container from './pages/Container'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Container />
         </header>
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css';
// import Login from "./pages/Login"
// import Register from "./pages/Register"
// import Dashboard from "./pages/Dashboard"

// class App extends Component {
//   render() {
//     return (
     
//       <Router>
    
        
     
//           <Route exact path="/login" component={Login} />
//           <Route exact path="/register" component={Register} />
//           <Route exact path="/dashboard" component={Dashboard} />
//           {/*<Route exact path="/post" component={Post} />
//           <Route exact path="/filter" component={Filter} />
//           <Route component={NoMatch} /> */}
        
     
//     </Router>
//     );
    
//   }
// }


// export default App;
