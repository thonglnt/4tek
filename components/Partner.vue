<template>
  <section class="swiper-example pt-5 pb-5">
    <div class="container">
      <h2 class="mb-4 fs-1 text-center fw-bold font-family-title">
        Our Partners
      </h2>
      <Swiper
        :modules="[Navigation]"
        :slides-per-view="5"
        :space-between="20"
        loop="true"
        :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }"
        class="partners-carousel"
        :breakpoints="{
          0: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }"
      >
        <SwiperSlide v-for="(partner, index) in partners" :key="index">
          <NuxtImg
            :src="partner"
            :alt="`Partner ${index + 1}`"
            class="partner-logo"
            loading="lazy"
            width="200"
            height="100"
            format="webp"
            quality="80"
          />
        </SwiperSlide>
        <div class="custom-prev"><i class="bi bi-chevron-left"></i></div>
        <div class="custom-next"><i class="bi bi-chevron-right"></i></div>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

const partners = [
  "partner1.png",
  "partner2.png",
  "partner3.png",
  "partner4.png",
  "partner5.png",
  "partner6.png",
  "partner7.png",
];
</script>

<style scoped>
.swiper-example {
  background-color: #f6f6f6;
  margin-top: 100px;
}

.partners-carousel {
  display: flex;
  justify-content: center;
  align-items: center;
}

.partner-logo {
  width: 100px;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.partner-logo:hover {
  transform: scale(1.1);
}

/* Custom Navigation Buttons */
.custom-prev,
.custom-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #333;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.2s ease, background-color 0.2s ease;
  box-shadow: 0px 4px 3px 0px #00000040;
}

.custom-prev {
  left: 0px;
}

.custom-next {
  right: 0px;
}

.swiper-slide {
  justify-content: center;
  display: flex;
}

.custom-prev:hover,
.custom-next:hover {
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  transform: scale(1);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 20px;
}
</style>
