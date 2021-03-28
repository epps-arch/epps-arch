import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Carousel from "../components/carousel"
import Layout from "../components/layout"

const IndexPage = () => {
    const IMAGE = [
        <StaticImage
            backgroundColor="#444444"
            placeholder="none"
            src="../images/residential/phil-mtn-000.jpg"
            width={255}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Residential"
        />,
    ]
    return (
        <Layout>
          <Carousel images={IMAGE} />
        </Layout>
    )
}

export default IndexPage
