import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HelloWorld from "./components/HelloWorld/HelloWorld";

const App = () => (
  
  <Router>
    <div className="black">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path = "/helloworld/:id" component={HelloWorld} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
























// import React, { Component } from 'react';

// import Header from 'components/Header/Header';
// import Footer from 'components/Footer/Footer';
// // import ArtivleDiv from '../ArticleDiv/ArtivleDiv';
// // import Logout from '../Logout/Logout';
// // import SignIn from '../SignIn/SignIn';
// // import SignUp from '../SignUp/SignUp';
// // import Dashboard from '../Dashboard/Dashboard';

// const App = ({ children }) => (
//   <>
//     <Header></Header>

//     <main>
//       {children}
//     </main>

//     <Footer />
//   </>
// );

// export default App;
