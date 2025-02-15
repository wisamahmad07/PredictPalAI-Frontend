// GA
import ReactGA from "react-ga4";

// utils
import { lazy, Suspense, useState } from "react";

// styles
import ThemeStyles from "@styles/theme";
import "./style.scss";

// libs styles
import "react-toastify/dist/ReactToastify.min.css";
import "react-grid-layout/css/styles.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// fonts
import "@fonts/icomoon/icomoon.woff";

// contexts
import { SidebarProvider } from "@contexts/sidebarContext";
import { ThemeProvider } from "styled-components";

// hooks
import { useThemeProvider } from "@contexts/themeContext";
import { useEffect, useRef } from "react";
import { useWindowSize } from "react-use";
import useAuthRoute from "@hooks/useAuthRoute";
import { useGetUserProfileQuery } from "@api/UserProfle/userProfileApi";

// utils
import { StyleSheetManager } from "styled-components";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { preventDefault } from "@utils/helpers";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

// components
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoadingScreen from "@components/LoadingScreen";
import Sidebar from "@layout/Sidebar";
import BottomNav from "@layout/BottomNav";
import Navbar from "@layout/Navbar";
import ShoppingCart from "@widgets/ShoppingCart";
import ScrollToTop from "@components/ScrollToTop";
import PrivateRoute from "@components/PrivateRoute/PrivateRoute";
import { onAuthStateChanged } from "firebase/auth";
import {
  login,
  logout,
  authCheckComplete,
  profile,
} from "@features/users/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "./firebase/firebase";
import VideoGallery from "@pages/VideoGallery";
import VideoAnalysis from "@pages/VideoAnalysis";
import AttackPlanGenerate from "@pages/AttackPlanGenerate";
import Checkout from "@pages/Checkout";

// pages
const MainPage = lazy(() => import("@pages/MainPage"));
const ClubSummary = lazy(() => import("@pages/ClubSummary"));
const GameSummary = lazy(() => import("@pages/GameSummary"));
const Championships = lazy(() => import("@pages/Championships"));
const LeagueOverview = lazy(() => import("@pages/LeagueOverview"));
const FansCommunity = lazy(() => import("@pages/FansCommunity"));
const Statistics = lazy(() => import("@pages/Statistics"));
const PageNotFound = lazy(() => import("@pages/PageNotFound"));
const MatchSummary = lazy(() => import("@pages/MatchSummary"));
const MatchOverview = lazy(() => import("@pages/MatchOverview"));
const PlayerProfile = lazy(() => import("@pages/PlayerProfile"));
const Schedule = lazy(() => import("@pages/Schedule"));
const Tickets = lazy(() => import("@pages/Tickets"));
const FootballStore = lazy(() => import("@pages/FootballStore"));
const BrandStore = lazy(() => import("@pages/BrandStore"));
const Product = lazy(() => import("@pages/Product"));
const Login = lazy(() => import("@pages/Login"));
const SignUp = lazy(() => import("@pages/SignUp"));
const Settings = lazy(() => import("@pages/Settings"));

const App = () => {
  const appRef = useRef(null);
  const { theme, direction } = useThemeProvider();
  const { width } = useWindowSize();
  const isAuthRoute = useAuthRoute();
  const dispatch = useDispatch();

  const [userId, setUserId] = useState(null);

  const { data: userProfile } = useGetUserProfileQuery(userId);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("onAuthStateChanged", user);
      if (user) {
        dispatch(login(user));
        setUserId(user.uid);
        localStorage.setItem("userToken", user.accessToken);
      } else {
        dispatch(logout());
        localStorage.removeItem("userToken");
      }
      dispatch(authCheckComplete());
    });

    appRef.current && appRef.current.scrollTo(0, 0);
    preventDefault();

    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    if (userProfile) {
      console.log(userProfile);
      dispatch(profile(userProfile.data));
    }
  }, [dispatch, userProfile]);

  const gaKey = process.env.REACT_APP_PUBLIC_GA;
  gaKey && ReactGA.initialize(gaKey);

  const plugins = direction === "rtl" ? [rtlPlugin] : [];

  const muiTheme = createTheme({
    direction: direction,
  });

  const cacheRtl = createCache({
    key: "css-rtl",
    stylisPlugins: plugins,
  });

  useEffect(() => {
    appRef.current && appRef.current.scrollTo(0, 0);

    preventDefault();
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CacheProvider value={cacheRtl}>
        <MuiThemeProvider theme={muiTheme}>
          <SidebarProvider>
            <ThemeProvider theme={{ theme: theme }}>
              <ThemeStyles />
              <ToastContainer
                theme={theme}
                autoClose={2500}
                position={direction === "ltr" ? "top-right" : "top-left"}
              />
              <StyleSheetManager stylisPlugins={plugins}>
                <div
                  className={`app ${isAuthRoute ? "fluid" : ""}`}
                  ref={appRef}
                >
                  <ScrollToTop />
                  {!isAuthRoute && (
                    <>
                      <Sidebar />
                      {width < 768 && <Navbar />}
                      {width < 768 && <BottomNav />}
                    </>
                  )}
                  <div className="app_container">
                    <div className="app_container-content flex flex-col flex-1">
                      <Suspense fallback={<LoadingScreen />}>
                        <Routes>
                          <Route path="*" element={<PageNotFound />} />
                          <Route path="/" element={<MainPage />} />

                          <Route
                            path="/game-summary"
                            element={<GameSummary />}
                          />
                          <Route
                            path="/championships"
                            element={<Championships />}
                          />
                          <Route
                            path="/league-overview"
                            element={<LeagueOverview />}
                          />
                          <Route path="/statistics" element={<Statistics />} />
                          <Route
                            path="/match-summary"
                            element={<MatchSummary />}
                          />
                          <Route
                            path="/match-overview"
                            element={<MatchOverview />}
                          />
                          <Route
                            path="/player-profile"
                            element={<PlayerProfile />}
                          />
                          <Route path="/schedule" element={<Schedule />} />
                          <Route path="/tickets" element={<Tickets />} />
                          <Route
                            path="/shop"
                            element={
                              <PrivateRoute>
                                <FootballStore />
                              </PrivateRoute>
                            }
                          />
                          <Route
                            path="/checkout"
                            element={
                              <PrivateRoute>
                                <Checkout />
                              </PrivateRoute>
                            }
                          />
                          <Route
                            path="/brand-store"
                            element={
                              <PrivateRoute>
                                <BrandStore />
                              </PrivateRoute>
                            }
                          />
                          <Route
                            path="/product/:id"
                            element={
                              <PrivateRoute>
                                <Product />
                              </PrivateRoute>
                            }
                          />
                          <Route path="/login" element={<Login />} />
                          <Route path="/sign-up" element={<SignUp />} />
                          <Route
                            path="/dashboard"
                            element={
                              <PrivateRoute>
                                <ClubSummary />
                              </PrivateRoute>
                            }
                          />
                          <Route
                            path="/video-gallery"
                            element={
                              <PrivateRoute>
                                <VideoGallery />
                              </PrivateRoute>
                            }
                          />
                          <Route
                            path="/video-analysis"
                            element={
                              <PrivateRoute>
                                <VideoAnalysis />
                              </PrivateRoute>
                            }
                          />
                          <Route
                            path="/generate-attack-plans"
                            element={
                              <PrivateRoute>
                                <AttackPlanGenerate />
                              </PrivateRoute>
                            }
                          />
                          <Route
                            path="/settings"
                            element={
                              <PrivateRoute>
                                <Settings />
                              </PrivateRoute>
                            }
                          />
                          <Route
                            path="/community"
                            element={
                              <PrivateRoute>
                                <FansCommunity />
                              </PrivateRoute>
                            }
                          />
                        </Routes>
                      </Suspense>
                    </div>
                  </div>
                  <ShoppingCart isPopup />
                </div>
              </StyleSheetManager>
            </ThemeProvider>
          </SidebarProvider>
        </MuiThemeProvider>
      </CacheProvider>
    </LocalizationProvider>
  );
};

export default App;
