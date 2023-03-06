// import React from 'react'
// import { Link } from 'react-router-dom'
// export default function LandingPage() {
//     return (
//         <header className= "LandingPage-body" style={ HeaderStyle }>
//             <h1 className="main-title text-center"> SIGN-UP </h1>
//             <p className="main-para text-center">
//                 </p>
//             <div className="buttons text-center">
//                 <Link to="/login">
//                     <button className="primary-button">LOG-IN</button>
//                 </Link>
//                 <Link to="/register">
//                     <button className="primary-button" id="reg_btn"><span>REGISTER</span></button>
//                 </Link>
//             </div>
//         </header>
//     )
// }
// const HeaderStyle = {
//     width: "100%",
//     height: "100vh",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover"
// }

import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
    return (
        <header className= "LandingPage-body" style={ HeaderStyle }>
            <h1 className="main-title text-center" style={ TitleStyle }>WELCOME TO NINJA-MOVIES</h1>
            <p className="main-para text-center" style={ ParagraphStyle }>
                STAY ENTERTAINED WITH US, GET THE LATEST MOVIES HERE!!
            </p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button" style={ LoginButtonStyle }>LOG IN</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn" style={ RegisterButtonStyle }>
                        <span>REGISTER</span>
                    </button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('/images/header-background.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff"
}

const TitleStyle = {
    fontFamily: "Gill Sans Extrabold, sans-serif",
    fontWeight: "100",
    fontSize: "4rem",
    margin: "0 auto",
    marginBottom: "5rem"
}

const ParagraphStyle = {
    fontFamily: "Cursive",
    fontSize: "2.2rem",
    maxWidth: "40rem",
    margin: "0 auto",
    marginBottom: "4rem"
}

const LoginButtonStyle = {
    backgroundColor: "#fff",
    color: "#000",
    border: "none",
    padding: "1rem 2rem",
    marginRight: "1rem",
    borderRadius: "0.5rem",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "700",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)"
}

const RegisterButtonStyle = {
    backgroundColor: "#f62f5e",
    color: "#fff",
    border: "none",
    padding: "1rem 2rem",
    borderRadius: 0

}
