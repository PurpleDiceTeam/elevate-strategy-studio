<script>
import ButtonContact from "./ButtonContact.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import axios from "axios";

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
            posts: [],
            styleButton: {
                color: "#FFFFFF",
                background: "#FF645A",
                "box-shadow": " -8px 13px 38.599998474121094px 0px #4A4A4A40",
            },
            isLoading: true,
        };
    },
    methods: {
        async getPosts() {
            this.isLoading = false;
            try {
                const response = await axios.get(process.env.VUE_APP_PORTFOLIO);
                this.posts = response.data;
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                this.isLoading = false;
            }
        },
    },
    mounted() {
        this.getPosts();
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
                <div class="portfolio-header">
                    <div class="header-content">
                        <h2>Portfolio</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugit neque, veritatis qui atque perferendis
                            expedita numquam consectetur voluptatem. Inventore
                            placeat voluptatibus quae consequuntur quis
                            aspernatur odit est asperiores temporibus eius!
                        </p>
                    </div>
                </div>

                <swiper
                    v-if="!this.isLoading"
                    :pagination="{
                        dynamicBullets: true,
                    }"
                    :modules="modules"
                    class="mySwiper"
                >
                    <swiper-slide
                        v-for="project in this.posts"
                        :key="project.id"
                    >
                        <div class="carousel-content">
                            <div class="carousel-images">
                                <img
                                    v-for="(image, index) in project.acf.images"
                                    :src="image"
                                    :id="'image_' + index"
                                    alt=""
                                />
                            </div>
                            <div class="carousel-text">
                                <div class="text-category">
                                    <h1>BRANDING</h1>
                                </div>
                                <h2>{{ project.title.rendered }}</h2>
                                <img
                                    :src="project.acf.images[0]"
                                    alt="project-image"
                                />
                                <h3>Subtitle</h3>

                                <div v-html="project.content.rendered"></div>


                                <div class="portfolio-button">
                                    <a href="#contact">
                                        <ButtonContact
                                            :style="styleButton"
                                            :buttonText="'Connect With Us'"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
                <div class="portfolio-button-outside">
                    <a href="#contact">
                        <ButtonContact
                            :style="styleButton"
                            :buttonText="'Connect With Us'"
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.portfolio-container {
    display: flex;
    justify-content: center;
/*     background-image: url("@/assets/portfolio-bg.png"); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;


    .portfolio-content {
        padding: 0 5%;

        h1 {
            color: #1e1e1e;
            text-align: center;
            font-family: "FuturaBook";
            font-size: 32px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            text-transform: uppercase;
        }

        .portfolio-header {
            display: flex;
            justify-content: center;

            .header-content {
                max-width: 960px;
                h2 {
                    font-family: "FuturaBold";
                    font-size: 48px;
                    font-weight: 500;
                    line-height: 57.6px;
                    text-align: center;
                    color: #ff645a;
                }

                p {
                    padding-top: 24px;
                    font-family: "Montserrat";
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 32px;
                    letter-spacing: 0em;
                    text-align: center;
                }
            }
        }

        .carousel-content {
            padding: 50px 0;
            display: flex;

            .carousel-images {
                width: 100%;
                max-width: 50%;
                display: flex;
                flex-wrap: wrap;
                gap: 24px;

                img {
                    width: 312px;
                    height: auto;
                }
            }

            .carousel-text {
                width: 100%;
                max-width: 50%;

                .text-category {
                    padding-bottom: 16px;
                    border-bottom: solid 1px #8c8c8c;

                    h1 {
                        font-family: "FuturaBook";
                        font-size: 20px;
                        font-weight: 400;
                        line-height: 23.97px;
                        text-align: left;
                    }
                }

                img {
                    display: none;
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

        .portfolio-button-outside {
            display: none;
        }
    }

    @media (max-width: 1200px) {
        .portfolio-content {
            padding: 10px 0;
            /* margin: 0 5%; */
            .carousel-content {
                margin: 20px 5%;
                border: none;
                border-radius: 16px;
                padding: 24px;
                border: solid 1px rgb(0, 0, 0, 0.2);
                background: #f0f0f0;
                box-shadow: 0px 4px 34.9px 0px rgba(128, 128, 128, 0.25);

                .carousel-images {
                    display: none;
                }

                .carousel-text {
                    max-width: 100%;

                    img {
                        display: block;
                        padding-top: 20px;
                        width: 279px;
                    }

                    .portfolio-button {
                        display: none;
                    }
                }
            }
        }
    }
}
</style>
