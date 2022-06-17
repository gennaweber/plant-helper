import { connectStats } from 'react-instantsearch-dom';

const NHits = () => {
  const Stats = ({ nbHits }) => <strong>{nbHits}</strong>;
  const CustomStats = connectStats(Stats);

  return CustomStats;
};

export default NHits;
