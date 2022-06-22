import { writable } from "svelte/store";

const cart = writable({ products: [] });

export default cart;
