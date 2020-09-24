<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 text-center home-title">
    <h1 class="title-text">Your Kanban</h1>
        </div>
        <div class="col-12 d-flex justify-content-center">
    <div id="carouselExampleFade" class="carousel slide carousel-fade carousel-size my-3" data-ride="carousel">
  <div class="carousel-inner rounded shadow">
    <div class="carousel-item active">
      <img src="../assets/carousel1.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/carousel2.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/carousel3.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/carousel4.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/carousel5.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/carousel6.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
        </div>
    </div>
      </div>
</div>
  </div>
</template>


<script>
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
.carousel-size{
  max-width: 80vw;
}
.home-title{
  filter: drop-shadow(2px 4px 6px #1b1b1b);
  color: white;
  position: absolute;
  transform: translateY(200%);
  z-index: 2;
}
.title-text{
  font-size: 8em;
}
</style>