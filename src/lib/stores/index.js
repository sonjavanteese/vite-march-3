import { writable } from 'svelte/store';

export { appOps } from './store/appOps';
export { dataJsonEditor } from './store/dataJsonEditor';
export { isOpen } from './store/isOpen';
export const user = writable(null);
export const profil = writable(null);
export const _session = writable(null);
export const artboardH = writable(0);
export const artboardW = writable(0);
export const _screenH = writable(0);
export const _screenW = writable(0);