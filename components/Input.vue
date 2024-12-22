<template>
  <div class="input-container">
    <div
      class="input-group"
      :class="
        inputStyle === 'transparent' ? 'transparent-group' : 'white-group'
      "
    >
      <input
        :type="type"
        class="custom-input"
        :class="
          inputStyle === 'transparent' ? 'transparent-input' : 'white-input'
        "
        :placeholder="placeholder"
      />
      <button
        class="btn custom-btn"
        :class="inputStyle === 'transparent' ? 'transparent-btn' : 'white-btn'"
        type="button"
      >
        <i :class="linkIcon"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  placeholder: {
    type: String,
    default: "Enter your email",
  },
  linkIcon: {
    type: String,
    default: "fa fa-arrow-right",
  },
  inputStyle: {
    type: String,
    default: "white",
  },
  type: {
    type: String,
    default: "text",
  },
});
</script>

<style scoped>
.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.input-group {
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.white-group {
  background-color: #ffffff;
}

.transparent-group {
  background-color: transparent;
  border: 1px solid #ffffff;
}

.custom-input {
  flex: 1;
  padding: 15px;
  font-size: 1rem;
  border: none;
  box-shadow: none;
}

.white-input {
  background-color: #ffffff;
  color: #000000;
}

.transparent-input {
  background-color: transparent;
  color: #ffffff;
}

.transparent-input::placeholder {
  color: #ffffff;
}

.custom-input:focus {
  outline: none;
  box-shadow: none;
}

.custom-btn {
  padding: 0 15px 0 0;
  margin: 0;
}

.white-btn i {
  font-size: 1.2rem;
  color: #333;
}

.transparent-btn i {
  font-size: 1.2rem;
  color: #ffffff;
}

input::placeholder {
  font-size: 14px;
}
</style>
