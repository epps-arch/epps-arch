import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Carousel from "../components/carousel"

import Layout from "../components/layout"

const Commercial = () => {

    const COMMERCIAL = [
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/commercial/cannon-001.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/commercial/cannon-002.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/commercial/cannon-003.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/commercial/cannon-003a.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/commercial/cannon-004.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/commercial/music-hall-001.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/commercial/music-hall-002.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/commercial/music-hall-003.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/commercial/music-hall-004.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/commercial/music-hall-005.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/commercial/music-hall-006.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical"
        />,
    ]

    return (
        <Layout>
          <Carousel images={COMMERCIAL} />
        </Layout>
    )
}

export default Commercial
