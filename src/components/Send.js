import React, { Component } from 'react'
import ContactData from '../data/contacts.json'
import {Link} from 'react-router-dom'
import qs from 'qs'
import { Redirect } from 'react-router-dom'
import Contact from './Contact.js'

export default class Send extends Component {
    
      constructor(props) {
        super(props);
        var RandomNumber = Math.floor(Math.random() * 1000000) + 1 ;
        this.state = {
        NumberHolder : RandomNumber,
        redirect: false,
          message: {
            to: '',
            body: 'Hi. Your OTP is: '+RandomNumber
          },
          history: {
            first_name: '',
            last_name: '',
            otp: RandomNumber
          },
          submitting: false,
          error: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
      }
    
      onSubmit(event) {
        event.preventDefault();
        this.setState({ submitting: true });
        fetch('/api/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state.message)
        })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              this.setState({
                error: false,
                submitting: false,
                message: {
                  to: '',
                  body: ''
                }
                
              });
              fetch('/api/postHistory', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.history)
              }).then(
                this.setState({
                  redirect: true
                })
              )
              
            

            } else {
              this.setState({
                error: true,
                submitting: false,
                message: {
                    to: '',
                    body: 'Error'
                  },
              });
            }
          });
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
      }
    
      onHandleChange(event) {
        const name = event.target.getAttribute('name');
        this.setState({
          message: { ...this.state.message, [name]: event.target.value }
        });
      }
	

    render() {
        return (
            <div class="container-fluid">
                {this.renderRedirect()}
                    <h3 class="text-dark mb-4">Send OTP</h3>
                    <div class="card shadow">
                        <div class="card-header py-3">
                            <p class="text-primary m-0 font-weight-bold"><Link to={"/"} style={{ color: 'inherit', textDecoration: 'inherit'}}>Contacts</Link> &gt; <Link to={"/info"} style={{ color: 'inherit', textDecoration: 'inherit'}}>Contact Info</Link> &gt; &nbsp;Send Message</p>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                            <form onSubmit={this.onSubmit} >
                                <table class="table dataTable my-0" id="dataTable">
                                    <thead>
                                        <tr>
                                            <th>Message</th>
                                            <th>Send&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    
                                        <tr class="flex-grow-1 flex-shrink-1">
                                        {ContactData.map((contactDetail, index)=>{
                                            if(contactDetail.id==qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).q){
                                                this.state.message.to = contactDetail.phone_no;
                                                this.state.history.first_name = contactDetail.first_name;
                                                this.state.history.last_name = contactDetail.last_name;
                                            return(
                                        <input className="phone" name="to" id="to" value={this.state.message.to} onChange={this.onHandleChange}  />
                                            )
                                            }
                                        }
                                        )
                                    }

                                            <td><input name="body" id="body" value={this.state.message.body} onChange={this.onHandleChange} disabled/></td>
                                            
                                            {ContactData.map((contactDetail, index)=>{
                                            if(contactDetail.id==qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).q){
                                            return(
                                            
                                                
                                                
                                                <td><button class="btn btn-success btn-icon-split" role="button" type="submit" disabled={this.state.submitting}><span class="text-white-50 icon"><i class="far fa-envelope"></i></span><span class="text-white text">Send&nbsp;</span></button></td>
                                               
                                            
                                            ) 
                                            }
                                        })
                                        }
                                        
                                        </tr>
                                        
                                    </tbody>
                                    <tfoot>
                                        <tr></tr>
                                    </tfoot>
                                </table>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
