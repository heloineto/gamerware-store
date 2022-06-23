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

	const { subscribe, set, update } = writable(stored);

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

	function removeProduct(product) {
		return update((cart) => {
			if (cart.hasOwnProperty(product.key)) {
				if (cart[product.key].amount <= 1) {
					const { [product.key]: _, ...newCart } = cart;

					return newCart;
				}

				cart[product.key].amount -= 1;

				return cart;
			}

			return cart;
		});
	}

	function deleteProduct(product) {
		return update((cart) => {
			if (cart.hasOwnProperty(product.key)) {
				const { [product.key]: _, ...newCart } = cart;

				return newCart;
			}

			return cart;
		});
	}

	subscribe((cart) => {
		if (browser) localStorage.cart = JSON.stringify(cart);
	});

	return {
		subscribe,
		set,
		addProduct,
		removeProduct,
		deleteProduct,
	};
}

export function getCount(cart) {
	let count = 0;

	for (const { amount } of Object.values(cart)) {
		count += amount;
	}

	return count;
}

export function getMoneyTotal(cart) {
	let moneyTotal = 0;

	for (const { product, amount } of Object.values(cart)) {
		moneyTotal += product.price * amount;
	}

	return moneyTotal;
}

export default createCart();
