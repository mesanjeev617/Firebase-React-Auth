import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import Dashboard from "./Dashboard"
import Login from "./Login"
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PrivateRoutes from "./PrivateRoutes";



function App() {
  return (
    
      <Container
          className="d-flex align-items-center justify-content-center"
          style={{minHeight: "100vh"}}>
        <div className="w-100" style={{maxWidth: "400px"}}>
          <BrowserRouter>
          <AuthProvider> 
            <Routes>
              <Route exact path="/" element={
                <PrivateRoutes>
                <Dashboard />
              </PrivateRoutes>
            }></Route>

            <Route  path="/update-profile" element={
                <PrivateRoutes>
                <UpdateProfile />
              </PrivateRoutes>
            }>
              </Route>
              <Route path="/signup" element={<Signup/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
            </Routes>
          </AuthProvider>
          </BrowserRouter>
        </div>
    </Container>
   
  
  )}

export default App;
