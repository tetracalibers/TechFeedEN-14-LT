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
        <img src="/TechFeedEN-14-LT/clip-path_sample-bg.jpg" class="pattern-1" />
      </div>
      <code>inset(1em)</code>
    </div>
    <div class="Snippet">
      <div class="Card">
        <img src="/TechFeedEN-14-LT/clip-path_sample-bg.jpg" class="pattern-2" />
      </div>
      <code>inset(1em 1em 2em)</code>
    </div>
    <div class="Snippet">
      <div class="Card">
        <img src="/TechFeedEN-14-LT/clip-path_sample-bg.jpg" class="pattern-3" />
      </div>
      <code>inset(1em 1em 2em round 0.75em)</code>
    </div>
    <div class="Snippet">
      <div class="Card">
        <img src="/TechFeedEN-14-LT/clip-path_sample-bg.jpg" class="pattern-4" />
      </div>
      <code>inset(1em 1em 2em round 0.75em 0)</code>
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
  clip-path: inset(1em);
}

.pattern-2 {
  clip-path: inset(1em 1em 2em);
}

.pattern-3 {
  clip-path: inset(1em 1em 2em round 0.75em);
}

.pattern-4 {
  clip-path: inset(1em 1em 2em round 0.75em 0);
}

.Snippet {
  display: flex;
  flex-direction: column;
  align-items: center;
}

code {
  font-size: 0.7em;
  text-align: center;
  display: block;
  white-space: nowrap;
}
</style>
