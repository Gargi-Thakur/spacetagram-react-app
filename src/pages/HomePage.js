import { Heading, Page, TextContainer } from '@shopify/polaris';
import CardComponent from '../components/CardComponent';

function HomePage() {
  return (
    <Page>
        <TextContainer>
              <Heading element="h1">Spacetagram</Heading>
            <p>
                This is the HomePage.
            </p>
        </TextContainer>
        
        <CardComponent />
    </Page>
  );
}

export default HomePage;