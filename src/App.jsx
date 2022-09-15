import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { CircularProgress } from '@mui/material';


const MainDashboard = React.lazy(() => import('./webpages/MainDashboard'));
const Home = React.lazy(() => import('./webpages/Home'));


export default function App() {
  return (
    <BrowserRouter>
        <Suspense fallback={<div style={{position:"absolute",top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}><CircularProgress /></div>}>
        <Routes>

          {/* Home  */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />

          <Route exact path="/dashboard" element={<MainDashboard />} />

          {/* 404 page  */}
          {/* <Route exact path='*' element={<Unknown />} />
          <Route exact path='/404-Not-Found' element={<Unknown />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
