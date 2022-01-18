import { useState, useEffect } from "react";
import { MediaCard } from '@shopify/polaris';
// import FavoriteIcon from '@mui/icons-material/Favorite';

function CardComponent(props) {

    const [likeToggle, setLikeToggle] = useState(false);

    return(
        <MediaCard
            title={props.title}
            primaryAction={{
                content: `${ likeToggle ? "Unlike" : "Like" }`,
                // onAction: (e) => {console.log('Liked')},
                onAction: (e) => { setLikeToggle(!likeToggle) },
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