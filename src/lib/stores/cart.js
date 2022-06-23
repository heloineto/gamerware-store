import { writable } from "svelte/store";
import { browser } from "$app/env";

function createCart() {
	let stored = {};

	if (browser) {
		try {
			stored = JSON.parse(localStorage.cart);
		} catch (error) {
			stored = {};
		}
	}

	const { subscribe, update } = writable(stored);

	function addProduct(product) {
		return update((cart) => {
			if (cart.hasOwnProperty(product.key)) {
				cart[product.key].amount += 1;

				return cart;
			}

			cart[product.key] = {
				product,
				amount: 1,
			};

			return cart;
		});
	}

	subscribe((cart) => {
		if (browser) localStorage.cart = JSON.stringify(cart);
	});

	return {
		subscribe,
		addProduct,
	};
}

export function getCount(cart) {
	let count = 0;

	for (const product of Object.values(cart)) {
		count += product.amount;
	}

	return count;
}

export default createCart();
