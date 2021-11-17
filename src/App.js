// Utilities
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { Site } from './components/MainComponets';

// Partial components
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

// pages

function App() {
  return (
    <BrowserRouter>
      <Site>
        <Header />
        <Routes />
        <Footer />
      </Site>
    </BrowserRouter>
  );
}

export default App;
