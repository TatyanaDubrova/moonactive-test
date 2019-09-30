import React, {useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Paper, Container} from '@material-ui/core'
import Header from '../../../components/header'
import RateConvertorContainer from '../../rate-converter'
import RatesList from '../../rates-list'
import {getRates} from "../../../store/common/actions";
import {useDispatch, useSelector} from "react-redux";



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',

    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

export default function MainContainer() {
    const classes = useStyles();
    const rates = useSelector(state => state.rates.rates);
    const base = useSelector(state => state.rates.base);
    const date = useSelector(state => state.rates.date);
    const [target, setTarget] = React.useState('ILS');
    const [currencies, setCurrencies] = React.useState([]);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRates({base: 'USD'}));
    }, []);

    useEffect(
        () => {
            const currenciesAr = [];
            for (const key in rates) {
                currenciesAr.push(key);
            }
            if (!Object.keys(rates).includes('EUR')){
                currenciesAr.push('EUR');
            }

            setCurrencies(currenciesAr);
        },
        [rates]
    );

    function handleBaseChange(newValue) {
        dispatch(getRates({base: newValue}));
    }

    function handleTargetChange(newValue) {
        setTarget(newValue);
    }

    return (
        <div className={classes.root}>
            <Header/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="sm" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8}>
                            <Paper>
                                {Object.keys(rates).length && <RateConvertorContainer
                                    rates={rates}
                                    currencies={currencies}
                                    date={date}
                                    handleBaseChange={handleBaseChange}
                                    handleTargetChange={handleTargetChange}
                                /> }
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper>
                                {Object.keys(rates).length && <RatesList
                                    rates={rates}
                                    currencies={currencies}
                                    base={base}
                                    target={target}
                                /> }
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    )
}
