
import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Market from './components/Market';
import Search from './components/Search';
import MyShop from './components/MyShop';
import './App.css';

function App() {

  return (
    <Fragment>
      <Navbar />

      <main className='container'>

        <Switch>
          <Route path="/market" component={Market}/>
          <Route path="/search" component={Search}/>
          <Route path="/myShop" component={MyShop}/>
        </Switch>

      </main>
    </Fragment>    
  );
}

export default App;
