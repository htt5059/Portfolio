import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from 'react-icons/md'
import Spinner from "../components/Spinners.jsx";

const Home = () => {
    
    return (
        <div>
            <h1 className="text-center text-3xl font-bold">Huy Tuan Tran</h1>
            <h2 className="text-center text-2xl font-lightbold">Software Engineer from Viet Nam on Journey Exploring Software Development World</h2>
            <div className="p-4 grid space-between sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className='m-2 border-2 border-sky-500 rounded-xl'>
                    <div className='p-4'>
                        <h1 className="text-center font-bold">Back End Journey</h1>
                        <ul>
                            <li>
                                #Visited: C#, Java, Python/Jython, SQL
                            </li>
                            <li>
                                #Transportation: VS Code, Visual Studio, SQL Server Manager Studio, MongoDB Atlas, Postman
                            </li>
                            <li>
                                #Luggages: Microsoft Graph, RestAPI, Twilio, SignalR, Mocha, Selenium, .NET Framework, .NET CORE, ASP.NET
                            </li>
                            <li>
                                #Tools: Software Architecture, Design Patterns, Software Testing, Software Risk Management, OOP Concepts
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='m-2 border-2 border-sky-500 rounded-xl'>
                    <div className='p-4'>
                        <h1 className="text-center font-bold">Front End Journey</h1>
                        <ul>
                            <li>
                                #Visited: React, HTML, CSS
                            </li>
                            <li>
                                #Transportation: VS Code, WebFlow, Bootstrap, TailwindCSS
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='m-2 border-2 border-sky-500 rounded-xl'>
                    <div className='p-4'>
                        <h1 className="text-center font-bold">Full Stack Journey</h1>
                        <ul>
                            <li>
                                #Visited: MERN
                            </li>
                            <li>
                                #Transportation: VS Code, WebFlow, Bootstrap, TailwindCSS
                            </li>
                            <li>
                                #Off-roads: Ignition Designer, Window Form Apps  
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='m-2 border-2 border-sky-500 rounded-xl'>
                    <div className='p-4'>
                        <h1 className="text-center font-bold">Next Destination</h1>
                        
                        <ul>
                            <li>
                                #Cloud Engineer
                            </li>
                            <li>
                                #Project Manager
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;