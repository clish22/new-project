import React, { useEffect, useState } from 'react';

function SeasonLadder() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/ladder');
      const body = await response.json();
      setData(body);
    };
    fetchData();
  }, []);

  return (
    <div className="Ladder">
      <h1>This is the ladder page for my NRL App for the Fantasy Draft League</h1>
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
}

export default SeasonLadder;
