import Layout from "./components/Nav/Layout";
import Home from "./pages/Home/Home";
import {Route, Routes, useLocation} from 'react-router-dom'
import Admin from "./pages/Admin/Admin";
import { useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFlats } from "./slices/flatSlice";
import FlatDetail from "./components/Flats/FlatDetail/FlatDetail";
import Favorite from "./pages/Favorite/Favorite";
import Login from "./pages/Login/Login";
import { fetchBalcony, fetchBathroom, fetchBuild, fetchDecoration, fetchFacade, fetchFloor, fetchResale, fetchRoom } from "./slices/categoriesSlice";
import AddFlat from "./pages/Admin/AddFlat/AddFlat";
import FormForEdit from "./pages/Admin/EditFlat/Edit";
import Consultation from "./pages/Consult/Consultation";
import Applications from "./pages/Admin/Applications/Applications";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AboutUs from "./pages/AboutUs/AboutUs";
import Sighin from "./pages/Login/Sighin";
import Ipoteka from "./pages/Ipoteka/Ipoteka";
import ComparePage from "./pages/Compare/ComparePage";
import { me } from "./slices/userSlice";
import ListFlat from "./pages/Admin/EditFlat/ListFlat";


const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  // console.log(location)
  return children
} 

function App() {
  const dispatch = useDispatch()
 
  useEffect(() => {
    dispatch(fetchFlats())
    dispatch(fetchBalcony())
    dispatch(fetchBathroom())
    dispatch(fetchBuild())
    dispatch(fetchDecoration())
    dispatch(fetchFacade())
    dispatch(fetchFloor())
    dispatch(fetchResale())
    dispatch(fetchRoom())
    // dispatch(me())
  },[])

  return (
    <div className="app">
      <Wrapper>
         <ToastContainer />
      <Routes>
        <Route path='/' element={<Layout/>}>
          
        <Route index element={<Home/>}/>
     
        <Route path='/admin' element={<Admin/>}>
            <Route path='create' element={<AddFlat/>}/>
            <Route path='edit' element={<ListFlat/>}/>
            <Route path='edit/:id' element={<FormForEdit/>}/>
            <Route path='requests' element={<Applications/>}/>
        </Route>
        <Route path='/flat/:id' element={<FlatDetail/>}/>
        <Route path='/favorited' element={<Favorite/>}/>
        <Route path='/consultation' element={<Consultation/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/sighin' element={<Sighin/>}/> */}
        <Route path='/ipoteka' element={<Ipoteka/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/compare-page' element={<ComparePage/>} />
        
        </Route>
      </Routes>
    
      </Wrapper>
    </div>


  );
}

export default App;
