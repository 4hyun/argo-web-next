import Fuse from 'fuse.js';

let fuse;

const fuseFactory = {
  createSingleton(collections = [], options) {
    if (fuse == null) {
      console.log('>>DEBUG fuse options: ', options);
      fuse = new Fuse(collections, options);
    }
    return fuse;
  },
};

export { fuseFactory };
