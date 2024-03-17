<script>
import Hero from '@/components/Hero.vue';
import Footer from '@/components/Footer.vue';
import TimesUp from '@/components/TimesUp.vue';
import OurOffer from '@/components/OurOffer.vue'


export default {
    components: {
        Hero,
        TimesUp,
        OurOffer,
        Footer
    }
};
</script>

<template>
    <div class="body">
        <Hero />
        <TimesUp />
        <OurOffer />
        <Footer />
    </div>
</template>

<style lang="scss">
    .body {
        background: #1B1B1B;
    }
</style>

