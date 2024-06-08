// import { QueryClientProvider, QueryClient } from "react-query";
// import About from "./components/About/About";
// import Campus from "./components/Campus/Campus";
// import Hero from "./components/Hero/Hero";
// import Navbar from "./components/Navbar/Navbar";
// import Programs from "./components/Programs/Programs";
// import Testimonials from "./components/Testimonials/Testimonials";
// import Title from "./components/title/Title";
// import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
// import HomePage from "./components/ReactQuery/Home.page";
// import RqSuperHero from "./components/ReactQuery/RqSuperHero.page";
// import SuperHeroes from "./components/ReactQuery/SuperHeroes.page";
// import { ReactQueryDevtools } from "react-query/devtools";
// import { useState } from "react";
// import { ModalDialog } from "./components/ModalDialog";

// const queryCLient = new QueryClient();

// function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <QueryClientProvider client={queryCLient}>
//       <div>
//         <div className="container">
//           <BrowserRouter>
//             <ul>
//               <li>
//                 <Link to={"/"}>Home</Link>
//               </li>
//               <li>
//                 <Link to={"/rq-super-hero"}>RQ super Hero</Link>
//               </li>
//               <li>
//                 <Link to={"/super-hero"}>Traditional Super hero</Link>
//               </li>
//             </ul>
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/rq-super-hero" element={<RqSuperHero />} />
//               <Route path="/super-hero" element={<SuperHeroes />} />
//             </Routes>
//           </BrowserRouter>
//           {/* <Navbar />
//         <Hero />
//         <Title subtitle="Our Program" title="what we offer" />
//         <Programs />
//         <About />
//         <Title subtitle="Gallery" title="Campus Photos" />
//         <Campus />
//         <Title subtitle="Testimonials" title="What Students Says" />
//         <Testimonials /> */}
//         </div>
//       </div>
//       <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
//       <button onCLick={() => setIsOpen(true)}>Open Dialog</button>
//       {console.log({ isOpen })}
//       {isOpen ? <ModalDialog onClose={() => setIsOpen(false)} /> : null}
//     </QueryClientProvider>
//   );
// }

// export default App;
// import VerySlowComponent from "./components/VerySlowComponent";
// import BunchOfStuff from "./components/BunchOfStuff";
// import OtherStuffAlsoComplicated from "./components/OtherStuffAlsoComplicated";
// import ClassCounter from "./components/UseState/ClassCounter";
// import HooksCounter from "./components/Hooks/HooksCounter";
// import HooksCounterTwo from "./components/Hooks/HooksCounterTwo";
// import HooksCounterThree from "./components/Hooks/HooksCounterThree";
// import HookCounterFour from "./components/Hooks/HookCounterFour";
// import MuiSelect from "./components/MUI/MuiSelect";
// import MuiRadioButton from "./components/MUI/MuiRadioButton";
// import "./App.css";
// import HookCounter from "./components/UseStateHook/HookCounter";
// import HookCOunterUSeState from "./components/UseStateHook/HookCOunterUSeState";
// import UseStateArray from "./components/UseStateHook/UseStateArray";
// import ClassComponent from "./components/UseStateHook/ClassComponent";
// import UseEffectOne from "./components/Hooks/UseEffectOne";
// import ClassMousedown from "./components/Hooks/ClassMouse";
// import UseEffectMouse from "./components/Hooks/useEffectMouse";
// import MouseContainer from "./components/Hooks/MouseContainer";
// import IntervalKooks from "./components/Hooks/IntervalKooks";
// import DataFetching from "./components/DataFetching";
// import ComponentC from "./components/useContext/ComponentC";
import HookCounter from "./Components/HookCounter";
import React from "react";
import "./App.css";
// import HookCounterTwo from "./Components/HookCounterTwo";
// import HookCounterThree from "./Components/HookCounterThree";
// import HookCOunFour from "./Components/HookCOunFour";
// import HookCounterone from "./Components/UseEffects/HookCounterone";
// import HookMouse from "./Components/HookMouse";
// import MouseContainer from "./Components/MouseContainer";
// import CounterByReducer from "./Components/useReducer/CounterByReducer";
// import CounterByReducerTwo from "./Components/useReducer/CounterByReducerTwo";
// import CounterByReducerThree from "./Components/useReducer/CounterByReducerThree";
// import ComponentB from "./Components/ComponentB";
// import ComponentC from "./Components/ComponentC";
// import ComponentA from "./Components/ComponentA";
// import DataFetching from "./Components/DataFetching";
// import DataFetchingTwo from "./Components/DataFetchingTwo";
import UseStateHook from "./Componentstwo/UseStateHook";
import USeStateHook002 from "./Componentstwo/useStateHook002";
import UseStateHook03 from "./Componentstwo/useStateHook003";
import UseState from "./Componentstwo/UseState";
import UseEffect01 from "./Componentstwo/UseEffect01";
import UseEffect02 from "./Componentstwo/useEffect02";
import MouseCounter02 from "./Componentstwo/MouseCounter02";
import MouseContainer from "./Componentstwo/MouseContainer";
// import ParentComponent from "./Components/ParentComponent";
import ParentComponent from "./Components/UseMemo/ParentComponent";
import { useReducer } from "react";
import AllAboutuseEffect from "./Componentstwo/AllAboutuseEffect";
import MouseCounter03 from "./Componentstwo/MouseCounter03";
import FetchData from "./Componentstwo/FetchData";
import FetchData02 from "./Componentstwo/FetchData02";
import ComponentC from "./Componentstwo/ComponentC";
import UseReducer from "./Componentstwo/UseReducer";
import UseReducer02 from "./Componentstwo/UseReducer02";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};

const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="scrollable-block">
      {/* <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated /> */}
      {/* <ClassCounter /> */}
      {/* <HooksCounter /> */}
      {/* <HooksCounterTwo /> */}
      {/* <HooksCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <MuiSelect /> */}
      {/* <MuiRadioButton /> */}
      {/* <HookCounter /> */}
      {/* <HookCOunterUSeState /> */}
      {/* <UseStateArray /> */}
      {/* <ClassComponent /> */}
      {/* <UseEffectOne /> */}
      {/* <ClassMousedown /> */}
      {/* <UseEffectMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalKooks /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value={"Omid"}>
        <ChannelContext.Provider value={"Sargazi"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCOunFour /> */}
      {/* <HookCounterone /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer />
      <CounterByReducer />
      <CounterByReducerTwo />
      <CounterByReducerThree /> */}
      {/* <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <h1>Count in App: {count}</h1>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
      <DataFetching />
      <br />
      <hr />
      <DataFetchingTwo /> */}
      {/* <ParentComponent /> */}
      {/* <ParentComponent /> */}
      {/* <UseStateHook />
      <USeStateHook002 />
      <UseStateHook03 /> */}
      {/* ///////////////////////////////////////////// */}
      {/* <UseState /> */}
      {/* <UseEffect01 />
      <MouseContainer /> */}
      {/* <UseEffect02 />
      <MouseCounter02 /> */}
      {/* <AllAboutuseEffect /> */}
      {/* <MouseCounter03 /> */}
      {/* <FetchData /> */}
      {/* <FetchData02 /> */}
      {/* <ComponentC /> */}
      {/* <UseReducer /> */}
      <UseReducer02 />
    </div>
  );
};
export default App;
