import React from "react";
import { Outlet } from "react-router-dom";
import Button from '@material-ui/core/Button';

export const Details = () => {
    return (
        <div>
            <br />
            <Button  href="/" size="small">Return to HomePage</Button>
            <Outlet />
        </div>
    )
}