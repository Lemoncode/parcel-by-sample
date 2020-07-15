import React from "react";
const classes = require("./mystyles.scss");

export const HelloComponent = () => {
    return (
        <div className={classes.hello}>
            <h2>Hello from React</h2>
        </div>
    )
};
