<!-- Logic -->
<script>
  // Import my Button component
  import Button from "./Button.svelte";
  let someText = `Frontend Developer`;
  let count = 0;
  // This variable is to manage the darkMode state
  let styles = { darkMode: false };

  // Creo una función para manejar los clicks
  const handleClick = () => {
    count += 1;
  };

  const toggle = () => {
    // Call styles and changes its value
    styles.darkMode = !styles.darkMode;
    // We can work directly with DOM
    // Call Document and access to classlist and activate the darkmode
    window.document.body.classList.toggle("dark-mode");
  };
</script>

<!-- Como buena práctica poner un div para envolver todo el html -->
<div class="about">
  <!-- Create a conditional -->
  {#if !styles.darkMode}
    <p>{someText}</p>
  {:else}
    <p>hello dark mode</p>
  {/if}
  <Button text="Click" {count} on:click={handleClick} />
  <!-- Creare the button to execute the toggle -->
  <Button text="DarkMode" on:click={toggle} />
  <button on:click={handleClick}>Click {count === 0 ? "" : count}</button>
</div>

<!-- Styles -->
<style>
  p {
    color: var(--theme-color);
  }
</style>
