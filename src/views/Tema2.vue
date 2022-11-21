<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Prototipos 

    p A continuación, se presenta información acerca de los prototipos, su definición, ventajas y desventajas:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center.align-items-center(titulo="Definición")
        .col-md-8.mb-4.mb-md-0
          p Apartando un poco los tecnicismos, un prototipo consiste en construir una parte del proyecto. Es decir, una implementación parcial del sistema, esta debe ser muy concreta, puesto que se crea para poder estudiar determinados aspectos del sistema.  Por ejemplo, si se crea un formulario con una funcionalidad específica, se puede analizar el comportamiento de las bases de datos, diseño físico, accesibilidad e incluso, la misma usabilidad.
          p No obstante, se tiene la idea errónea que el prototipo se utiliza solamente como artefacto de la fase de implementación, pero en realidad el prototipado se utiliza también en la fase de requerimientos, con excelentes resultados.
        .col-md-3(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/f1.svg', alt='Texto que describa la imagen')
      .row.justify-content-center.align-items-center(titulo="Para tener en cuenta")
        .col-md-8.mb-4.mb-md-0
          p Las principales y más provechosas características de los prototipos son:
          ul.lista-ul--color
            li
              i.fas.fa-check
              p.mb-0 Facilitan e incentivan la comunicación y/o el lenguaje entre el equipo de desarrollo y los clientes, además de propiciar la integración entre ellos y su participación activa en el proceso.
            li
              i.fas.fa-check
              p.mb-0 Amplían la gama de posibilidades de los desarrolladores en el tema del diseño, permitiendo una escogencia muy acertada y precisa.
            li
              i.fas.fa-check
              p.mb-0 Son esenciales ya que son una herramienta muy potente para completar y mejorar los requerimientos funcionales incluso, los no detectados inicialmente.
            li
              i.fas.fa-check
              p.mb-0 Permiten aterrizar ideas muy abstractas e incluso, ideas poco precisas que se tengan en el proyecto.
            li
              i.fas.fa-check
              p.mb-0 La verificación / evaluación se puede hacer desde los primeros tiempos del proyecto, lo cual se convierte en una gran ventaja de tiempo y dinero.	
            li
              i.fas.fa-check
              p.mb-0 Los prototipos son óptimos para completar la documentación del sistema, en diferentes aspectos y tareas.
            li
              i.fas.fa-check
              p.mb-0 Dan soporte a los diseñadores a la hora de escoger entre varias alternativas.
            li
              i.fas.fa-check
              p.mb-0 Permiten a los diseñadores explorar diversos conceptos del diseño, antes de establecer los definitivos.
            li
              i.fas.fa-check
              p.mb-0 Propician las evaluaciones de sistemas en etapas tempranas, lo que facilita la depuración de errores y optimiza los 
                em feedback.
            li
              i.fas.fa-check
              p.mb-0 Realmente los prototipos son de carácter general, puesto que sirven para detectar o completar requisitos, pocos claros o no detectados, observar el comportamiento de las aplicación completa y además, permiten corroborar el grado de factibilidad técnica. 
            li
              i.fas.fa-check
              p.mb-0 Promueven la iteratividad (Peralta, 2021).

        .col-md-3(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/f2.svg', alt='Texto que describa la imagen')
      .row.justify-content-center.align-items-center(titulo="Ventajas más sobresalientes de utilizar prototipos")
        .col-md-8.mb-4.mb-md-0
          ul.lista-ul--color
            li
              i.fas.fa-check
              p.mb-0 Retroalimentación inmediata: al implementar prototipos desde la misma fase de requerimientos, se obtiene la opinión de todos los 
                em stakeholders 
                | involucrados, lo cual se traduce en grandes ventajas, puesto que la solución se hace realidad con el visto bueno de los interesados.
            li
              i.fas.fa-check
              p.mb-0 Facilita el trabajo en equipo: la comunión que se fomenta entre los integrantes del equipo de desarrollo, aunado a la fácil comunicación con los clientes, es esencial para lograr los objetivos propuestos.
            li
              i.fas.fa-check
              p.mb-0 Seguimiento más efectivo: el prototipado permite un seguimiento mucho más confiable, por la cercanía que implica esta práctica.
            li
              i.fas.fa-check
              p.mb-0 Facilita la detección de errores.
            li
              i.fas.fa-check
              p.mb-0 Fácil y efectiva reutilización para nuevos proyectos, incluso de mayor tamaño y complejidad.
            li
              i.fas.fa-check
              p.mb-0 Los modelos obtenidos se construyen con diseño flexible.
            li
              i.fas.fa-check
              p.mb-0 El prototipado es ideal para el 
                em software on-line.
            li
              i.fas.fa-check
              p.mb-0 Facilidad para involucrar a los usuarios finales en fases tempranas.
            li
              i.fas.fa-check
              p.mb-0 Con la integración de los clientes, se garantiza que los productos finales, tengan mayor y mejor nivel de satisfacción.
            li
              i.fas.fa-check
              p.mb-0 Facilita la comprensión y retroalimentación de desarrolladores y usuarios, ya que, entre otros aspectos, se puede encontrar fácilmente la funcionalidad que falta.
            li
              i.fas.fa-check
              p.mb-0 Los requisitos de integración se comprenden muy bien y los canales de implementación se deciden en una etapa muy temprana.
            li
              i.fas.fa-check
              p.mb-0 Facilita el control de avances y cambios de los proyectos (Ingeniería de 
                em software 
                | I, 2018).

        .col-md-3(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/f3.svg', alt='Texto que describa la imagen')
      .row.justify-content-center.align-items-center(titulo="Desventajas más sobresalientes de utilizar prototipos")
        .col-md-8.mb-4.mb-md-0
          p La presentación de los prototipos a los usuarios, tiene una prioridad de especial importancia, puesto que se pueden generar algunos problemas, por malos entendidos, en el sentido que se debe dejar claro que dicho prototipo no es la solución final, sino que es tan solo una muestra. 
        .col-md-3(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/f4.svg', alt='Texto que describa la imagen')
      .row.justify-content-center.align-items-center(titulo="Desventajas más comunes")
        .col-md-8.mb-4.mb-md-0
          ul.lista-ul--color
            li
              i.fas.fa-angle-right
              p.mb-0 Tener al cliente cerca implica permanentes cambios y hasta reprocesos en los requerimientos.
            li
              i.fas.fa-angle-right
              p.mb-0 Los cambios constantes en los clientes, en relación a los requisitos, tornan deficiente la documentación.
            li
              i.fas.fa-angle-right
              p.mb-0 Construir el prototipo es costoso.
            li
              i.fas.fa-angle-right
              p.mb-0 Puede haber confusiones en los clientes, puesto que pueden pensar, luego de revisar el prototipo, que el producto de 
                em software 
                | está terminado.
            li
              i.fas.fa-angle-right
              p.mb-0 El análisis de sistemas puede verse afectado, pudiendo quedar incompleto, lo cual no es conveniente. 
            li
              i.fas.fa-angle-right
              p.mb-0 Existe la posibilidad de que los clientes, luego de ver construido el prototipo, cancelen el proyecto, por no gustarles o sentirse defraudados por el posible producto final.
            li
              i.fas.fa-angle-right
              p.mb-0 Los desarrolladores pueden optar por soluciones poco óptimas o incompletas, debido a la premura de construir el prototipo.
            li
              i.fas.fa-angle-right
              p.mb-0 Puede aumentar la complejidad del sistema.
            li
              i.fas.fa-angle-right
              p.mb-0 En la parte inicial de la construcción del prototipo, puede existir deficiente comunicación entre los desarrolladores y los clientes.
            li
              i.fas.fa-angle-right
              p.mb-0 Pueden surgir algunos cambios imprevistos que, como es apenas lógico, terminan retrasando la normal construcción del prototipo. (Ingeniería de 
                em Software 
                | I, 2018)

        .col-md-3(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/f5.svg', alt='Texto que describa la imagen')

    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Tipos de prototipos 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-md-3.col-8
        figure
          img(src='@/assets/curso/temas/t2/f6.svg', alt='')
      .col-lg-10.col-md-9.col-12
        p.mb-0  El prototipado es una t&eacute;cnica que se puede considerar &ldquo;tradicional&rdquo;, puesto que lleva muchos a&ntilde;os vigente y sin muestras aparentes de desaparecer, aunque las llamadas tecnolog&iacute;as &aacute;giles en el desarrollo de 
          em software
          | , as&iacute; lo insin&uacute;en. Por el contrario, existen nuevos productos que le est&aacute;n dando un &ldquo;nuevo aire&rdquo; a dicha t&eacute;cnica, ya que en la actualidad estas nuevas herramientas combinan el dise&ntilde;o con el prototipo, facilitando mucho m&aacute;s las cosas y acortando los tiempos, tanto en el ambiente 
          em web
          | , como en el de los dispositivos m&oacute;viles. Incluso, brindando muchas ventajas para el trabajo en equipo, lo que fortalece la armon&iacute;a entre los equipos de desarrollo y lo m&aacute;s interesante, permite involucrar a los usuarios finales; lo cual facilita notablemente el 
          em feedback
          |  y sus consecuentes beneficios. Lo anterior, sin mencionar que es posible construir todo el dise&ntilde;o con su funcionalidad, lo que compone el prototipo como tal, sin escribir una sola l&iacute;nea de c&oacute;digo o en su defecto, solo un par de dichas l&iacute;neas (Ingenier&iacute;a de 
          em software
          |  I, 2018). Algunos tipos son:

    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Prototipos de Baja fidelidad <em>(Wireframes)</em>")
        .row.justify-content-center.align-items-center.p-4
          .col-md-8.mb-4.mb-md-0
            p Generalmente se construyen en escala de grises o, simplemente en blanco y negro, puesto que solo se ver&aacute;n los bocetos, aunque mejor presentados, por estar enriquecidos. Lo que se traduce, en la concentraci&oacute;n b&aacute;sicamente en el dise&ntilde;o; tocando aspectos muy generales (para algunos, demasiado generales) del proyecto en construcci&oacute;n. Sin embargo, estos permiten&nbsp; abarcar un radio de acci&oacute;n mayor o ampliar el espectro planteado; es como si se utilizara una enorme cantidad de ideas, donde sobren estas, sobredimensionando el objetivo. L&oacute;gicamente, sin desbordar ni perder de vista los requerimientos, puesto que la cantidad de informaci&oacute;n retroalimentada, no lo permite (
              em Vaware Labs
              | , 2021).

          .col-md-4
            figure
              img(src='@/assets/curso/temas/t2/f7.svg', alt='')
      .py-4.py-md-5(titulo="Prototipos de media fidelidad (<em>Mockups</em>)")
        .row.justify-content-center.align-items-center.p-4
          .col-md-8.mb-4.mb-md-0
            p En este caso, se tendrá en cuenta la parte visual del proyecto, es decir, centrado en el diseño físico, propiamente dicho o, dicho de otra forma, se vale del diseño físico. Es decir, ya en este tipo de prototipo, se presentan contenido, colores, tipografía, etc. Se da relevancia tanto al aspecto como al contenido. Por esta razón y sin lugar a duda, este tipo de prototipo es el que más se acerca al producto final, puesto que solamente le falta agregar detalles de funcionalidad específica (
              em Vaware Labs
              | , 2021).
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t2/f8.svg', alt='')
      .py-4.py-md-5(titulo="Prototipo de alta fidelidad (Maqueta)")
        .row.justify-content-center.align-items-center.p-4
          .col-md-8.mb-4.mb-md-0
            p Cuando se habla de “maqueta” se hace referencia a un prototipo mucho más avanzado, es decir, más cerca al producto final, lo que permite una validación mucho más precisa y acertada. Incluso, se puede ir más allá, por ejemplo, se puede determinar si hay problemas de usabilidad, esto facilita la retroalimentación, acercándose a los detalles menores que probablemente requieran revisión, como es el caso de las correcciones de diseño y/o capa de presentación. Ahora bien, en materia de funcionalidad, las ventajas son mayores y más provechosas, puesto que, recordando que estamos más cerca del producto final, se puede observar con mayor detenimiento, puesto que se está muy cerca de la realidad (Medina et al, 2019).
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t2/f9.svg', alt='')
      .py-4.py-md-5(titulo="Rápido o desechable")
        .row.justify-content-center.align-items-center.p-4
          .col-md-8.mb-4.mb-md-0
            p Este tipo de prototipo es el más utilizado e incluso, más adecuado para la fase de análisis. Aunque algunos tipos de prototipos se pueden utilizar en todas las fases, en este caso como no es un producto completo, la validación y confirmación es mucho más ágil y rápida. En este orden de ideas, para utilizar un prototipo rápido o desechable se escriben las especificaciones, se realiza el correspondiente análisis, se validan los requisitos, se construye el prototipo, preferiblemente, siguiendo una metodología diferente a la que se dispone a utilizar y, finalmente se puede realizar la verificación respectiva. 
            p Una vez se da por terminado el proceso, se procede a desechar por completo el prototipo. Es necesario aclarar y advertir que existen muchas historias de fracasos muy sonoros, en los que luego de la investigación respectiva, se concluyó que nunca desecharon el prototipo, por el contrario, lo convirtieron en el producto final (Medina et al, 2019).
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t2/f10.svg', alt='')

    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Herramientas para construir prototipos 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/t2/f11.png', alt='')
      .col-lg-6
        p Actualmente, la cantidad de herramientas disponibles para la creaci&oacute;n de prototipos es muy grande, puesto que las necesidades de cada caso, proyecto y persona, var&iacute;an desde gustos, requerimientos, necesidades, tecnolog&iacute;a, etc. La &uacute;nica duda es cu&aacute;l se escoge o se prueba primero. Luego, se debe hacer &eacute;nfasis en los requerimientos planteados, detectados y validados. En otras palabras, priman las necesidades del proyecto en construcci&oacute;n, por encima de cualquier otra cosa, incluidos, los gustos del equipo de desarrollo.
        p En este orden de ideas, una de las t&eacute;cnicas para validar requisitos de 
          em software
          |  es el prototipado; a pesar de que las tecnolog&iacute;as &aacute;giles modernas traten de mostrar lo contrario, los prototipos son los cl&aacute;sicos que nunca &ldquo;pasan de moda&rdquo;, se mantienen a lo largo de los a&ntilde;os y, por el contrario, se mejoran de la mano de los avances tecnol&oacute;gicos. El detalle diferenciador es estar completamente actualizado, al tanto de las &uacute;ltimas noticias de la industria del 
          em software
          |  y con ello, conocer las nuevas herramientas o en su defecto, las &uacute;ltimas versiones de las herramientas conocidas, espec&iacute;ficamente en materia de dise&ntilde;o y prototipos.

    p A continuación, se mencionan las herramientas más utilizadas en el mundo para construir prototipos:

    .tarjeta.p-4.mb-5.fcs15
      SlyderA.color-acento-botones(tipo='b')
        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/t2/f12.png', alt='Figma')
          .col-md-6.mb-4.mb-md-0
            p: b Figma
            p Es una herramienta para construir prototipos, disponible en la web, también se utiliza para crear y editar gráficos avanzados tipo vectoriales. Su alojamiento en la web permite una mejor interacción con el equipo de desarrollo, ya que se pueden compartir los avances de forma más sencilla y eficaz, facilitando de esta forma la retroalimentación y su consecuente actualización. No obstante, muy a pesar de que poder trabajar en línea es lo óptimo en la actualidad, a algunos usuarios les gusta controlar sus aplicativos de forma local, para lo cual Figma tiene una versión descargable e instalable.
        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/t2/f12.png', alt='Figma')
          .col-md-6.mb-4.mb-md-0
            p Ventajas de utilizar Figma:
            ul.lista-ul--color
              li
                i.fas.fa-check
                p.mb-0 Posibilita la construcción de toda clase de diseños, lo cual incluye interfaces, formularios, menús, etc.
              li
                i.fas.fa-check
                p.mb-0 Como su almacenamiento es en la nube, permite compartir con el equipo de desarrollo todas las creaciones, lo cual facilita las discusiones y en general, el trabajo en equipo. 
              li
                i.fas.fa-check
                p.mb-0 Al momento de enviar o reportar resultados, parciales o finales, se puede hacer en formatos comunes y estándar, como PDF, JPG, PNG.
              li
                i.fas.fa-check
                p.mb-0 Permite crear un pequeño repositorio en la nube, donde se pueden alojar los prototipos más importantes o representativos.
              li
                i.fas.fa-check
                p.mb-0 Tiene un manejo avanzado de 
                  em plugins 
                  | que permite ampliar y refinar su uso.
              li
                i.fas.fa-check
                p.mb-0 Una de las ventajas más interesantes, es que tiene una versión gratuita muy funcional (Uxables, 2020).
        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/t2/f13.png', alt='Figma')
          .col-md-6.mb-4.mb-md-0
            p: b Fluid
            p Es una herramienta que específicamente, permite la construcción de prototipos de aplicaciones para dispositivos móviles en la nube, permitiendo representar e incluso, hasta se puede pensar que se puede idealizar la 
              em app 
              | que necesita el proyecto en estudio, llevando a cabo el diseño de este.
            p El mismo sitio de la herramienta, facilita los elementos necesarios para realizar un diseño tipo responsive (técnica de diseño 
              em web 
              | que permite que dicho diseño, se adapte a cualquier tamaño de pantalla de cualquier dispositivo). Todo se inicia con una amplia gama de posibilidades en cuanto a plantillas, que funcionan en forma óptima tanto para 
              em Android
              | , como para iOS, lo que facilita y minimiza el arduo trabajo de diseño.
        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/t2/f13.png', alt='Figma')
          .col-md-6.mb-4.mb-md-0
            p Sin lugar a dudas, dan la posibilidad de creaci&oacute;n de enlaces internos que permitan la navegaci&oacute;n entre las p&aacute;ginas construidas, haciendo que, la experiencia del usuario sea mucho m&aacute;s f&aacute;cil, amena y divertida. Para lo cual, los 
              em widgets
              |  disponibles marcan la pauta de forma muy sencilla. Todo esto aunado a la gama de colores disponibles, los tipos de fuentes y en general, el sencillo manejo de plantillas y su forma de personalizarla, disminuyen significativamente la complejidad, normal de estos procesos. Adem&aacute;s, es necesario mencionar la importancia de tener la posibilidad del env&iacute;o de los llamados 
              em MockUp
              |  (muestra previa), para facilitar la retroalimentaci&oacute;n, tan necesaria para afinar los procesos que implican manejo de usuarios (Uxables, 2020).
        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/t2/f14.png', alt='Figma')
          .col-md-6.mb-4.mb-md-0
            p
              strong Marvel
            p Marvel es otro producto que se utiliza para construir prototipos de 
              em app,
              |  utilizando su sitio tipo 
              em web-app
              | , lo cual implica que su funcionamiento es completamente 
              em on-line.
              |  Desde el punto de vista t&eacute;cnico, Marvel no crea prototipos, lo que se hace es subir a esta plataforma los dise&ntilde;os previamente creados utilizando cualquier otro producto, para posteriormente, utilizando Marvel, adicionarle la funcionalidad parcial o del tipo que se requiera.
            p Una de las funciones m&aacute;s importantes y llamativas de este 
              em software
              | , es que se puede configurar un &aacute;rea de una pantalla, para que simule su funcionalidad, con lo que se pueden obtener las retroalimentaciones requeridas que el proyecto demande. Un caso t&iacute;pico del trabajo con esta herramienta es que las funcionalidades que se construyen pueden ser, por ejemplo, tipo bot&oacute;n, es decir, que responda con un evento al tocarse determinada &aacute;rea o tambi&eacute;n se pueden crear transiciones animadas entre cada interfaz o pantalla que se dise&ntilde;en, lo cual permite que el prototipo se acerque mucho m&aacute;s al producto final deseado.

        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/t2/f14.png', alt='Figma')
          .col-md-6.mb-4.mb-md-0
            p Otra enorme funcionalidad y ventaja que esta herramienta ofrece consiste en que se pueden dise&ntilde;ar las pantallas de la 
              em app
              |  en papel y pasarlas a la plataforma. El caso t&iacute;pico es cuando se tiene una reuni&oacute;n con los clientes, e incluso, con el mismo equipo de desarrollo y como es normal y habitual, como parte de la explicaci&oacute;n se dise&ntilde;a en papel o en un tablero a mano alzada, pero con la mayor precisi&oacute;n posible. Especialmente si se trata de una reuni&oacute;n con los clientes, a este dibujo se le puede tomar fotograf&iacute;as y subirlo a Marvel para agregarle algunas funcionalidades, para hacerlo al
              em  software
              |  planeado.
            p En el mundo del desarrollo de 
              em software
              |  existen todo tipo de comunidades de diferentes &iacute;ndoles que buscan una colaboraci&oacute;n estrecha entre equipos de desarrollo, incluidos, clientes finales. Marvel tiene la posibilidad de crear estas comunidades, puesto que permite agrupar a usuarios, equipos de desarrollo, tal que se puedan expresar las ideas y/o propuestas, mostrarlas y recibir los 
              em feedback
              |  respectivos (Uxables, 2020).

        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/t2/f15.png', alt='Figma')
          .col-md-6.mb-4.mb-md-0
            p: strong
                em Invision
            p Es una herramienta de prototipado muy potente, orientada espec&iacute;ficamente para especialistas de dise&ntilde;o 
              em web
              | , encaminada principalmente para dise&ntilde;adores. Su funcionamiento, al igual que los productos mencionados anteriormente, es netamente en 
              em web
              | . A pesar de que su especialidad es 
              em web
              | , no hace falta tener conocimientos profundos en HTML, puesto que su funcionamiento es muy sencillo, intuitivo y amigable al usuario.
            p Adem&aacute;s, deja que los prototipos interactivos creados, se compartan con todo el equipo de desarrollo, incluso hasta profesionales externos, que puedan realizar aportes valiosos al proyecto. Especialmente los desarrolladores de 
              em FrontEnd
              |  pueden aprovechar y explotar mejor estas ventajas en el dise&ntilde;o 
              em web
              | .

        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/t2/f15.png', alt='Figma')
          .col-md-6.mb-4.mb-md-0
            p Asimismo, con este 
              em software
              |  de prototipado, se pueden compartir o permitir que determinadas personas, revisen y/o opinen en los prototipos creados en tiempo real, logrando gran agilidad en los procesos de desarrollo de 
              em software
              | , puesto que el
              em  feeddback
              |  se realiza en tiempo real. Igualmente, el tiempo que se gana al tener la posibilidad de contar con las nuevas publicaciones y los comentarios al respecto, adem&aacute;s de su historial de contenidos o versiones anteriores, reutilizables (Uxables, 2020).

        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/t2/f16.png', alt='Figma')
          .col-md-6.mb-4.mb-md-0
            p: strong: em Moqups
            p Es un portal 
              em web 
              | que se utiliza para crear y colaborar en tiempo real en la construcci&oacute;n de prototipos, diagramas, 
              em wireframes
              | . Aunque es necesario aprender y comprender su funcionamiento completo, se le puede sacar el m&aacute;ximo provecho a los m&aacute;s de dos millones de usuarios que trabajan en &eacute;l de forma colaborativa. Debido a que todo es un compendio de herramientas que dan la posibilidad de una gesti&oacute;n de proyectos muy completa, incluido los prototipos que se requieran. Es decir, en esta herramienta la colaboraci&oacute;n en l&iacute;nea est&aacute; garantizada, puesto que su construcci&oacute;n tiene como valor agregado el trabajo en equipo efectivo.
            p Como ya se ha mencionado este portal permite la creaci&oacute;n de prototipos de una manera muy sencilla, b&aacute;sicamente lo que se hace es darle funcionalidad al dise&ntilde;o previamente construido, lo que permite representar de forma cercana a la realidad, la percepci&oacute;n de los usuarios, al trabajar con el futuro 
              em software
              | . Debe tenerse en cuenta que al utilizar la herramienta se facilita una retroalimentaci&oacute;n eficaz y muy acertada, puesto que es posible detectar requerimientos poco claros, mal expresados y/o malos entendidos, permitiendo la opini&oacute;n acerca del producto final por parte los clientes, en etapas muy tempranas, lo que da el tiempo necesario para tomar los correctivos que sean pertinentes.

        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/t2/f16.png', alt='Figma')
          .col-md-6.mb-4.mb-md-0
            p A medida que avanza el proyecto, es muy importante que todos los integrantes del equipo de desarrollo, est&eacute;n en &ldquo;la misma sinton&iacute;a&rdquo;, mucho mejor, si a dicha &ldquo;sinton&iacute;a&rdquo; se pueden agregar&nbsp; los clientes, puesto que de esta forma, se tiene una completa y muy efectiva forma de contar con los feedback respectivos, opiniones, correcciones, dudas e inquietudes, etc.&nbsp; y si a esta condici&oacute;n se le puede agregar, que dichos 
              em feedback 
              | son en tiempo real, la ventaja es asombrosa; todo esto lo permite Moqups (Uxables, 2020).

        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/t2/f17.png', alt='Figma')
          .col-md-6.mb-4.mb-md-0
            p: strong: em Framer
            p Inicialmente, 
              em Framer
              |  estaba orientada &uacute;nicamente a sistemas operativos 
              em MacOS
              | , puesto que su especialidad estaba m&aacute;s inclinada hacia los prototipos animados o interactivos. Pero en la actualidad, la versi&oacute;n 
              em web
              | , permite esta misma funcionalidad, con la gran ventaja de permitir el trabajo colaborativo, lo cual la hace mucho m&aacute;s accesible para todos. Para que esto se pueda especificar para los usuarios cuenta con una serie de componentes utilizables, ajustables, al punto de poder personalizar todas las animaciones, dando la posibilidad a todo el equipo de opinar al respecto.
            p Todo lo anterior conlleva a mayores y mejores retroalimentaciones. A prop&oacute;sito del trabajo colaborativo, la propiedad de la edici&oacute;n multiusuario rompe paradigmas, permitiendo que m&uacute;ltiples usuarios trabajen en el mismo prototipo, simult&aacute;neamente.

        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/t2/f17.png', alt='Figma')
          .col-md-6.mb-4.mb-md-0
            p Adicionalmente, la facilidad del trabajo con componentes interactivos es muy alta, con un simple clic derecho sobre el componente estático, la herramienta presenta una serie de posibilidades para remplazarlo con elementos llamativos, agradables a la vista y muy interactivos. De la misma forma, la posibilidad de crear el prototipo es muy sencilla y a la mano, solo es cuestión de conectar mediante líneas, para relacionar y/o enlazar los componentes respectivos, que hagan parte del prototipo en construcción (Uxables, 2020).
        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/t2/f18.png', alt='Figma')
          .col-md-6.mb-4.mb-md-0
            p: strong: em Justinmind
            p Esta herramienta es una de la m&aacute;s completas, puesto que aplica para desarrollo 
              em web
              | , m&oacute;viles y 
              em software
              | . Adem&aacute;s, trabaja en 
              em Windows
              | , 
              em iOs
              |  y 
              em Android
              | . Se debe pagar por su utilizaci&oacute;n. Sin embargo, hay una versi&oacute;n gratuita con opciones interesantes, aunque el valor de su versi&oacute;n m&aacute;s avanzada (pro) no es muy costoso.
            p Su utilizaci&oacute;n es muy sencilla e intuitiva puesto que est&aacute; dividida en dos grandes partes, la primera, en la que permite dise&ntilde;ar el aplicativo, es una serie de paneles din&aacute;micos que facilitan mucho la simulaci&oacute;n de botones, pesta&ntilde;as, transiciones, y en general, distintos elementos din&aacute;micos en un &aacute;rea determinada y, la segunda, permite trabajar los eventos, con el consecuente manejo de botones.

        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/t2/f18.png', alt='Figma')
          .col-md-6.mb-4.mb-md-0
            p Ahora bien, en la creaci&oacute;n del prototipo se distribuyen los 
              em widgets
              |  y pantallas, incluso, es posible crear varias pantallas muy bien organizadas y superpuestas, tal que queden perfectamente enlazadas y se obtenga una simulaci&oacute;n muy completa y convincente de un aplicativo 
              em web
              | . Las posibilidades son muy integrales en el tema de los 
              em widgets
              | . Adem&aacute;s de la completa gama de posibilidades que trae la herramienta, se pueden importar otros tantos desde su sitio oficial, sin mencionar la posibilidad de construir algunos personalizados. (Ingenier&iacute;a de 
              em software
              |  I, 2018).
            p Las principales caracter&iacute;sticas de 
              em Justinmind
              |  son:
            ul.lista-ul--color
              li
                i.fas.fa-check
                | Barra de herramientas: permite realizar ediciones rápidas para el elemento seleccionado.
              li
                i.fas.fa-check
                | Módulo de interfaz de usuario: permite intercambiar entre módulos, incluyendo comentarios y demás funcionalidades. 
              li
                i.fas.fa-check
                | Espacio de trabajo personalizado: permite organizar fácilmente las paletas flotantes disponibles.
              li
                i.fas.fa-check
                | Ocultar o mostrar paletas: permite mostrar u ocultar las paletas flotantes como parte del menú principal.
              li
                i.fas.fa-check
                | Paleta de pantallas: permite un control total de las pantallas del prototipo, es posible agregar, arrastrar, eliminar, etc.

        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/t2/f19.png', alt='Figma')
          .col-md-6.mb-4.mb-md-0
            p: strong: em Codiqa
            p Aunque realmente 
              em Codiqa 
              | es una de las herramientas para crear prototipos paga, es muy utilizada en todo el mundo, por la sencillez en su utilizaci&oacute;n. Sus usuarios aducen tal auge a su caracter&iacute;stica de 
              em drag and drop
              | , lo cual la hace muy intuitiva y f&aacute;cil de manejar. Tiene una amplia biblioteca de recursos, que facilita mucho el trabajo, adem&aacute;s permite importar recursos adicionales. Una de sus grandes ventajas, es que se puede construir el prototipo y ejecutar en cualquier navegador o dispositivo en forma autom&aacute;tica, sin requerir ning&uacute;n tipo de codificaci&oacute;n adicional, lo cual representa, un significativo ahorro de tiempo. Adicionalmente, permite compartir y revisar cada propuesta en tiempo real, de la misma forma que genera el proyecto visualmente y con c&oacute;digo.
            p Otra caracter&iacute;stica que sobresale en esta herramienta consiste en que se trabaja completamente HTML5 con 
              em jQuery Mobile.
              |  Adem&aacute;s, el c&oacute;digo que genera se recicla, ya que es reutilizable en el proyecto final, lo cual implica un avance en los cronogramas asignados para el proyecto.

        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/t2/f19.png', alt='Figma')
          .col-md-6.mb-4.mb-md-0
            p Una descripción completa de las partes de esta herramienta sería:
            ul.lista-ul--color
              li
                i.fas.fa-check
                | Interfaz: disponible y adaptable a cualquier navegador web.
              li
                i.fas.fa-check
                | Botones y componentes: ubicados a la izquierda de la pantalla.
              li
                i.fas.fa-check
                | Páginas o pantallas: van quedando disponibles a medida que se van construyendo.
              li
                i.fas.fa-check
                | Compartir: permite compartir en tiempo real el prototipo. 
              li
                i.fas.fa-check
                | Descargar código: permite descargar el código fuente.
              li
                i.fas.fa-check
                | Construcción: permite la construcción y/o modificación de prototipos.
              li
                i.fas.fa-check
                p.mb-0 
                  em Test
                  | : permite probar el prototipo construido.

        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/t2/f20.png', alt='Figma')
          .col-md-6.mb-4.mb-md-0
            p: strong: em Pixate
            p Dentro de la amplia gama de posibilidades para crear prototipos, no pod&iacute;a faltar la perteneciente a 
              em Google
              |  y, esa es
              em  Pixate
              | , que se trata de una muy potente herramienta, orientada cien por ciento para el dise&ntilde;o y la construcci&oacute;n de prototipos y de aplicaciones para todo tipo de dispositivos m&oacute;viles.
            p Es decir, que funciona para Android y 
              em iOS
              |  de forma gratuita y su versi&oacute;n paga cuenta con un precio por la versi&oacute;n 
              em premiun
              |  muy bajo, por supuesto, previo acuerdo de colaboraci&oacute;n en l&iacute;nea, puesto que existe una gran comunidad alrededor de dicho producto en colaboraci&oacute;n permanente y muy profesional entre ellos.

        .row.justify-content-center.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/temas/t2/f20.png', alt='Figma')
          .col-md-6.mb-4.mb-md-0
            p Algunos expertos orientan este producto a la construcci&oacute;n de prototipos para aplicaciones 
              em Android
              |  y 
              em iOS
              |  (como se menciona anteriormente), pero funciona sin problemas en sistemas operativos como 
              em Windows
              |  y 
              em Mac OS X
              | . No obstante, la opini&oacute;n que se abre paso es que esta herramienta es &oacute;ptima para proyectos cortos, peque&ntilde;os, no de tama&ntilde;o muy grande ni complicados, partiendo de la base que las interacciones no necesitan codificaci&oacute;n.
            p En resumen, para trabajar en 
              em Pixate
              | , se debe descargar el aplicativo desde su p&aacute;gina oficial, para mayor seguridad, luego se puede observar su interfaz, muy agradable a la vista y din&aacute;mica. A continuaci&oacute;n, se puede iniciar el trabajo en este producto, lo cual es posible, mediante la utilizaci&oacute;n de la serie de &iacute;conos disponibles, con las pesta&ntilde;as en la parte derecha 
              em &ldquo;samples&rdquo; y &ldquo;recent&rdquo;,
              |  complementado con un bot&oacute;n para subir archivos, lo cual es la base para iniciar a trabajar.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-md-2.col-8
        figure
          img(src='@/assets/curso/temas/t2/f21.svg', alt='')
      .col-lg-11.col-md-10.col-12
        p.mb-0 Realmente, no existe una fórmula extraordinaria que permita la creación, cierta, efectiva y veraz de un prototipo de software. Sin embargo, se debe tener en cuenta unos datos básicos para tal fin:

    .col-md-10.mx-auto.mb-5.invertido
      .bloque-texto-a.color-secundario.bg2.p-4.p-md-5.mb-5
        .row.m-0.align-items-center.justify-content-between
          .col-lg-8.mb-4.mb-lg-0
            .bloque-texto-a__texto.p-4
              ul.lista-ul--color
                li
                  i.fas.fa-check
                  | Realizar las primeras entrevistas y/o reuniones con los clientes, garantizando que la comunicación entre todos es óptima. 
                li
                  i.fas.fa-check
                  | Se deben concretar claramente los objetivos o necesidades que van a solventar el prototipo.
                li
                  i.fas.fa-check
                  | Si es necesario, se debe dividir cada objetivo o necesidad detectada en partes más pequeñas, como forma efectiva de manejar la complejidad. 
                li
                  i.fas.fa-check
                  | El prototipo finalmente concretado, se debe segmentar en partes reducidas, dejando lo más fácil de solucionar para el final.
                li
                  i.fas.fa-check
                  | Los segmentos del prototipo que impliquen mayor costo se deben solucionar de último.
                li
                  i.fas.fa-check
                  | Siempre se debe tratar de escalar el prototipo, a dimensiones más manejables, sencillas de probar y estudiar.
                li
                  i.fas.fa-check
                  | Se debe aprovechar la amplia gama de posibilidades que brindan las herramientas de prototipado, probando todos los componentes posibles.
          .col-lg-4

    .col-md-8.mx-auto
      .cajon.color-acento-contenido.p-4.mb-4
        p.mb-0 Es importante tener en cuenta que el componente formativo dispone de más recursos. Pueden conocerse dirigiéndose al menú principal en donde se encuentran entre otros, la síntesis, una actividad didáctica y el material complementario.

</template>

<script>
export default {
  name: 'Tema2',
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
