import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import NotFound from './Components/NotFound';
import TopBar from './Components/TopBar';
import CartScreen from './Screens/CartScreen';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import OrderListScreen from './Screens/OrderListScreen';
import OrderScreen from './Screens/OrderScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import ProductEditScreen from './Screens/ProductEditScreen';
import ProductListScreen from './Screens/ProductListScreen';
import ProductScreen from './Screens/ProductScreen';
import ProfileScreen from './Screens/ProfileScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ShippingScreen from './Screens/ShippingScreen';
import UserEditScreen from './Screens/UserEditScreen';
import UserListScreen from './Screens/UserListScreen';

const App = () => {
    return (
        <Router>
            <TopBar />
            <Header />
            <Container className=' py-4'>
                <Switch>
                    <Route exact path='/' component={HomeScreen} />

                    <Route exact path='/search/:keyword/page/:pageNumber' component={HomeScreen} />

                    <Route exact path='/page/:pageNumber' component={HomeScreen} />

                    <Route path='/search/:keyword' component={HomeScreen} />

                    <Route path='/product/:id' component={ProductScreen} />

                    <Route path='/cart/:id?' component={CartScreen} />

                    <Route path='/Login' component={LoginScreen} />

                    <Route path='/Register' component={RegisterScreen} />

                    <Route path='/Profile' component={ProfileScreen} />

                    <Route path='/Shipping' component={ShippingScreen} />

                    <Route path='/Payments' component={PaymentScreen} />

                    <Route path='/PlaceOrder' component={PlaceOrderScreen} />

                    <Route path='/Order/:id' component={OrderScreen} />

                    <Route path='/admin/UserList' component={UserListScreen} />

                    <Route path='/admin/user/:id/edit' component={UserEditScreen} />

                    <Route exact path='/admin/ProductList' component={ProductListScreen} />

                    <Route exact path='/admin/ProductList/:pageNumber' component={ProductListScreen} />

                    <Route path='/admin/product/:id/edit' component={ProductEditScreen} />

                    <Route path='/admin/OrderList' component={OrderListScreen} />

                    <Route path='*' component={NotFound} />
                    
                </Switch>
            </Container>

            <Footer />
        </Router>
    );
};

export default App;
