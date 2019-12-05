import React from 'react';
import styled from 'styled-components';
import {
    Navbar,
    NavbarGroup,
    NavbarHeading,
    Alignment,
} from '@blueprintjs/core';

const CenteredNavbarGroup = styled(NavbarGroup)`
    width: 800px;
    margin: 0 auto;
`;

const Topnav: React.FC = () => {
    return (
        <Navbar>
            <CenteredNavbarGroup align={Alignment.CENTER}>
                <NavbarHeading>SVGO Frontend</NavbarHeading>
            </CenteredNavbarGroup>
        </Navbar>
    );
};

export default Topnav;
