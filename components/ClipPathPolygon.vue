<template>
  <div class="Card">
    <img src="/clip-path_sample-bg.jpg" class="pattern-1" />
  </div>
</template>

<style scoped>
  .CardLayout {
    display: grid;
    gap: 2em;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 1em;
  }

  .Card {
    box-shadow: #00000026 0 5px 15px;
    background-color: #fefcf3;
  }

  img {
    width: 100%;
    aspect-ratio: 3 / 2;
    object-fit: cover;
  }

  .pattern-1 {
    clip-path: polygon(
      1em 1em,
      calc(100% - 1em) 1em,
      calc(100% - 1em) 60%,
      1em calc(100% - 1em)
    );
  }

  code {
    text-align: center;
    display: block;
    font-size: 0.8em;
  }
</style>
