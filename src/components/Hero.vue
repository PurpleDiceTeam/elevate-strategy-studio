<script>
import NavBar from "./NavBar.vue";
import ButtonContact from "./ButtonContact.vue";
import axios from "axios";

export default {
    components: {
        NavBar,
        ButtonContact,
    },
    data() {
        return {
            styleButton: {
                color: "#1d4244",
                background: "#21bec5",
            },
            isLoading: true,
            title_left: "",
            title_right: "",
            subtitle_left: "",
            subtitle_dark: "",
            subtitle_right: "",
        };
    },
};
</script>

<template>
    <div class="hero-container">
        <NavBar class="navbar-hero" />
        <div class="hero-top">
            <h1 class="top-left">Elevate</h1>
            <svg
                width="7"
                height="98"
                viewBox="0 0 7 98"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M3.5 3.41113L3.5 94.589"
                    stroke="#FF645A"
                    stroke-width="6.51271"
                    stroke-linecap="round"
                />
            </svg>
            <h1 class="top-right">YOUR VISION</h1>
        </div>

        <div class="hero-bottom" >
            <h2>
                Where <span>Strategy and Design </span>
                Converge
            </h2>

            <svg
                width="89"
                height="2"
                viewBox="0 0 89 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1.5166 0.688477H87.4843"
                    stroke="#FF645A"
                    stroke-width="1.30254"
                    stroke-linecap="round"
                />
            </svg>
        </div>

        <div class="hero-button">
            <a href="#contact">
                <ButtonContact
                    :style="styleButton"
                    :buttonText="'Contact Us'"
                />
            </a>
        </div>
    </div>
</template>

<style lang="scss">
.hero-container {
    height: 100vh;
    background-image: url("@/assets/Background.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 4;

    .hero-top {
        margin-top: 115px;
        display: flex;
        justify-content: center;
        gap: 31px;
        align-items: flex-end;

        .top-left {
            font-family: "Futura Hv BT";
            font-size: 115px;
            font-weight: 400;
            line-height: 120px;
            letter-spacing: 0em;
            text-align: left;
            color: #1d4244;
        }

        .top-right {
            font-family: "FuturaBook";
            font-size: 64px;
            font-weight: 400;
            line-height: 76px;
            letter-spacing: 0em;
            text-align: left;
            color: #1d4244;
        }
    }

    .hero-bottom {
        margin: 30px auto;
        margin-bottom: 0;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        position: relative;
        z-index: 2;
        font-family: "FuturaBook";
        font-size: 32px;
        font-weight: 300;
        text-align: left;
        color: #1d4244;

        span {
            font-family: "Futura Hv BT";
            font-weight: 500;
        }
    }

    .hero-button {
        padding-top: 20px;
        background-image: url("@/assets/hands.webp");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 45vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    @media(max-width: 1200px) {
        .hero-top,
        .hero-bottom,
        .hero-button {
            display: none;
        }
    }
}
</style>
