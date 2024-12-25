<template>
  <div
    class="homepage"
    :style="{
      backgroundImage: `url('/bg2.png')`,
      height: '80vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <Header />
    <Banner />
    <div class="scroll-icon" @click="handleScrollAction">
      <i :class="scrollTop ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
    </div>
  </div>
  <div class="d-md-none d-block wizard-custom">
    <NuxtImg
      class="d-flex m-auto"
      style="width: 90vw"
      src="ong-tien.png"
      alt="Wizard"
      format="webp"
      quality="80"
      loading="lazy"
    />
  </div>
  <About />
  <OurGames />
  <Partner />
  <Footer />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const scrollTop = ref(false);

// Set target scroll
const scrollTarget = 500;

function onScroll() {
  scrollTop.value = window.scrollY > scrollTarget;
}

function handleScrollAction() {
  if (scrollTop.value) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const contentSection = document.querySelector("section");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  }
}

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<style scoped>
.wizard-custom {
  width: 100vw;
  position: relative;
  top: -170px;
  height: 40vh;
  transform: translateY(0px);
}

.scroll-icon {
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 6px,
    rgba(51, 51, 51, 0.2) 0px 0px 10px;
  position: fixed;
  bottom: 10%;
  right: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  z-index: 999;
}

.scroll-icon:hover {
  transform: scale(1.1);
  background-color: rgba(255, 255, 255, 1);
}

.scroll-icon i {
  font-size: 1.5rem;
  color: #333;
}

.scroll-icon:hover i {
  color: #000;
}

.homepage {
  color: #fff;
  text-align: center;
  overflow: hidden;
}

@media (max-width: 768px) {
  .wizard-custom {
    width: 100vw;
    position: relative;
    top: -250px;
    height: clamp(25vh, 8vw, 55vh);
    transform: translateY(0px);
  }
}

@media (max-width: 500px) {
  .wizard-custom {
    top: -170px;
    height: 30vh;
  }
}

@media (max-width: 450px) {
  .wizard-custom {
    height: 25vh;
  }
}
</style>
