import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "./firebase";

export default function Monitor() {
  const [reading, setReading] = useState([]);
  useEffect(() => {
    db.collection("iotdata").onSnapshot((snapshot) => {
      setReading(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <Moniter>
      <div>
        <p> heartbeat </p>
        <p> temperature </p>
        <p> blood pressure </p>
        <p> humidity </p>
        <p> Time </p>
      </div>

      {reading.map((vari) => (
        <div className="readings">
          <h4> {vari.heart} </h4>
          <h4> {vari.temp} </h4>
          <h4> {vari.blood} </h4>
          <h4> {vari.humidity} </h4>
          <h4> {vari.time} </h4>
        </div>
      ))}
    </Moniter>
  );
}

const Moniter = styled.div`
  padding-top: 30px;

  div {
    display: flex;
    justify-content: center;
    max-width: 800px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
    margin-top: 0;
    text-align: center;
    align-items: center;

    p {
      flex: 0.2;
    }

    @media (max-width: 768px) {
      font-size: 12px;
      font-weight: 400;
      padding: 0 10px;
    }
  }
  .readings {
    color: blue;
    padding: 5px;
  }
  .readings h4 {
    flex: 0.2;
  }
`;
