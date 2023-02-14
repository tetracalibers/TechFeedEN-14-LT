<template>
  <div class="CardLayout">
    <div class="Snippet">
      <div class="Card">
        <img src="/TechFeedEN-14-LT/clip-path_sample-bg.jpg" />
      </div>
      <code>none</code>
    </div>
    <div class="Snippet">
      <div class="Card">
        <img src="/TechFeedEN-14-LT//clip-path_sample-bg.jpg" class="pattern-1" />
      </div>
      <code>ellipse(8em 6em at center)</code>
    </div>
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
  clip-path: ellipse(8em 6em at center);
}

.Snippet {
  display: flex;
  flex-direction: column;
  align-items: center;
}

code {
  font-size: 1em;
  text-align: center;
  display: block;
  white-space: nowrap;
}
</style>
