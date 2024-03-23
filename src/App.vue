<template>
    <router-view />
</template>

<style lang="scss">

* {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
}

@font-face {
    font-family: "FuturaBook";
    src: url("~@/assets/fonts/Futura Book font.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "FuturaBold";
    src: url("~@/assets/fonts/Futura Bold.otf") format("truetype");
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "Futura Hv BT";
    src: url("~@/assets/fonts/Futura Hv BT Heavy.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "Montserrat";
    src: url("~@/assets/fonts/Montserrat-VariableFont_wght.ttf")
        format("truetype");
    font-weight: normal;
    font-style: normal;
}

.custom-container {
    width: 85%;
    max-width: 1920px;
}
</style>
