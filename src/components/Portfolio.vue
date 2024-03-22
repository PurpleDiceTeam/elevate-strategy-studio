<script>
import ButtonContact from "./ButtonContact.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

export default {
    components: {
        Swiper,
        SwiperSlide,
        ButtonContact,
    },
    data() {
        return {
            styleButton: {
                color: "#FFFFFF",
                background: "#FF645A",
                "box-shadow": " -8px 13px 38.599998474121094px 0px #4A4A4A40",
            },
        };
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
};
</script>

<template>
    <div class="portfolio-container">
        <div class="custom-container">
            <div class="portfolio-content">
                <h1>Explore our solutions</h1>
                <div>
                    <h2>Portfolio</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit neque, veritatis qui atque perferendis expedita
                        numquam consectetur voluptatem. Inventore placeat
                        voluptatibus quae consequuntur quis aspernatur odit est
                        asperiores temporibus eius!
                    </p>
                </div>

                <swiper
                    :pagination="{
                        dynamicBullets: true,
                    }"
                    :modules="modules"
                    class="mySwiper"
                >
                    <swiper-slide>
                        <div class="carousel-content">
                            <div class="carousel-images">
                                <img
                                    src="@/assets/project-demo/project1.png"
                                    alt=""
                                />
                                <img
                                    src="@/assets/project-demo/project1.png"
                                    alt=""
                                />
                                <img
                                    src="@/assets/project-demo/project1.png"
                                    alt=""
                                />
                                <img
                                    src="@/assets/project-demo/project1.png"
                                    alt=""
                                />
                            </div>
                            <div class="carousel-text">
                                <div class="text-category">
                                    <h1>BRANDING</h1>
                                </div>
                                <h2>Title</h2>
                                <h3>Subtitle</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Earum tenetur rerum
                                    voluptatem omnis laudantium, culpa voluptate
                                    vel maiores aliquam impedit, natus nulla
                                    voluptates nisi officia ab corporis? Illum,
                                    alias placeat!
                                </p>
                                <h3>Subtitle</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Earum tenetur rerum
                                    voluptatem omnis laudantium, culpa voluptate
                                    vel maiores aliquam impedit, natus nulla
                                    voluptates nisi officia ab corporis? Illum,
                                    alias placeat!
                                </p>
                                <div class="portfolio-button">
                                    <ButtonContact
                                        :style="styleButton"
                                        :buttonText="'Connect With Us'"
                                    />
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="carousel-content">
                            <div class="carousel-images">
                                <img
                                    src="@/assets/project-demo/project2.png"
                                    alt=""
                                />
                                <img
                                    src="@/assets/project-demo/project2.png"
                                    alt=""
                                />
                                <img
                                    src="@/assets/project-demo/project2.png"
                                    alt=""
                                />
                                <img
                                    src="@/assets/project-demo/project2.png"
                                    alt=""
                                />
                            </div>
                            <div class="carousel-text">
                                <div class="text-category">
                                    <h1>BRANDING</h1>
                                </div>
                                <h2>Title</h2>
                                <h3>Subtitle</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Earum tenetur rerum
                                    voluptatem omnis laudantium, culpa voluptate
                                    vel maiores aliquam impedit, natus nulla
                                    voluptates nisi officia ab corporis? Illum,
                                    alias placeat!
                                </p>
                                <h3>Subtitle</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Earum tenetur rerum
                                    voluptatem omnis laudantium, culpa voluptate
                                    vel maiores aliquam impedit, natus nulla
                                    voluptates nisi officia ab corporis? Illum,
                                    alias placeat!
                                </p>
                                <div class="portfolio-button">
                                    <ButtonContact
                                        :style="styleButton"
                                        :buttonText="'Connect With Us'"
                                    />
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="carousel-content">
                            <div class="carousel-images">
                                <img
                                    src="@/assets/project-demo/project3.png"
                                    alt=""
                                />
                                <img
                                    src="@/assets/project-demo/project3.png"
                                    alt=""
                                />
                                <img
                                    src="@/assets/project-demo/project3.png"
                                    alt=""
                                />
                                <img
                                    src="@/assets/project-demo/project3.png"
                                    alt=""
                                />
                            </div>
                            <div class="carousel-text">
                                <div class="text-category">
                                    <h1>BRANDING</h1>
                                </div>
                                <h2>Title</h2>
                                <h3>Subtitle</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Earum tenetur rerum
                                    voluptatem omnis laudantium, culpa voluptate
                                    vel maiores aliquam impedit, natus nulla
                                    voluptates nisi officia ab corporis? Illum,
                                    alias placeat!
                                </p>
                                <h3>Subtitle</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Earum tenetur rerum
                                    voluptatem omnis laudantium, culpa voluptate
                                    vel maiores aliquam impedit, natus nulla
                                    voluptates nisi officia ab corporis? Illum,
                                    alias placeat!
                                </p>
                                <div class="portfolio-button">
                                    <ButtonContact
                                        :style="styleButton"
                                        :buttonText="'Connect With Us'"
                                    />
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="carousel-content">
                            <div class="carousel-images">
                                <img
                                    src="@/assets/project-demo/project4.png"
                                    alt=""
                                />
                                <img
                                    src="@/assets/project-demo/project4.png"
                                    alt=""
                                />
                                <img
                                    src="@/assets/project-demo/project4.png"
                                    alt=""
                                />
                                <img
                                    src="@/assets/project-demo/project4.png"
                                    alt=""
                                />
                            </div>
                            <div class="carousel-text">
                                <div class="text-category">
                                    <h1>BRANDING</h1>
                                </div>
                                <h2>Title</h2>
                                <h3>Subtitle</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Earum tenetur rerum
                                    voluptatem omnis laudantium, culpa voluptate
                                    vel maiores aliquam impedit, natus nulla
                                    voluptates nisi officia ab corporis? Illum,
                                    alias placeat!
                                </p>
                                <h3>Subtitle</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Earum tenetur rerum
                                    voluptatem omnis laudantium, culpa voluptate
                                    vel maiores aliquam impedit, natus nulla
                                    voluptates nisi officia ab corporis? Illum,
                                    alias placeat!
                                </p>
                                <div class="portfolio-button">
                                    <ButtonContact
                                        :style="styleButton"
                                        :buttonText="'Connect With Us'"
                                    />
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.portfolio-container {
    display: flex;
    justify-content: center;
    h2 {
        font-family: "FuturaBold";
        font-size: 48px;
        font-weight: 500;
        line-height: 57.6px;
        text-align: right;
        color: #ff645a;
    }

    p {
        font-family: "Montserrat";
        font-size: 20px;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: 0em;
        text-align: left;
    }

    .portfolio-content {
        padding: 0 5%;

        .carousel-content {
            padding: 50px 0;
            display: flex;

            .carousel-images {
                width: 100%;
                max-width: 50%;
                display: flex;
                flex-wrap: wrap;
                gap: 24px;
            }

            .carousel-text {
                width: 100%;
                max-width: 50%;
                .text-category {
                    padding-bottom: 16px;
                    border-bottom: solid 1px #8C8C8C;
                    
                    h1 {
                        font-family: "FuturaBook";
                        font-size: 20px;
                        font-weight: 400;
                        line-height: 23.97px;
                    }
                }

                h2 {
                    padding-top: 24px;
                    font-family: "FuturaBold";
                    font-size: 48px;
                    font-weight: 500;
                    line-height: 57.6px;
                    color: #ff645a;
                    text-align: left;
                }

                h3 {
                    padding-top: 12px;
                    font-family: "FuturaBold";
                    font-size: 24px;
                    font-weight: 500;
                    line-height: 38.4px;
                    text-align: left;
                }

                p {
                    font-family: "Montserrat";
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 32px;
                    text-align: left;
                }

                .portfolio-button {
                    padding-top: 48px;
                }
            }
        }
    }
}

/* .myswiper {
    padding: ;
} */
</style>
