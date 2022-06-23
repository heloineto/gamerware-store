import { writable } from "svelte/store";

const cart = writable({ products: {} });

function createCart() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		addProduct: (product) =>
			update((cart) => {
				if (cart.hasOwnProperty(product.key)) {
					cart[product.key].count += 1;

					return;
				}

				return { products: cart.products, product };
			}),
		decrement: () => update((n) => n - 1),
		reset: () => set(0),
	};
}

export default cart;
