import React, {useEffect} from 'react'
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, AppBar, Tabs, Tab, Typography, Box, MenuItem, TextField, Divider} from '@material-ui/core';
import CurrencyFlag from "react-currency-flags/dist/components";
import moment from 'moment';

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        justifyContent: 'center',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    menu: {
        width: 200,
    },
}));

export default function RateConvertorContainer({rates, currencies, date, handleBaseChange, handleTargetChange}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [values, setValues] = React.useState({
        from: 'USD',
        to: 'ILS',
        amount: 1000,
        result: (rates['ILS']*1000).toFixed(2),
    });


    useEffect(
        () => {
            setValues({
                ...values,
                result: (rates[values.to] * values.amount).toFixed(2)
            });
        },
        [rates, values.to, values.amount]
    );

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    const handleValuesChange = name => event => {
            setValues({
                ...values,
                [name]: event.target.value,
            });
            if (name === 'from'){
                handleBaseChange(event.target.value);
            } else if (name === 'to') {
                handleTargetChange(event.target.value);
            }
    };

       return (
        <Grid className={classes.root}>
            <AppBar position="static">
                <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="tabs">
                    <Tab label="Currency converter" {...a11yProps(0)} />
                    <Tab label="Historical rates" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Grid item container justify="center">
                    <Grid item container justify="center">
                        <TextField
                            id="outlined-number"
                            value={values.amount}
                            label={'From'}
                            onChange={handleValuesChange('amount')}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-select-currency"
                            select
                            className={classes.textField}
                            value={values.from}
                            onChange={handleValuesChange('from')}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                            margin="normal"
                            variant="outlined"
                        >
                            {currencies && currencies.map(key => (
                                <MenuItem key={key} value={key}>
                                    <CurrencyFlag currency={key} size="sm"/> <span style={{marginLeft: 10}}>{key}</span>
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item container justify="center">
                            <TextField
                                id="outlined-number"
                                value={values.result}
                                type="number"
                                label={'To'}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-select-currency"
                                select
                                className={classes.textField}
                                value={values.to}
                                onChange={handleValuesChange('to')}
                                SelectProps={{
                                    MenuProps: {
                                        className: classes.menu,
                                    },
                                }}
                                margin="normal"
                                variant="outlined"
                            >
                                {currencies && currencies.map(key => (
                                    <MenuItem key={key} value={key}>
                                        <CurrencyFlag currency={key} size="sm"/> <span style={{marginLeft: 10}}>{key}</span>
                                    </MenuItem>
                                ))}
                            </TextField>
                    </Grid>
                </Grid>
                <Divider variant="middle" />
                <Grid item container direction="column">
                    <Typography display="block" variant="body2">Your rate:</Typography>
                    <Typography display="block" variant="subtitle2">{values.from} 1 : {values.to} {(rates[values.to]).toFixed(4)}</Typography>
                    <Typography display="block" variant="caption">Last updated {moment(date).format("YYYY MMM DD")}</Typography>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
            </TabPanel>
        </Grid>
    );
}
