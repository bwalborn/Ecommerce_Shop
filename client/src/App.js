import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import ProductView from './views/ProductView';
import CartView from './views/CartView';



const App = () => {
  return (
    <Router>
      <Header />
        <main className='py-3'>
            <Container>
              <Route path='/' component={HomeView} exact />
              <Route path='/product/:id' component={ProductView} />
              <Route path='/cart/:id?' component={CartView} />

            </Container>
        </main>
      <Footer />
    </Router>
    
  );
}

export default App;
