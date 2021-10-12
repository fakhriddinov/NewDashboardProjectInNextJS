import { faImage, faSun } from '@fortawesome/free-regular-svg-icons'
import { faBars, faHome, faInbox, faRecordVinyl, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Button, List, ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core'
import React, { Children } from 'react'
import Link from "next/link"
import styled from "styled-components";
import Image from "next/image"
// images 
import home from "../img/home.png"
import users from "../img/users.png"
import albums from "../img/albums.png"
import todos from "../img/todosIcon.png"
import images from "../img/images.png"
import Header from './Header'

const cardInfo = [
    {
        img: home,
        cardTitle: "Home",
        CardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        cardLink: "Go to Page",
        pageLink: "/home",
        marginTop: "card-link",
    },
    {
        img: users,
        cardTitle: "Users",
        CardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        cardLink: "Go to Page",
        pageLink: "/users",
        marginTop: "mt-5 card-link",
    },
    {
        img: todos,
        cardTitle: "Todos",
        CardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        cardLink: "Go to Page",
        pageLink: "/todos",
        marginTop: "card-link",
    },
    {
        img: albums,
        cardTitle: "Albums",
        CardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        cardLink: "Go to Page",
        pageLink: "/albums",
        marginTop: "card-link",
    },
    {
        img: images,
        cardTitle: "Photos",
        CardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        cardLink: "Go to Page",
        pageLink: "/photos",
        marginTop: "card-link",
    },
]



// HomeWrapper Section start __________________________________________________________________________________ 
const padding = "20px"
const ContainerWrapper = styled.div`
      .sidebar{
        width:250px;   
        padding:${padding};
        color:white;
         background-color:#123;
        min-height:500px;
        position:sticky;
        height:100vh;
        top:0;
        
        
        .lists{
            text-decoration:none;
        }

       }
       .rightside{
         flex:1;  
         background-image: linear-gradient(to right bottom, #bdd1ee, #8fb4f4, #6596f8, #4175f7, #2e50f0);                          
         


        header{
            position:sticky;
            flex:1;
              top:0;  
              z-index:1000;
              background-image: linear-gradient(to right top, #ccd1d8, #b9c8df, #a7bfe6, #95b5ec, #84abf2);
              
            
            
            h3{
              color:black;
            }
        }

        .content{
            padding:${padding};
            color:white;
            
                        
            .row{                              
                margin-top:-60px;
                z-index:10;    
                 
                  .card{
                    background-image: linear-gradient(to right top, #4a6183, #436e82, #4f777c, #657f78, #7a857b);
                    border-radius:15px;

                    .card-link{
                        text-decoration:none;
                        
                    }
                    .btnCard1{
                        width:110px;
                    }

                    .btnCard2{
                        width:130px;
                    }
                  }
                    

            }
        }
       }
`
// HomeWrapper Section end __________________________________________________________________________________ 

export default function Home() {
    return (
        <ContainerWrapper className="d-flex">
            <div className="sidebar col-sm-10 col-md-8 col-lg-4">
                <h1>Sidebar</h1>
                <List className="lists">
                    <Link href="/home">
                        <a>
                            <ListItem button>
                                <ListItemIcon>
                                    <FontAwesomeIcon className="text-white" icon={faHome} />
                                </ListItemIcon>
                                <ListItemText className="text-white " primary="Home" />
                            </ListItem>
                        </a>
                    </Link>
                    <Link href="/users">
                        <a>
                            <ListItem button>
                                <ListItemIcon>
                                    <FontAwesomeIcon className="text-white" icon={faUsers} />
                                </ListItemIcon>
                                <ListItemText className="text-white " primary="Users" />
                            </ListItem>
                        </a>
                    </Link>
                    <Link href="/todos">
                        <a>
                            <ListItem button>
                                <ListItemIcon>
                                    <FontAwesomeIcon className="text-white" icon={faInbox} />
                                </ListItemIcon>
                                <ListItemText className="text-white " primary="Todos" />
                            </ListItem>
                        </a>
                    </Link>
                    <Link href="/albums">
                        <a>
                            <ListItem button>
                                <ListItemIcon>
                                    <FontAwesomeIcon className="text-white" icon={faRecordVinyl} />
                                </ListItemIcon>
                                <ListItemText className="text-white " primary="Albums" />
                            </ListItem>
                        </a>
                    </Link>
                    <Link href="/photos">
                        <a>
                            <ListItem button>
                                <ListItemIcon>
                                    <FontAwesomeIcon className="text-white" icon={faImage} />
                                </ListItemIcon>
                                <ListItemText className="text-white " primary="Photos" />
                            </ListItem>
                        </a>
                    </Link>

                </List>
            </div>

            <div className="rightside ">
                <Header />
                {/* content section start  */}
                <div className="content d-flex justify-content-center">
                    <div className="row RowCard ms-2 d-flex  justify-content-center">
                        {
                            cardInfo.map(v => <div class="card col-sm-10 col-md-6 col-lg-4 me-5 mt-5  shadow " style={{ width: "18rem" }}>
                                <Image className="card-img-top" src={v.img} alt="error image" />
                                <div class="card-body">
                                    <h5 class="card-title">{v.cardTitle}</h5>
                                    <p class="card-text">{v.CardText}</p>
                                </div>

                                <div class="card-body d-flex justify-content-center ">
                                    <Link href={v.pageLink}><a class={v.marginTop}><Button className="bg-primary btnCard1 text-white">{v.cardLink}</Button></a></Link>
                                    <Link href={v.pageLink} ><a class={v.marginTop}><Button className="bg-danger btnCard2 text-white">Another Link</Button></a></Link>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>

        </ContainerWrapper>
    )
}






