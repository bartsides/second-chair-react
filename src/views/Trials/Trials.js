import axios from "axios";
import { useEffect, useState } from "react";

export default function Trials() {
  const [trials, setTrials] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/trials`).then((res) => {
      setTrials(res?.data?.trialSummaries ?? []);
    });
  }, []);

  return (
    <>
      <>Trials</>
      <ul>
        {trials.map((t) => {
          return <li key={t.id}>{t.name}</li>;
        })}
      </ul>
    </>
  );
}
