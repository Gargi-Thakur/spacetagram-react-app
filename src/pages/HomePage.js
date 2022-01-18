import { Heading, Page, TextContainer, Spinner } from '@shopify/polaris';
import CardComponent from '../components/CardComponent';

function HomePage(props) {
  return (
    <Page>
        <TextContainer>
              <Heading element="h1">Spacetagram</Heading>
            <p>Brought to you by NASA's image API</p>
        </TextContainer>
      
      <section className="Polaris-Card-Container">
      {props.marsRoverData ? props.marsRoverData.map((photo, index) => 
        <CardComponent key={index} title={photo.camera.full_name} earthDate={photo.earth_date} imgSrc={photo.img_src} />) 
        : <Spinner accessibilityLabel="Spinner example" size="large" />}
      </section>

    </Page>
  );
}

export default HomePage;