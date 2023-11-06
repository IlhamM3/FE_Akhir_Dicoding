import{openDB}from"idb";import config from"../../scripts/global/config";const{DATABASE_NAME,DATABASE_VERSION,OBJECT_STORE_NAME}=config,dbPromise=openDB(DATABASE_NAME,DATABASE_VERSION,{upgrade(t){t.createObjectStore(OBJECT_STORE_NAME,{keyPath:"id"})}}),FavoriteDaftarRestaurant={async getDaftar(t){if(t)return(await dbPromise).get(OBJECT_STORE_NAME,t)},getAllDaftar:async()=>(await dbPromise).getAll(OBJECT_STORE_NAME),async putDaftar(t){if(t.hasOwnProperty("id"))return(await dbPromise).put(OBJECT_STORE_NAME,t)},deleteDaftar:async t=>(await dbPromise).delete(OBJECT_STORE_NAME,t)};export default FavoriteDaftarRestaurant;