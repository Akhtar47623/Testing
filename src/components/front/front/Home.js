import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    return (
        <>
            <section className='main-banner'>
                <Carousel>
                    <Carousel.Item>
                        <img src="https://avatars.mds.yandex.net/i?id=986a8aefa37b9d37864519551e1f95e3d42015d4-6071858-images-thumbs&n=13"></img>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2016_15/1498861/160411-jeremy-sicile-kira-autism-549p.jpg"></img>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='https://images.wallpaperscraft.ru/image/single/ballonchiki_kraska_graffiti_153922_2560x1440.jpg'></img>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='https://mirledi.net/wp-content/uploads/2020/05/chto-podarit-sestre-na-den-rozhdenija-3.jpg'></img>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            abc
                        </Carousel.Caption>
                    </Carousel.Item>


                </Carousel>
            </section>
            <section className="about-us-sec">
                <div className="about-title">
                    <h2>About Us</h2>
                </div>
                <div className="about-short-desc">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto quod pariatur sapiente recusandae a veniam dicta eos! Ullam veniam fugit quos sint </p>
                </div>
                <div className="row">
                    <div className="about-us-box">
                        <div className="col-md-6">
                            <div className="about-title">
                                <h2>About us</h2>
                            </div>
                            <div className="about-desc">
                                <p className='about-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto quod pariatur sapiente recusandae a veniam dicta eos! Ullam veniam fugit quos sint ipsum commodi molestiae laboriosam excepturi dolorem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto quod pariatur sapiente recusandae a veniam dicta eos! Ullam veniam fugit quos sint ipsum commodi molestiae laboriosam excepturi dolorem.</p>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="about-img">
                                <img src='https://mirledi.net/wp-content/uploads/2020/05/chto-podarit-sestre-na-den-rozhdenija-3.jpg'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home