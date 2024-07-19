<script>
import NavBar from "@/components/NavBar.vue";
import Hero from "@/components/Hero.vue";
import Footer from "@/components/Footer.vue";
import TimesUp from "@/components/TimesUp.vue";
import OurOffer from "@/components/OurOffer.vue";
import SetUsApart from "@/components/SetUsApart.vue";
import Portfolio from "@/components/Portfolio.vue";
import Testimonials from "@/components/Testimonials.vue";
import ContactUs from "@/components/ContactUs.vue";

export default {
    components: {
        NavBar,
        Hero,
        TimesUp,
        OurOffer,
        SetUsApart,
        Portfolio,
        Testimonials,
        ContactUs,
        Footer,
    },
};
</script>

<template>
    <div class="home-hero-container">
        <NavBar />
        <Hero />
    </div>

    <div class="special-bg">
        <TimesUp />
        <OurOffer />
        <SetUsApart />
    </div>

    <Portfolio />
    <Testimonials />
    <ContactUs />

    <Footer />
</template>

<style lang="scss">
.home-hero-container {
    background-image: url("@/assets/Background.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.special-bg {
    margin-top: -170px;
    background-image: url("@/assets/complete-bg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 7;
}

.body {
    @media (max-width: 1200px) {
        display: none;
    }
}
</style>
