import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutesContainer from './routes/Routes.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalProvider } from './context/GlobalProvider.jsx';

function App() {
  return (
    <>
      <GlobalProvider>
        <RoutesContainer />
        <ToastContainer />

      </GlobalProvider>
    </>
  );
}

export default App;
