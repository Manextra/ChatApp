// import React,{lazy} from 'react'
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// // import { useTheme } from '@mui/material/styles';

// // import Home from './Pages/Home'


// const Home = lazy(() => import("./Pages/Home"));
// const Login = lazy(() => import("./Pages/Login"));
// const Chat = lazy(() => import("./Pages/Chat"));
// const Group = lazy(() => import("./Pages/Group"))
// function App() {
//   return (
//     <Router>
//       {/* <span>I am everywhere u go...</span> */}
//       {/* <ThemeProvider theme={'-apple-system'}/> */}
//       {/* <Theme/> */}

//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/login" element={<Login/>}/>
//         <Route path="/chat/:ChatId" element={<Chat/>}/>
//         <Route path ="/group" element={<Group/>}/>
//       </Routes>
//     </Router>
//   )
// }

// export default App

import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider
import { theme } from '/Users/mansibakshi/Desktop/Lomler/client/src/Components/styles.jsx'; // Adjust the import path as necessary

const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Login"));
const Chat = lazy(() => import("./Pages/Chat"));
const Group = lazy(() => import("./Pages/Group"));

function App() {
 return (
    <ThemeProvider theme={theme}> {
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat/:ChatId" element={<Chat />} />
          <Route path="/group" element={<Group />} />
        </Routes>
      </Router>
}
    </ThemeProvider>
 );
}

export default App;
