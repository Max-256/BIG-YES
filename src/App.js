
import { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Market from './components/Market';
import Search from './components/Search';
import MyShop from './components/MyShop';
import AddStock from './components/AddStock';
import GoodDetails from './components/GoodDetails';
import Home from './components/Home';
import NotFound from './components/NotFound';
import EditGood from './components/EditGood';
import Login from './components/Login';
import Register from './components/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {

  return (
    <Fragment>
      <Navbar />
      <ToastContainer />
      <main className='container'>

        <Switch>
          <Route path="/market" component={Market}/>
          <Route path="/search" component={Search}/>
          <Route path="/myShop" component={MyShop}/>
          <Route path="/good-details/:id" component={GoodDetails}/>
          <Route path="/addStock" component={AddStock}/>
          <Route path="/editGood/:id" component={EditGood}/>
          <Route path='/notFound' component={NotFound} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/' exact component={Home}/>
          <Redirect to="/notFound"/>
        </Switch>

      </main>
    </Fragment>    
  );
}

export default App;
