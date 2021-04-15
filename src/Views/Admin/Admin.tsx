import React from "react";
import './Admin.css'
import {AdminRegister} from "./AdminRegister";
import {AdminLogin} from "./AdminLogin";
import {Link, Route} from 'react-router-dom';

export class Admin extends React.Component<any,any>{
    render() {
        return (
            <div className="Admin">

                <div className="text-3xl mb-7">
                    Dnyaan Admin
                </div>

                <div>
                    <Link to="/admin/login">
                        <button>
                            Login
                        </button>
                    </Link>
                </div>

                <div>
                    <Link to="/admin/register">
                        <button>
                            Register
                        </button>
                    </Link>
                </div>

                {/*<div className="adminRender">*/}
                {/*    <Route path='/admin'>*/}
                {/*        <AdminLogin/>*/}
                {/*    </Route>*/}
                {/*    <Route path='/admin/register' exact>*/}
                {/*        <AdminRegister/>*/}
                {/*    </Route>*/}
                {/*</div>*/}

            </div>
        );
    }
}