import { useState, useEffect } from "react";
import { MediaCard, Button } from '@shopify/polaris';
import Heart from "react-animated-heart";

function CardComponent(props) {

    const [likeToggle, setLikeToggle] = useState(false);


    return(
        <MediaCard
            title={props.title}

            // primaryAction={{
            //     // content: `${ likeToggle ? "Unlike" : "Like" }`,
            //     icon: <Heart isClick={likeToggle} onClick={() => setLikeToggle(!likeToggle)  } />
            // }}
            description={props.earthDate}
            portrait={true}
        >
            <div className="likeButtonIcon"><Heart isClick={likeToggle} onClick={() => setLikeToggle(!likeToggle)} /></div>
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