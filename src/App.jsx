// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './componets/Home';
// import About from './componets/About';
// import Navbar from './componets/Navbar';
import './scss/App.scss'
import Template from './public/template'
import Head from './public/Head'
import Body from './public/Body'


function App() {

  return (
    <div className="App">
      {/* <Template /> */}
       <Head />
       <Body />
      {/* <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
    </Router> */}
    </div>
  )
}

export default App
