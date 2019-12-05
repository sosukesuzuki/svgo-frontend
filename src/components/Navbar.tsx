import React from 'react';
import { Navbar, NavbarGroup, NavbarHeading } from '@blueprintjs/core';

const Topnav: React.FC = () => {
    return (
        <Navbar>
            <NavbarGroup>
                <NavbarHeading>SVGO Frontend</NavbarHeading>
            </NavbarGroup>
        </Navbar>
    );
};

export default Topnav;
