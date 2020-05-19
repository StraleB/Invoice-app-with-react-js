import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <section className="profileInfo">
                    <img src="https://i.ibb.co/Mpm1X6y/pexels-photo-775358.png" alt="profile-pic"/>
                    <p id="name">John Doe</p>
                    <i className="fas fa-chevron-down"></i>
                </section>

                <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">About</a></li>
                </ul>
            </nav>
        )
    }
}
