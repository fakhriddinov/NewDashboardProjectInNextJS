import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import Header from './Header'
const AddUsersWrapper = styled.div`
       .container{
           .regSection{
               width:600px;
               height:100vh;
               margin:0 auto;
            .inputName{
              
            }
          }
       }
`
const usersReg = () => {
    return (
        <AddUsersWrapper>
            <div>
                <Header />
                <h2 className="text-center">Add Users</h2>
                <div className="container">
                    <div className="regSection border ">
                    <input type="text" className="form-control mt-3 inputs" />
                    <input type="text" className="form-control mt-3 inputs" />
                    <input type="text" className="form-control mt-3 inputs" />
                    <input type="text" className="form-control mt-3 inputs" />
                    </div>
                </div>
            </div>
        </AddUsersWrapper>
    )
}

export default usersReg
