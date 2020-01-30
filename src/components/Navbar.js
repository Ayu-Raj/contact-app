import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            
            <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
            <div class="container-fluid"><button class="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button"><i class="fas fa-bars"></i></button>
                <a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                    <div class="sidebar-brand-icon rotate-n-15"><i class="fas fa-laugh-wink"></i></div>
                    <div class="sidebar-brand-text mx-3"><span>Messaging App</span></div>
                    </a><Link to={"/"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <a class="btn btn-primary active btn-icon-split" role="button"><span class="text-white-50 icon"><i class="fas fa-envelope"></i></span><span class="text-white text">Send OTP</span></a>
                </Link>
                <Link to={"/history"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <a class="btn btn-primary btn-icon-split" role="button"><span class="text-white-50 icon"><i class="fas fa-history"></i></span><span class="text-white text">History</span></a>
                </Link>
                </div>
        </nav>
        

        );
    }
}
