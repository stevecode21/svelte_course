<!-- Logic -->
<script>
  // Import my Button component
  import Button from "./Button.svelte";
  let someText = `Frontend Developer`;
  let count = 0;
  let styles = { darkMode: false };

  // Creo una función para manejar los clicks
  const handleClick = () => {
    count += 1;
  };

  const toggle = () => {
    styles.darkMode = !styles.darkMode;
    window.document.body.classList.toggle("dark-mode");
  };
</script>

<!-- Como buena práctica poner un div para envolver todo el html -->
<div class="about">
  <p>{someText}</p>
  <Button text="Click" {count} on:click={handleClick} />
  <Button text="DarkMode" on:click={toggle} />
  <button on:click={handleClick}>Click {count === 0 ? "" : count}</button>
</div>

<!-- Styles -->
<style>
  p {
    color: var(--theme-color);
  }
</style>
