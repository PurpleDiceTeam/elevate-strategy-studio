<script>
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
    <Hero />
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
.special-bg {
    background-image: url("@/assets/complete-bg.png");
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-top: -100px;
    position: relative;
    z-index: 5;
}

.body {
    @media (max-width: 1200px) {
        display: none;
    }
}
</style>
