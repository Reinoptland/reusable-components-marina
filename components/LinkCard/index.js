import React from "react";
import styles from "./LinkCard.module.css";

export default function LinkCard(props) {
  return (
    <a href={props.linkTo} className={styles.card}>
      <h2>{props.cardTitle}</h2>
      <p>{props.cardContent}</p>
    </a>
  );
}
