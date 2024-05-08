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
import VerySlowComponent from "./components/VerySlowComponent";
import BunchOfStuff from "./components/BunchOfStuff";
import OtherStuffAlsoComplicated from "./components/OtherStuffAlsoComplicated";
import ClassCounter from "./components/UseState/ClassCounter";
import HooksCounter from "./components/Hooks/HooksCounter";
import HooksCounterTwo from "./components/Hooks/HooksCounterTwo";
import HooksCounterThree from "./components/Hooks/HooksCounterThree";
import HookCounterFour from "./components/Hooks/HookCounterFour";
import MuiSelect from "./components/MUI/MuiSelect";
import MuiRadioButton from "./components/MUI/MuiRadioButton";
import "./App.css";
import HookCounter from "./components/UseStateHook/HookCounter";
const App = () => {
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
      <HookCounter />
    </div>
  );
};
export default App;
