import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Carousel from "../components/carousel"
import Layout from "../components/layout"

const Residential = () => {

    const RESIDENTIAL = [
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/phil-mtn-001.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/phil-mtn-002.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/phil-mtn-003.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/phil-mtn-003a.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/phil-mtn-004.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/phil-mtn-005.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/phil-mtn-005a.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/phil-mtn-006.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/phil-mtn-006a.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/phil-mtn-007.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/phil-mtn-008.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/romain-001.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/romain-002.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/romain-003.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/romain-004.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/gibbes-001.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/gibbes-002.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/gibbes-003.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/notz-001.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/notz-002.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/notz-003.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/notz-004.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/notz-005.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/marshall-001.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/marshall-001a.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/marshall-002.jpg"
            width={380}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/marshall-002a.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/hayden-001.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/hayden-002.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
    ]
    return (
        <Layout>
          <Carousel images={RESIDENTIAL} />
        </Layout>
    )
}

export default Residential
