<script>
  // I import my component
  import About from "./components/About.svelte";

  export let name, lastName;
  // Para todo uso let, en este caso para guardar un string
  let svelteLogo = "https://arepa.s3.amazonaws.com/svelte-logo.png";
</script>

<main>
  <h1>Hello {name} {lastName}!</h1>
  <About />
  <!-- Añado una imagen -->
  <img src={svelteLogo} alt="Svelte" />
</main>

<style>
  /* Este estilo aplicará en toda la app */

  :global(body) {
    background-color: #f2eee2;
    color: #0084f6;
  }

  /* Usamos variables globales, para esto usamos :root */
  :global(:root) {
    --theme-color: purple;
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  main img {
    width: 30%;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
