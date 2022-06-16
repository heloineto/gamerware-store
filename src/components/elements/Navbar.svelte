<script>
  import GameController from 'phosphor-svelte/lib/GameController';
  import ShoppingCart from 'phosphor-svelte/lib/ShoppingCart';
</script>

<nav class="navbar" aria-label="superior">
  <div class="navbar__left">
    <a class="logo" href="/">
      <GameController />
    </a>
  </div>
  <div class="navbar__center">
    <div class="menu">
      <a class="menu__item" href="/">Início</a>
      <a class="menu__item" href="/products.html">Produtos</a>
      <a class="menu__item" href="/contact.html">Entre em contato</a>
      <a class="menu__item" href="/register.html">Cadastre-se</a>
    </div>
  </div>
  <div class="navbar__right">
    <!-- Shopping Cart -->
    <a class="shopping-cart" href="/cart.html">
      <ShoppingCart />
      <span class="shopping-cart__counter">2</span>
    </a>
  </div>
</nav>

<style>
</style>
