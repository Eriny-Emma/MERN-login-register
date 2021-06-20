import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));
export function Home() {
    const classes = useStyles();
    return (
        <div style={{ width: '50%' }}>
                            <Box display="flex" p={1} >
                                <Box p={1}  >
                                    <Button
                                        size="medium" className={classes.margin}
                                        variant="contained"
                                        color="secondary"
                                        component={Link} to="/Login">
                                        Login
                                   </Button>
                                </Box>
                                <Box p={1} >
                                    <Button
                                        size="medium" className={classes.margin}
                                        variant="contained"
                                        color="secondary"
                                        component={Link} to="/Register">
                                        Register
                                    </Button>
                                </Box>
                            </Box>
                        </div>
    )
}

export default Home

/// will have 2 components login and register and the css for float