import { MediaCard } from '@shopify/polaris';

function CardComponent(props) {
    return(
        <MediaCard
            title={props.title}
            primaryAction={{
                content: 'Like',
                onAction: () => { },
            }}
            description={props.earthDate}
        >
            <img
                alt={props.title}
                width="100%"
                height="100%"
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
                src={props.imgSrc}
            />
        </MediaCard>
    )
}

export default CardComponent;