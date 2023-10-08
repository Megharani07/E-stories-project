import React from 'react';
import Styles from './Styles.css'

function Header() {
  return (
    <header>
        <div>
        <div className="BlogTopbar_Topbar">
           <a className="BlogTopbar_logo" href="/stories">
             <div>
               <div className="Logo_Edyoda">EDYODA</div>
                 <p className="Logo_Stories">Stories</p>
                </div>
                </a>
                 <ul className="BlogNavigation_Blog">
                    <li className="BlogNavigation_Links">Explore Categories
                    <span className="BlogNavigation_DD">
                    <img 
                    src="https://icons.veryicon.com/png/o/miscellaneous/massager/drop-down-arrow-3.png" alt=" " 
                     width="16px" height="15px"/>
                    </span>
                    </li>
                    </ul>
                    <ul className="BlockNav_rightend">
                      <p className="BlogNavigation_Edyodatext">
                        EdYoda is a learning and knowledge
                        sharing platform for techies
                        </p>
                        <div className="blogNavigation_signupButton">
                           <button className="Button_Button">
                             Go To Main
                            
                            Website
                            </button>
                        </div>
                    </ul>
                </div>
                </div>
        </header>
    
  );
}

export default Header;
