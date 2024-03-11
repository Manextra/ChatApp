// cd client
// npm run dev
import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider
import { theme } from '/Users/mansibakshi/Desktop/Lomler/client/src/Components/styles.jsx'; // Adjust the import path as necessary
import ProtectRoute from './Components/auth/ProtectRoute';

const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Login"));
const Chat = lazy(() => import("./Pages/Chat"));
const Group = lazy(() => import("./Pages/Group"));
const Notfound = lazy(() => import("./Pages/Notfound"));

let user = true;
function App() {
 return (
    <ThemeProvider theme={theme}> {
      <Router>
        <Routes>
        <Route path="/" element={<ProtectRoute user={user}><Home /></ProtectRoute>} />
          <Route path="/chat/:ChatId" element={<ProtectRoute user={user}><Chat /></ProtectRoute>} />
          <Route path="/group" element={<ProtectRoute user={user}><Group /></ProtectRoute>} />
          <Route path="/login" element={<ProtectRoute user={!user} redirect="/">
            <Login />
            </ProtectRoute>} />
          
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </Router>
}
    </ThemeProvider>
 );
}

export default App;
