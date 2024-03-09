<template>
    <router-view />
</template>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}

@font-face {
    font-family: 'FuturaBook';
    src: url('~@/assets/fonts/Futura Book font.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('~@/assets/fonts/Montserrat-VariableFont_wght.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

.custom-container {
    width: 70%;
    max-width: 1320px;
}
</style>
