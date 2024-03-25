<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
};
</script>

<template>
    <div class="testimonials-container">
        <div class="custom-container">
            <div class="testimonials-content">
                <div class="testimonials-top">
                    <h1>WHAT THE PEOPLE SAY ABOUT US</h1>
                    <h2>Testimonials</h2>
                </div>
                <swiper
                    :pagination="{
                        dynamicBullets: true,
                    }"
                    :modules="modules"
                    class="mySwiper"
                >
                    <swiper-slide>
                        <div class="testimonials-cards">
                            <div class="testimonial-card-large">
                                <div class="testimonial-card-header">
                                    <img
                                        src="@/assets/testimonial.png"
                                        alt=""
                                    />
                                    <div class="testimonial-card-header-info">
                                        <h3>Viviana B.</h3>
                                        <h4>CO-FOUNDER CARBONBOX</h4>
                                    </div>
                                </div>

                                <div class="testimonial-text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                            <div class="testimonial-card-small">
                                <div class="testimonial-info">
                                    <div class="testimonial-card-header">
                                        <img
                                            src="@/assets/testimonial.png"
                                            alt=""
                                        />
                                        <div
                                            class="testimonial-card-header-info"
                                        >
                                            <h3>Viviana B.</h3>
                                            <h4>CO-FOUNDER CARBONBOX</h4>
                                        </div>
                                    </div>

                                    <div class="testimonial-text">
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et
                                        </p>
                                    </div>
                                </div>
                                <div class="stylebox-middle"></div>
                                <div class="stylebox-right"></div>
                            </div>
                            <div class="testimonial-card-medium">
                                <div class="testimonial-info">
                                    <div class="testimonial-card-header">
                                        <img
                                            src="@/assets/testimonial.png"
                                            alt=""
                                        />
                                        <div
                                            class="testimonial-card-header-info"
                                        >
                                            <h3>Viviana B.</h3>
                                            <h4>CO-FOUNDER CARBONBOX</h4>
                                        </div>
                                    </div>

                                    <div class="testimonial-text">
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. eiusmod
                                            tempor incididunt ut labore.
                                        </p>
                                    </div>
                                </div>
                                <div class="stylebox">
                                    <div class="stylebox-top"></div>
                                    <div class="stylebox-bottom"></div>
                                </div>
                            </div>
                            <div class="testimonial-card-large">
                                <div class="testimonial-card-header">
                                    <img
                                        src="@/assets/testimonial.png"
                                        alt=""
                                    />
                                    <div class="testimonial-card-header-info">
                                        <h3>Viviana B.</h3>
                                        <h4>CO-FOUNDER CARBONBOX</h4>
                                    </div>
                                </div>

                                <div class="testimonial-text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="testimonials-cards">
                            <div class="testimonial-card-large">
                                <div class="testimonial-card-header">
                                    <img
                                        src="@/assets/testimonial.png"
                                        alt=""
                                    />
                                    <div class="testimonial-card-header-info">
                                        <h3>Viviana B.</h3>
                                        <h4>CO-FOUNDER CARBONBOX</h4>
                                    </div>
                                </div>

                                <div class="testimonial-text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                            <div class="testimonial-card-small">
                                <div class="testimonial-info">
                                    <div class="testimonial-card-header">
                                        <img
                                            src="@/assets/testimonial.png"
                                            alt=""
                                        />
                                        <div
                                            class="testimonial-card-header-info"
                                        >
                                            <h3>Viviana B.</h3>
                                            <h4>CO-FOUNDER CARBONBOX</h4>
                                        </div>
                                    </div>

                                    <div class="testimonial-text">
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et
                                        </p>
                                    </div>
                                </div>
                                <div class="stylebox-middle"></div>
                                <div class="stylebox-right"></div>
                            </div>
                            <div class="testimonial-card-medium">
                                <div class="testimonial-info">
                                    <div class="testimonial-card-header">
                                        <img
                                            src="@/assets/testimonial.png"
                                            alt=""
                                        />
                                        <div
                                            class="testimonial-card-header-info"
                                        >
                                            <h3>Viviana B.</h3>
                                            <h4>CO-FOUNDER CARBONBOX</h4>
                                        </div>
                                    </div>

                                    <div class="testimonial-text">
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. eiusmod
                                            tempor incididunt ut labore.
                                        </p>
                                    </div>
                                </div>
                                <div class="stylebox">
                                    <div class="stylebox-top"></div>
                                    <div class="stylebox-bottom"></div>
                                </div>
                            </div>
                            <div class="testimonial-card-large">
                                <div class="testimonial-card-header">
                                    <img
                                        src="@/assets/testimonial.png"
                                        alt=""
                                    />
                                    <div class="testimonial-card-header-info">
                                        <h3>Viviana B.</h3>
                                        <h4>CO-FOUNDER CARBONBOX</h4>
                                    </div>
                                </div>

                                <div class="testimonial-text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="testimonials-cards">
                            <div class="testimonial-card-large">
                                <div class="testimonial-card-header">
                                    <img
                                        src="@/assets/testimonial.png"
                                        alt=""
                                    />
                                    <div class="testimonial-card-header-info">
                                        <h3>Viviana B.</h3>
                                        <h4>CO-FOUNDER CARBONBOX</h4>
                                    </div>
                                </div>

                                <div class="testimonial-text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                            <div class="testimonial-card-small">
                                <div class="testimonial-info">
                                    <div class="testimonial-card-header">
                                        <img
                                            src="@/assets/testimonial.png"
                                            alt=""
                                        />
                                        <div
                                            class="testimonial-card-header-info"
                                        >
                                            <h3>Viviana B.</h3>
                                            <h4>CO-FOUNDER CARBONBOX</h4>
                                        </div>
                                    </div>

                                    <div class="testimonial-text">
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et
                                        </p>
                                    </div>
                                </div>
                                <div class="stylebox-middle"></div>
                                <div class="stylebox-right"></div>
                            </div>
                            <div class="testimonial-card-medium">
                                <div class="testimonial-info">
                                    <div class="testimonial-card-header">
                                        <img
                                            src="@/assets/testimonial.png"
                                            alt=""
                                        />
                                        <div
                                            class="testimonial-card-header-info"
                                        >
                                            <h3>Viviana B.</h3>
                                            <h4>CO-FOUNDER CARBONBOX</h4>
                                        </div>
                                    </div>

                                    <div class="testimonial-text">
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. eiusmod
                                            tempor incididunt ut labore.
                                        </p>
                                    </div>
                                </div>
                                <div class="stylebox">
                                    <div class="stylebox-top"></div>
                                    <div class="stylebox-bottom"></div>
                                </div>
                            </div>
                            <div class="testimonial-card-large">
                                <div class="testimonial-card-header">
                                    <img
                                        src="@/assets/testimonial.png"
                                        alt=""
                                    />
                                    <div class="testimonial-card-header-info">
                                        <h3>Viviana B.</h3>
                                        <h4>CO-FOUNDER CARBONBOX</h4>
                                    </div>
                                </div>

                                <div class="testimonial-text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="testimonials-cards">
                            <div class="testimonial-card-large">
                                <div class="testimonial-card-header">
                                    <img
                                        src="@/assets/testimonial.png"
                                        alt=""
                                    />
                                    <div class="testimonial-card-header-info">
                                        <h3>Viviana B.</h3>
                                        <h4>CO-FOUNDER CARBONBOX</h4>
                                    </div>
                                </div>

                                <div class="testimonial-text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                            <div class="testimonial-card-small">
                                <div class="testimonial-info">
                                    <div class="testimonial-card-header">
                                        <img
                                            src="@/assets/testimonial.png"
                                            alt=""
                                        />
                                        <div
                                            class="testimonial-card-header-info"
                                        >
                                            <h3>Viviana B.</h3>
                                            <h4>CO-FOUNDER CARBONBOX</h4>
                                        </div>
                                    </div>

                                    <div class="testimonial-text">
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et
                                        </p>
                                    </div>
                                </div>
                                <div class="stylebox-middle"></div>
                                <div class="stylebox-right"></div>
                            </div>
                            <div class="testimonial-card-medium">
                                <div class="testimonial-info">
                                    <div class="testimonial-card-header">
                                        <img
                                            src="@/assets/testimonial.png"
                                            alt=""
                                        />
                                        <div
                                            class="testimonial-card-header-info"
                                        >
                                            <h3>Viviana B.</h3>
                                            <h4>CO-FOUNDER CARBONBOX</h4>
                                        </div>
                                    </div>

                                    <div class="testimonial-text">
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. eiusmod
                                            tempor incididunt ut labore.
                                        </p>
                                    </div>
                                </div>
                                <div class="stylebox">
                                    <div class="stylebox-top"></div>
                                    <div class="stylebox-bottom"></div>
                                </div>
                            </div>
                            <div class="testimonial-card-large">
                                <div class="testimonial-card-header">
                                    <img
                                        src="@/assets/testimonial.png"
                                        alt=""
                                    />
                                    <div class="testimonial-card-header-info">
                                        <h3>Viviana B.</h3>
                                        <h4>CO-FOUNDER CARBONBOX</h4>
                                    </div>
                                </div>

                                <div class="testimonial-text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
                <!--                 <div class="testimonials-cards">
                    <div class="testimonial-card-large">
                        <div class="testimonial-card-header">
                            <img src="@/assets/testimonial.png" alt="" />
                            <div class="testimonial-card-header-info">
                                <h3>Viviana B.</h3>
                                <h4>CO-FOUNDER CARBONBOX</h4>
                            </div>
                        </div>

                        <div class="testimonial-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </div>
                    </div>
                    <div class="testimonial-card-small">
                        <div class="testimonial-info">
                            <div class="testimonial-card-header">
                                <img src="@/assets/testimonial.png" alt="" />
                                <div class="testimonial-card-header-info">
                                    <h3>Viviana B.</h3>
                                    <h4>CO-FOUNDER CARBONBOX</h4>
                                </div>
                            </div>

                            <div class="testimonial-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et
                                </p>
                            </div>
                        </div>
                        <div class="stylebox-middle"></div>
                        <div class="stylebox-right"></div>
                    </div>
                    <div class="testimonial-card-medium">
                        <div class="testimonial-info">
                            <div class="testimonial-card-header">
                                <img src="@/assets/testimonial.png" alt="" />
                                <div class="testimonial-card-header-info">
                                    <h3>Viviana B.</h3>
                                    <h4>CO-FOUNDER CARBONBOX</h4>
                                </div>
                            </div>

                            <div class="testimonial-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    eiusmod tempor incididunt ut labore.
                                </p>
                            </div>
                        </div>
                        <div class="stylebox">
                            <div class="stylebox-top"></div>
                            <div class="stylebox-bottom"></div>
                        </div>
                    </div>
                    <div class="testimonial-card-large">
                        <div class="testimonial-card-header">
                            <img src="@/assets/testimonial.png" alt="" />
                            <div class="testimonial-card-header-info">
                                <h3>Viviana B.</h3>
                                <h4>CO-FOUNDER CARBONBOX</h4>
                            </div>
                        </div>

                        <div class="testimonial-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.testimonials-container {
    display: flex;
    justify-content: center;
    background-color: #1e1e1e;

    .testimonials-content {
        padding: 120px 5%;

        .testimonials-top {
            h1 {
                width: 100%;
                font-family: "FuturaBook";
                font-size: 32px;
                color: #ffffff;
                font-weight: 400;
                text-align: right;
            }

            h2 {
                font-family: "FuturaBold";
                font-size: 48px;
                font-weight: 500;
                line-height: 58px;
                color: #21bec5;
                text-align: right;
            }
        }

        .testimonials-cards {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
            grid-gap: 24px;
            margin-bottom: 25px;

            .testimonial-card-large {
                background: linear-gradient(
                    270deg,
                    #252525 0%,
                    rgba(37, 37, 37, 0) 100%
                );
                display: flex;
                padding: 24px;
                flex-direction: column;
                align-items: flex-start;
                gap: 16px;

                .testimonial-card-header {
                    display: flex;
                    align-items: center;
                    gap: 16px;

                    img {
                        width: 80px;
                        height: 80px;
                        border-radius: 10px;
                    }

                    .testimonial-card-header-info {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 8px;

                        h3 {
                            color: #e0e0e0;
                            font-family: "Futura Hv BT";
                            font-size: 32px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 90%; /* 28.8px */
                        }

                        h4 {
                            color: #fff;
                            text-align: right;
                            font-family: "FuturaBook";
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: normal;
                            text-transform: uppercase;
                        }
                    }
                }

                .testimonial-text {
                    p {
                        color: #e0e0e0;
                        font-family: "Montserrat";
                        font-size: 20px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 140%; /* 28px */
                    }
                }
            }

            .testimonial-card-small {
                display: flex;
                gap: 24px;

                .testimonial-info {
                    background: linear-gradient(
                        270deg,
                        #252525 0%,
                        rgba(37, 37, 37, 0) 100%
                    );
                    width: 100%;
                    max-width: 442px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    padding: 24px;
                    gap: 16px;

                    .testimonial-card-header {
                        display: flex;
                        align-items: center;
                        gap: 16px;

                        img {
                            width: 80px;
                            height: 80px;
                            border-radius: 10px;
                        }

                        .testimonial-card-header-info {
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            gap: 8px;

                            h3 {
                                color: #e0e0e0;
                                font-family: "Futura Hv BT";
                                font-size: 32px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 90%; /* 28.8px */
                            }

                            h4 {
                                color: #fff;
                                text-align: right;
                                font-family: "FuturaBook";
                                font-size: 16px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: normal;
                                text-transform: uppercase;
                            }
                        }
                    }

                    .testimonial-text {
                        p {
                            color: #e0e0e0;
                            font-family: "Montserrat";
                            font-size: 20px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 140%; /* 28px */
                        }
                    }
                }

                .stylebox-middle {
                    width: 200px;
                    border-radius: 12px;
                    background: linear-gradient(
                        270deg,
                        #252525 0%,
                        rgba(37, 37, 37, 0) 100%
                    );
                }

                .stylebox-right {
                    width: 88px;
                    border-radius: 12px;
                    background: linear-gradient(
                        270deg,
                        #252525 0%,
                        rgba(37, 37, 37, 0) 100%
                    );
                }
            }

            .testimonial-card-medium {
                display: flex;
                gap: 24px;

                .testimonial-info {
                    background: linear-gradient(
                        270deg,
                        #252525 0%,
                        rgba(37, 37, 37, 0) 100%
                    );
                    width: 100%;
                    max-width: 442px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    padding: 24px;
                    gap: 16px;

                    .testimonial-card-header {
                        display: flex;
                        align-items: center;
                        gap: 16px;

                        img {
                            width: 80px;
                            height: 80px;
                            border-radius: 10px;
                        }

                        .testimonial-card-header-info {
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            gap: 8px;

                            h3 {
                                color: #e0e0e0;
                                font-family: "Futura Hv BT";
                                font-size: 32px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 90%; /* 28.8px */
                            }

                            h4 {
                                color: #fff;
                                text-align: right;
                                font-family: "FuturaBook";
                                font-size: 16px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: normal;
                                text-transform: uppercase;
                            }
                        }
                    }

                    .testimonial-text {
                        p {
                            color: #e0e0e0;
                            font-family: "Montserrat";
                            font-size: 20px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 140%; /* 28px */
                        }
                    }
                }

                .stylebox {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    width: 50%;
                    .stylebox-top {
                        height: 60%;
                        width: 100%;
                        border-radius: 12px;
                        background: linear-gradient(
                            0deg,
                            #252525 0%,
                            rgba(37, 37, 37, 0) 100%,
                            rgba(37, 37, 37, 0) 100%
                        );
                    }

                    .stylebox-bottom {
                        height: 40%;
                        width: 100%;
                        border-radius: 12px;
                        background: linear-gradient(
                            0deg,
                            #252525 0%,
                            rgba(37, 37, 37, 0) 100%,
                            rgba(37, 37, 37, 0) 100%
                        );
                    }
                }
            }
        }
    }
}
</style>
