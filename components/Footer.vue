<template>
  <footer class="footer">
    <div class="footer-overlay"></div>
    <div class="container py-5">
      <div class="row">
        <!-- Logo and Social Media -->
        <div class="col-12 col-md-4 mb-4">
          <div class="footer-logo d-grid justify-content-center">
            <img src="~/assets/imgs/logo.png" alt="Logo" class="logo mb-3" />
            <div class="social-icons d-flex gap-2 justify-content-between">
              <a href="#" class="social-icon"><i class="bi bi-twitter"></i></a>
              <a href="#" class="social-icon"><i class="bi bi-facebook"></i></a>
              <a href="#" class="social-icon"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        <!-- Address -->
        <div class="col-12 col-md-4 mb-4 mt-5 mt-md-0">
          <div class="footer-address">
            <h3 class="fw-bolder">Address</h3>
            <div class="d-flex mb-3">
              <i
                class="bi bi-geo-alt-fill"
                style="padding: 10px; font-size: 20px"
              ></i>
              <div>
                <p class="font-small">
                  Valletta Buildings, South Street, Valletta - VLT 1103 Malta,
                  US
                </p>
                <p class="font-small">
                  20 Phan Dang Luu street, Hai Chau District, Danang City,
                  Vietnam
                </p>
              </div>
            </div>
            <div class="d-flex">
              <i
                class="bi bi-person-rolodex"
                style="padding: 0 10px; font-size: 20px"
              ></i>
              <p class="font-small">(+1) 555-0108-900 or (+229) 555-0108</p>
            </div>
          </div>
        </div>

        <!-- Subscribe -->
        <div class="col-12 col-md-4 mb-4 mt-5 mt-md-0">
          <div class="footer-subscribe">
            <h3 class="fw-bolder">Subscribe</h3>
            <p class="font-small">
              Subscribe to our newsletter and be the first to know about our
              updates
            </p>
            <form class="subscribe-form">
              <Input
                placeholder="Enter your email"
                inputStyle="transparent"
                backgroundColor="transparent"
                type="email"
                linkIcon="bi bi-arrow-right"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom text-center">
      <p class="fs-6 mb-0">2017 Copyright. Policy.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  background: url("~/assets/imgs/bg-footer.jpg") no-repeat center center,
    linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    linear-gradient(180deg, rgba(0, 10, 255, 0.5) 0%, rgba(0, 0, 0, 0) 136.61%);
  background-blend-mode: overlay;
  background-size: cover;
  color: #fff;
  text-align: left;
}

.footer-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}

.footer-logo {
  flex: 1;
}

.social-icon {
  display: flex;
  gap: 25px;
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #00aced;
}

.footer-address {
  flex: 1;
}

.footer-address h3 {
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.footer-subscribe {
  flex: 1;
}

.footer-subscribe h3 {
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.subscribe-form {
  display: flex;
  align-items: center;
  gap: 10px;
}

.subscribe-form input {
  padding: 10px;
  border-radius: 5px;
  border: none;
  flex: 1;
}

.subscribe-form button {
  padding: 10px;
  background-color: #00aced;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.subscribe-form button:hover {
  background-color: #0084b4;
}

.footer-bottom {
  background-color: #000;
  padding: 10px 0;
  text-align: center;
  margin-top: 30px;
}
</style>
