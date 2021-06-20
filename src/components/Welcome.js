import React from 'react'
import { useParams} from "react-router-dom";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
export function Welcome() {
    let { name } = useParams();
    return (
        <div>
            hello 
            <br/>
            {name}
            <br/>
            <br/>
            <br/>
            <br/>
            <Button
                size="medium" 
                variant="contained"
                color="secondary"
                component={Link} to="/">
                Home
            </Button>
        </div>
    )
}

export default Welcome
