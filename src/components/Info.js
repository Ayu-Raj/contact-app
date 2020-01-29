import React, { Component } from 'react'
import ContactData from '../data/contacts.json'
import {Link} from 'react-router-dom'
import qs from 'qs'

export default class Info extends Component {
    
    render() {
        return (
            <div class="container-fluid">
                    <h3 class="text-dark mb-4">Send OTP</h3>
                    <div class="card shadow">
                        <div class="card-header py-3">
                            <p class="text-primary m-0 font-weight-bold"><Link to={"/"} style={{ color: 'inherit', textDecoration: 'inherit'}}>Contacts</Link> &gt; Contact Info</p>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                <table class="table dataTable my-0" id="dataTable">
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Phone Numbers</th>
                                            <th>Send Message</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                
                                        {ContactData.map((contactDetail, index)=>{
                                            if(contactDetail.id==qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).q){
                                            return(
                                            
                                            <tr class="flex-grow-1 flex-shrink-1">
                                                
                                                <td>{contactDetail.first_name}</td>
                                                <td>{contactDetail.last_name}</td>
                                                <td>{contactDetail.phone_no}</td>
                                                <Link to={"/send?q="+contactDetail.id} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                                <td><a class="btn btn-success btn-icon-split" role="button"><span class="text-white-50 icon"><i class="far fa-envelope"></i></span><span class="text-white text">Send Message</span></a></td>
                                                </Link>
                                            </tr>
                                            ) 
                                            }
                                        })
                                        }
                                           
                                    </tbody>
                                    <tfoot>
                                        <tr></tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

