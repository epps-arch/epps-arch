import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Carousel from "../components/carousel"

import Layout from "../components/layout"

const Interiors = () => {
    const INTERIORS = [
        <StaticImage
            src="../images/interiors/1-1.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors #1"
        />,
        <StaticImage
            src="../images/interiors/1-8.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors #2"
        />,
        <StaticImage
            src="../images/interiors/1-7.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors #3"
        />,
        <StaticImage
            src="../images/interiors/1-4.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors #4"
        />,
        <StaticImage
            src="../images/interiors/1-11.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors #5"
        />,
        <StaticImage
            src="../images/interiors/1-6.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors #6"
        />,
        <StaticImage
            src="../images/interiors/1-5.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors #7"
        />,
        <StaticImage
            src="../images/interiors/1-2.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors #8"
        />,
        <StaticImage
            src="../images/interiors/1-12.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors #9"
        />,
        <StaticImage
            src="../images/interiors/1-9.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors #10"
        />,
        <StaticImage
            src="../images/interiors/1-3.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors #11"
        />,
        <StaticImage
            src="../images/interiors/1-10.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors #12"
        />,
    ]
    return (
        <Layout>
            <Carousel images={INTERIORS} />
        </Layout>
    )
}
export default Interiors
