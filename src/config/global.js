export default {
  global: {
    componenteFormativo: 'Validación de requisitos',
    descripcionCurso:
      'La obtención de requisitos es una tarea ardua que requiere de esfuerzo y sacrificio para determinar las necesidades que se deben solucionar. Sin embargo, la simple obtención de tales requisitos no es suficiente para completar esa labor, ya que estos deben ser confirmados y validados para asegurar que son reales y están bien en caminados. Es así como, las técnicas para la validación completan esta labor.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-img.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/banner-bg.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/decorativo1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/decorativo2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/decorativo3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/decorativo4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Técnicas de validación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Matriz de trazabilidad',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Auditorías',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Análisis de coherencia automatizado',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Revisiones de requisitos',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: '<em>Reviews o Walk- throughs</em>',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Prototipos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de prototipos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Herramientas para construir prototipos',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Concepto de ingeniería del software',
      referencia:
        'Bruegge, B, Dutort, A. (2018). <em>Ingeniería software orientada a objetos</em>. Primera Edición. Pearson Educación.',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=4337&pg=1',
    },
    {
      tema: 'Requerimientos',
      referencia:
        'Cervantes Maceda, H, Velasco-Elizondo, P, Castro Careaga, L. (2016). <em>Arquitectura de software. Conceptos y ciclo de desarrollo</em>. Primera Edición: Cengage Learning Editores S.A.',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=1983',
    },
    {
      tema: 'Ingeniería de requerimientos',
      referencia:
        'Pressman, R. (2010). <em>Ingeniería del software. Un Enfoque Practico</em>. Séptima Edición. Mac Graw Hill.',
      tipo: 'Libro',
      link:
        'https://www-ebooks7-24-com.bdigital.sena.edu.co/stage.aspx?il=&pg=&ed=',
    },
    {
      tema: 'Ingeniería de requerimientos',
      referencia:
        'Sommerville, I (2011). <em>Ingeniería del software. Novena Edición</em>. Pearson Educación.',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=3313',
    },
  ],
  glosario: [
    {
      termino: '<em>Checklist</em>',
      significado:
        'método de control que verifica diversas actividades, tareas, etc. Estas deben cumplirse para alcanzar un resultado planeado.',
    },
    {
      termino: 'ETL',
      significado:
        'por sus siglas en inglés significa extraer, transformar y cargar.',
    },
    {
      termino: '<em>Feedback</em>',
      significado:
        'extranjerismo que proviene del inglés que significa retroalimentación.',
    },
    {
      termino: 'Ingeniería del <em>software</em>',
      significado:
        'es una parte importante de las ciencias de la computación, o una ramificación de ella, que estudia la construcción de <em>software</em> seguro y de alta calidad, basado en métodos y técnicas de ingeniería. Además, brinda un efectivo soporte operacional y de otra índole, donde sobresale el mantenimiento.',
    },
    {
      termino: 'ISO',
      significado:
        'Por sus siglas en inglés (<em>International Organization for Standardization</em>) es un conjunto de estándares con reconocimiento internacional.',
    },
    {
      termino: '<em>Moqups</em>',
      significado:
        'es un portal <em>web</em> que se utiliza para crear y colaborar en tiempo real en la construcción de prototipos.',
    },
    {
      termino: 'Prototipo',
      significado:
        'consiste en una representación supuesta, pero concreta y muy aterrizada de una parte específica o la totalidad de un proyecto, idea de negocio, e incluso, un producto o servicio. ',
    },
    {
      termino: '<em>Responsive</em>',
      significado:
        'técnica de diseño web que permite que un diseño, se adapte a cualquier tamaño de pantalla de cualquier dispositivo.',
    },
    {
      termino: '<em>Scrum</em>',
      significado:
        'es una metodología ágil, muy amplia, en la que se establece una forma efectiva y ordenada para que varios equipos trabajen mancomunadamente y así lograr soluciones óptimas en proyectos muy complejos.',
    },
    {
      termino: '<em>Wireframes</em>',
      significado:
        'es una representación visual, generalmente en escala de grises, que muestra básicamente la estructura y funcionalidad de una página <em>web</em>.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arias, J. (19 de mayo de 2020). <em>Herramientas gratis para hacer wireframes y prototipos</em>. Uxables.',
      link:
        'http://www.uxables.com/herramientas-recursos-ux-ui/herramientas-gratis-para-hacer-wireframes-y-prototipos/',
    },
    {
      referencia:
        'Cervantes, H., Velasco, P., y Castro, L. (2016). <em>Arquitectura de software</em>. Primera Edición. Cengage Learning Editores S.A.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=1983',
    },
    {
      referencia:
        'Conesa, J., Casas, J. (2014). <em>Diseño conceptual de bases de datos en UML</em>. Editorial UOC.',
    },
    {
      referencia:
        'Duque, C. (2022). <em>Levantamiento de requerimientos en tiempos de pandemia</em>. Universidad Distrital Francisco José de Caldas.',
      link:
        'https://revistas.udistrital.edu.co/index.php/tia/article/view/17883',
    },
    {
      referencia:
        'Echeverri, J. (2013). <em>Reflexiones sobre ingeniería de requisitos y pruebas de software</em>. Corporación Universitaria Remington.',
    },
    {
      referencia:
        'EDteam. (25 de octubre de 2017). <em>¿Cómo se deciden las versiones del software?</em>',
      link: 'https://ed.team/blog/como-se-deciden-las-versiones-del-software',
    },
    {
      referencia:
        'Grupo ACMS consultores. (2019). <em>Norma ISO 33000 Calidad de procesos de desarrollo software</em>.',
      link: 'https://www.grupoacms.com/norma-iso-33000',
    },
    {
      referencia:
        'Ingeniería de software I. (2018). <em>Metodología Agil: Crystal</em>.',
      link:
        'https://isi2018.wordpress.com/2018/04/09/metodologia-agil-crystal/',
    },
    {
      referencia:
        'Medina, J., Pineda, E., Téllez, F. (2019). <em>Requerimientos de software: prototipado, software heredado y análisis de documentos</em>. Ingeniería y Desarrollo, 20.',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0122-34612019000200327',
    },
    {
      referencia:
        'Molina, D. (9 de diciembre de 2021). <em>Qué es un product backlog y cómo hacer uno</em>. IEBS Business School.',
      link:
        'https://www.iebschool.com/blog/que-es-un-product-backlog-y-como-hacer-uno-guia-scrum-agile-scrum/#:~:text=Un%20product%20backlog%20es%20una,visibles%20para%20todo%20el%20equipo',
    },
    {
      referencia:
        'Naeem, T. (21 de febrero de 2020). <em>Automatización de datos: cómo transforma el panorama empresarial</em>. Astera – Enabling Data – Driven Innovation.',
      link: 'https://www.astera.com/es/tipo/blog/automatizaci%C3%B3n-de-datos/',
    },
    {
      referencia:
        'Novoseltseva, E. (16 de enero de 2020). <em>Técnicas de priorización de requerimientos de software</em>. Apiumhub.',
      link:
        'https://apiumhub.com/es/tech-blog-barcelona/priorizacion-requerimientos-software/ ',
    },
    {
      referencia:
        'Peralta, E. (2021). <em>Cómo Funciona la Metodología Scrum</em>. Genwords.',
      link: 'https://www.genwords.com/blog/metodologia-scrum',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sebastian Giraldo',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
