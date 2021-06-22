import React from "react";

class Header extends React.Component{

     render(){
          return(
               <header>
                    <div className="link">

                    <button>Link 1 </button>
                    <button>Link 2</button>
                    <button>Link 3 </button>

                    </div>

                    <div className="search">
                         <p>Search:</p>
                         <input></input>
                         <button>Go</button>
                    </div>
               </header>
          )
     }
}

export default Header