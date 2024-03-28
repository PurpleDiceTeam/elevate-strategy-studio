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
    <div class="body">
        <div class="testing">
            <TimesUp />
            <OurOffer />
            <SetUsApart />
        </div>
        <Portfolio />
        <Testimonials />
    </div>
    <ContactUs />
    <Footer />
</template>

<style lang="scss">
.body {
    @media (max-width: 1200px) {
        display: none;
    }
    .testing {
        background-image: url("@/assets/Rectangle 4.png");
        background-repeat: no-repeat;
    }
}
</style>
