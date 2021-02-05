<script>
  // I import my component
  import About from "./components/About.svelte";
  // I import my Text component
  import Text from "./components/Text.svelte";
  // Import my Person component
  import Person from "./components/Person.svelte";

  export let name, lastName;
  // Para todo uso let, en este caso para guardar un string
  let svelteLogo = "https://arepa.s3.amazonaws.com/svelte-logo.png";

  // I'm gonna create an object that be used on Person component by props
  const data = {
    name: "Steve",
    lastName: "Suarez",
    age: 22,
  };
</script>

<main>
  <h1>Hello {name} {lastName}!</h1>
  <About />
  <Text anotherText="Hello!" />
  <!-- Component with detault value (without props) -->
  <Text />
  <!-- Pass props to my component -->
  <Person {...data} />
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
