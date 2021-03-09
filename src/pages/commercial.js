import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Carousel from "../components/carousel"

import Layout from "../components/layout"

const Commercial = () => {

    const COMMERCIAL = [
        <StaticImage
            src="../images/commercial/5-2.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical #1"
        />,
        <StaticImage
            src="../images/commercial/5-1.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical #2"
        />,
        <StaticImage
            src="../images/commercial/5-3.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical #3"
        />,
        <StaticImage
            src="../images/commercial/5-5.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical #4"
        />,
        <StaticImage
            src="../images/commercial/5-4.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical #5"
        />,
        <StaticImage
            src="../images/commercial/5-6.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical #6"
        />,
        <StaticImage
            src="../images/commercial/5-7.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical #7"
        />,
        <StaticImage
            src="../images/commercial/5-8.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical #8"
        />,
    ]

    return (
        <Layout>
          <Carousel images={COMMERCIAL} />
        </Layout>
    )
}

export default Commercial
