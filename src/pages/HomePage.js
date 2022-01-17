import { Heading, Page, TextContainer } from '@shopify/polaris';
import CardComponent from '../components/CardComponent';

function HomePage(props) {
  return (
    <Page>
        <TextContainer>
              <Heading element="h1">Spacetagram</Heading>
            <p>Brought to you by NASA's image API</p>
        </TextContainer>
        
      {props.marsRoverData ? props.marsRoverData.map((photo, index) => 
        <CardComponent key={index} title={photo.camera.full_name} earthDate={photo.earth_date} imgSrc={photo.img_src} />) 
       : <p>Loading...</p>}

    </Page>
  );
}

export default HomePage;