<!-- Logic -->
<script>
  let someText = `Frontend Developer`;
  let count = 0;

  // Creo una función para manejar los clicks
  const handleClick = () => {
    count += 1;
  };
</script>

<!-- Como buena práctica poner un div para envolver todo el html -->
<div class="about">
  <p>{someText}</p>
  <button on:click={handleClick}>Click {count === 0 ? "" : count}</button>
</div>

<!-- Styles -->
<style>
  p {
    color: var(--theme-color);
  }
</style>
