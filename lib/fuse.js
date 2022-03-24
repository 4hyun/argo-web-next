import Fuse from 'fuse.js';

let fuse;

const fuseFactory = {
  createFuseSingleton(collections = [], options) {
    if (fuse == null) {
      fuse = new Fuse(collections, options);
    }
    return fuse;
  },
};

export { fuseFactory };
