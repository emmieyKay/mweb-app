import React, { Fragment } from "react"
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {

    return (
    <Fragment>
         <Outlet />
    </Fragment>
    )
}
export default Layout