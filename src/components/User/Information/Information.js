import React from 'react';

import Data from './Data/Data';
import classes from './Information.module.css';

const profileData = (props) => {
    const information = props.info.profile;
    let dataInformation = Object.keys(information).map(function(key) {
        return <Data key = {key} subtitle = {key} value = {information[key]} />;
      })
    /*let subtitle = props.dataName;
    let subtitleCapitalized = subtitle.charAt(0).toUpperCase() + subtitle.slice(1);*/
    return (
        <div className={classes.Information}>
            {dataInformation}
        </div>
    )
}
export default profileData;