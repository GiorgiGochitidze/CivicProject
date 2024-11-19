import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios'; // Import axios

function App() {
  const [isServerReady, setIsServerReady] = useState(false);

  useEffect(() => {
    // Send a POST request to the backend to "activate" or prepare the server using axios
    const activateServer = async () => {
      try {
        const response = await axios.post('https://civicproject.onrender.com/activateServer', {
          // Send empty object or any data if required in the body
          data: {}  
        });
        
        // Check if the server is ready and update the state accordingly
        if (response.status === 200) {
          console.log('Server activated successfully');
          setIsServerReady(true);
        } else {
          console.log('Failed to activate the server');
        }
      } catch (error) {
        console.error('Error activating the server:', error);
      }
    };

    activateServer();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
