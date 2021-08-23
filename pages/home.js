import { faImage, faSun } from '@fortawesome/free-regular-svg-icons'
import { faBars, faHome, faInbox, faRecordVinyl, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Button, Card, CardActionArea, CardActions, CardContent, CardMedia,
    List, ListItem, ListItemIcon, ListItemText, Typography
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

const cardInfo = [
    {
        img: home,
        cardTitle: "Home",
        CardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        cardLink: "Go to Page",
        pageLink:"/home",
    },
    {
        img: users,
        cardTitle: "Users",
        CardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        cardLink: "Go to Page",
        pageLink:"/users",
    },
    {
        img: todos,
        cardTitle: "Todos",
        CardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        cardLink: "Go to Page",
        pageLink:"/todos",
    },
    {
        img: albums,
        cardTitle: "Albums",
        CardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        cardLink: "Go to Page",
        pageLink:"/albums",
    },
    {
        img: images,
        cardTitle: "Photos",
        CardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        cardLink: "Go to Page",
        pageLink:"/photos",
    },
]



// HomeWrapper Section start __________________________________________________________________________________ 
const padding = "20px"
const ContainerWrapper = styled.div`
      .sidebar{
        width:300px;   
        padding:${padding};
        color:white;
         background-color:#123;
        min-height:100vh;
        
       }
       .rightside{
         flex:1;  
         background-image: linear-gradient(to right bottom, #bdd1ee, #8fb4f4, #6596f8, #4175f7, #2e50f0);                          
 
        header{
            h3{
              color:black;
            }
        }

        .content{
            padding:${padding};
        }
       }
`
// HomeWrapper Section end __________________________________________________________________________________ 

export default function Home() {
    return (
        <ContainerWrapper className="d-flex">
            <div className="sidebar">
                <h1>Sidebar</h1>
                <List>
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

            <div className="rightside">
                <header className="shadow p-3 mb-3 d-flex justify-content-between align-items-center" >
                    <FontAwesomeIcon icon={faBars} className="me-3" />
                    <h3>Dashboard</h3>

                </header>
                {/* content section start  */}
                <div className="content d-flex justify-content-center">
                    {
                        cardInfo.map(v => <div class="card col-sm-10 col-md-6 col-lg-4  " style={{ width: "18rem" }}>
                            <Image className="card-img-top" src={v.img} alt="error image" />
                            <div class="card-body">
                                <h5 class="card-title">{v.cardTitle}</h5>
                                <p class="card-text">{v.CardText}</p>
                            </div>

                            <div class="card-body">
                                <Link href={v.pageLink}><a  class="card-link">{v.cardLink}</a></Link>
                                <Link href={v.pageLink} ><a class="card-link">Another link</a></Link>
                            </div>
                        </div>)
                    }
                </div>
            </div>

        </ContainerWrapper>
    )
}






