import TabButton from "./components/TabButton.jsx";
import {Fragment, useState} from "react";
import { Examples } from "./data.js";
import './App.css';
import { Example } from "./components/Example.jsx"


export default function App(){

    
    return (
        <Fragment>
            <header>
                <h1>React essentail</h1>
                <p>Fundamental react concepts you will need for almost any app you are going  to build</p>
            </header>
            <main>
                <section id="core-concepts">
                <h2>Core Concepts</h2>
                </section>
               <Example/>
                
            </main>
        </Fragment>  
    )
}