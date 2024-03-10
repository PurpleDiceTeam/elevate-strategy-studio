<script>
import NavBar from "./NavBar.vue";
import ButtonContact from "./ButtonContact.vue";

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

        <div class="hero-bottom">
            <h2>Where <span>Strategy and Design</span> Converge</h2>

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

            <ButtonContact :style="styleButton" :buttonText="'Contact Us'" />
        </div>

        <img src="@/assets/hands.webp" alt="" />
    </div>
</template>

<style lang="scss">
.hero-container {
    height: 100vh;
    background-image: url("@/assets/Background.webp");
    background-position: center;

    .hero-top {
        margin-top: 115px;
        display: flex;
        justify-content: center;
        gap: 31px;
        align-items: flex-end;

        .top-left {
            font-family: "FuturaBook";
            font-size: 115px;
            font-weight: 600;
            line-height: 120px;
            letter-spacing: 0em;
            text-align: left;
        }

        .top-right {
            font-family: "FuturaBook";
            font-size: 64px;
            font-weight: 400;
            line-height: 76px;
            letter-spacing: 0em;
            text-align: left;
        }
    }

    .hero-bottom {
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 40px;
        position: relative;
        z-index: 2;
        font-family: "FuturaBook";
        font-size: 46px;
        font-weight: 300;
        line-height: 55px;
        letter-spacing: 0em;
        text-align: left;

        span {
            font-weight: 800;
        }
    }

    img {
        width: 100%;
        max-height: 500px;
        margin-top: -110px;
    }
}
</style>
