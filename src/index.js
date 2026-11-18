import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Results from './pages/Results';
import Freelances from './pages/Freelance';
import Survey from './components/Survey';
import Header from './components/Header';
import { createGlobalStyle } from 'styled-components';
// import ClientForm from './components/Survey/ClientForm';
// import FreelanceForm from './components/Survey/FreelanceForm';
import Error from './components/Error';


const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <Router>
            <GlobalStyle />

        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/results" element={<Results />} />
                <Route path="/freelances" element={<Freelances />} />
                <Route path="/survey/:questionNumber" element={<Survey />} >
                
                    {/* <Route path="freelance" element={<FreelanceForm/>} />
                    <Route path="client" element={<ClientForm/>} /> */}
                </Route>
                <Route path="*" element={<Error />} />


            </Routes>
                  </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();






