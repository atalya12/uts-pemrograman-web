app.component('review-list', {
    props: {
      reviews: {
        type: Array,
        required: true
      }
    },
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Ulasan:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          {{ review.name }} memberikan {{ review.rating }} 
          <br/>
          Komentar: "{{ review.review }}"
          <br/>
          Kualitas produk bagus? {{ review.recommend }}
        </li>
      </ul>
    </div>
  `
  })