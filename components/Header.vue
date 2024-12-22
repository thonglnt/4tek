<template>
  <header
    class="bg-transparent position-relative"
    :class="{ 'menu-active': isMenuOpen }"
  >
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <!-- Logo -->
        <a v-if="!isMenuOpen" class="navbar-brand" href="#">
          <img src="~/assets/imgs/logo.png" alt="Logo" class="logo" />
        </a>

        <!-- Mobile flag -->
        <div v-if="isMenuOpen">
          <ul class="p-0">
            <li
              class="nav-item dropdown"
              style="
                border: 1px solid #afafaf;
                border-radius: 10px;
                background-color: #f6f6f6;
                padding: 0px 10px;
              "
            >
              <a
                style="color: #000"
                class="dropdown-toggle pt-0"
                href="#"
                id="languageDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img :src="selectedFlag.src" :alt="selectedFlag.alt" />
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li
                  v-for="(flag, index) in flags"
                  :key="index"
                  class="dropdown-item"
                  @click="selectFlag(flag)"
                >
                  <div class="dropdown-content d-flex align-items-center">
                    <div style="width: 15px">
                      <span v-if="flag.label === selectedFlag.label">✔</span>
                    </div>
                    <img
                      :src="flag.src"
                      :alt="flag.alt"
                      class="flag-icon mx-2"
                    />
                    <span>{{ flag.label }}</span>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- Toggle Button -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleMenu"
        >
          <i
            v-if="!isMenuOpen"
            style="font-size: 40px; color: #fff"
            class="bi bi-list"
          ></i>
          <i v-if="isMenuOpen" style="font-size: 30px" class="bi bi-x-lg"></i>
        </button>

        <!-- Navbar Links -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item font-small">
              <a class="nav-link uppercase" href="#about">About Us</a>
            </li>
            <li class="nav-item font-small">
              <a class="nav-link uppercase" href="#games">Games</a>
            </li>
            <li class="nav-item font-small">
              <a class="nav-link uppercase" href="#partners">Partners</a>
            </li>
            <li class="nav-item font-small">
              <a class="nav-link uppercase" href="#contact">Contact Us</a>
            </li>
            <li v-if="!isMenuOpen" class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle pt-0"
                href="#"
                id="languageDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img :src="selectedFlag.src" :alt="selectedFlag.alt" />
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li
                  v-for="(flag, index) in flags"
                  :key="index"
                  class="dropdown-item"
                  @click="selectFlag(flag)"
                >
                  <div class="dropdown-content d-flex align-items-center">
                    <div style="width: 15px">
                      <span v-if="flag.label === selectedFlag.label">✔</span>
                    </div>
                    <img
                      :src="flag.src"
                      :alt="flag.alt"
                      class="flag-icon mx-2"
                    />
                    <span class="font-small">{{ flag.label }}</span>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import vietnamFlag from "~/assets/imgs/vietnam.png";
import americaFlag from "~/assets/imgs/america.png";

const flags = [
  { src: vietnamFlag, alt: "Vietnamese", label: "Vietnamese" },
  { src: americaFlag, alt: "English", label: "English" },
];

const selectedFlag = ref(flags[1]);
const isMenuOpen = ref(false);

function selectFlag(flag) {
  selectedFlag.value = flag;
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
.bg-transparent {
  transition: 1s;
}

.logo {
  height: 50px;
}

.nav-link {
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  opacity: 0.7;
}

.flag-icon {
  width: 20px;
  height: 15px;
}

.navbar-toggler {
  border: none;
}

.nav-item a {
  color: #fff;
}

/* Menu Active State */
.menu-active {
  background-color: #fff !important;
  height: 100vh;
  width: 100%;
  z-index: 9999;
  position: fixed !important;
  transition: opacity 1s ease-in-out;
}

.menu-active .nav-link {
  color: #000 !important;
  border-bottom: 1px solid #eeeeee;
  padding: 20px 0px;
}

.menu-active .navbar-toggler-icon {
  filter: invert(1);
}
</style>
