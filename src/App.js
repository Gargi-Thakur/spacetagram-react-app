import { useState, useEffect } from 'react';
import axios from 'axios';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import HomePage from './pages/HomePage';

function App() {
  const nasaApiKey = process.env.REACT_APP_NASA_API_KEY;
  console.log('nasaApiKey', nasaApiKey);

  // NASA API - Mars Rover Photos API
  const [marsRoverData, setMarsRoverData] = useState();

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${nasaApiKey}`)
      .then(result => {
        setMarsRoverData(result.data.photos);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <AppProvider i18n={enTranslations}>
      <div className="App">
        {marsRoverData ? console.log('marsRoverData:', marsRoverData) : console.log('loading')}
        <HomePage marsRoverData={marsRoverData} />
      </div>
    </AppProvider>
  );
}

export default App;
