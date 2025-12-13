function loadFakeData()
{
    //generate users

    const users = [
        new User(1, "juan23", "juan23@example.com", "pass123", "juan.png"),
        new User(2, "maria_l", "maria@example.com", "mariaPass", "maria.jpg"),
        new User(3, "carlosDev", "carlos@example.com", "carDev45", "carlos.png"),
        new User(4, "sofia98", "sofia@example.com", "sofiaPass", "sofia.jpg"),
        new User(5, "nacho", "nacho@example.com", "nacho123", "nacho.png"),
        new User(6, "lauraCoder", "laura@example.com", "laura987", "laura.jpg"),
        new User(7, "fer_rock", "fer@example.com", "ferPass", "fer.png"),
        new User(8, "luciaM", "lucia@example.com", "lucia123", "lucia.jpg"),
        new User(9, "andresTech", "andres@example.com", "andres321", "andres.png"),
        new User(10, "martinaQ", "martina@example.com", "mqpass", "martina.jpg"),
        new User(11, "ramiro_x", "ramiro@example.com", "ramiro777", "ramiro.png"),
        new User(12, "valen20", "valen@example.com", "valen33", "valen.jpg"),
        new User(13, "pabloWeb", "pablo@example.com", "pwpass", "pablo.png"),
        new User(14, "celesteZ", "celeste@example.com", "celz987", "celeste.jpg"),
        new User(15, "darioDev", "dario@example.com", "darioDev1", "dario.png"),
        new User(16, "rocioR", "rocio@example.com", "rocioPass", "rocio.jpg"),
        new User(17, "marcos88", "marcos@example.com", "marc88", "marcos.png"),
        new User(18, "abrilSky", "abril@example.com", "abril000", "abril.jpg"),
        new User(19, "tomas_js", "tomas@example.com", "tomasjs", "tomas.png"),
        new User(20, "florG", "flor@example.com", "florpass", "flor.jpg")
    ];


    const repairApplications = [
        new RepairApplication(
            101, //id
            1, //userId
            "Arreglo de Fuga en Tubería", //title
            0, // price
            "placeholder", // imageUrl
            "Madrid", // location
            "Necesito un fontanero urgente para una pequeña fuga en el baño.", //description
            ["Fontanería", "Urgente", "24h"], //tags
            [-1, 3], // interestedPersons
            [10101, 10102]
        ),
        new RepairApplication(
            102, //id
            2, //userId
            "Instalación de Lavavajillas", //title
            50, // price
            "placeholder", // imageUrl
            "Barcelona", // location
            "Instalar lavavajillas nuevo y revisar toma de agua.", //description
            ["Electrodomésticos", "Instalación"], //tags
            [5, -1], // interestedPersons
            [10201, 10202]
        ),
        new RepairApplication(
            103, //id
            3, //userId
            "Reparación de Caldera", //title
            120, // price
            "placeholder", // imageUrl
            "Valencia", // location
            "La caldera hace ruidos y no calienta correctamente.", //description
            ["Calefacción", "Urgente"], //tags
            [4, 6, 12] // interestedPersons
        ),
        new RepairApplication(
            104, //id
            4, //userId
            "Cambio de Cerradura", //title
            35, // price
            "placeholder", // imageUrl
            "Sevilla", // location
            "Necesito cambiar la cerradura de la puerta principal.", //description
            ["Cerrajería", "Seguridad"], //tags
            [8] // interestedPersons
        ),
        new RepairApplication(
            105, //id
            5, //userId
            "Arreglo de Humedades en Pared", //title
            200, // price
            "placeholder", // imageUrl
            "Bilbao", // location
            "Aparecen manchas de humedad en la pared del salón.", //description
            ["Humedad", "Impermeabilización"], //tags
            [1, 13] // interestedPersons
        ),
        new RepairApplication(
            106, //id
            6, //userId
            "Reparación de Techo", //title
            300, // price
            "placeholder", // imageUrl
            "Zaragoza", // location
            "Goteras en el techo tras las últimas lluvias.", //description
            ["Techos", "Urgente"], //tags
            [11, 14] // interestedPersons
        ),
        new RepairApplication(
            107, //id
            7, //userId
            "Electricidad: Cortocircuito", //title
            0, // price
            "placeholder", // imageUrl
            "Málaga", // location
            "Cortocircuito en la cocina, salta el diferencial.", //description
            ["Electricidad", "Urgente", "Seguridad"], //tags
            [3, -1], // interestedPersons
            [10701, 10702]
        ),
        new RepairApplication(
            108, //id
            8, //userId
            "Reparación de Persiana", //title
            40, // price
            "placeholder", // imageUrl
            "Murcia", // location
            "Persiana enrollable atascada en la ventana del dormitorio.", //description
            ["Carpintería", "Persianas"], //tags
            [6, 10] // interestedPersons
        ),
        new RepairApplication(
            109, //id
            9, //userId
            "Ajuste de Puerta Corredera", //title
            25, // price
            "placeholder", // imageUrl
            "Palma", // location
            "Puerta corredera del salón descarrilada y roces.", //description
            ["Carpintería", "Puertas"], //tags
            [2, 5] // interestedPersons
        ),
        new RepairApplication(
            110, //id
            10, //userId
            "Instalación de Toma de TV", //title
            20, // price
            "placeholder", // imageUrl
            "Granada", // location
            "Instalar toma de antena y orientar la parabólica.", //description
            ["Electrónica", "Instalación"], //tags
            [7] // interestedPersons
        ),
        new RepairApplication(
            111, //id
            11, //userId
            "Cambio de Azulejos", //title
            150, // price
            "placeholder", // imageUrl
            "Alicante", // location
            "Azulejos rotos en cocina, reemplazo de varias piezas.", //description
            ["Albañilería", "Decoración"], //tags
            [4, 15] // interestedPersons
        ),
        new RepairApplication(
            112, //id
            12, //userId
            "Montaje de Muebles IKEA", //title
            60, // price
            "placeholder", // imageUrl
            "Valladolid", // location
            "Necesito montar varios muebles de IKEA (armario y estantería).", //description
            ["Montaje", "Carpintería"], //tags
            [9, 16] // interestedPersons
        ),
        new RepairApplication(
            113, //id
            13, //userId
            "Revisión Aire Acondicionado", //title
            80, // price
            "placeholder", // imageUrl
            "Córdoba", // location
            "El aire no enfría como antes, posible falta de gas.", //description
            ["Climatización", "Mantenimiento"], //tags
            [3, 6] // interestedPersons
        ),
        new RepairApplication(
            114, //id
            14, //userId
            "Tapizado de Sillón", //title
            120, // price
            "placeholder", // imageUrl
            "Santander", // location
            "Sillón con tejido roto, busco retapizar en tela gris.", //description
            ["Tapicería", "Decoración"], //tags
            [10, 18] // interestedPersons
        ),
        new RepairApplication(
            115, //id
            15, //userId
            "Reparación de Gotera en Terraza", //title
            220, // price
            "placeholder", // imageUrl
            "Oviedo", // location
            "Entrada de agua por la terraza cuando llueve fuerte.", //description
            ["Impermeabilización", "Urgente"], //tags
            [11, 13], // interestedPersons
            [11501, 11502]
        ),
        new RepairApplication(
            116, //id
            16, //userId
            "Cambio de Placas Solares", //title
            800, // price
            "placeholder", // imageUrl
            "San Sebastián", // location
            "Sustitución de placas solares dañadas por tormenta.", //description
            ["Energía", "Solar"], //tags
            [17, 20] // interestedPersons
        ),
        new RepairApplication(
            117, //id
            17, //userId
            "Reparación de Humedad en Sótano", //title
            400, // price
            "placeholder", // imageUrl
            "Burgos", // location
            "Humedad ascendente en sótano, necesito tratamiento.", //description
            ["Humedad", "Impermeabilización"], //tags
            [1, 12] // interestedPersons
        ),
        new RepairApplication(
            118, //id
            18, //userId
            "Instalación de Detector de Humo", //title
            30, // price
            "placeholder", // imageUrl
            "Logroño", // location
            "Instalación de detectores de humo en pasillo y cocina.", //description
            ["Seguridad", "Instalación"], //tags
            [8, 14] // interestedPersons
        ),
        new RepairApplication(
            119, //id
            19, //userId
            "Reparación de Piso Flotante", //title
            180, // price
            "placeholder", // imageUrl
            "Toledo", // location
            "Tablas levantadas en el pasillo, necesito arreglo.", //description
            ["Suelo", "Carpintería"], //tags
            [5, 9], // interestedPersons
            [11901, 11902]
        ),
        new RepairApplication(
            120, //id
            20, //userId
            "Desatasco de Sifón", //title
            45, // price
            "placeholder", // imageUrl
            "Salamanca", // location
            "Sifón del lavabo atascado, olor y desagüe lento.", //description
            ["Fontanería", "Desatasco"], //tags
            [2, 7] // interestedPersons
        ),
        new RepairApplication(
            121, //id
            1, //userId
            "Reparación de Fachada", //title
            600, // price
            "placeholder", // imageUrl
            "Almería", // location
            "Pequeñas grietas y desconchones en la fachada exterior.", //description
            ["Rehabilitación", "Albañilería"], //tags
            [13, 15] // interestedPersons
        ),
        new RepairApplication(
            122, //id
            2, //userId
            "Instalación de Suelo Radiante", //title
            1200, // price
            "placeholder", // imageUrl
            "Castellón", // location
            "Presupuesto para instalación de suelo radiante en planta baja.", //description
            ["Calefacción", "Instalación"], //tags
            [16, 17] // interestedPersons
        ),
        new RepairApplication(
            123, //id
            3, //userId
            "Reparación de Grifo que Gotea", //title
            15, // price
            "placeholder", // imageUrl
            "Huelva", // location
            "El grifo de la cocina gotea constantemente.", //description
            ["Fontanería", "Pequeños Trabajos"], //tags
            [4, 6] // interestedPersons
        ),
        new RepairApplication(
            124, //id
            4, //userId
            "Sustitución de Ventana", //title
            250, // price
            "placeholder", // imageUrl
            "León", // location
            "Ventana con marco dañado, solicitar sustitución completa.", //description
            ["Carpintería", "Ventanas"], //tags
            [8, 11] // interestedPersons
        ),
        new RepairApplication(
            125, //id
            5, //userId
            "Revisión y Puesta a Punto de Ascensor", //title
            500, // price
            "placeholder", // imageUrl
            "Vigo", // location
            "Ascensor de comunidad necesita revisión anual y ajuste.", //description
            ["Mantenimiento", "Comunidad"], //tags
            [12, 14] // interestedPersons
        ),
        new RepairApplication(
            126, //id
            6, //userId
            "Reparación de Humedad en Techo", //title
            350, // price
            "placeholder", // imageUrl
            "Gijón", // location
            "Manchas en el techo del dormitorio por condensación.", //description
            ["Humedad", "Aislamiento"], //tags
            [1, 10] // interestedPersons
        ),
        new RepairApplication(
            127, //id
            7, //userId
            "Instalación de Iluminación LED", //title
            90, // price
            "placeholder", // imageUrl
            "A Coruña", // location
            "Sustituir luces por tiras LED en salón y cocina.", //description
            ["Electricidad", "Iluminación"], //tags
            [3, 9] // interestedPersons
        ),
        new RepairApplication(
            128, //id
            8, //userId
            "Reparación de Canalón", //title
            75, // price
            "placeholder", // imageUrl
            "Menorca", // location
            "Canalón obstruido y con pequeñas roturas, filtra agua.", //description
            ["Cubiertas", "Urgente"], //tags
            [2, 13] // interestedPersons
        ),
        new RepairApplication(
            129, //id
            9, //userId
            "Cambio de Grifos en Baño", //title
            95, // price
            "placeholder", // imageUrl
            "Ibiza", // location
            "Renovar grifería del baño por modelos cromados nuevos.", //description
            ["Fontanería", "Renovación"], //tags
            [5, 18] // interestedPersons
        ),
        new RepairApplication(
            130, //id
            10, //userId
            "Aislamiento Térmico de Tejado", //title
            900, // price
            "placeholder", // imageUrl
            "Sant Cugat", // location
            "Instalar aislamiento en buhardilla para reducir pérdidas.", //description
            ["Aislamiento", "Eficiencia"], //tags
            [7, 16] // interestedPersons
        ),
        new RepairApplication(
            131, //id
            11, //userId
            "Reparación de Radiador", //title
            60, // price
            "placeholder", // imageUrl
            "Barakaldo", // location
            "Radiador pierde agua por la llave, revisar y reparar.", //description
            ["Calefacción", "Fontanería"], //tags
            [4, 12] // interestedPersons
        ),
        new RepairApplication(
            132, //id
            12, //userId
            "Cambio de Tejas", //title
            270, // price
            "placeholder", // imageUrl
            "Elche", // location
            "Tejas desplazadas en cubierta, revisar impermeabilización.", //description
            ["Cubiertas", "Albañilería"], //tags
            [11, 14] // interestedPersons
        ),
        new RepairApplication(
            133, //id
            13, //userId
            "Reparación de Motor de Puerta Garaje", //title
            320, // price
            "placeholder", // imageUrl
            "Mataró", // location
            "Motor funciona a trompicones, apertura irregular.", //description
            ["Automatismos", "Urgente"], //tags
            [9, 17] // interestedPersons
        ),
        new RepairApplication(
            134, //id
            14, //userId
            "Instalación de Sistema de Riego", //title
            180, // price
            "placeholder", // imageUrl
            "Granollers", // location
            "Sistema de riego para jardín de 80 m² con programador.", //description
            ["Jardinería", "Instalación"], //tags
            [6, 15] // interestedPersons
        ),
        new RepairApplication(
            135, //id
            15, //userId
            "Reparación de Humedad en Cocina", //title
            140, // price
            "placeholder", // imageUrl
            "Santander", // location
            "Manchas y desconchones alrededor de la ventana de la cocina.", //description
            ["Humedad", "Aislamiento"], //tags
            [1, 13] // interestedPersons
        ),
        new RepairApplication(
            136, //id
            16, //userId
            "Colocación de Balda de Hormigón", //title
            75, // price
            "placeholder", // imageUrl
            "Reus", // location
            "Colocar baldas resistentes en trastero para almacenamiento.", //description
            ["Carpintería", "Obras"], //tags
            [2, 10] // interestedPersons
        ),
        new RepairApplication(
            137, //id
            17, //userId
            "Saneamiento de Jardín", //title
            250, // price
            "placeholder", // imageUrl
            "Figueres", // location
            "Retirada de raíces, nivelado y plantación nueva.", //description
            ["Jardinería", "Paisajismo"], //tags
            [18, 20] // interestedPersons
        ),
        new RepairApplication(
            138, //id
            18, //userId
            "Reparación de Bomba de Agua", //title
            210, // price
            "placeholder", // imageUrl
            "Zaragoza", // location
            "Bomba de agua del suministro comunitario no funciona bien.", //description
            ["Fontanería", "Mantenimiento"], //tags
            [3, 11] // interestedPersons
        ),
        new RepairApplication(
            139, //id
            19, //userId
            "Pulido y Barnizado de Suelo", //title
            500, // price
            "placeholder", // imageUrl
            "Logroño", // location
            "Pulido y barnizado de suelo de parquet en vivienda de 60 m².", //description
            ["Suelo", "Restauración"], //tags
            [5, 12] // interestedPersons
        ),
        new RepairApplication(
            140, //id
            20, //userId
            "Cambio de Interruptores", //title
            40, // price
            "placeholder", // imageUrl
            "Pamplona", // location
            "Sustitución de interruptores y enchufes anticuados.", //description
            ["Electricidad", "Pequeños Trabajos"], //tags
            [7, 9] // interestedPersons
        ),
        new RepairApplication(
            141, //id
            1, //userId
            "Reparación de Grieta en Pared Exterior", //title
            330, // price
            "placeholder", // imageUrl
            "Albacete", // location
            "Grieta longitudinal en fachada, evaluar y reparar.", //description
            ["Albañilería", "Rehabilitación"], //tags
            [13, 15] // interestedPersons
        ),
        new RepairApplication(
            142, //id
            2, //userId
            "Limpieza y Reparación de Canalizaciones", //title
            220, // price
            "placeholder", // imageUrl
            "Huesca", // location
            "Limpieza y reparación menor de canalizaciones del edificio.", //description
            ["Fontanería", "Mantenimiento"], //tags
            [4, 16] // interestedPersons
        ),
        new RepairApplication(
            143, //id
            3, //userId
            "Instalación de Barras de Seguridad en Baño", //title
            55, // price
            "placeholder", // imageUrl
            "Segovia", // location
            "Colocar barras de apoyo y antideslizantes en el baño.", //description
            ["Accesibilidad", "Seguridad"], //tags
            [8, 14] // interestedPersons
        ),
        new RepairApplication(
            144, //id
            4, //userId
            "Reparación de Chimenea", //title
            260, // price
            "placeholder", // imageUrl
            "Teruel", // location
            "Chimenea obstruida y con desprendimientos de mortero.", //description
            ["Chimeneas", "Urgente"], //tags
            [11, 17] // interestedPersons
        ),
        new RepairApplication(
            145, //id
            5, //userId
            "Sustitución de Filtración en Ventana", //title
            95, // price
            "placeholder", // imageUrl
            "Lleida", // location
            "Filtración de agua por ventana durante lluvia intensa.", //description
            ["Ventanas", "Impermeabilización"], //tags
            [6, 18] // interestedPersons
        )
    ];

    const chatMessages = [
    // ================================
    // Reparación 101 — uploader: 1 — interesados: 2 y 3
    // ================================

    // Conversación 1 ↔ 2  (chatId: 10101)
    new ChatMessage(2001, -1, 101, 10101, "2025-11-20T09:20:00Z",
        "Hola, he visto tu reparación. Puedo pasar a las 16:00. ¿Dónde está exactamente el baño?"),
    new ChatMessage(2002, 1, 101, 10101, "2025-11-20T09:22:00Z",
        "Perfecto, gracias por interesarte. Está al fondo del pasillo, te espero a las 16:00."),

    // Conversación 1 ↔ 3  (chatId: 10102)
    new ChatMessage(2003, 3, 101, 10102, "2025-11-20T09:25:00Z",
        "Hola, también estoy interesado. Si te va bien, puedo pasar a las 18:00."),
    new ChatMessage(2004, 1, 101, 10102, "2025-11-20T09:27:00Z",
        "Gracias por avisar. A las 18:00 también me viene bien, te espero."),


    // ================================
    // Reparación 102 — uploader: 2 — interesados: 5 y 7
    // ================================

    // Conversación 2 ↔ 5 (chatId: 10201)
    new ChatMessage(2005, 5, 102, 10201, "2025-10-05T14:18:00Z",
        "Hola, estoy interesado en la instalación. Llevaré adaptadores y herramientas; estimo 45-60 min."),
    new ChatMessage(2006, 2, 102, 10201, "2025-10-05T14:20:00Z",
        "Genial, gracias. Es un Bosch serie 4, por si necesitas algo especial."),

    // Conversación 2 ↔ 7 (chatId: 10202)
    new ChatMessage(2007, -1, 102, 10202, "2025-10-05T14:25:00Z",
        "Buenas, puedo revisarlo mañana. Llevaré material por si hace falta pieza."),
    new ChatMessage(2008, 2, 102, 10202, "2025-10-05T14:26:00Z",
        "Perfecto. El modelo es Bosch serie 4, por si te orienta."),


    // ================================
    // Reparación 107 — uploader: 7 — interesados: 3 y 9
    // ================================

    // Conversación 7 ↔ 3 (chatId: 10701)
    new ChatMessage(2009, 3, 107, 10701, "2025-08-01T20:12:00Z",
        "Hola, puedo pasar esta noche para revisar la línea. Llevo tester y repuestos."),
    new ChatMessage(2010, 7, 107, 10701, "2025-08-01T20:13:00Z",
        "Gracias. ¿Crees que es urgente? La luz se va cuando uso la vitro."),

    // Conversación 7 ↔ 9 (chatId: 10702)
    new ChatMessage(2011, -1, 107, 10702, "2025-08-01T20:14:00Z",
        "Hola, yo podría ir mañana por la mañana con equipo para comprobar derivaciones."),
    new ChatMessage(2012, 7, 107, 10702, "2025-08-01T20:15:00Z",
        "Perfecto, gracias. La vitro está dando problemas y necesito revisarla."),


    // ================================
    // Reparación 115 — uploader: 15 — interesados: 11 y 13
    // ================================

    // Conversación 15 ↔ 11 (chatId: 11501)
    new ChatMessage(2013, 11, 115, 11501, "2025-06-15T10:00:00Z",
        "Hola, puedo revisar el sellado. ¿Tienes fotos de la gotera?"),
    new ChatMessage(2014, 15, 115, 11501, "2025-06-15T10:02:00Z",
        "Sí, aparece cuando llueve fuerte. El acceso es por la terraza comunitaria."),

    // Conversación 15 ↔ 13 (chatId: 11502)
    new ChatMessage(2015, 13, 115, 11502, "2025-06-15T10:05:00Z",
        "Hola, si me pasas medidas llevo material y presupuesto cerrado."),
    new ChatMessage(2016, 15, 115, 11502, "2025-06-15T10:07:00Z",
        "Perfecto, te doy medidas en un momento. Gracias."),


    // ================================
    // Reparación 119 — uploader: 19 — interesados: 5 y 9
    // ================================

    // Conversación 19 ↔ 5 (chatId: 11901)
    new ChatMessage(2017, 5, 119, 11901, "2025-05-02T16:25:00Z",
        "Hola, puedo quitar unas tablas y ver el subsuelo. ¿Te va bien jueves 9:00?"),
    new ChatMessage(2018, 19, 119, 11901, "2025-05-02T16:27:00Z",
        "Sí, perfecto. Las tablas se levantan al final del pasillo, no sé si hay humedad."),

    // Conversación 19 ↔ 9 (chatId: 11902)
    new ChatMessage(2019, 9, 119, 11902, "2025-05-02T16:30:00Z",
        "Buenas, puedo ir mañana por la tarde con medidor de humedad."),
    new ChatMessage(2020, 19, 119, 11902, "2025-05-02T16:31:00Z",
        "Genial, así comprobamos si hay algo bajo las tablas."),


    // ================================
    // Conversaciones nuevas desde repairData
    // ================================

    // repair 201 — uploader: -1 — interesados: [2,3]

    // Conversación -1 ↔ 2 (chatId: 20101)
    new ChatMessage(2021, 2, 201, 20101, "2025-12-01T09:05:00Z",
        "Hola, estoy interesado en la reparación de la fuga. ¿Te viene bien hoy a mediodía?"),
    new ChatMessage(2022, -1, 201, 20101, "2025-12-01T09:06:00Z",
        "Sí, perfecto. Es una fuga pequeña en el baño, gracias por ofrecerte."),

    // Conversación -1 ↔ 3 (chatId: 20102)
    new ChatMessage(2023, 3, 201, 20102, "2025-12-01T09:12:00Z",
        "Buenas, puedo pasar a las 17:00 para revisar la fuga si te va bien."),
    new ChatMessage(2024, -1, 201, 20102, "2025-12-01T09:13:00Z",
        "A esa hora está perfecto, gracias por interesarte."),

    // repair 202 — uploader: -1 — interesados: [4]
    // Conversación -1 ↔ 4 (chatId: 20201)
    new ChatMessage(2025, 4, 202, 20201, "2025-12-01T10:08:00Z",
        "Hola, puedo darte presupuesto si me envías fotos de las paredes."),
    new ChatMessage(2026, -1, 202, 20201, "2025-12-01T10:09:00Z",
        "Claro, te las paso enseguida. Es para pintar salón y habitación.")
    ];


    let myproductsData = [
        {
            id: 1,
            name: "Mesa de Roble Restaurada",
            price: "120€",
            location: "Madrid",
            tags: ["Muebles", "Upcycling", "Pieza única"],
            description: "Mesa de centro antigua recuperada, tratada con barniz ecológico y patas de hierro forjado.",
            date: "2023-11-10" 
        },
        {
            id: 2,
            name: "Pack Jabones de Lavanda",
            price: "18€",
            location: "Valencia",
            tags: ["Cosmética", "Vegano", "Km 0"],
            description: "Set de 3 jabones artesanales hechos en frío con aceite de oliva virgen y lavanda de la zona.",
            date: "2023-12-05"
        },
        {
            id: 3,
            name: "Jarrón Cerámica 'Azul'",
            price: "45€",
            location: "Sevilla",
            tags: ["Decoración", "Hecho a mano", "Cerámica"],
            description: "Jarrón torneado a mano y esmaltado en azul cobalto. Ideal para flores secas o decoración.",
            date: "2023-10-28" 
        }
    ];

    const repairData = [
        new RepairApplication(
            201, //id
            1, //userId
            "Arreglo de Fuga en Tubería", //title
            0, // price
            "placeholder", // imageUrl
            "Madrid", // location
            "Necesito un fontanero urgente para una pequeña fuga en el baño.", //description
            ["Fontanería", "Urgente", "24h"], //tags
            [2, 3], // interestedPersons
            [20101, 20102]
        ),
        new RepairApplication(
            202,
            1,
            "Pintar Salón y Habitación",
            0,
            "placeholder",
            "Barcelona",
            "Pintar paredes y techo de salón (30m2) y una habitación (12m2).",
            ["Pintura", "Interior"],
            [4],
            [20201]
        ),
        new RepairApplication(
            203,
            1,
            "Instalación de Enchufe Doble",
            0,
            "placeholder",
            "Valencia",
            "Añadir un nuevo punto de electricidad en la cocina.",
            ["Electricidad"],
            [] // nadie interesado
        )
    ];

    const userTutorials = [
        new Tutorial(
            201, // id
            1, // userId
            "Cómo reparar una fuga de tubería paso a paso", // name
            "https://example.com/videos/reparar-fuga.mp4", // videoUrl
            "https://example.com/banners/reparar-fuga.jpg", // bannerUrl
            "Tutorial práctico para localizar y arreglar fugas pequeñas en tuberías domésticas: herramientas necesarias, desmontaje, sustitución de juntas y comprobaciones finales.", // description
            ["Fontanería", "PasoAPaso", "Hogar"], // tags
            4823, // viewsCounter
            "2025-03-12T10:00:00Z" // date
        ),
        new Tutorial(
            202, // id
            5, // userId
            "Instalación rápida de un lavavajillas (Bosch serie 4)", // name
            "https://example.com/videos/instalar-lavavajillas.mp4", // videoUrl
            "https://example.com/banners/instalar-lavavajillas.jpg", // bannerUrl
            "Guía audiovisual para instalar un lavavajillas: conexionado de agua y desagüe, fijación, pruebas y consejos para evitar fugas futuras.", // description
            ["Electrodomésticos", "Instalación", "Bosch"], // tags
            3710, // viewsCounter
            "2025-06-01T15:30:00Z" // date
        ),
        new Tutorial(
            203, // id
            9, // userId
            "Mantenimiento básico del sistema de calefacción" , // name
            "https://example.com/videos/mantenimiento-calefaccion.mp4", // videoUrl
            "https://example.com/banners/mantenimiento-calefaccion.jpg", // bannerUrl
            "Explicación de las tareas de mantenimiento más comunes en calderas y radiadores: purgado de radiadores, comprobación de presión y detección de ruidos anómalos.", // description
            ["Calefacción", "Mantenimiento", "Seguridad"], // tags
            2294, // viewsCounter
            "2024-11-20T09:00:00Z" // date
        ),
        new Tutorial(
            204, // id
            12, // userId
            "Montaje eficaz de muebles IKEA sin estrés", // name
            "https://example.com/videos/montar-ikea.mp4", // videoUrl
            "https://example.com/banners/montar-ikea.jpg", // bannerUrl
            "Trucos y herramientas para montar muebles de forma rápida y segura: organización de piezas, uso correcto de herramientas y pasos para evitar errores comunes.", // description
            ["Montaje", "Carpintería", "IKEA"], // tags
            6598, // viewsCounter
            "2025-01-08T18:20:00Z" // date
        )
    ];

    const tutorials = [
        new Tutorial(
            205, // id
            3, // userId
            "Cómo desatascar tuberías sin productos químicos", // name
            "https://example.com/videos/desatascar-tuberias.mp4", // videoUrl
            "https://example.com/banners/desatascar-tuberias.jpg", // bannerUrl
            "Métodos mecánicos y caseros para desatascar lavabos y sifones: uso de ventosa, sonda, mezcla bicarbonato+vinagre y cuándo llamar a un profesional.", // description
            ["Fontanería", "Desatasco", "DIY"], // tags
            2840, // viewsCounter
            "2025-04-18T11:15:00Z" // date
        ),
        new Tutorial(
            206, // id
            6, // userId
            "Sustitución de enchufes y enchufes con toma a tierra", // name
            "https://example.com/videos/cambiar-enchufes.mp4", // videoUrl
            "https://example.com/banners/cambiar-enchufes.jpg", // bannerUrl
            "Guía segura paso a paso para sustituir enchufes y añadir toma a tierra: herramientas, medidas de seguridad y comprobaciones eléctricas básicas.", // description
            ["Electricidad", "Seguridad", "PequeñosTrabajos"], // tags
            1965, // viewsCounter
            "2025-02-02T09:30:00Z" // date
        ),
        new Tutorial(
            207, // id
            8, // userId
            "Reparar persianas manuales y motorizadas", // name
            "https://example.com/videos/reparar-persianas.mp4", // videoUrl
            "https://example.com/banners/reparar-persianas.jpg", // bannerUrl
            "Soluciones para persianas que se atascan o no suben: ajuste de cintas, cambio de muelle, mantenimiento de motores y diagnóstico rápido.", // description
            ["Persianas", "Carpintería", "Mantenimiento"], // tags
            1502, // viewsCounter
            "2024-10-30T16:00:00Z" // date
        ),
        new Tutorial(
            208, // id
            14, // userId
            "Tapizado básico: cambiar la tela de un cojín o silla", // name
            "https://example.com/videos/tapizado-basico.mp4", // videoUrl
            "https://example.com/banners/tapizado-basico.jpg", // bannerUrl
            "Tutorial sencillo para retapizar cojines y asientos: desmontaje, elección de tela, grapado y acabados para un resultado profesional.", // description
            ["Tapicería", "Decoración", "DIY"], // tags
            2310, // viewsCounter
            "2025-05-06T13:45:00Z" // date
        ),
        new Tutorial(
            209, // id
            17, // userId
            "Cómo purgar radiadores y optimizar tu calefacción", // name
            "https://example.com/videos/purgar-radiadores.mp4", // videoUrl
            "https://example.com/banners/purgar-radiadores.jpg", // bannerUrl
            "Proceso completo para purgar radiadores, equilibrar la instalación y mejorar la eficiencia energética de la calefacción de casa.", // description
            ["Calefacción", "Mantenimiento", "Eficiencia"], // tags
            4087, // viewsCounter
            "2024-12-12T08:00:00Z" // date
        ),
        new Tutorial(
            210, // id
            20, // userId
            "Montaje y ajuste de puertas correderas interiores", // name
            "https://example.com/videos/puertas-correderas.mp4", // videoUrl
            "https://example.com/banners/puertas-correderas.jpg", // bannerUrl
            "Instalación, regulación y solución de ruidos en puertas correderas: guías, rodamientos y ajuste de carriles.", // description
            ["Carpintería", "Puertas", "Instalación"], // tags
            1220, // viewsCounter
            "2025-07-21T10:40:00Z" // date
        ),
        new Tutorial(
            211, // id
            11, // userId
            "Reparar pequeñas grietas en paredes y pintar como un profesional", // name
            "https://example.com/videos/reparar-grietas.mp4", // videoUrl
            "https://example.com/banners/reparar-grietas.jpg", // bannerUrl
            "Cómo preparar, rellenar y lijar grietas pequeñas en yeso o ladrillo, elección de masilla y técnicas de pintura para un acabado perfecto.", // description
            ["Albañilería", "Pintura", "Restauración"], // tags
            3499, // viewsCounter
            "2025-03-28T17:20:00Z" // date
        )
    ];

    let productsData = [
        {
            id: 1,
            name: "Mesa de Roble Restaurada",
            price: "120€",
            location: "Madrid",
            tags: ["Muebles", "Upcycling", "Pieza única"],
            description: "Mesa de centro antigua recuperada, tratada con barniz ecológico y patas de hierro forjado.",
            date: "2023-11-10"
        },
        {
            id: 2,
            name: "Pack Jabones de Lavanda",
            price: "18€",
            location: "Valencia",
            tags: ["Cosmética", "Vegano", "Km 0"],
            description: "Set de 3 jabones artesanales hechos en frío con aceite de oliva virgen y lavanda de la zona.",
            date: "2023-12-05"
        },
        {
            id: 3,
            name: "Jarrón Cerámica 'Azul'",
            price: "45€",
            location: "Sevilla",
            tags: ["Decoración", "Hecho a mano", "Cerámica"],
            description: "Jarrón torneado a mano y esmaltado en azul cobalto. Ideal para flores secas o decoración.",
            date: "2023-10-28"
        },
        {
            id: 4,
            name: "Lámpara Industrial de Pie",
            price: "85€",
            location: "Bilbao",
            tags: ["Iluminación", "Industrial", "Vintage"],
            description: "Lámpara de pie con pantalla metálica y cable textil, regulador de intensidad incluido.",
            date: "2024-03-15"
        },
        {
            id: 5,
            name: "Juego de 4 Cojines Bordados",
            price: "32€",
            location: "Granada",
            tags: ["Textil", "Hecho a mano", "Hogar"],
            description: "Cojines 45x45 cm con bordados artesanales y relleno hipoalergénico.",
            date: "2024-05-02"
        },
        {
            id: 6,
            name: "Estantería Modular de Pino",
            price: "70€",
            location: "Valladolid",
            tags: ["Muebles", "Montaje fácil", "Pino"],
            description: "Estantería ligera de pino macizo, módulos apilables y tornillería incluida.",
            date: "2024-08-21"
        },
        {
            id: 7,
            name: "Set Herramientas Jardín (5 piezas)",
            price: "25€",
            location: "A Coruña",
            tags: ["Jardinería", "Herramientas", "Exterior"],
            description: "Kit básico para jardinería: pala pequeña, rastrillo, tijeras de podar, azada y cultivador.",
            date: "2024-07-10"
        },
        {
            id: 8,
            name: "Cuadro Acrílico 'Montaña Roja'",
            price: "95€",
            location: "Palma",
            tags: ["Arte", "Acrílico", "Original"],
            description: "Obra original en acrílico sobre lienzo 60x40 cm. Firmado por el autor.",
            date: "2023-09-30"
        },
        {
            id: 9,
            name: "Bicicleta Urbana 7 velocidades (segunda mano)",
            price: "150€",
            location: "San Sebastián",
            tags: ["Movilidad", "Bicicleta", "Segunda mano"],
            description: "Bicicleta de ciudad en buen estado, revisión reciente, frenos y cambios ajustados.",
            date: "2024-01-18"
        },
        {
            id: 10,
            name: "Pack Cocina: Tabla + Utensilios Madera",
            price: "28€",
            location: "Logroño",
            tags: ["Cocina", "Madera", "Regalo"],
            description: "Tabla de cortar grande y set de utensilios de madera (cuchara, espátula, pinzas). Acabado natural.",
            date: "2024-02-27"
        }
    ];



    //SetValues
    sessionStorage.setItem("loadcontent", false)
    sessionStorage.setItem("users", JSON.stringify(users))
    sessionStorage.setItem("repairings", JSON.stringify(repairApplications))
    sessionStorage.setItem("chats", JSON.stringify(chatMessages))
    sessionStorage.setItem("myproducts", JSON.stringify(myproductsData))
    sessionStorage.setItem("myrepairs", JSON.stringify(repairData))
    sessionStorage.setItem("mytutorials", JSON.stringify(userTutorials))
    sessionStorage.setItem("tutorials", JSON.stringify(tutorials))
    sessionStorage.setItem("products", JSON.stringify(productsData))


    sessionStorage.setItem("lastclientzone", "my-repairings.html")
    sessionStorage.setItem("lastclientzoneid", "5")
    sessionStorage.setItem("lastprofessionalzone", "repair_catalog.html")
    sessionStorage.setItem("lastprofessionalzoneid", "1")
}
