import { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Construct the Basic Authentication string
        const base64Credentials = btoa(`334829791596547:l0oT0NdjOvM2B30gyBl2cc3HszI`);

        const response = await fetch('https://api.cloudinary.com/v1_1/dzamw0ec2/resources/image', {
          headers: {
            Authorization: `Basic ${base64Credentials}`,
          },
        });

        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
          
        } else {
          setError('Failed to fetch data from Cloudinary');
        }
      } catch (error) {
        setError('Error fetching data from Cloudinary: ' + error.message);
      }
    };

    fetchData();
  }, []);
  console.log(data)

  // console.log(process.env.CLOUDINARY_API_KEY)
  
  return (
    <div>
      <h1>Mklhfjk</h1>
      {data ? (
        <h1>fhf</h1>
      ) : error ? (
        // Handle error state
        <div>{error}</div>
      ) : (
        // Render loading state
        <div>Loading...</div>
      )}
    </div>
  );
}

export default MyComponent;
