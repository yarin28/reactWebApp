
import { ComponentType } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
/**
 * @brief will display the little copyright in the end of the forms
 * 
 * @returns 
 */
const Copyright: ComponentType = (props) => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://yarinsWebsite.com" >
                { "Chicken Coop " } 
      </Link>
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
export default Copyright;