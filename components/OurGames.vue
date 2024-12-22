<template>
  <section class="our-games container mt-5 text-center mb-5">
    <h2 class="section-title fs-1 fw-bold font-family-title">Our Games</h2>
    <p class="text-color-default px-5 fs-6 font-small">
      As a pioneer of mobile app gamification, we take pride in originality and
      individuality, providing global players with state-of-the-art games. Our
      future specialized storylines continue to enrich and inspire magnificent
      animations that never cease to impress.
    </p>
    <div class="game-grid mt-4">
      <div
        v-for="(game, index) in games"
        :key="index"
        class="game-card"
        :class="{ 'even-card': index % 2 === 1 }"
      >
        <img :src="game" :alt="`Game ${index + 1}`" class="game-image" />
      </div>
    </div>
  </section>
</template>

<script setup>
import game1 from "~/assets/imgs/game1.png";
import game2 from "~/assets/imgs/game2.png";
import game3 from "~/assets/imgs/game3.png";
import game4 from "~/assets/imgs/game4.png";
import game5 from "~/assets/imgs/game5.png";
import game6 from "~/assets/imgs/game6.png";
import game7 from "~/assets/imgs/game7.png";
import game8 from "~/assets/imgs/game8.png";
import game9 from "~/assets/imgs/game9.png";
import game10 from "~/assets/imgs/game10.png";
import game11 from "~/assets/imgs/game11.png";
import game12 from "~/assets/imgs/game12.png";

const games = [
  game1,
  game2,
  game3,
  game4,
  game5,
  game6,
  game7,
  game8,
  game9,
  game10,
  game11,
  game12,
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
