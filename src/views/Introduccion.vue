<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-sm-4
        figure
          img(src='@/assets/curso/temas/if1.svg', alt='')
      .col-lg-8
        p Estimado aprendiz, a través del presente componente formativo conocerá sobre las técnicas de validación, la ratificación de requisitos y los prototipos. La validación de requisitos permite asegurar que las necesidades detectadas, luego de realizar el levantamiento respectivo de la información, sean las correctas, lo que implica que el resultado final en materia de levantamiento de información sea el adecuado y, por lo tanto, el proyecto esté encaminado en la dirección acertada. En el siguiente video conocerá cada una de las temáticas que aquí se abordan. ¡Muchos éxitos en este proceso de aprendizaje!

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
