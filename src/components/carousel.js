import * as React from "react"
import PropTypes from "prop-types"

const Carousel = ({ images }) =>  {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const numSlides = images.length - 1;
    const prevDisabled = currentSlide === 0;
    const nextDisabled = currentSlide === numSlides;

    return (<>
        <div
        style={{

            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            width: '100%',
        }}
        >
            <div
                style={{
                    width: "380px",
                    height: "380px",
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                }}
                key={currentSlide}
            >
                {Array.isArray(images) ? images[currentSlide] : null}
            </div>
            <div
                style={{
                    height: '40px',
                    width: '380px',
                    margin: '20px auto 0 auto',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    justifyContent: "space-between",
                }}
            >
                <button
                    style={{ 
                        width: '100px', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                    }}
                    onClick={e => setCurrentSlide(Math.max(currentSlide - 1, 0))}
                    disabled={prevDisabled}
                >
                    <div style={{
                        margin: '0 auto',
                        width: 0,
                        height: 0,
                        borderTop: '10px solid transparent',
                        borderBottom: '10px solid transparent',
                        borderRight: !prevDisabled ? '40px solid #ffffff' : '40px solid #999999',
                    }}></div>
                </button>
                <button
                    style={{
                        width: '100px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onClick={e => setCurrentSlide(Math.min(currentSlide + 1, numSlides))}
                    disabled={nextDisabled}
                >
                    <div style={{
                        margin: '0 auto',
                        width: 0,
                        height: 0,
                        borderTop: '10px solid transparent',
                        borderBottom: '10px solid transparent',
                        borderLeft: !nextDisabled ? '40px solid #ffffff' : '40px solid #999999',
                    }}></div>
                </button>
            </div>
        </div>
    </>)
}
Carousel.propTypes = {
    images: PropTypes.array,
}

Carousel.defaultProps = {
    images: [],
}

export default Carousel
