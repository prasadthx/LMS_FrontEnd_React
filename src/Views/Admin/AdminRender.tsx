import {Route} from "react-router-dom";
import React from "react";
import {AdminLogin} from "./AdminLogin";
import {AdminRegister} from "./AdminRegister";

export class AdminRender extends React.Component<any,any>{
    render() {
        return (
            <div className="adminRender w-full h-full">
                <Route path='/admin/login'>
                    <AdminLogin/>
                </Route>
                <Route path='/admin/register'>
                    <AdminRegister/>
                </Route>
            </div>
        );
    }
}