import {createMuiTheme} from '@material-ui/core/styles'

export const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 1024,
            md: 1024,
            lg: 1440,
            xl: 1920
        }
    },
    typography: {
        useNextVariants: true,
        fontFamily: 'Muli, sans-serif',
    },
    palette: {
        primary: {
            light: '#43A047', //do not change
            main: '#00bcd4', //do not change
            dark: '#333333', //do not change
            contrastText: '#fff'
        },
        secondary: {
            light: '#00bcd4', // do not change
            main: '#f9f9f9', // do not change
            dark: '#334250', // do not change
            contrastText: '#000'
        }
    },
    overrides: {
        MuiTypography: {
            body1: {
                fontSize: '14px'
            }
        },
        MuiFormControlLabel: {
            label: {
                textTransform: 'capitalize',
                color: '#F0F0F0',
                fontSize: 14,
                fontFamily: 'Muli, sans-serif',
            },
        },
        MuiListItemAvatar: {
            root: {
                minWidth: 30,
            }
        },
        MuiToolbar: {
            root: {
                justifyContent: 'center',
            }
        },
        MuiListItem: {
            root: {
                justifyContent: 'center',
            }
        },
        MuiInputBase: {
            input: {
                fontSize: 14,
                fontFamily: 'Muli, sans-serif',
                fontWeight: 400,
                lineHeight: 1.5,
            }
        },
        MuiSelect: {
            selectMenu: {
                height: 15.5,
                width: 300,
            }
        },
        MuiDivider: {
            middle: {
                marginLeft: 0,
                marginRight: 0,
                marginTop: 20,
                marginBottom: 8,
            }
        },
        MuiBox: {
            root: {
                padding: 20,
            }
        }
    }
});
