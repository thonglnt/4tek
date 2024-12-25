<template>
  <section class="countdown">
    <!-- Wizard Image -->
    <div class="wizard d-none d-md-block">
      <NuxtImg
        src="ong-tien.png"
        alt="Wizard"
        width="400"
        height="500"
        style="object-fit: cover"
        loading="lazy"
        format="webp"
        quality="80"
      />
    </div>

    <!-- Countdown Content -->
    <div class="content">
      <h1 class="font-family-title" style="font-size: 50px fw-bold">
        We're Getting Ready
      </h1>
      <div class="timer bg-white mx-4 mx-md-0">
        <div class="time-box text-black">
          <h2>{{ timeLeft.days }}</h2>
          <p>Days</p>
        </div>
        <span class="separator">:</span>
        <div class="time-box text-black">
          <h2>{{ timeLeft.hours }}</h2>
          <p>Hours</p>
        </div>
        <span class="separator">:</span>
        <div class="time-box text-black">
          <h2>{{ timeLeft.minutes }}</h2>
          <p>Minutes</p>
        </div>
        <span class="separator">:</span>
        <div class="time-box text-black">
          <h2>{{ timeLeft.seconds }}</h2>
          <p>Seconds</p>
        </div>
      </div>
      <p class="text-center pt-5 px-3 px-md-0 font-small">
        We will back to something amazing. Getting the latest
        <br class="d-none d-md-block" />
        about our games. Please sign up to our newsletter.
      </p>
      <div class="newsletter">
        <Input
          placeholder="Enter your email"
          inputStyle="white"
          type="email"
          linkIcon="bi bi-arrow-right"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const targetDate = new Date("2025-01-31T00:00:00");
const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});
let timerInterval = null;

function updateCountdown() {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    clearInterval(timerInterval);
    timeLeft.value = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    return;
  }

  timeLeft.value = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

onMounted(() => {
  updateCountdown();
  timerInterval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(timerInterval);
});
</script>

<style scoped>
.separator {
  font-size: 2rem;
  font-weight: bold;
  color: #000;
}

.countdown {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  position: relative;
}

.countdown .wizard {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 5;
}

.countdown .wizard img {
  width: 40vw;
  max-width: 800px;
  min-width: 300px;
  transition: all 0.3s ease;
}

.countdown .content {
  max-width: 600px;
  z-index: 10;
}

.countdown .timer {
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  margin: 20px 0;
  border-radius: 15px;
  padding: 10px;
  z-index: 10;
}

.time-box h2 {
  margin: 0;
  font-family: "Playfair Display", serif;
}

.time-box p {
  margin: 0;
  font-family: "Playfair Display", serif;
  font-size: 12px;
}

.newsletter {
  display: flex;
  justify-content: center;
  gap: 10px;
  max-width: 80%;
  margin: 0 auto;
}

.newsletter input {
  padding: 10px;
  width: 300px;
  border-radius: 5px;
  border: none;
}

.newsletter button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;
}
</style>
