<template>
  <div class="CardLayout">
    <div class="Snippet">
      <div class="Card">
        <img src="/clip-path_sample-bg.jpg" />
      </div>
      <code>none</code>
    </div>
    <div class="Snippet">
      <div class="Card">
        <img src="/clip-path_sample-bg.jpg" class="pattern-1" />
      </div>
      <code>circle(4em at 50% 50%)</code>
    </div>
    <div class="Snippet">
      <div class="Card">
        <img src="/clip-path_sample-bg.jpg" class="pattern-2" />
      </div>
      <code>circle(4em at 0 0)</code>
    </div>
    <div class="Snippet">
      <div class="Card">
        <img src="/clip-path_sample-bg.jpg" class="pattern-3" />
      </div>
      <code>circle(4em at 4em 4em)</code>
    </div>
    <div class="Snippet">
      <div class="Card">
        <img src="/clip-path_sample-bg.jpg" class="pattern-4" />
      </div>
      <code>circle(4em at right bottom)</code>
    </div>
  </div>
</template>

<style scoped>
.CardLayout {
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(3, 1fr);
}

.Card {
  max-width: 250px;
  box-shadow: #00000026 0 5px 15px;
  background-color: #fefcf3;
}

img {
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
}

.pattern-1 {
  clip-path: circle(4em at 50% 50%);
}

.pattern-2 {
  clip-path: circle(4em at 0 0);
}

.pattern-3 {
  clip-path: circle(4em at 4em 4em);
}

.pattern-4 {
  clip-path: circle(4em at right bottom);
}

.Snippet {
  display: flex;
  flex-direction: column;
  align-items: center;
}

code {
  font-size: 0.8em;
  text-align: center;
  display: block;
  white-space: nowrap;
}
</style>
