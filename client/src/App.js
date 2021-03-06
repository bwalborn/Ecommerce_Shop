import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import ProductView from './views/ProductView';
import CartView from './views/CartView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import ProfileView from './views/ProfileView';
import ShippingView from './views/ShippingView';
import PaymentView from './views/PaymentView';
import PlaceOrderView from './views/PlaceOrderView';
import OrderView from './views/OrderView';
import UserListView from './views/UserListView';
import ContactUsView from './views/ContactUsView';
import UserEditView from './views/UserEditView';
import ProductListView from './views/ProductListView';
import MessageListView from './views/MessageListView';
import ProductEditView from './views/ProductEditView';
import OrderListView from './views/OrderListView';






const App = () => {
  return (
    <Router>
      <Header />
        <main className='py-3'>
            <Container>
              <Route path='/order/:id' component={OrderView} />
              <Route path='/contactus' component={ContactUsView} />
              <Route path='/shipping' component={ShippingView} />
              <Route path='/payment' component={PaymentView} />
              <Route path='/placeorder' component={PlaceOrderView} />
              <Route path='/login' component={LoginView} />
              <Route path='/register' component={RegisterView} />
              <Route path='/profile' component={ProfileView} />
              <Route path='/product/:id' component={ProductView} />
              <Route path='/admin/product/:id/edit' component={ProductEditView} />
              <Route path='/cart/:id?' component={CartView} />
              <Route path='/admin/userlist' component={UserListView} />
              <Route path='/admin/messagelist' component={MessageListView} />
              <Route path='/admin/user/:id/edit' component={UserEditView} />
              <Route path='/admin/productlist' component={ProductListView} />
              <Route path='/admin/orderlist' component={OrderListView} />
              <Route path='/' component={HomeView} exact />

            </Container>
        </main>
      <Footer />
    </Router>
    
  );
}

export default App;
