import React from 'react'
import { faBars, faHome, faImage, faInbox, faRecordVinyl, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { Link, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
const HeaderWrapper = styled.div`
     .header{
        background-image: linear-gradient(to right top, #ccd1d8, #b9c8df, #a7bfe6, #95b5ec, #84abf2);
     }
`


const Header = () => {
    return (
        <HeaderWrapper>
            <header className="shadow p-3 mb-3 d-flex justify-content-between align-items-center header" >
                <FontAwesomeIcon icon={faBars} className="me-3" />
                <h3>Dashboard</h3>
            </header>
        </HeaderWrapper>

    )
}

export default Header
