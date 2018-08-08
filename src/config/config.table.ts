export const LANGUAGE_ESP_TABLE = {
    pagingType: 'full_numbers',
    pageLength: 7,  
    responsive: true,
    lengthMenu : [[10, 25, 50, -1], [10, 25, 50, "Todos"]],
    order: [[ 0, "desc" ]],

    /* below is the relevant part, e.g. translated to spanish */ 
    language: {
        processing: "Procesando...",
        search: "Buscar:",
        searchPlaceholder: "Buscar",
        lengthMenu: "Mostrar _MENU_ elementos",
        info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
        infoEmpty: "Mostrando ningún elemento.",
        infoFiltered: "(filtrado _MAX_ elementos total)",
        infoPostFix: "",
        loadingRecords: "Cargando registros...",
        zeroRecords: "No se encontraron registros",
        emptyTable: "No hay datos disponibles en la tabla",
        paginate: {
            first: "Primero",
            previous: "Anterior",
            next: "Siguiente",
            last: "Último"
        },
        aria: {
            sortAscending: ": Activar para ordenar la tabla en orden ascendente",
            sortDescending: ": Activar para ordenar la tabla en orden descendente"
        }
    }
};