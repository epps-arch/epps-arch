import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Carousel from "../components/carousel"

import Layout from "../components/layout"

const Residential = () => {

    const RESIDENTIAL = [
        <StaticImage
            src="../images/residential/4-19.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential #1"
        />,
        <StaticImage
            src="../images/residential/4-16.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential #1"
        />,
        <StaticImage
            src="../images/residential/4-15.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential #1"
        />,
        <StaticImage
            src="../images/residential/4-17.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential #1"
        />,
        <StaticImage
            src="../images/residential/4-14.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential #1"
        />,
        <StaticImage
            src="../images/residential/4-10.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential #1"
        />,
        <StaticImage
            src="../images/residential/4-7.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential #1"
        />,
        <StaticImage
            src="../images/residential/4-9.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential #1"
        />,
        <StaticImage
            src="../images/residential/4-5.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential #1"
        />,
        <StaticImage
            src="../images/residential/4-4.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential #1"
        />,
        <StaticImage
            src="../images/residential/4-8.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential #1"
        />,
        <StaticImage
            src="../images/residential/4-20.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential #1"
        />,
        <StaticImage
            src="../images/residential/4-12.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential #1"
        />,
        <StaticImage
            src="../images/residential/4-18.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential #1"
        />,
        <StaticImage
            src="../images/residential/4-3.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential #1"
        />,
        <StaticImage
            src="../images/residential/4-13.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential #1"
        />,
    ]
    return (
        <Layout>
          <Carousel images={RESIDENTIAL} />
        </Layout>
    )
}

export default Residential