<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import axios from "axios";

import "swiper/css";
import "swiper/css/pagination";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            testimonials: [],
            isLoading: true,
            testimonialsPerSlide: 4 // Define the number of testimonials per slide
        };
    },
    methods: {
        async getTestimonials() {
            this.isLoading = true; // Set isLoading to true when fetching data
            try {
                const response = await axios.get(
                    "https://elevatess.000webhostapp.com/wp-json/wp/v2/project?acf_format=standard"
                    /* "http://localhost/gonzawordpress/index.php/wp-json/wp/v2/testimonial?acf_format=standard" */
                );
                this.testimonials = response.data;
                console.log(this.testimonials);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                this.isLoading = false; // Set isLoading to false after fetching data
            }
        },
        chunkTestimonials(testimonials, size) {
            // Function to split testimonials into chunks
            const chunkedArray = [];
            for (let i = 0; i < testimonials.length; i += size) {
                chunkedArray.push(testimonials.slice(i, i + size));
            }
            return chunkedArray;
        },
    },
    computed: {
        testimonialsChunks() {
            // Compute the chunks of testimonials
            return this.chunkTestimonials(this.testimonials, this.testimonialsPerSlide);
        },
    },
    mounted() {
        this.getTestimonials();
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
                    <swiper-slide v-for="(chunk, index) in testimonialsChunks" :key="index">
                        <div class="testimonials-cards">
                            <div
                                :class="{
                                    'testimonial-card-small':
                                        testimonial.acf.testimonial.length <
                                        100,
                                    'testimonial-card-medium':
                                        testimonial.acf.testimonial.length >=
                                            100 &&
                                        testimonial.acf.testimonial.length <
                                            150,
                                    'testimonial-card-large':
                                        testimonial.acf.testimonial.length >=
                                        150,
                                }"
                                v-for="testimonial in chunk"
                                :key="testimonial.id"
                            >
                                <div class="testimonial-info">
                                    <div class="testimonial-card-header">
                                        <img
                                            :src="testimonial.acf.profile_image"
                                            alt=""
                                        />
                                        <div
                                            class="testimonial-card-header-info"
                                        >
                                            <h3>{{ testimonial.acf.name }}</h3>
                                            <h4>
                                                {{ testimonial.acf.charge }}
                                            </h4>
                                        </div>
                                    </div>

                                    <div class="testimonial-text">
                                        <p>
                                            {{ testimonial.acf.testimonial }}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    class="stylebox-middle"
                                    v-if="
                                        testimonial.acf.testimonial.length < 100
                                    "
                                ></div>
                                <div
                                    class="stylebox-right"
                                    v-if="
                                        testimonial.acf.testimonial.length < 100
                                    "
                                ></div>

                                <div
                                    class="stylebox"
                                    v-if="
                                        testimonial.acf.testimonial.length >
                                            100 &&
                                        testimonial.acf.testimonial.length < 150
                                    "
                                >
                                    <div class="stylebox-top"></div>
                                    <div class="stylebox-bottom"></div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="testimonial-mobile">
                        
                    </div>
                </swiper>
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
                        padding-top: 16px;
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
