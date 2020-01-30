import React, { Component } from 'react'
import ContactData from '../data/contacts.json'
import {Link} from 'react-router-dom'

class Contact extends Component {
   
  
    render() {
        return (
            <div className="container-fluid">
                <h3 class="text-dark mb-4">Send OTP</h3>
                    <div className="card shadow">
                        <div className="card-header py-3">
                            <p className="text-primary m-0 font-weight-bold">Contacts</p>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 text-nowrap">
                                    <div id="dataTable_length" className="dataTables_length" aria-controls="dataTable"><label>Show&nbsp;<select className="form-control form-control-sm custom-select custom-select-sm"><option value="10" selected="">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select>&nbsp;</label></div>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-md-right dataTables_filter" id="dataTable_filter"><label><input type="search" className="form-control form-control-sm" aria-controls="dataTable" placeholder="Search"/></label></div>
                                </div>
                            </div>
                            <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                <table className="table dataTable my-0" id="dataTable">
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Proceed</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ContactData.map((contactDetail, index)=>{
                                            return(
                                            
                                            <tr>
                                                
                                                <td>{contactDetail.first_name} </td>
                                                <td>{contactDetail.last_name}</td>
                                                <td><Link to={"/info?q="+contactDetail.id} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                                    <a class="btn btn-success btn-circle ml-1" role="button"><i class="fas fa-check text-white"></i></a></Link></td>
                                               
                                            </tr>
                                            ) 
                                        })
                                        }
                                        
                                        
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td><strong>Name</strong></td>
                                            <td><strong>Last Name</strong></td>
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
                
        );
    }
}



export default Contact;