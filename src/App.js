import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Home from './pages/Home';
import Header from './pages/Header';
import { BrowserRouter,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import NotFound from './pages/NotFound';
import Movies from './pages/Movies';
import details from './pages/movieDetailes';
import WishList from './pages/WishList';
function App() {
  return (
    <div className="App vh-100 bg-black">
    
          

    <BrowserRouter>
    <Header/>
    <Switch>
    
    <Route component={Home} path="/" exact/>
    <Route component={Login} path="/login" exact/>
    <Route component={WishList} path="/wish" exact/>
    <Route component={Movies} path="/Movies" exact/>
    <Route component={details} path="/Movies/:id" exact/>
    <Route component={NotFound} path="*"/>
    </Switch>
        </BrowserRouter>
    {/* <Login/> */}
    {/* <Forms/> */}
    
    </div>
  );
}

export default App;
