<script>
  import { onMount } from "svelte";

  let photos = [];

  // inside of onmount I'm gonna create an async function to get data frm API
  onMount(async () => {
    console.log("onMount");
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=20"
    );

    photos = await response.json();
  });
</script>

<div class="Photos">
  {#each photos as photo}
    <figure>
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <figcaption>{photo.title}</figcaption>
    </figure>
  {:else}
    <p>Loading...</p>
  {/each}
</div>

<style>
  .Photos {
    width: 100%;
    display: grid;
    /* Repetir por 5 valores en una fracción */
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
  }
</style>
