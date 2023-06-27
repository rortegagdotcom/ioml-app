import { createI18n } from 'vue-i18n';

const detectedLocale = navigator.language || navigator.userLanguage || 'en-US';

const messages = {
  'en-US': {
    titleApp: 'IOML APP - Images Of My Life',
    about: 'This project is realized with:',
    noAlbums: 'There are no albums available',
    createAlbum: 'Create album',
    updateAlbum: 'Update album',
    albumName: 'Album name',
    selectCover: 'Select a cover',
    sureToDelete: 'Are you sure to delete?',
    allPhotosAreDeleted: 'All photos in this album will be deleted',
    noPhotos: 'There are no photos available',
    addPhotos: 'Add photos',
    updatePhoto: 'Update photo',
    selectAddPhotos: 'Select your photos',
    selectEditPhoto: 'Select your photo',
    toastAlbumAdded: 'Album added',
    toastAlbumUpdated: 'Album updated',
    toastAlbumDeleted: 'Album deleted',
    toastPhotosAdded: 'Photos added',
    toastPhotoUpdated: 'Photo updated',
    toastPhotoDeleted: 'Photo deleted',
  },
  'es-ES': {
    titleApp: 'IOML APP - Images Of My Life (Imágenes de mi vida)',
    about: 'Este proyecto esta realizado con:',
    noAlbums: 'No hay álbumes disponibles',
    createAlbum: 'Crear álbum',
    updateAlbum: 'Actualizar álbum',
    albumName: 'Nombre del álbum',
    selectCover: 'Selecciona una cubierta',
    sureToDelete: '¿Estás seguro de borrarlo?',
    allPhotosAreDeleted: 'Se eliminarán todas las fotos de este álbum',
    noPhotos: 'No hay fotos disponibles',
    addPhotos: 'Añadir fotos',
    updatePhoto: 'Actualizar foto',
    selectAddPhotos: 'Selecciona tus fotos',
    selectEditPhoto: 'Selecciona tu foto',
    toastAlbumAdded: 'Álbum añadido',
    toastAlbumUpdated: 'Album actualizado',
    toastAlbumDeleted: 'Álbum borrado',
    toastPhotosAdded: 'Fotos añadidas',
    toastPhotoUpdated: 'Foto actualizada',
    toastPhotoDeleted: 'Foto borrada',
  },
};

const i18n = createI18n({
  legacy: false,
  locale: detectedLocale,
  fallbackLocale: 'en-US',
  messages,
});

export default i18n;
