import React, { Component } from 'react'
import PropTypes from 'prop-types';
import UserConsumer from '../Context';

 class User extends Component {
  state = {
    isVisible : false
  }
  static defaultProps = {
    name : "Bilgi Yok",
    salary : "Bilgi Yook",
    department : "Bilgi Yoook"
  
  }
  onClickEvent = (e) =>{
    this.setState({
      isVisible : !this.state.isVisible
    })
  }
  onDeleteUser = (dispatch,e) => {
    const {id} = this.props;
    //consumer dispatch
    dispatch({type : "DELETE_USER",payload:id});
  }
  /*
  constructor(props) {
    super(props);

    this.state = {
      isVisible : false
    } 
  

  }
  */
 
  render() {
    //destructing

    const {name,department,salary,Email,Meslek,Is,Egitim } = this.props;
    const {isVisible} = this.state;
    return (
      <UserConsumer > 
        {
          value => {
            const {dispatch} = value;
             
    return (
      <div className = "col-md-12 mb-3"onClick = {this.onClickEvent} >
          <div className = "card" style={isVisible ? {backgroundColor : "#112d43",color:"#ffffff"} : null}>
            <div className = "card-header d-flex justify-content-between" >
              <h4 className = "d-inline" onClick = {this.onClickEvent}>{name}</h4>
              <h4 className = "d-inline" onClick = {this.onClickEvent}>{salary}</h4>
              <h4 className = "d-inline" onClick = {this.onClickEvent}>{department}</h4>
              
              <i className="fa fa-arrow-down" aria-hidden="true"onClick = {this.onClickEvent}></i>
              <i onClick = {this.onDeleteUser.bind(this,dispatch)}  style = {{cursor : "pointer"}} ></i>     
            </div>

      </div>
      {
        isVisible ? <div className="card-body">
       
      <p className="card-text"><h5>•Ad  soyad  :</h5>{name} </p>
      <p className="card-text"><h5>•cep numarası    : </h5>{department}</p>
      <p className="card-text"><h5>•E-mail   : </h5>{salary} </p>
      <p className="card-text"><h5>•Eğitim bilgileri (Okul - Dönem ) : </h5>{Egitim}</p>
      <p className="card-text"><h5>•iş tecrübesi (İş yeri - yıl - açıklama ) : </h5>{Is}</p>
      <p className="card-text"><h5>•Mesleki Beceri ve bilgileri  : </h5>{Meslek}</p>


      </div> : null

      }


      



      </div>
    )  


          }
        }

    </UserConsumer>)

   
  } 
}


User.propTypes = {
  name : PropTypes.string.isRequired,
  salary : PropTypes.string.isRequired,
  department : PropTypes.string.isRequired
  //id : PropTypes.number.isRequired
}
export default User;
