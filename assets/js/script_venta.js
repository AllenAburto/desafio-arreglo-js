let propiedadesEnVenta = [
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
        habitaciones: "4 Habitaciones | 4 Baños",
        costo: "5.000",
        smoke: false,
        pets: false,
    },
    {
        nombre: "Apartamento acogedor en la montaña",
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        ubicacion: "789 Mountain Road, Summit Peaks, CA 234568",
        habitaciones: " Habitaciones | 1 Baños",
        costo: "1.200",
        smoke: true,
        pets: true,
    },
    {
        nombre: "Penthouse de lujo con terraza panorámica",
        src:'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        ubicacion: "567 Skyline Avenue, Skyview City, CA 567898",
        habitaciones: "3 Habitaciones | 3 Baños",
        costo: "4.500",
        smoke: false,
        pets: true,
    },
    {
        nombre: "Valle Nogales, Colina",
        src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXw-tVBhz2fEED4i3-eragIA6NAZKOoC4oty2AumGE8IQc8BAtnlDeRNk4R8RVrDclHNg&usqp=CAU',
        descripcion: "Valle Nogales se encuentra en Santa Elena de Chicureo, una de las zonas de desarrollo más importantes de la región metropolitana, en un ambiente natural, rodeado de farellones, con una laguna natural, circuitos de trekking, stripcenter y mucho más.",
        ubicacion: "Avenida Santa Elena 278 , Colina, Metropolitana",
        habitaciones: "3 Habitación | 3 Baño",
        costo: "$328.528.782",
        smoke: true,
        pets: true,
    },
    {
        nombre: "Aires de Venecia, Osorno",
        src:'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20210812/1796707/n_wm_2022092939033764330.webp',
        descripcion: "Sector oriente de la ciudad de Osorno, cerca de Clínica, Hospital, Supermercados y Colegios",
        ubicacion: "Santiago Rosas S/N , Osorno, Los Lagos",
        habitaciones: "3 Habitaciones | 3 Baño",
        costo: "$208.932.143",
        smoke: true,
        pets: true,
    },
    {
        nombre: "Quinta Linderos Condominio Los Almendros, Buin",
        src:'https://py.cl/wp-content/uploads/2020/11/DSC7854-HDR-945x630.jpg',
        descripcion: "El nuevo condominio de Quinta Linderos, Los Almendros, cuenta con 3 modelos de casas estilo mediterráneo y con toques urbanos, cuyo diseño fue pensado para crear espacios cálidos y funcionales para toda tu familia",
        ubicacion: "Ruta 5 Sur, Caletera Oriente, Salida Linderos, Buin, Metropolitana",
        habitaciones: "3 Habitaciones | 3 Baño",
        costo: "$206.325.921",
        smoke: false,
        pets: true,
    },
    ]

    const venta = document.getElementById("venta");
    
    for (propiedad of propiedadesEnVenta) {
        const propertyCardHTML = 
        `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img
                        src="
                        ${propiedad.src}
                        "
                        class="card-img-top"
                        alt="Imagen del departamento"
                    />
                    <div class="card-body">
                        <h5 class="card-title">
                        ${propiedad.nombre}
                        </h5>
                        <p class="card-text">
                        ${propiedad.descripcion}
                        </p>
                        <p>
                        <i class="fas fa-map-marker-alt"></i> 
                        ${propiedad.ubicacion}
                        </p>
                        <p>
                        <i class="fas fa-bed"></i>
                        ${propiedad.habitaciones} 
                        <i class="fas fa-bath"></i>
                        </p>
                        <p><i class="fas fa-dollar-sign"></i>
                        ${propiedad.costo}
                        </p>
                        ${propiedad.smoke? 
                        `
                        <p class="text-success">
                        <i class="fas fa-smoking"></i> Permitido fumar
                        </p>
                        `
                        :
                        `
                        <p class="text-danger">
                        <i class="fas fa-smoking-ban"></i> No se permite fumar
                        </p>
                        `
                        }
                        ${propiedad.pets?
                        `
                        <p class="text-success">
                        <i class="fas fa-paw"></i> Mascotas permitidas
                        </p>
                        `
                        :
                        `
                        <p class="text-danger">
                        <i class="fas fa-ban"></i> No se permiten mascotas
                        </p>
                        `
                        }
                    </div>
                </div>
            </div>
        `;
    
    venta.innerHTML += propertyCardHTML;
    }
    