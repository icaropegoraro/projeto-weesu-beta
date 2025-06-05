import { createTheme, } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#003049', 
        },
        secondary: {
            main: '#003049',
        },
        background: {
            default: '#F5F5F5', 
        },
        text: {
            primary: '#003049',
            secondary: '#003049',
        },
        },
        typography: {
            h4: {
                color: '#003049', 
                fontWeight: 'bold', 
                fontSize: '2rem', 
        },
        body1: {
            color: '#003049',
            fontSize: '1rem',
            fontWeight: 'bold',
        },
        
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: '4px',
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#003049',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#003049',
                    },
                    '&.Mui-focused .MuiOutlinedInput-': {

                    }
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#003049', 
                    color: "white", 
                    fontWeight: 'bold',
                    '&:hover': {
                    backgroundColor: '#003049', 
                    color: '#A2C62C',
                    },
                },
            },
        },
        MuiStepIcon: {
            styleOverrides: {
                root: {
                    color: '#A2C62C',
                    '&.Mui-completed': { color: '#003049' }, 
                    '&.Mui-active': { color: '#003049' },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderRadius: 5,
                    "& .MuiOutlinedInput-root": {
                        backgroundColor: "white", 
                        "&.Mui-error": {
                        backgroundColor: "#ffebee",
                        },
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: "white",
                    
                }
            }
        }

    },
});

export default theme;