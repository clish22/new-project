//react component for the home page

import React, { useEffect, useState } from 'react';
// import './Home.css';

function Home() {
  /* const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api');
      const body = await response.json();
      setData(body.message);
    };
    fetchData();
  }, []); */

  return (
    <div className="Home">
      <h1>This is the homepage for my NRL App for the Fantasy Draft League</h1>
      {/* {data ? <p>{data}</p> : <p>Loading...</p>} */}
    </div>
  );
}

export default Home;
