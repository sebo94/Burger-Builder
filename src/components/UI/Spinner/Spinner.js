import React from "react";
import classes from "./Spinner.module.css";

const spinner = (props) => (
  <div>
    <div className={classes.spinner-box}>
      <div clasNames={classes.circle-border}>
        <div className={classes.circle-core}></div>
      </div>
    </div>

    <div className={classes.spinner-box}>
      <div className={classes.leo-border-1}>
        <div className={classes.leo-core-1}></div>
      </div>
      <div className={classes.leo-border-2}>
        <div className={classes.leo-core-2}></div>
      </div>
    </div>

    <div className={classes.spinner-box}>
      <div className={classes.configure-border-1}>
        <div className={classes.configure-core}></div>
      </div>
      <div className={classes.configure-border-2}>
        <div className={classes.configure-core}></div>
      </div>
    </div>

    <div className={classes.spinner-box}>
      <div className={classes.pulse-container}>
        <div className={[classes.pulse-bubble, classes.pulse-bubble-1].join(' ')}></div>
        <div className={[classes.pulse-bubble, classes.pulse-bubble-2].join(' ')}></div>
        <div className={[classes.pulse-bubble, classes.pulse-bubble-3].join(' ')}></div>
      </div>
    </div>

    <div className={classes.spinner-box}>
      <div className={classes.solar-system}>
        <div className={[classes.earth-orbit, orbit].join(' ')}>
          <div className={[classes.planet, earth].join(' ')}></div>
          <div className={[classes.venus-orbit, orbit].join(' ')}>
            <div className={[classes.planet, venus].join(' ')}></div>
            <div className={[classes.mercury-orbit, orbit].join(' ')}>
              <div className={[classes.planet, mercury].join(' ')}></div>
              <div className={classes.sun}></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default spinner;
