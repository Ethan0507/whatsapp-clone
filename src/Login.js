import { Button, Typography } from '@material-ui/core'
import { VpnKey } from '@material-ui/icons'
import React from 'react'
import "./Login.css"

function Login() {

    const signInWithGoogle = () => {

    }

    return (
        <div className="login">
            <div className="login__container"> 
                <div className="login__text">
                    <Typography variant="h3" component="h4" gutterBottom>Sign in to WhatsApp</Typography>
                    <Button onClick={signInWithGoogle} color="primary" variant="contained">
                        <div className="login__google">
                            <VpnKey />
                            <h5>Sign In With Google</h5>
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login
