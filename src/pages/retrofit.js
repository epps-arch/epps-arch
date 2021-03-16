import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Carousel from "../components/carousel"

import Layout from "../components/layout"

const Retrofit = () => {
    const RETROFIT = [
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/3-1.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit #1"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/3-2.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit #2"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/3-10.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit #3"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/3-4.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit #4"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/3-5.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit #5"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/3-6.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit #6"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/3-7.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit #7"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/3-8.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit #8"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/3-9.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit #9"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/3-12.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit #10"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/3-3.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit #11"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/3-13.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit #12"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/3-16.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit #13"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/3-14.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit #14"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/3-15.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit #15"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/3-17.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit #16"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/3-18.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit #17"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/3-19.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit #18"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/3-20.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit #19"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/3-21.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit #20"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/retrofit/3-22.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Retrofit #21"
        />,
    ]

    return (
        <Layout>
            <Carousel images={RETROFIT} />
        </Layout>
    )
}
export default Retrofit
