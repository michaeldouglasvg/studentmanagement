import { HeaderWrapper } from '../styles/HeaderStyles';
import { useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, MenuItem } from '../components/materialui';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import { useBookContext } from '../context/BookContext';

function Header({ mode,toggleMode }) {
  const { setCurrentTab } = useBookContext();

  const location = useLocation();
  const path = location.pathname;
  
  let type = '';
  if (path.includes('/teacher')) {
    type = 'teacher';
  } else if (path.includes('/student')) {
    type = 'student';
  } else {
    type = 'default';
  }

  return (
    <HeaderWrapper>
      <AppBar position="static" className='header'>
        <Toolbar className='main'>
          <Typography variant="h6">
            EBOOKS.COM
          </Typography>
          <div className='right-section'>
            {
              type === "student" && <div className='buttons'>
              <MenuItem onClick={()=>setCurrentTab("allbooks")}>Book List</MenuItem>
              <MenuItem onClick={()=>setCurrentTab("readinglist")}>Reading List</MenuItem>
            </div>
            }
            {
              type === "teacher" && <div className='buttons'>
                <h1>Welcome Back</h1>
            </div>
            }
            <div onClick={toggleMode} className='them-icon'>
                {mode === "light" ? <DarkModeIcon /> : <Brightness5Icon />}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </HeaderWrapper>
  );
}

export default Header;
