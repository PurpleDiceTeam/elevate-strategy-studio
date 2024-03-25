<script>
export default {
    props: {
        buttonText: {
            type: String,
            required: true,
        },
        style: {
            type: Object,
            default: () => ({}),
        },
    },
};
</script>
<template>
    <button :style="style">{{ this.buttonText }}</button>
</template>

<style lang="scss">
button {
    cursor: pointer;
    border: none;
    padding: 16px 24px 16px 24px;
    border-radius: 45px;
    font-family: "FuturaBook";
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    transition: transform 0.5s ease;

    &:hover {
        text-decoration: none;
        transform: scale(1.1);
    }
}
</style>
