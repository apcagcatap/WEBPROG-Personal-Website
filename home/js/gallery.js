Vue.component('photo-carousel', {
    data: function() {
      return {
        images: [
          'https://apcagcatap.github.io/WEBPROG-Personal-Website/home/IMG_0245.JPG',
          'https://apcagcatap.github.io/WEBPROG-Personal-Website/home/IMG_0245.JPG',
          'https://apcagcatap.github.io/WEBPROG-Personal-Website/home/IMG_0245.JPG',
          'https://apcagcatap.github.io/WEBPROG-Personal-Website/home/IMG_0245.JPG',
        ],
        currentIndex: 0
      };
    },
    computed: {
      transformStyle() {
        return `translateX(-${this.currentIndex * 100}%)`;
      }
    },
    methods: {
      nextImage() {
        if (this.currentIndex < this.images.length - 1) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0; // Loop back to the first image
        }
      },
      prevImage() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        } else {
          this.currentIndex = this.images.length - 1; // Loop back to the last image
        }
      }
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
    `
  });

  // Vue Instance
  new Vue({
    el: '#appp',
  });