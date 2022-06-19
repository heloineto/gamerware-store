<script>
	import "tailwindcss/tailwind.css";
	import { registerPortal } from "../lib/actions/portal";
	import Footer from "../components/layout/Footer";
	import Navbar from "../components/layout/Navbar";
</script>

<div id="root" use:registerPortal={"root"}>
	<Navbar />
	<slot />
	<Footer />
</div>

<style>
	#root {
		@apply m-auto bg-gray-800;
		max-width: 1200px;
	}

	@media (min-width: 1200px) {
		#root {
			@apply border-x-2 border-gray-500;
		}
	}
</style>
