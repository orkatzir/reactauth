import logo from './logo.svg';
import './App.css';
import AuthLogin from './authLogin';
import AuthProfile from './authProfile';
import AuthLogout from './AuthLogout';

function App() {
  return (
   <> 
   <AuthLogin></AuthLogin> 
   <AuthProfile></AuthProfile>
   <AuthLogout></AuthLogout>
   </>
   );
}

export default App;
