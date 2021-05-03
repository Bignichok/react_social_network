import React from "react";
import { NavLink } from "react-router-dom";

import { mainRoutes } from "routes";

import NavLeftBar, { LeftBarList, LeftBarListItem } from "./LeftBar.style";

const LeftBar = () => (
    <NavLeftBar>
        <LeftBarList>
            {Object.keys(mainRoutes).map((route) => (
                <LeftBarListItem key={route}>
                    <NavLink key={route + "e"} to={mainRoutes[route]}>
                        {route}
                    </NavLink>
                </LeftBarListItem>
            ))}
        </LeftBarList>
    </NavLeftBar>
);

export default LeftBar;
