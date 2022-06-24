<template>
  <v-app>
    <v-app-bar
      app
      color="green"
      dark
    >
      <router-link style="text-decoration: none; color: inherit;" to="/">
      </router-link>

        <v-spacer></v-spacer>

          <v-text-field class="shrink" style="width:500px" hide-details single-line v-model=cari placeholder="Search..." v-on:keyup.enter="search()">

          </v-text-field>
        
        <v-btn icon v-on:click="search()">
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon
              v-bind="attrs"
              v-on="on">
              <!-- merupakan kompenen untuk membuat sebuah tampilan -->
                <!-- <router-link style="text-decoration: none; color: inherit;" to="/login"> -->
                  <v-icon>mdi-account-convert</v-icon>
                <!-- </router-link> -->
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="item in account" :key="item.id">
            <v-list-item-title>{{item.username}} - {{item.email}}</v-list-item-title>
            
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
              <v-btn v-on:click="login()" v-if="isLogin==null" block color="primary">
                LOGIN <v-icon>mdi-login</v-icon> 
              </v-btn>
              <v-btn v-on:click="logout()" v-else block color="primary">
                LOGOUT <v-icon>mdi-logout</v-icon> 
              </v-btn>
            </v-list-item-title>
            </v-list-item>

        </v-list>
      </v-menu>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
<!-- autentifikasi import dari firebase -->
<script>
import firebase from 'firebase';
import { db } from './db';
export default {
  name: 'App',

  data(){
    return{
      cari:'',
      account:[],
      isLogin:localStorage.getItem("isLogin")
    }
  },
  // merupakan state management yang ada di folder store
  created(){
    db.collection("account")
      .where("email","==",localStorage.getItem("email"))
      .get()
      .then((querySnapshot) => {
          const documents = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
          this.account = documents;
      });
    if(localStorage.getItem("email") && localStorage.getItem("password")){
      firebase.auth()
          .signInWithEmailAndPassword(this.email,this.password)
          .then((user) => {
            localStorage.setItem("email",localStorage.setItem("email"))
            alert(user + 'Login Succesfull')
           
            this.$router.push('/')
          })
          .catch((e) => {
            alert('Login Failed' + e.message)
          })
    }
  
  },
  methods:{
    login(){
      return this.$router.push('/login')
    },
    logout(){
      firebase.auth()
      .signOut()
      .then(() => {
        localStorage.removeItem("email")
        localStorage.removeItem("isLogin")
        this.$router.push("/")
        location.reload()
        
      })
    },
    search(){
      this.$store.commit('setCari', this.cari)
      if (this.$router.currentRoute.path != "/search") {
        this.$router.push("/search");
        }
      // this.$router.push('/search');
    },
    numCartItem(){
      try {
        if(this.$store.getters.cart.length<1){
          return "0";
        } else {
          return this.$store.getters.cart.length;
        }
        
      } catch(err){
        return 0;
      }
    }
  }
};
</script>
