<template>
  <div>
    <v-row>
      <v-col cols="" md="12">
        <v-btn class="mt-8" absolute dark fab top right color="pink" to="/cart">
          <v-icon>mdi-cart</v-icon>
          {{counter}}
        </v-btn>
      </v-col>
      <v-col cols="12" md="12">
        <v-card>
          <v-simple-table>
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cart in carts" :key="cart.id">
                <td>{{ cart.id }}</td>
                <td>
                  <v-avatar
                  size="40px"
                >
                  <img
                    :src="cart.image"
                  >
                  </v-avatar>
                </td>
                <td>{{ cart.title }}</td>
                <td>{{ cart.price }}</td>
                <td>{{ cart.qty }}</td>
                <td> 
                    <v-icon @click="RemoveClick(product)">mdi-delete</v-icon>           
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td :colspan="6">Total : {{Total()}}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card>
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
            <v-btn @click="AddToCart(product)" block color="primary">
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
      num: 1,
      carts:[],
      products: [
        {
          id: 1,
          title: "Macbook Pro",
          price: 2500.0,
          qty: 1,
          image: "https://images.pexels.com/photos/159886/pexels-photo-159886.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          active: false,
        },
        {
          id: 2,
          title: "Asus ROG Gaming",
          price: 1000.0,
          qty: 1,
          image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          active: false,
        },
        {
          id: 3,
          title: "Amazon Kindle",
          price: 150.0,
          qty: 1,
          image: "https://images.pexels.com/photos/76942/pexels-photo-76942.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          active: false,
        },
        {
          id: 4,
          title: "Another Product",
          price: 10,
          qty: 1,
          image: "https://images.pexels.com/photos/4239018/pexels-photo-4239018.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          active: false,
        },
      ],
      counter: 0,
    };
  },
  methods: {
    AddToCart(product){
      this.carts.push({
        id: this.num ++,
        image:product.image,
        title:product.title,
        price:product.price,
        qty:product.qty
      })
      product.active = !product.active
      this.counter++
    },
    Total() {
      let total = 0;
      this.products.forEach(function(product){
        if(product.active){
          total += product.price;
        }
      })
      return total;
    },
    RemoveClick(product){
      if(confirm('Would you like to delete ?')){
        var index = this.products.indexOf(product);
        this.carts.splice(index, 1)
        this.counter --
      }
    }
  }
};
</script>

<style></style>
