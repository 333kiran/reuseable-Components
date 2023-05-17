import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/home/Home";
const LazyImages = React.lazy(() => import('./Components/LazyLoadingComponents/Images'))

const App = () => {
return(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/images" element={
          <React.Suspense fallback="Loading...">
           <LazyImages/>
          </React.Suspense>
        }/>
      
    </Routes>
  </BrowserRouter>
)
}
export default App;