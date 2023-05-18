// Arrow Function Objetos

const reproductor = {

    reproducir: id => console.log(`reproduciendo cancion ${id}`),
    pausar: () => console.log(`Pausando la cancion`),
    playlist: nombre => console.log(`Creando la playlist ${nombre}`),
    playlistDelate: id => console.log(`Eliminando la playlist ${id}`),

}

reproductor.reproducir('La chona');
reproductor.reproducir(50);

reproductor.pausar();

reproductor.playlist('SebasSongs');
reproductor.playlist('Rap Moderno');

reproductor.playlistDelate('SebasSongs');
reproductor.playlistDelate('Rap Moderno');


reproductor.borrar = (id = 'cancion') => console.log(`Borrando ${id}`);
reproductor.borrar('"La chona"'); 