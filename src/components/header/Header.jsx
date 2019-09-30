import React from 'react'
import {AppBar, Toolbar,Typography} from '@material-ui/core'

export default function Header(){
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h4">Your Exchange Rate Application</Typography>
            </Toolbar>
        </AppBar>
    )
}
