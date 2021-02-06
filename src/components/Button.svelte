<script>
  export let count = 0,
    text;
</script>

<button on:click>
  {text}
  {count === 0 ? "" : count}
</button>
