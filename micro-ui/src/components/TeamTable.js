import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    paper: {
        marginTop: theme.spacing(3),
        width: '100%',
        overflowX: 'auto',
        marginBottom: theme.spacing(2),
    },
    table: {
        width: 420,
    },
    bar: {
        justifyContent: 'center',
    },
}));

const TeamTable = ({ name, sensors }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={3}>
                <Toolbar className={classes.bar}>
                    <Typography variant="h5">{name}</Typography>
                </Toolbar>
                <Table className={classes.table} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align='left'>name</TableCell>
                            <TableCell align='left'>value</TableCell>
                            <TableCell align='left'>creation date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sensors.map(sensor => (
                            <TableRow key={sensor.id}>
                                <TableCell>{sensor.name}</TableCell>
                                <TableCell>{sensor.value}</TableCell>
                                <TableCell>{moment(new Date(sensor.created_at)).format("HH:mm:ss.SSS A on D MMM YYYY")}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}

TeamTable.propTypes = {
    name: PropTypes.string.isRequired,
    sensors: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            created_at: PropTypes.string.isRequired,
        })
    ).isRequired
}

export default TeamTable;