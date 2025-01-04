import React from "react";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import AboutPage from "./pages/about";
import PageNotFoundPage from "./pages/pagenotfound";
import NestedRoutingPage from "./pages/nested-routing";
import NestedRouting1 from "./pages/nested-content-1";
import NestedRouting2 from "./pages/nested-content-2";
import NestedRouting3 from "./pages/nested-content-3";
import PrintOutPutPage from "./pages/print-output";
import AccountPage from "./pages/create-account";
import SlarayDetailsPage from "./pages/salary-details";
import VechicalDetails from "./pages/vechical-details";
import ActorsDetails from "./pages/actors-details";
import ProfileDetails from "./pages/profile";
import CondtionalRendering from "./pages/conditional-rendering";
import HappyNewYearForm from "./pages/happy-new-year";
import ApiPage from "./pages/api-page";
import GetPostPage from "./pages/get-post";
import UserDetails from "./pages/userDetails";
import CrudoperationPage from "./pages/crud";

import {BrowserRouter,Routes,Route} from "react-router-dom";

import "./css/style.css";

const ComponentName = ()  => {
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage></HomePage>}></Route>
        <Route path="login" element={<LoginPage></LoginPage>}></Route>
        <Route path="about" element={<AboutPage></AboutPage>}></Route>
        <Route path="newyear" element={<HappyNewYearForm></HappyNewYearForm>}></Route>
        <Route path="apiPage" element={<ApiPage></ApiPage>}></Route>
        <Route path="getPage" element={<GetPostPage></GetPostPage>}></Route>
        <Route path="userdetails" element={<UserDetails></UserDetails>}> </Route>
        <Route path="crudoperation" element={<CrudoperationPage></CrudoperationPage>}> </Route>
         {/* Nested Routing */}
        <Route path="nested" element={<NestedRoutingPage></NestedRoutingPage>}>
        <Route path="content-1" element={<NestedRouting1></NestedRouting1>}></Route>
        <Route path="content-2" element={<NestedRouting2></NestedRouting2>}></Route>
        <Route path="content-3" element={<NestedRouting3></NestedRouting3>}></Route>
        <Route path="content-4" element={<AccountPage></AccountPage>}></Route>
        <Route path="salaryDetails" element={<SlarayDetailsPage></SlarayDetailsPage>}></Route>
        <Route path="vechicalDetails" element={<VechicalDetails></VechicalDetails>}></Route>
        <Route path="actorDetails" element={<ActorsDetails></ActorsDetails>}></Route>
        <Route path="profileDetails" element={<ProfileDetails></ProfileDetails>}></Route>
        <Route path="condtionalrendering" element={<CondtionalRendering></CondtionalRendering>}></Route>
        </Route>

        <Route path="print" element={<PrintOutPutPage></PrintOutPutPage>}></Route>

        <Route path="*" element={<PageNotFoundPage></PageNotFoundPage>}></Route>
        
      </Routes>
      </BrowserRouter>
    </div>
   
  )
}

export default ComponentName;