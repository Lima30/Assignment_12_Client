import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddService from './Pages/AddServices/AddServices';
// import MyOrder from './Pages/My Order/MyOrder';
// import manageOrder from './Pages/manageOrder/manageOrder';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
// import Expert from './Pages/Home/Expert/Expert';
// import Aminities from './Pages/Amenities/Aminities';
import MyOrder from './Pages/My Order/MyOrder';
// import ManageOrder from './Pages/manageOrder/manageOrder';
import ManageOrder2 from './Pages/ManageOrder2/ManageOrder2';
import AdminDashboard from './Pages/Admin/AdminDashboard/AdminDashboard';
import Explore from './Pages/Explore/Explore';
import Register from './Pages/Login/Register/Register';
import MakeAdmin from './Pages/Admin/MakeAdmin/MakeAdmin';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>


            <Route path="/contact">
              <Contact></Contact>
            </Route>
            {/* <Route path="/amenities">
              <Aminities></Aminities>
            </Route> */}
            <Route path="/explore">
              <Explore></Explore>
            </Route>

            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>

            <AdminRoute path="/addServices">
              <AddService></AddService>
            </AdminRoute>

            <Route exact path="/myOrders">
              <MyOrder></MyOrder>
            </Route>

            <AdminRoute path="/ManageOrder">
              <ManageOrder2></ManageOrder2>
            </AdminRoute>

            <Route path="/adminDashboard">
              <AdminDashboard></AdminDashboard>
            </Route>


            <AdminRoute path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            {/* <Route path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </Route> */}

            <Route path="*">
              <NotFound></NotFound>
            </Route>




          </Switch>
        </Router>
      </AuthProvider>
      <div>
        <Footer></Footer>
      </div>

    </div>
  );
}

export default App;
