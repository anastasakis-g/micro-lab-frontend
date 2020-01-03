import React, { Component } from 'react';
import TeamTable from './TeamTable';
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        paddingTop: 10,
        paddingBottom: 40,
        backgroundColor: '#F3F3F3',
    },
    gridList: {
        flexWrap: 'nowrap',
    }
}));

const List = ({ teams }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {teams.map(team => (
                <GridList className={classes.gridList}>
                    <TeamTable name={team.name} sensors={team.sensors} />
                </GridList>
            ))}
        </div>
    );
}

class Sensors extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timer: '',
            teams: [
                {
                    name: '',
                    sensors: [
                        {
                            name: '',
                            vale: '',
                            created_at: '',
                        },
                    ]
                },
            ]
        }
    }

    componentDidMount() {
        this.loadData();
        this.setState({ timer: setInterval(() => this.loadData(), 10000) });
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
        this.setState({ timer: null });
    }

    async loadData() {
        await fetch(`/api/students`)
            .then(response => response.json())
            .then(data => {
                this.setState({ teams: data })
            })
    }

    render() {
        return (
            <List teams={this.state.teams} />
        );
    }
}

export default Sensors;
