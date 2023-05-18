const reproductor = {

    reproducir: function (id) {
        console.log(`reproduciendo cancion ${id}`);
    },

    pausar: function (id) {
        console.log(`Pausando la cancion ${id}`)
    },

    playlist: function(id) {
        console.log(`Creando la playlist ${id}`)
    },

    playlistDelate: function(id) {
        console.log(`Eliminando la playlist ${id}`)
    },
}

reproductor.reproducir('La chona');
reproductor.reproducir(50);
reproductor.pausar('La chona');
reproductor.playlist('SebasSongs');
reproductor.playlist('Rap Moderno');
reproductor.playlistDelate('SebasSongs');
reproductor.playlistDelate('Rap Moderno');


reproductor.borrar = function (id = 'cancion') {
    console.log(`Borrando ${id}`);
}

reproductor.borrar('"La chona"');