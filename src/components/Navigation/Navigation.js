import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from '@material-ui/icons/Home';
import TheatersIcon from '@material-ui/icons/Theaters';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from "react-router-dom";
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#181818',
    color: 'white',
    zIndex: 100
  },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const history = useHistory();

    useEffect(() => {
        if (value === 0) {
        history.push("/");
        } else if (value === 1) {
        history.push("/search");
/*         } else if (value === 2) {
        history.push("/movies");
        } else if (value === 3) {
        history.push("/series"); */
        }
    }, [value, history]);

  return (
    <>
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
        <BottomNavigationAction style={{ color: "white" }} label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction style={{ color: "white" }} label="Search" icon={<SearchIcon />} />
{/*         <BottomNavigationAction style={{ color: "white" }} label="Movies" icon={<TheatersIcon />} />
        <BottomNavigationAction style={{ color: "white" }} label="Series" icon={<LiveTvIcon />} /> */}
        </BottomNavigation>
    </>
  );  
}
