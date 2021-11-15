app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template:
  /*html*/
  
  `<div class="product-display">
  <div class="product-container">
    <div class="product-image">
      <img v-bind:src="image">
    </div>
    <div class="product-info">
      <h1>{{ title }}</h1>

      <p v-if="inStock">Tersedia</p>
      <p v-else>Kosong</p>

      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>
      <ul>
            <li v-for="(size, index) in sizes" :key="index">{{ size }}</li>
      </ul>

      <div v-for="(variant, index) in variants" :key="variant.id" @click="updateVariant(index)">{{ variant.desc }}</div>
      

      <button 
        class="button"
        :class="{ disabledButton: !inStock }" 
        :disabled="!inStock" 
        @click="addToCart">
       <a style="color:#2b2b2b;" onclick="alert('Produkmu sedang dipesan. Silahkan tunggu 😁😁')">(+) Masukkan Keranjang</a>
      </button>
      <button 
      class="button" 
      :class="{ disabledButton: !inStock }" 
      :disabled="!inStock" 
      @click="removeFromCart">
      <a style="color:#2b2b2b;">(-) Hapus Barang</a>
    </button>
    </div>
    <section class="button-container">
   </section>
  </div>
  <review-list v-if="reviews.length" :reviews="reviews"></review-list>
  <review-form @review-submitted="addReview"></review-form>
</div>`,

  data() {
    return {
        product: 'Madu Gunung',
        brand: '',
        selectedVariant: 0,
        details: [''],
        sizes: [''],
        variants: [
          { id: 001, desc: 'Varian 750gr, Harga = 150k', image: 'assets/madu1.png', quantity: 50 },
          { id: 002, desc: 'Varian 1200gr, Harga = 250k', image: 'assets/madu2.png', quantity: 20 },
          { id: 003, desc: 'Paket Bundling, Harga = 350k', image: 'assets/madu3.png', quantity: 5 },
        ],
        reviews: []
    }
  },
  
  methods: {
      addToCart() {
          this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
      },
      removeFromCart() {
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
      },
      updateVariant(index) {
          this.selectedVariant = index
      },
      addReview(review) {
        this.reviews.push(review)
      }
  },

  computed: {
      title() {
          return this.brand + ' ' + this.product
      },
      image() {
          return this.variants[this.selectedVariant].image
      },
      inStock() {
          return this.variants[this.selectedVariant].quantity
      },
  }
  
})