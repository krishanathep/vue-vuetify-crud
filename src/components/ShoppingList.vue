<template>
  <div>
    <v-row>
      <v-col cols="" md="12">
        <v-btn class="mt-8" absolute dark fab top right color="pink" to="/cart">
          <v-icon>mdi-cart</v-icon>
          {{Total()}}
        </v-btn>
      </v-col>
      <v-col cols="6" md="3" v-for="product in products" :key="product.id">
        <v-card>
          <v-img :src="product.image" />
          <v-card-title>
            {{ product.title }}
          </v-card-title>
          <v-card-subtitle>
            {{ product.price }}
          </v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="SelectClick(product)" block color="primary">
              <v-icon left>mdi-cart</v-icon>
              Add To Cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Macbook Pro",
          price: 2500.0,
          qty: 1,
          image: "http://lorempixel.com/150/150/",
          active: false,
        },
        {
          id: 2,
          title: "Asus ROG Gaming",
          price: 1000.0,
          qty: 1,
          image: "http://lorempixel.com/150/150/",
          active: false,
        },
        {
          id: 3,
          title: "Amazon Kindle",
          price: 150.0,
          qty: 1,
          image: "http://lorempixel.com/150/150/",
          active: false,
        },
        {
          id: 4,
          title: "Another Product",
          price: 10,
          qty: 1,
          image: "http://lorempixel.com/150/150/",
          active: false,
        },
      ],
      count: 0,
    };
  },
  methods: {
    SelectClick(product){
      product.active = !product.active
    },
    Total() {
      let total = 0;
      this.products.forEach(function(product){
        if(product.active){
          total += product.price;
        }
      })
      return total;
    }
  }
};
</script>

<style></style>
