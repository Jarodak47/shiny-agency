import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Survey from './components/Survey';
import Header from './components/Header';
import ClientForm from './components/clientForm';
import FreelanceForm from './components/FreelanceForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <Router>
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/survey" element={<Survey />} >
                    <Route path="freelance" element={<ClientForm/>} />
                    <Route path="client" element={<FreelanceForm/>} />
                </Route>

            </Routes>
                  </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();






