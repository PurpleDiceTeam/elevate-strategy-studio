<script>
import Hero from "@/components/Hero.vue";
import Footer from "@/components/Footer.vue";
import TimesUp from "@/components/TimesUp.vue";
import OurOffer from "@/components/OurOffer.vue";
import SetUsApart from "@/components/SetUsApart.vue";
import ContactUs from "@/components/ContactUs.vue"
import Portfolio from "@/components/Portfolio.vue";

export default {
    components: {
        Hero,
        TimesUp,
        OurOffer,
        SetUsApart,
        Portfolio,
        ContactUs,
        Footer,
    },
};
</script>

<template>
    <div class="body">
        <Hero />
        <div class="testing">
            <TimesUp />
            <OurOffer />
            <SetUsApart />
        </div>
        <Portfolio />
        <ContactUs />
        <Footer />
    </div>
</template>

<style lang="scss">
.body {

    .testing {
        background-image: url("@/assets/Rectangle 4.png");
        background-repeat: no-repeat;
    }
}
</style>
