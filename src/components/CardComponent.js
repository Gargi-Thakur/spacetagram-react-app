import { MediaCard } from '@shopify/polaris';

function CardComponent() {
    return(
        <MediaCard
            title="Title of picture"
            primaryAction={{
                content: 'Like',
                onAction: () => { },
            }}
            description="Date of capture in earth_date"
        >
            <img
                alt=""
                width="100%"
                height="100%"
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
                src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
            />
        </MediaCard>
    )
}

export default CardComponent;