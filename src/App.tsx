import React from 'react';
import './App.css';
import Application from "./components/Application";
import Skills from "./components/Skills";

function App() {
    return (
        <div className="App">
            <Application/>
            <Skills skills={["HTMl", "CSS", "JS"]}/>
        </div>
    );
}

export default App;
