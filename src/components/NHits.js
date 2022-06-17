import { connectStats } from 'react-instantsearch-dom';

const Stats = ({ nbHits }) => {
  return <strong>{nbHits}</strong>;
};

const NHits = connectStats(Stats);

export default NHits;
