
import { ComponentType } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
const Copyright: ComponentType = (props) => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            {/* <Link color="inherit" href="https://material-ui.com/"> */}
            <Link color="inherit" href="https://example.com" >
                { "Chicken Coop " } 
      </Link>
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
export default Copyright;