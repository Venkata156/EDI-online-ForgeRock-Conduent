import "../src/assets/style/style.css";
import "../src/assets/style/desktop.css";
import "../src/assets/style/bootstrap.min.css";
import "../src/assets/style/login.css";
import "./App.css";
import React from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Main from "./components/Main";
import Home from "./components/Pages/General/Home";
import About from "./components/Pages/About";
import Login from "./components/Pages/General/Login";
import Privacy from "./components/Pages/General/Privacy";
import Contact from "./components/Pages/General/Contact";
import Help from "./components/Pages/General/Help";
import Legal from "./components/Pages/General/Legal";
import SelectPartner from "./components/Pages/SelectPartner";
import SubmitFile from "./components/Pages/SubmitFile";
import ChangePassword from "./components/Pages/ChangePassword";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Dashboard from './components/Dashboard';
import Profile from "./components/Pages/Profile";
import SearchFile from "./components/Pages/ViewFile/SearchFile";
import DashboardPrivacy from "./components/Pages/DashboardPrivacy";
import LoginState from "./Helper/LoginState";
import ViewFile from "./components/Pages/ViewFile/ViewFile";

import SelectTransactionAuth278 from "./components/Pages/SelectTransaction/SelectTransactionAuth278";
import SelectTransactionAck834 from "./components/Pages/SelectTransaction/SelectTransactionAck834";
import SelectTransactionAck820 from "./components/Pages/SelectTransaction/SelectTransactionAck820";
import SelectTransaction837 from "./components/Pages/SelectTransaction/SelectTransaction837";
import SelectTransaction835 from "./components/Pages/SelectTransaction/SelectTransaction835";
import SelectTransaction834 from "./components/Pages/SelectTransaction/SelectTransaction834";
import SelectTransaction820 from "./components/Pages/SelectTransaction/SelectTransaction820";
import SelectTransaction278 from "./components/Pages/SelectTransaction/SelectTransaction278";
import SelectTransaction277 from "./components/Pages/SelectTransaction/SelectTransaction277";
import SelectTransaction276 from "./components/Pages/SelectTransaction/SelectTransaction276";
import SelectTransaction271TPL from "./components/Pages/SelectTransaction/SelectTransaction271TPL";
import SelectTransaction271 from "./components/Pages/SelectTransaction/SelectTransaction271";
import SelectTransaction270TPL from "./components/Pages/SelectTransaction/SelectTransaction270TPL";
import SelectTransaction270 from "./components/Pages/SelectTransaction/SelectTransaction270";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import ViewDashboard from "./components/Pages/ViewDashboard";
import ViewClaimTask from "./components/Pages/ViewFile/ViewClaimTask";
import ViewFileOutbound from "./components/Pages/ViewFile/ViewFileOutbound";
import { userActions } from "./store/actions/userAction";
import SearchExt from "./components/Pages/ViewFile/SearchExt";
import Layout from "./components/common/Layout";
import { useEffect } from "react";

function App() {
  return (
    <Provider store={store}>
      <div id="wrapper">
        <LoginState>
          <BrowserRouter>
            <Layout>
              <Routes>
                  {" "}
                  <Route  exact path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/help" element={<Help />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/viewDashboard" element={<ViewDashboard />} />
                <Route path="/searchFile" element={<SearchFile />} />
                <Route path="/viewfile" element={<ViewFile />} />
                <Route path="/searchExt" element={<SearchExt />} />
                <Route path="/submitNewFile" element={<SubmitFile />} />

                <Route
                  path="/selectTransaction/BenefitEligibility/ListEligibilityRequestFiles270"
                  element={<SelectTransaction270 />}
                />
                <Route
                  path="/selectTransaction/BenefitEligibility/ListEligibilityRequestFiles270TPL"
                  element={<SelectTransaction270TPL />}
                />
                <Route
                  path="/selectTransaction/BenefitEligibility/ListEligibilityResponseFile271"
                  element={<SelectTransaction271 />}
                />
                <Route
                  path="/selectTransaction/BenefitEligibility/ListEligibilityResponseFile271TPL"
                  element={<SelectTransaction271TPL />}
                />
                <Route
                  path="/selectTransaction/Claim/InquiryFiles276"
                  element={<SelectTransaction276 />}
                />
                <Route
                  path="/selectTransaction/Claim/ClaimStatusResponseFiles277"
                  element={<SelectTransaction277 />}
                />
                <Route
                  path="/selectTransaction/Claim/ClaimServiceReferredFiles(278)"
                  element={<SelectTransaction278 />}
                />
                <Route
                  path="/selectTransaction/PremiumPayment/PremiumaymentFiles(820)"
                  element={<SelectTransaction820 />}
                />
                <Route
                  path="/selectTransaction/BenefitEnrollment/ListEnrollment834"
                  element={<SelectTransaction834 />}
                />

                <Route
                  path="/selectTransaction/Claim/AdviceFiles835"
                  element={<SelectTransaction835 />}
                />
                <Route
                  path="/selectTransaction/Claim/SubmittedClaim837"
                  element={<SelectTransaction837 />}
                />
                <Route
                  path="/selectTransaction/PremiumPayment/PremiumPaymentAcknowledgementFilesAck(820)"
                  element={<SelectTransactionAck820 />}
                />
                <Route
                  path="/selectTransaction/BenefitEnrollment/ListOfEnrollmentAck834"
                  element={<SelectTransactionAck834 />}
                />
                <Route
                  path="/selectTransaction/Claim/AuthorizationFilesAuth278"
                  element={<SelectTransactionAuth278 />}
                />
                <Route path="/myProfile" element={<Profile />} />
                <Route path="/changePassword" element={<ChangePassword />} />
                <Route
                  path="/userLoginprivacy"
                  element={<DashboardPrivacy />}
                />
                <Route path="/selectPartner" element={<SelectPartner />} />
                <Route path="/viewClaimTask" element={<ViewClaimTask />} />
                <Route
                  path="/viewFileOutbound"
                  element={<ViewFileOutbound />}
                />
                <Route path="/legal" element={<Legal />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </LoginState>
      </div>
    </Provider>
  );
}

export default App;
