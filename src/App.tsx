
import './App.css'
import {BrowserRouter,Route} from "react-router-dom"
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App() {
  return (
   <BrowserRouter>
      <div className="app-wrapper">
          <Header/>
          <Navbar/>
          <div className="app_wrapper_content">
            <Route path ="/dialogs" render={()=><DialogsContainer />}/>
            <Route path="/profile" render={()=>
            <Profile/>}/>
            <Route path ="/users" render={()=><UsersContainer/>}/>
          </div>
        </div>  
      </BrowserRouter> 
  );
}

export default App;
