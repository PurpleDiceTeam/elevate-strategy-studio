<script>
import Hero from '@/components/Hero.vue';
import Footer from '@/components/Footer.vue'
import TimesUp from '@/components/TimesUp.vue'


export default {
    components: {
        Hero,
        TimesUp,
        Footer
    }
};
</script>

<template>
    <div>
        <Hero />
        <TimesUp />
        <Footer />
    </div>
</template>

