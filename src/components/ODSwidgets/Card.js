import React, { useState, useEffect } from "react";
import getData from "../../helpers/odsClient";

const Card = ({ url }) => {
  const { query } = url;
  const [recs, setRecs] = useState([]);

  useEffect(() => {
    const queries = query.split("&").filter((q) => q.includes("refine"));

    const reduceRecords = queries.reduce(async (previousValue, query) => {
      const retrievedRecords = getData(query).then((res) => res.records);
      return [...(await previousValue), ...(await retrievedRecords)];
    }, []);

    const setRecords = async () => {
      setRecs(await reduceRecords);
    };

    setRecords();
  }, [query]);

  const getCards = () => {
    return recs.map((record) => <p>{record.fields.city}</p>);
  };

  return <>{recs.length === 0 ? <p>Loading...</p> : <p>{getCards()}</p>}</>;
};

export default Card;
