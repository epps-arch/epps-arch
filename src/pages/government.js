import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Carousel from "../components/carousel"

import Layout from "../components/layout"

const Government = () => {
    const GOVERNMENT = [
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/government/2-1.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Government #1"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/government/2-2.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Government #2"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/government/2-3.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Government #3"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/government/2-4.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Government #4"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/government/2-5.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Government #5"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/government/2-6.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Government #6"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/government/2-7.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Government #7"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/government/2-8.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Government #8"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/government/2-10.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Government #8"
        />,
    ]

    return (
        <Layout>
            <Carousel images={GOVERNMENT} />
        </Layout>
    )
}
export default Government
