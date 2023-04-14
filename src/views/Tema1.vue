<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Técnicas de validación

    p Es necesario partir de una pregunta que podría ser básica: ¿realmente se está confeccionando el 
      em software 
      | correcto? en otras palabras, ¿verdaderamente se está yendo por el camino adecuado?

    .col-md-10.mx-auto.mb-5.invertido
      .bloque-texto-a.color-secundario.bg1.p-4.p-md-5.mb-5
        .row.m-0.align-items-center.justify-content-between
          .col-lg-9
            .bloque-texto-a__texto.p-4
              p.mb-0 Para responder a esta pregunta, primero se debe validar que los requisitos sean los correctos, como preámbulo para reconocer el camino correcto, pues este primer paso indica, efectivamente, lo que se debe hacer, de forma general. Es decir, que el producto que se está construyendo, cumpla con las expectativas del cliente y, por ende, se trabaje acorde con las especificaciones dadas por este. Por lo anterior, se requiere que se haga una validación desde el inicio. Por ningún motivo se debe avanzar sin haber realizado esta verificación, entre muchas razones, porque es común cometer errores durante la fase de análisis y, consecuentemente, es más “económico” o menos traumático enmendar dichos errores, durante las fases iniciales. En resumen, es vital no avanzar con faltas, porque el resultado podría ser adverso. Por otra parte, se debe tener la claridad en que la validación de dichos requerimientos no solucionará todos los problemas. En concreto, solamente cuando se está implementando el 
                em software 
                | es cuando se puede comprobar la efectividad de este. 
          .col-lg-3.mb-4.mb-lg-0
            
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/t1/f2.svg', alt='')
      .col-lg-9
        p Ahora bien, con definir los requisitos, la labor no queda aún terminada y se está en la obligación de validarlos, como fórmula efectiva, para asegurar que el análisis que se realizó o se está realizando, sea el correcto. A decir verdad, la industria del desarrollo de 
          em software
          |, en este aspecto, tiene pocas posibilidades; lo más frecuente y común es reunirse con el cliente y revisar los modelos construidos para detectar errores, omisiones, e incluso, malas interpretaciones. (Echeverri, 
          em et al
          |, 2013)

        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 A continuación, se estudian las técnicas para validar requisitos, que pueden ser muchos, entre otras cosas porque tienen una subjetividad muy alta e incluso, pueden variar dependiendo de un autor a otro.

    separador

    #t_1_1(data-aos='fade-right')
      h3 Matriz de trazabilidad

    p Se conoce como la tabla, se utiliza para relacionar los requerimientos presentados con el entregable que ha sido solicitado.

    .tarjeta.fcs15.p-4.mb-5
      SlyderA.color-acento-botones(tipo='b')
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            p Lo más cercano a la perfección de equilibrio entre los requerimientos y objetivos de un proyecto de desarrollo de 
              em software
              | , garantiza el éxito de dicho proyecto. No obstante, existen pasos previos que se deben realizar con igual o mayor responsabilidad, puesto que implica construir bases sólidas que garanticen el éxito del proyecto. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t1/f3.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            p Es preciso comenzar con la llamada delimitación del proyecto, donde el alcance de este, es protagonista de primer orden, puesto que se genera con el registro de todos y cada uno de los requerimientos levantados. En este punto, es donde entra la 
              b matriz de trazabilidad 
              |que consiste en realizar una comparación entre los objetivos del sistema, contra los requisitos levantados, teniendo especial cuidado en contemplar todos y cada uno de los objetivos, para poder detectar inconsistencias. Ahora bien, hay que recordar que la matriz de trazabilidad es un cuadro o tabla, donde se relacionan todos y cada uno de los requerimientos levantados, con su respectivo entregable, previamente determinado, lo cual permite identificar y verificar cada resultado obtenido, contra cada requisito solicitado, versus entregables planeados. (Duque, 2022)
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t1/f4.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            p Se debe recordar que esta matriz, cuando está construida correctamente, debe ser de doble vía, lo cual implica que, a partir de cualquier requerimiento, puede llegarse, sin mayores tropiezos a un entregable. Lo contrario, es decir, si se parte del entregable, se debería llegar al requerimiento. Por supuesto que esta ventaja va de la mano con los objetivos, esto es, cada requerimiento va de la mano con los objetivos del proyecto, incluidos los objetivos organizacionales. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t1/f5.png', alt='Texto que describa la imagen')

    p.mb-4 A continuación, se explica la forma de diligenciar la matriz de trazabilidad de requisitos, puesto que es una de las técnicas más importantes y utilizadas a lo largo de los años.

    .col-md-10.mx-auto.mb-5
      //.titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 1.
        p.mb-0: em Matriz de trazabilidad de requisitos
      h3.text-center 

      ImagenInfografica.color-acento-contenido.mb-5
        template(v-slot:imagen)
          figure
            img.mb-2(src='@/assets/curso/temas/t1/f6.svg', alt='Texto que describa la imagen')
            figcaption Nota. Adaptada de Slideshare (2015).
              a(href="https://es.slideshare.net/roberto1603/matriz-de-trazabilidad-47949810" target="_blank") https://es.slideshare.net/roberto1603/matriz-de-trazabilidad-47949810
        .tarjeta.p-3(x="2%" y="63%" numero="1" style="background-color: #FFECC1")
          .h5.mb-2.text-center Identificador único (ID)
          p.text-center.mb-0 La organización define un estándar para numerar cada requisito del proyecto e identificarlo unívocamente. 
        .tarjeta.p-3(x="13%" y="63%" numero="2" style="background-color: #FFECC1")
          .h5.mb-2.text-center Requisito
          p.text-center.mb-0 En qué consiste el requerimiento del proyecto.
        .tarjeta.p-3(x="26.5%" y="63%" numero="3" style="background-color: #FFECC1")
          .h5.mb-2.text-center Prioridad 
          p.text-center.mb-0 Puede ser alta, media y baja, según sea el caso.
        .tarjeta.p-3(x="36%" y="63%" numero="4" style="background-color: #FFECC1")
          .h5.mb-2.text-center Estado actual
          p.text-center.mb-0 La guía establece los siguientes estados en los que puede encontrarse un requerimiento.
        .tarjeta.p-3(x="46%" y="63%" numero="5" style="background-color: #FFECC1")
          .h5.mb-2.text-center Objetivo
          p.text-center.mb-0 Descripción del objetivo del requisito. 
        .tarjeta.p-3(x="60%" y="63%" numero="6" style="background-color: #FFECC1")
          .h5.mb-2.text-center Funcionalidad
          p.text-center.mb-0 Describir la funcionalidad de requisito.
        .tarjeta.p-3(x="76%" y="63%" numero="7" style="background-color: #FFECC1")
          .h5.mb-2.text-center Estado del entregable
          p.text-center.mb-0 Los estados posibles en los que puede encontrarse un requerimiento son: activo, cancelado, diferido, agregado, aprobado, asignado, completado.
        .tarjeta.p-3(x="92%" y="63%" numero="8" style="background-color: #FFECC1")
          .h5.mb-2.text-center Fecha de estado
          p.text-center Es la fecha en la que se estableció el último cambio de estado del requerimiento. 
          .h5.mb-2.text-center Propietario
          p.text-center.mb-0 Persona responsable de velar porque se logren los resultados con el requerimiento.

    p En el siguiente video se puede conocer más sobre la matriz de trazabilidad, es fundamental prestar mucha atención a las explicaciones que allí se detallan:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ZCzx5wPNrgk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Matriz de trazabilidad

    separador

    #t_1_2(data-aos='fade-right')
      h3 Auditorías

    p A continuación, se encuentran la definición y la norma que se deben tener en cuenta en el desarrollo de las auditorías.

    .row.justify-content-center.mb-5
      .col-lg-5
        .crd_hover_txt.color-primario
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/temas/t1/f7.jpg', alt='')
          .crd_hover_txt--body
            h4.text-center Definición
            p.text-center.mb-0 Al escuchar el término auditoría, involuntariamente se hace referencia a la revisión de documentos; también suele relacionarse con una persona muy sabia que juzga cada acción como correcta o incorrecta, que además tiene la facultad de condenar o absolver. En este ámbito, igualmente consiste en una revisión, pero de resultados, donde, previa construcción del respectivo 
              em checklist
              | , se verifica el cumplimiento de cada requerimiento, aclarando que generalmente solo se toma una muestra de dichos requisitos. En otras palabras, se realiza una muestra de requisitos contra objetivos o pedidos de los clientes, para el proyecto en construcción. (Medina, Pineda, Téllez, 2019)
      .col-lg-5
        .crd_hover_txt.color-primario
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/temas/t1/f8.jpg', alt='')
          .crd_hover_txt--body
            h4.text-center Norma
            p.text-center.mb-0 Es menester mencionar que la norma ISO 9001, habitualmente es la que se tiene en cuenta para estos procesos. Sin embargo, no es sencillo, ya que la complejidad en la aplicación de esta norma es manifiesta, por ende, poco accesible para muchas personas del común. Es así que emerge la figura de las listas de verificación. Aunque no existe una fórmula mágica, ni una receta universal para construirlas puesto que cada proyecto es una historia diferente, pero la construcción de dicha lista es mucho menos traumática. 

    separador

    #t_1_3(data-aos='fade-right')
      h3 Análisis de coherencia automatizada

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-md-2.col-8.mb-sm-4
        figure
          img(src='@/assets/curso/temas/t1/f9.svg', alt='')
      .col-lg-11.col-md-10.col-12
        p.mb-0 El concepto de automatización consiste en el proceso de cargar, manejar y procesar datos mediante herramientas computarizadas. Con lo cual se obtienen resultados extraordinarios, si se comparan con los procedimientos manuales. La automatización de datos se basa en el famoso ETL (por sus siglas en inglés), es decir, 
          b extraer, transformar y cargar.

    .row.justify-content-center.mb-5
      .col-lg-6
        p El proceso ETL se clasifica en tres sencillos pasos: 
          b extraer 
          | la información desde distintas fuentes; 
          b transformar
          | , utilizando los procesos técnicos y tecnológicos requeridos necesarios para tal fin, incluido trabajo de base de datos de ser necesario y finalmente, 
          b cargar 
          | al destino final y/o al repositorio de datos respectivo. (Naeem, 2020)
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0 Regresando al ámbito de los requisitos, este proceso ofrece un ahorro significativo de tiempo y, por consiguiente, de dinero, reduciendo a su mínima expresión el nivel de errores y la posibilidad de que aparezcan; llegando al punto de tener la oportunidad de hacer dicha detección en forma automática, advirtiendo que se requiere la participación y utilización de herramientas CASE. (Naeem, 2020)

      .col-lg-6
        figure
          img(src='@/assets/curso/temas/t1/f10.png', alt='')

    p Como ya se indicó, la automatización de datos trabaja sobre ETL, siendo una de las técnicas más avanzadas, con mayor influencia en el presente y el futuro, la descripción de esta sigla se aprecia a continuación:

    .col-md-8.mx-auto.mb-5
      ImagenInfografica.color-acento-contenido
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/t1/f11.svg', alt='Texto que describa la imagen')
        .tarjeta.p-3(x="5%" y="72%" numero="1" style="background-color: #FFECC1")
          .h5.mb-2 Extraer
          p 
            em Extract 
            | por su término original en inglés, que implica la extracción de los datos no estructurados.
        .tarjeta.p-3(x="50%" y="5%" numero="2" style="background-color: #FFECC1")
          .h5.mb-2 Transformar
          p 
            em Transform 
            | por su término original en inglés, que implica la transformación de los datos en formato o forma específica.
        .tarjeta.p-3(x="95%" y="72%" numero="3" style="background-color: #FFECC1")
          .h5.mb-2 Cargar
          p 
            em Load 
            | por su término original en inglés, que implica cargar los datos resultantes a un destino específico, que incluso puede ser una base de datos.

    separador

    #t_1_4(data-aos='fade-right')
      h3 Revisión de requisitos 

    p Es significativo que entre las personas interesadas se realice una revisión de requisitos para avanzar en el desarrollo del proyecto.

    .row.justify-content-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/t1/f12.svg', alt='')
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Importante")
            p Indiscutiblemente, el total entendimiento con el cliente es fundamental para que fluyan los requisitos. De esta forma, su detección es clara o por lo menos, medianamente sencilla (realmente en este proceso la “sencillez” es una característica casi inexistente, pero solo con bajar la complejidad, se obtiene una victoria). Este principio busca un total entendimiento del desarrollador con sus clientes, lo que incluye a todos los involucrados en el proyecto, por parte de la empresa contratante. Esta revisión se realiza mediante reuniones, donde asisten las personas interesadas y se revisa en forma minuciosa, de ser necesario (línea por línea) como una fórmula efectiva que permita cerciorarse, que todo esté lo suficientemente claro y completo. (Naeem, 2020)
          div(titulo="Qué se busca con la revisión de requisitos")
            ul.lista-ul--color
              li
                i.fas.fa-check
                | Es posible construir el producto, respetando las restricciones solicitadas.
              li
                i.fas.fa-check
                | Obligatorio que todos los involucrados en el proyecto tengan el concepto claro de lo que se necesita.
              li
                i.fas.fa-check
                | Cero ambigüedades y contradicciones.
              li
                i.fas.fa-check
                | Las necesidades planeadas por el cliente quedan totalmente satisfechas con el producto a construir.
              li
                i.fas.fa-check
                | Generalmente estas revisiones se realizan en algunos puntos clave, incluso, entregables de mayor trascendencia. Sin perjuicio que se realice en cualquier momento.

    separador

    #t_1_5(data-aos='fade-right')
      h3 
        em Reviews 
        | o 
        em Walkthroughs

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/f13.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4.borde2
        p Básicamente esta técnica consiste en que el desarrollador literalmente “lleva de la mano” a sus compañeros de equipo, para revisar en forma minuciosa los artefactos construidos a partir de los requisitos. Dicha revisión se orienta a detectar anomalías o cualquier tipo de inconsistencias, relacionadas con estándares, problemas de presentación, codificación, etc. En esta técnica, el autor del artefacto adquiere un papel principal, protagónico, que puede llegar hasta niveles dictatoriales. Lo cual permite determinar el cumplimiento de los objetivos del autor, frente a los verdaderos objetivos de calidad del equipo. #[br]#[br]
        p.mb-0 Generalmente, esta técnica no determina un procedimiento preestablecido o estándar, ni tampoco hay muchos registros que se puedan mostrar como evidencia al respecto, probablemente, subestimada y falta de credibilidad por muchos. Todo lo anterior debido al manejo sesgado que puede tener el autor del artefacto en esta técnica, incluso, ese manejo puede llegar a ser poco ortodoxo; pero si dicha técnica es utilizada de forma eficiente, será muy provechosa y efectiva. (Ingeniería de 
          em software 
          | I, 2018)

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
