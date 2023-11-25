import AllRoute from './Components/AllRoute';
import NavbarTop from './Components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div >
      <NavbarTop/>
      <AllRoute/>
      <ToastContainer />
    </div>
  );
}

export default App;
