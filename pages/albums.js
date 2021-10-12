import {
    Button, CardActionArea, CardContent,
    CardMedia, Typography, Card, CardActions
} from '@material-ui/core';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import { setAlbums } from '../redux/action';
import Header from './Header';

const albumsWrapper = styled.div`
.AlbumsBody{
    background-color:red;
    header{
        position:sticky;
            flex:1;
              top:0;  
              z-index:1000;
              background-image: linear-gradient(to right top, #ccd1d8, #b9c8df, #a7bfe6, #95b5ec, #84abf2);
              
    }

       .albumsContainer{
           .container{
        
             .card{
                   height:100px;
                   background-image: linear-gradient(to right top, #a6c8f8, #a9c6f6, #acc3f4, #aec1f2, #b1bff0) !important;
                   
                   .cardBox{
                       width:30px;
                       height:30px;
                       background-color:grey;
                       border-radius:30px;
                       justify-content:center;
                       
                   }
               }
           }
       }  
    } 
`

const Albums = () => {
    const albums = useSelector(state => state.albums);
    console.log(albums);

    const dispatch = useDispatch();

    useEffect(() => {
        setAlbums(dispatch);
    }, [])

    return (
        <div className="AlbumsBody">
            <Header className="headerAlbums"/>
            <div className="albumsContainer container">
                <h2 className="text-center">Albums</h2>
                <div className="mt-5 container row  ">
                    {
                        albums.map((v, i) => {
                            return <div className="card col-sm-10 col-md-6 col-lg-4 shadow border mt-5  text-dark ">
                                <div className="cardBox">
                                    <h2 className="text-center">{i + 1}</h2>
                                </div>
                                <div className="card-body text-center">
                                    <p>{v.title}</p>
                                </div>
                                <div className="card-footer text-center bg-info">
                                    <Button className="text-center border bg-light text-dark shadow">Read more </Button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Albums;
