
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Header from './Pages/Header/Header';
import AuthProvider from './Pages/context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Details from './Pages/Details/Details';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Footer/Footer';
import Products from './Pages/Products/Products';
import MyOrders from './Pages/MyOrders/MyOrders';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import AddNewProduct from './Pages/AddNewProduct/AddNewProduct';
import Dashboard from './Pages/Dashboard/Dashboard';
import PayNow from './Pages/PayNow/PayNow';
import Reviews from './Pages/Reviews/Reviews';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';
import ManageProducts from './Pages/ManageProducts/ManageProducts';

function App() {
  return (
   <AuthProvider>
   <Router>
     <Header> </Header>
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route path="/home">
         <Home></Home>
       </Route>
       <Route exact path="/Products">
         <Products></Products>
       </Route>
       <Route path="/login">
         <Login></Login>
       </Route>
       <Route path="/register">
         <Register></Register>
       </Route>
       <PrivateRoute path="/myorders">
         <MyOrders></MyOrders>
       </PrivateRoute>
       <PrivateRoute path="/manageallorders">
         <ManageAllOrders></ManageAllOrders>
       </PrivateRoute>
       <PrivateRoute path="/AddNewProduct">
         <AddNewProduct></AddNewProduct>
       </PrivateRoute>
       <PrivateRoute path="/dashboard">
         <Dashboard></Dashboard>
       </PrivateRoute>
       <PrivateRoute path="/paynow">
         <PayNow></PayNow>
       </PrivateRoute>
       <PrivateRoute path="/reviews">
         <Reviews></Reviews>
       </PrivateRoute>
       <PrivateRoute path="/makeadmin">
         <MakeAdmin></MakeAdmin>
       </PrivateRoute>
       <PrivateRoute path="/manageproducts">
         <ManageProducts></ManageProducts>
       </PrivateRoute>
       <PrivateRoute path="/Products/:key">
         <Details></Details>
       </PrivateRoute>
       <Route path="*">
          <PageNotFound></PageNotFound>
        </Route>
     </Switch>
     <Footer></Footer>
   </Router>
 </AuthProvider>
    
  );
}

export default App;
