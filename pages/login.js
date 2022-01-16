import React from "react";
import { providers, getSession } from 'next-auth/react'

import BtnLogin from "../components/BtnLogin";

const Login = ({providers, session}) => {
    console.log({providers, session})

    if(session) return null;

    return (
        <div>
            <h1>Login</h1>
            <BtnLogin>
                provider={providers.google}
                bgColor={'decoration-slate-100'}
            </BtnLogin>
            <BtnLogin>
                provider={providers.github}
                bgColor={'decoration-slate-100'}
            </BtnLogin>
        </div>
    )
}

Login.getInitialProps = async (context) => {
    return{
        providers: await providers(context),
        session: await getSession(context)
    }
}

export default Login