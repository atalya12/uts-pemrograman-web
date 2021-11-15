app.component('review-form', {
    template:
    /*html*/
    `<h1 id="tulistestimoni"><br>Tulis Testimoni</h1>
    <form class="review-form" @submit.prevent="onSubmit">
      <label for="name">Nama:</label>
      <input id="name" v-model="name">
  
      <label for="review">Ulasan:</label>      
      <textarea id="review" v-model="review"></textarea>
  
      <label for="rating">Rating:</label>
      <select id="rating" v-model="rating">
        <option>5 ⭐️⭐️⭐️⭐️⭐️</option>
        <option>4 ⭐️⭐️⭐️⭐️</option>
        <option>3 ⭐️⭐️⭐️</option>
        <option>2 ⭐️⭐️</option>
        <option>1 ⭐️</option>
      </select>
      <label for="recommend"><br>Kualitas produk bagus?</label>
      <select id="recommend" v-model="recommend">
        <option>Ya</option>
        <option>Tidak</option>
      </select>  
  
      <input class="button" type="submit" value="Kirim"> 
      </form>
`,
    data() {
      return {
        name: '',
        review: '',
        rating: null,

        recommend: null

      }
    },
    methods: {
      onSubmit() {
        if (this.name === '' || this.review === '' || this.rating === null || this.recommend === null) {
          alert('Mohon isi testimoni dengan lengkap.')
          return
        }
  
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          recommend: this.recommend
  
        }
        this.$emit('review-submitted', productReview)
  
        this.name = ''
        this.review = ''
        this.rating = null
        this.recommend = null
  
      }
    }
  })