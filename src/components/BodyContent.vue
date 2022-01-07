<template>
    <div class="Content">
        <img src="../assets/image.png" >
        <h6 class="BodyTitle"> {{title}} </h6>
        <p class="BodyText">{{text}}</p>
        <p class = "BenefitText"> Benefit from it now !</p>
    </div>

</template>

<script>
export default {
  name: 'BodyContent',
  props: {
    title: String,
    text: String,
  }
}
</script>

<style lang = "scss">

    @import "../scss/body.scss";

</style>
