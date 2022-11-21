import React, { Component } from 'react'
import User from "./User";
import UserConsumer from "../Context";     //6.ADIM

class Users extends Component {
  render() {
    return (
      <UserConsumer>
        {
          value => {
            const {users} = value;
            return (
              <div>
                {
                  users.map(user => {
                    return (
                      <User
                        key = {user.id}
                        name = {user.name}
                        department = {user.department}
                        salary = {user.salary}
                        Email = {user.Email}
                        Meslek = {user.Meslek}
                        Egitim = {user.Egitim}
                        Is = {user.Is}
                      />
                    )
                  })
                }
              </div>
            )


          }
        }

      </UserConsumer>
    )




   

  }
}
export default Users;













/* 

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import User from "./User";


class User extends Component {
  static defaultProps ={
    name : "Bilgi Yok",
    salary : "Bilgi Yook",
    department : "Bilgi Yoook"
  }
  constructor(props) {
    super(props);

    this.state = {
      isVisible : false
    }
  }
  render() {

    //destructing 
    const {name,department,salary} = this.props;
    const {isVisible} = this.state;
    return (
      <div className = "col-md-8 mb-4">
          <div className = "card">
            <div className = "card-header d-flex justify-content-between">
              <h4 className = "d-inline">{name}</h4>

            
              <i className ="far fa-trash-alt" style = {{cursor : "pointer"}}></i>

            </div>
            {
              isVisible ? <div className="card-body">

              <p className="card-text">Maaş : {salary}</p>
              <p className="card-text">department : {department}</p>

              </div> : null
            }
             
          </div>

        </div>  
    )
  }
}

User.propTypes = {
  name : PropTypes.string.isRequired,
  salary : PropTypes.string.isRequired,
  department : PropTypes.string.isRequired 
}
export default User;
*/