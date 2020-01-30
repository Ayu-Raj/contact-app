import React, { Component } from 'react'
const axios = require('axios');

export default class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    conmponentDidMount(){
        fetch('/api/getHistory',{ headers: { 'crossDomain': true, 'Content-Type': 'application/json' } })
        .then(res=> {
          this.setState({ users: res.data }); //It sets the state asynchronously
        })
      }
    
    render() {
        return (
            <div className="container-fluid">
                    <h3 className="text-dark mb-4">History</h3>
                    <div className="card shadow">
                        <div className="card-header py-3">
        <p className="text-primary m-0 font-weight-bold">Sent History{
           this.state.users.map(user => 
             <tr>
               <td>Username: </td>
               <td>{user.otp}</td>
             </tr>
           )
        }</p>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 text-nowrap">
                                    <div id="dataTable_length" className="dataTables_length" aria-controls="dataTable"><label>Show&nbsp;<select className="form-control form-control-sm custom-select custom-select-sm"><option value="10" selected="">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select>&nbsp;</label></div>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-md-right dataTables_filter" id="dataTable_filter"><label><input type="search" className="form-control form-control-sm" aria-controls="dataTable" placeholder="Search" /></label></div>
                                </div>
                            </div>
                            <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                <table className="table dataTable my-0" id="dataTable">
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Sent Time</th>
                                            <th>OTP Sent</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        <tr className="flex-grow-1 flex-shrink-1">
                                            <td>Ayush</td>
                                            <td>Raj</td>
                                            <td>2020-01-30T07:28:14.959+00:00</td>
                                            <td>3212124</td>
                                        </tr>
                   
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td><strong>Name</strong></td>
                                            <td><strong>Last Name</strong></td>
                                            <td>Sent Time</td>
                                            <td><strong>OTP Sent</strong></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-md-6 align-self-center">
                                    <p id="dataTable_info" className="dataTables_info" role="status" aria-live="polite">Showing 1 to 10 of 27</p>
                                </div>
                                <div className="col-md-6">
                                    <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                                        <ul className="pagination">
                                            <li className="page-item disabled"><a className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}
