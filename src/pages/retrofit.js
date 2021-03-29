import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Carousel from "../components/carousel"

import Layout from "../components/layout"

const Retrofit = () => {
    const RETROFIT = [
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/kerrisons-001.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/kerrisons-002.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/phillips-001.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/phillips-002.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/phillips-003.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/phillips-004.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/phillips-005.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/phillips-006.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/phillips-007.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/phillips-008.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/tradd-001.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/tradd-002.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/east-bay-001.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/east-bay-002.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/east-bay-003.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/east-bay-004.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/king-001.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/king-002.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/king-003.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/king-004.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/king-005.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/king-006.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/king-007.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/king-008.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/king-009.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/george-001.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/george-002.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/george-003.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/george-004.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/george-005.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/epps-baldwin-001.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/bird-house-001.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit"
        />,
    ]

    return (
        <Layout>
            <Carousel images={RETROFIT} />
        </Layout>
    )
}
export default Retrofit
