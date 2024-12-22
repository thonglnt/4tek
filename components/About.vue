<template>
  <section class="about container px-5 py-0 mt-3">
    <div class="row align-items-start px-md-5 py-md-0 px-0 py-0">
      <!-- Left Content -->
      <div class="col-md-6 about-text">
        <h2 class="fs-1 mb-4 fw-bold font-family-title">About Us</h2>
        <p class="font-small text-color-default">
          Browse our selection of free online games and have a great time
          without leaving the site! Our Kids Games portfolio also includes game
          reviews, extensive game cheats and walkthroughs, and much more. We
          have exclusive free downloads, videos, and articles as well. Etech
          reviews the most popular kids games from all the most popular video
          gaming platforms, so you don’t need to search around for fun anywhere
          else on the Internet. Explore a whole new world of gaming on Etech.
        </p>
        <div class="stats d-md-block d-flex mt-5 mb-5 mb-md-0">
          <div>
            <h3 class="fs-1 fw-bolder">600M+</h3>
            <h4 class="fs-5 fw-bolder">Users</h4>
          </div>
          <div class="mt-md-5 ms-5 ms-md-0">
            <h3 class="fs-1 fw-bolder">135+</h3>
            <h4 class="fs-5 fw-bolder">Games</h4>
          </div>
        </div>
      </div>

      <!-- Right Content -->
      <div class="col-md-6 about-right">
        <div class="info-box">
          <div class="info-item d-flex">
            <img src="~/assets/imgs/time.png" alt="24-hour" />
            <div>
              <h4 class="fs-4 fw-bolder">24 - Hour</h4>
              <p class="font-small text-color-default">
                24/7 access ensures operators' businesses runs smoothly all year
                long.
              </p>
            </div>
          </div>
          <div class="info-item d-flex">
            <img src="~/assets/imgs/design.png" alt="Design" />
            <div>
              <h4 class="fs-4 fw-bolder">Design</h4>
              <p class="font-small text-color-default">
                Combining imaginative universes, play dynamics, and
                unprecedented gameplay, our games transcend the boundaries of
                the virtual world by weaving innovative gameplay.
              </p>
            </div>
          </div>
          <div class="info-item d-flex">
            <img src="~/assets/imgs/team.png" alt="Team" />
            <div>
              <h4 class="fs-4 fw-bolder">Team</h4>
              <p class="font-small text-color-default">
                Etech is an award-winning, international studio of designers,
                artists, animators and producers that create content for the
                biggest names in film and video games.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Witch and Map -->
    <div class="map-with-witch mt-5">
      <img src="~/assets/imgs/pin-map.png" alt="Map" class="map" />
      <img src="~/assets/imgs/wizard-girl.png" alt="Witch" class="witch" />
    </div>
  </section>
</template>

<style scoped>
.about-text p {
  line-height: 1.6;
}

.stats div h3 {
  color: #079bee;
}

.about-right {
  background-color: #eeeeee;
}

.info-box {
  padding: 50px 30px;
}

.info-item img {
  width: 50px;
  height: 50px;
  margin-right: 15px;
}

/* Witch and Map */
.map-with-witch {
  position: relative;
  text-align: center;
  min-height: 48vh;
}

.map {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.witch {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  animation: fly 5s ease-in-out infinite;
}

@keyframes fly {
  0% {
    transform: translateX(-50%) translateY(0);
  }
  25% {
    transform: translateX(-60%) translateY(-20px);
  }
  50% {
    transform: translateX(-60%) translateY(-10px);
  }
  75% {
    transform: translateX(-50%) translateY(20px);
  }
  100% {
    transform: translateX(-50%) translateY(0);
  }
}

@media (max-width: 768px) {
  .info-item img {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 1200px) {
  .map-with-witch {
    min-height: 35vh;
  }
}
</style>
