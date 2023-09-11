let propiedadesEnArriendo = [
    {
        nombre: "Apartamento en el centro de la ciudad",
        src:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        ubicacion: "123 Main Street, Anytown, CA 91234",
        habitaciones: "2 Habitaciones | 2 Baños",
        costo: "2.000",
        smoke: false,
        pets: true,
    },
    {
        nombre: "Apartamento luminoso con vista al mar",
        src:'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
        ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
        habitaciones: "3 Habitaciones | 3 Baños",
        costo: "2.500",
        smoke: true,
        pets: true,
    },
    {
        nombre: "Condominio moderno en zona residencial",
        src:'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        ubicacion: "123 Main Street, Anytown, CA 91234",
        habitaciones: "2 Habitaciones | 2 Baños",
        costo: "2.200",
        smoke: false,
        pets: false,
    },
    {
        nombre: "Amplio Departamento, Santiago Centro",
        src:'https://http2.mlstatic.com/D_NQ_NP_953240-MLC69080093243_042023-O.webp',
        descripcion: "Hermoso y amplio departamento en ubicación privilegiada a 3 cuadras del metro Universidad de Chile y un sinfín de comercio cercano y ricos restaurantes.",
        ubicacion: "Tarapacá 850, 8150215 Santiago, Región Metropolitana",
        habitaciones: "2 Habitaciones | 2 Baños",
        costo: "$430.000",
        smoke: true,
        pets: true,
    },
    {
        nombre: "Departamento linda vista, Las Condes",
        src:'https://www.toppropiedades.cl/imagenes/small_c374u1041co592b29.jpg',
        descripcion: "Impecable departamento en cuarto piso, un estacionamiento y bodega. Cuenta con instalación para lavadora. Edificio con sala de reuniones, lavandería, conserjeria 24/7, estacionamientos de visita.",
        ubicacion: "Bergen 211, Las Condes",
        habitaciones: "1 Habitaciones | 1 Baños",
        costo: "$560.000",
        smoke: false,
        pets: false,
    },
    {
        nombre: "Casa Condominio con Laguna, Nos, San Bernardo",
        src:'https://imgcf.ecn.cl/600/47/47635745c3d519533c4f941364ab8b99f2ee8339.bin.jpg',
        descripcion: "Casa (exterior) en Condominio con Laguna Artificial Navegable, Canchas de tenis; Gimnasio; Sauna; Club House.",
        ubicacion: "8082439 San Bernardo, Región Metropolitana",
        habitaciones: "3 Habitaciones | 2 Baños",
        costo: "$800.000",
        smoke: true,
        pets: true,
    },
]

const arriendo = document.getElementById("arriendo");
    
    for (propiedad of propiedadesEnArriendo) {
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
    
    arriendo.innerHTML += propertyCardHTML;
    }