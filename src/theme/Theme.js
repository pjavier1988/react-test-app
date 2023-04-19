import { createTheme } from '@mui/material';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // You can choose your own primary color
    },
    secondary: {
      main: '#f50057', // You can choose your own secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // You can choose your own font family
  },
  // Add any additional custom styles here
});

export default Theme;