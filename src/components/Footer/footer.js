import React from 'react';
import './footer.css';
import {useState} from "react";

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    return (
        <footer className="footer">
            &#169; {year} Yuhan Wang | Poweverd by all the &#9829; from family & friends
        </footer>
    )
}

export default Footer;