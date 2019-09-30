import React from 'react';
import {makeStyles} from '@material-ui/core/styles/index';
import List from '@material-ui/core/List/index';
import ListItem from '@material-ui/core/ListItem/index';
import ListItemText from '@material-ui/core/ListItemText/index';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/index';
import CurrencyFlag from 'react-currency-flags';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar/AppBar";
import {useSelector} from "react-redux";
import {Divider} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        justifyContent: 'center'
    },
    ratesList: {
        height: 284,
        padding: 20,
        overflow: 'scroll'
    }
}));

export default function RatesList({rates, currencies, base, target}) {
    const [value] = React.useState(0);
    const showRates = currencies.filter(currency => currency.match(/EUR|GBP|CAD|MXN|JPY/));

    if (base.match(/EUR|GBP|CAD|MXN|JPY/)){
        const index = showRates.indexOf(base);
        showRates.splice(index, 1, 'USD');
    }
    if (target !=='ILS') {
        showRates.shift();
        showRates.unshift('ILS');
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs variant="fullWidth" value={value} aria-label="tabs">
                    <Tab label={`Today's rates: 1 ${base} =`}></Tab>
                </Tabs>
            </AppBar>
            <List className={classes.ratesList}>
                {showRates.map((key,index) => {
                    const labelId = `rates-list-label-${key}`;
                    return (
                        <>
                        <ListItem key={key} button>
                            <ListItemAvatar>
                                <CurrencyFlag currency={key} size="sm" />
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={key}/>
                            <ListItemText style={{textAlign: 'right'}} primary={rates[key]}/>
                        </ListItem>
                        {index !== showRates.length-1 ? <Divider style={{margin:0}} variant="middle" /> : null}
                        </>

                    );
                })}
            </List>
        </div>
    );
}
