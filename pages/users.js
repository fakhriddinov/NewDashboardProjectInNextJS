import { Table, TableHead, TableRow, TableCell, TableBody, ListItem, ListItemIcon, ListItemText, } from '@material-ui/core';
import React, { useEffect } from 'react'
import Link from "next/link"
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import Header from './Header';
import { setUsers } from "../redux/action"
import { Button, } from '@material-ui/core'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const UsersWrapper = styled.div`
background-image: linear-gradient(to right top, #0a2348, #005575, #098a8f, #73bd9a, #d6eba9);
      .container-fluid{
          
        .container{
             .Table{
                 TableRow{
                     

                     TableCell{

                     }
                 }
             }
            
            background-image: linear-gradient(to right top, #9e9beb, #6c93d8, #3e88bd, #167b9f, #036c80, #006d7a, #006e72, #006f69, #008270, #1e9672, #3ea970, #5fbb6b);
            .tableRowCells{
                p{
                    color:white;
                }
            p:hover{
               
                font-size:15px;
                text-shadow: 3px 3px black;
                
            }
            }
            .TableHead{

            }
        }

      }
`

const Users = () => {
    const users = useSelector(state => state.users);
    console.log(users);
    const dispatch = useDispatch();
    useEffect(() => {
        setUsers(dispatch);
    }, []);
    return (
        <UsersWrapper>
            <Header />
            <div className="container-fluid">
                <h1 className="text-center">Users</h1>
                <div className="container text-center form-control">
                <Link href="/usersReg">
                        <a>
                            <ListItem button>
                                <ListItemIcon>
                                    <FontAwesomeIcon className="text-white " icon={faPlus} />
                                </ListItemIcon>
                                <ListItemText className="text-white" primary="Add Users" />
                            </ListItem>
                        </a>
                    </Link>
                </div>
                <div className="container border shadow mt-3">
                    <Table className="Table shadow">
                        <TableHead className="TableHead border">
                            <TableRow>
                                <TableCell className="TableCell border"><h5 className="text-center text-white fw-bold">Id</h5></TableCell>
                                <TableCell className="TableCell border"><h5 className="text-center text-white fw-bold">Name</h5></TableCell>
                                <TableCell className="TableCell border"><h5 className="text-center text-white fw-bold">Username</h5></TableCell>
                                <TableCell className="TableCell border"><h5 className="text-center text-white fw-bold">E-mail</h5></TableCell>
                                <TableCell className="TableCell border"><h5 className="text-center text-white fw-bold">address</h5></TableCell>
                                <TableCell className="TableCell border"><h5 className="text-center text-white fw-bold">Phone</h5></TableCell>
                                <TableCell className="TableCell border"><h5 className="text-center text-white fw-bold">Website</h5></TableCell>
                                <TableCell className="TableCell border"><h5 className="text-center text-white fw-bold">Company</h5></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((v, i) => {
                                return <TableRow className="tableRowCells border shadow">
                                    <TableCell className="border"><p>{v.id}</p></TableCell>
                                    <TableCell className="border"><p>{v.name}</p></TableCell>
                                    <TableCell className="border"><p>{v.username}</p></TableCell>
                                    <TableCell className="border"><p>{v.email}</p></TableCell>
                                    <TableCell className="border"><p>{v.address.street}</p></TableCell>
                                    <TableCell className="border"><p>{v.phone}</p></TableCell>
                                    <TableCell className="border"><p>{v.website}</p></TableCell>
                                    <TableCell className="border"><p>{v.company.name}</p></TableCell>
                                </TableRow>
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>



        </UsersWrapper>
    )
}

export default Users;

