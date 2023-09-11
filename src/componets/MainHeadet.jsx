import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ImCart } from 'react-icons/im';
import Typography from '@mui/material/Typography';
const MainHeader = () => {
    return ( 
        <>
       <div className="main-header">
            <div className="web-name">
            <Typography variant="h2">
                 Dark cloud
           </Typography>
            </div>
            <div className="links">
                <ul>
                    {/* <Link>Home</Link> */}
                    <a href="/Men"> Men </a>
                    <a href="/Women"> Women </a>
                    <a href="/Jewelery"> Jewelery </a>
                    <a href="/electronics"> eletronics </a>
                </ul>
            </div>
            <div className="header-icon"><ImCart /></div>
       </div>
        
        </>
     );
}
 
export default MainHeader;