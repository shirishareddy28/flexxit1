import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Dashboad from "../features/DashBoard/DashBoard";
import Signin from "../features/Signin/Signin";
import Signup from "../features/Signup/Signup";
import VideoPlayer from "../features/DashBoard/components/VideoPlayer";
import MyList from "../features/MyList/MyList";
import Account from "../features/Accounts/Components/Account";
import { PlanSubscription } from "../features/Accounts/Components/PlanSubscription";
import { Payment } from "../features/Accounts/Components/Payment";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/account" element={<Account />}></Route>
      <Route path="/dashboard" element={<Dashboad />}></Route>
      <Route path="/video" element={<VideoPlayer />} />
      <Route path="/myList" element={<MyList />} />
      <Route path="/plansubscription" element={<PlanSubscription />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
};

export default AppRoutes;
