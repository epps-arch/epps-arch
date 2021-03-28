import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Carousel from "../components/carousel"

import Layout from "../components/layout"

const Interiors = () => {
    const INTERIORS = [
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/interiors/south-city-001.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/interiors/south-city-002.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/interiors/south-city-003.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/interiors/south-city-004.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/interiors/anderson-001.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/interiors/anderson-002.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/interiors/anderson-003.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/interiors/anderson-004.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/interiors/annes-001.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/interiors/annes-002.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/interiors/annes-003.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/interiors/east-cafe-001.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/interiors/east-cafe-002.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/interiors/east-cafe-003.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/interiors/cobb-001.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/interiors/cobb-002.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/interiors/cobb-003.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/interiors/cobb-004.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/interiors/cobb-005.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/interiors/cobb-006.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Interiors"
        />,
    ]
    return (
        <Layout>
            <Carousel images={INTERIORS} />
        </Layout>
    )
}
export default Interiors
