import React from "react";
// import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import Countup from "react-countup";
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  console.log(confirmed);
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div
          className={styles.card}
          style={{
            borderBottom: "10px solid rgba(0,0,255,0.5)",
            textShadow: "0px 0px 0px rgb(187, 187, 187)",
          }}
        >
          <div className={styles.heading}>
            <h4 style={{ color: "rgba(0,0,255,0.6)" }}>Infected</h4>
          </div>
          <div className={styles.data}>
            <h5>
              <Countup
                start={0}
                end={confirmed.value}
                duration={1.5}
                separator=","
              />
            </h5>
          </div>
          <div className={styles.updatedate}>
            <h6>{new Date(lastUpdate).toDateString()}</h6>
          </div>
          <div className="description">
            <p>Number of active cases of COVID-19</p>
          </div>
        </div>
        <div
          className={styles.card}
          style={{
            borderBottom: "10px solid rgba(0,255,0,0.7)",
            textShadow: "0px 0px 0px rgb(187, 187, 187)",
          }}
        >
          <div className={styles.heading}>
            <h4 style={{ color: "rgba(0,255,0,0.5)" }}>Recovered</h4>
          </div>
          <div className={styles.data}>
            <h5>
              <Countup
                start={0}
                end={recovered.value}
                duration={1.5}
                separator=","
              />
            </h5>
          </div>
          <div className={styles.updatedate}>
            <h6>{new Date(lastUpdate).toDateString()}</h6>
          </div>
          <div className="description">
            <p>Number of recovery cases of COVID-19</p>
          </div>
        </div>
        <div
          className={styles.card}
          style={{ borderBottom: "10px solid rgba(255,0,0,0.5)" }}
        >
          <div className={styles.heading}>
            <h4 style={{ color: "rgba(255,0, 0,0.8)" }}>Deaths</h4>
          </div>
          <div className={styles.data}>
            <h5>
              <Countup
                start={0}
                end={deaths.value}
                duration={1.5}
                separator=","
              />
            </h5>
          </div>
          <div className={styles.updatedate}>
            <h6>{new Date(lastUpdate).toDateString()}</h6>
          </div>
          <div className="description">
            <p>Number of deaths caused by COVID-19</p>
          </div>
        </div>
      </div>
      <footer>Copyright &copy; | Abhinav Rajesh</footer>
    </div>
  );
};

export default Cards;
