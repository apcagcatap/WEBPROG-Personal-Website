Vue.component('photo-carousel', {
    data: function () {
      return {
        images: [
          'https://apcagcatap.github.io/WEBPROG-Personal-Website/home/IMG_0245.JPG',
          'https://apcagcatap.github.io/WEBPROG-Personal-Website/home/IMG_0637.JPG',
          'https://apcagcatap.github.io/WEBPROG-Personal-Website/home/IMG_1230.JPG',
          'https://apcagcatap.github.io/WEBPROG-Personal-Website/home/IMG_1554.JPG',
        ],
        currentIndex: 0,
      };
    },
    computed: {
      transformStyle() {
        return `translateX(-${this.currentIndex * 100}%)`;
      },
    },
    methods: {
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      prevImage() {
        this.currentIndex =
          (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
    },
    template: `
      <div class="carousel">
        <div class="carousel-images" :style="{ transform: transformStyle }">
          <img v-for="(image, index) in images" :key="index" :src="image" :alt="'Image ' + (index + 1)">
        </div>
        <div class="carousel-buttons">
          <button @click="prevImage">❮</button>
          <button @click="nextImage">❯</button>
        </div>
      </div>
    `,
  });

  // Vue Instance
  new Vue({
    el: '#appp',
  });