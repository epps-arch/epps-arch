import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Carousel from "../components/carousel"

import Layout from "../components/layout"

const Government = () => {
    const GOVERNMENT = [
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/government/museum-001.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Government"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/government/museum-002.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Government"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/government/museum-003.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Government"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/government/border-001.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Government"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/government/border-002.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Government"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/government/border-003.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Government"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/government/city-plan-001.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Government"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/government/city-plan-002.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Government"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/government/post-office-001.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Government"
        />,
    ]

    return (
        <Layout>
            <Carousel images={GOVERNMENT} />
        </Layout>
    )
}
export default Government
