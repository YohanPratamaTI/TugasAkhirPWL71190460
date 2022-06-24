<template>
  <v-container>
    <v-card class="wrapper" elevation="20">
      <v-form class="pa-5 mt-5">
        <v-text-field class="mt-5" label="Email" type="email" v-model="email"></v-text-field>
        <v-text-field class="mt-3" label="Password" type="password" v-model="password"></v-text-field>
        <v-btn class="btn mt-3" v-on:click="login()">Login</v-btn>
      </v-form>
      <div class="text-center fs-6">
        belum punya akun? <router-link style="text-decoration: none;" to="/register">Sign Up</router-link>
      </div>

    </v-card>
    
  </v-container>
</template>

<script>
  import firebase from 'firebase';

  export default {
      data (){
    return{
      step: 1,
      username:'',
      email:'',
      password:'',
    }
  },
  props: {
    source: String
  },
  methods:{
    login(){
      firebase.auth()
      .signInWithEmailAndPassword(this.email,this.password)
      .then((user) => {
        localStorage.setItem("email",this.email)
        localStorage.setItem("isLogin", true)
        alert(user + 'Login Succesfull')
        this.$router.push('/')
        location.reload()
      })
      .catch((e) => {
        alert('Login Failed' + e.message)
      })
    }
  } 
    
  }
</script>
<style>
.wrapper {
    max-width: 350px;
    min-height: 500px;
    margin: 80px auto;
    padding: 40px 30px 30px 30px;
}

.logo {
    width: 80px;
    margin: auto;
    padding-bottom: 20px;
}

.logo img {
    width: 100%;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0px 0px 3px #5f5f5f,
        0px 0px 0px 5px #ecf0f3,
        8px 8px 15px #a7aaa7,
        -8px -8px 15px #fff;
}

.wrapper .name {
    font-weight: 600;
    font-size: 1.4rem;
    letter-spacing: 1.3px;
    padding-left: 30%;
    color: orangered;
    text-align: center;
}

.wrapper .form-field input {
    width: 100%;
    display: block;
    font-size: 1.2rem;
    padding: 10px 15px 10px 10px;
}


.wrapper .btn {
    box-shadow: none;
    width: 100%;
    height: 40px;
    background-color: #03A9F4;
    /* color: #fff; */
    border-radius: 25px;
    box-shadow: 3px 3px 3px #b1b1b1,
        -3px -3px 3px #fff;
    letter-spacing: 1.3px;
}

.wrapper .btn:hover {
    background-color: #039BE5;
}

.wrapper a {
    text-decoration: none;
    color: orange;
}

.wrapper a:hover {
    color: orangered;
}

</style>