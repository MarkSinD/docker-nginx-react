import React, {useEffect, useState} from 'react';
function MyPoster() {
  const [recommended, setRecommended] = useState(null);

  const getPeers = () =>
    fetch('http://localhost:9002/c', {method: "GET"})
      .then(response =>  response.text());

  useEffect(() => {
    getPeers()
      .then(result => {
        setRecommended(result);
      });
  }, [])

  return (
    <div>
      {recommended}
    </div>
  );
}

export default MyPoster;
