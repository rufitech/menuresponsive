import React, {useState} from "react";
import '../css/Navigation.css';
import { FaBars, FaTimes} from 'react-icons/fa';

function Navigation(){
    const [isVisible, setIsVisible] = useState(false);


    const handleVisible = ()  =>{

        setIsVisible(!isVisible);
    };


    return(

        <header className="header-principal">

            <div className="items-header">
                <div className="logo">MENU</div>

                <div className="button-resp">
                    {isVisible ? (
                        <FaTimes className="bars-item" onClick={handleVisible} />
                    ) : (
                        <FaBars className="bars-item" onClick={handleVisible} />
                    )}

                </div>

                <nav className={`options-header ${isVisible ? 'visible' : ''}`}>
                    <ul className="options-list">
                        <li className="options-li"><a href="#" className="options-a">Hola1</a></li>
                        
                        <li className="options-li"><a href="#" className="options-a">Hola2</a></li>
                        
                        <li className="options-li"><a href="#" className="options-a">Hola3</a></li>
                       
                        <li className="options-li"><a href="#" className="options-a">Hola4</a></li>
                    </ul>

                </nav>
            </div>

        </header>
    );
}

export default Navigation;