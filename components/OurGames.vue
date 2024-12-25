<template>
  <section class="our-games container mt-5 text-center mb-5">
    <h2 class="section-title fs-1 fw-bold font-family-title">Our Games</h2>
    <p class="text-color-default px-5 fs-6 font-small">
      As a pioneer of mobile app gamification, we take pride in originality and
      individuality, providing global players with state-of-the-art games. Our future
      specialized storylines continue to enrich and inspire magnificent animations that
      never cease to impress.
    </p>
    <div class="game-grid mt-4">
      <div
        v-for="(game, index) in games"
        :key="index"
        class="game-card"
        :class="{ 'even-card': index % 2 === 1 }"
      >
        <NuxtImg
          :src="game"
          :alt="`Game ${index + 1}`"
          class="game-image"
          loading="lazy"
          sizes="(max-width: 768px) 50vw, 25vw"
          format="webp"
          quality="80"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const games = [
  "game1.png",
  "game2.png",
  "game3.png",
  "game4.png",
  "game5.png",
  "game6.png",
  "game7.png",
  "game8.png",
  "game9.png",
  "game10.png",
  "game11.png",
  "game12.png",
];
</script>

<style scoped>
.game-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.game-card {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.game-card.even-card {
  margin-top: 50px;
  margin-bottom: -50px;
}

.game-card:hover {
  transform: scale(1.05);
}

.game-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .game-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
