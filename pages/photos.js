import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import { setPhotos } from '../redux/action';
import Header from './Header';



const PhotosWrapper = styled.div`
background-image: linear-gradient(to right top, #dae3f0, #dfe6f2, #e4e9f4, #e9ecf6, #eeeff8);
       .containerFluid{
           .boxRow{
               .card{
                      background-image: linear-gradient(to right top, #cfd8e5, #c7cedc, #bfc5d4, #b7bbcb, #b0b2c2);
                   .cardBox{

                   }
                   .card-body{
                       .card-image{
                           width:200px;
                           height:200px;
                           border-radius:200px;
                       }
                       .card-footer{
                           .card-text{
                               background-image: linear-gradient(to right top, #1c6ce0, #2e5ab6, #324a8d, #2f3a67, #282b43); 
                           }
                       }
                   }
               }
           }
       } 
`
const photos = () => {
    const photos = useSelector(state => state.photos);
    console.log(photos);
    const dispatch = useDispatch()
    useEffect(() => {
        setPhotos(dispatch)
    }, [])

    return (


        <PhotosWrapper>
            <Header />
            <div className="containerFluid">
                <h2 className="text-center mt-5">PHOTOS</h2>
                <div className="boxRow row mt-1">
                    {
                        photos.map((v, i) => <div className="card col-sm-10 col-md-6 col-lg-4 shadow border mt-5  text-dark ">
                            <div className="cardBox">
                                <h2 className="text-center">{i + 1}</h2>
                            </div>
                            <div className="card-body text-center">
                                <img className="card-image" src={v.url} alt="error image" />
                            </div>
                            <div className="card-footer">
                                <p className="card-text text-center ">{v.title}</p>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </PhotosWrapper>



    )
}

export default photos
