import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Carousel from "../components/carousel"

import Layout from "../components/layout"

const Commercial = () => {

    const COMMERCIAL = [
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/commercial/5-2.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical #1"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/commercial/5-1.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical #2"
        />,
        // <StaticImage
        //     backgroundColor="#444444"
        //     placeholder="none"
        //     src="../images/commercial/5-9.jpg"
        //     width={380}
        //     quality={95}
        //     formats={["AUTO", "WEBP", "AVIF"]}
        //     alt="Commerical #3"
        // />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/commercial/5-3.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical #3"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/commercial/5-10.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical #4"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/commercial/5-5.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical #4"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/commercial/5-4.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical #5"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/commercial/5-8.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical #8"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/commercial/5-6.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical #6"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/commercial/5-7.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Commerical #7"
        />,
    ]

    return (
        <Layout>
          <Carousel images={COMMERCIAL} />
        </Layout>
    )
}

export default Commercial
