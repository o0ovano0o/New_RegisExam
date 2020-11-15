<template>


    <!--Navbars -->
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark" >
      <img src='https://media-cdn.tripadvisor.com/media/photo-s/07/fb/48/ef/lotteria.jpg' width="auto" height="65" class="navbar-brand"/>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" style="margin: 0px 30px" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li :class="home">
            <router-link class="nav-link"  to="/home" >Trang chủ</router-link>
          </li>

          <li :class="order">
            <router-link class="nav-link"  :to = "{ name: 'order', params: { id: 1 }}" >Đặt hàng</router-link>
          </li>
          <li :class="menu">
            <router-link class="nav-link"  to="/menu" >Thực đơn</router-link>
          </li>
        </ul>
        <div>
          <!-- <div class="Dropdown-Title js-dropdown">Dropdown me !</div>
          <div class="Dropdown-ItemList Dropdown-ItemList--closed" style="position:absolute">
            <a class="Dropdown-Item">First link</a>
            <a class="Dropdown-Item">Second link</a>
            <a class="Dropdown-Item">Third link</a>
          </div> -->
        </div>
        <ul class="navbar-nav" v-if="userInfo.name!==''"  style="display: contents;">
          <li class="nav-item">
            <router-link to="/mycard" >
            <span><i class="fa fa-shopping-cart" :id="card" aria-hidden="true"></i></span>
            <span class="badge badge-danger">{{cardtotal}}</span></router-link>
          </li>
           <li class="nav-item">
          <a @click="towishlist()"  class="card-link" style="margin:10px;">
            <span><i class="fa fa-heart icon-heart" :id="tim"></i></span></a>
           </li>
          <li>
            <div class="thumb" v-if="userInfo.entry_type==='admin_employee'" style="background-image:url('https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png');width: 40px;height: 40px"></div>
            <div class="thumb" v-else-if="userInfo.entry_type==='customer'" style="background-image:url('https://www.iconhot.com/icon/png/network/256/user-group-6.png');width: 40px;height: 40px"></div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle Dropdown-Title js-dropdown" style="color: whitesmoke" href="#" @click="toggleDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{userInfo.name}}</a>
            <div class="dropdown-menu dropdown-menu-right Dropdown-ItemList Dropdown-ItemList--closed" aria-labelledby="dropdown" v-if="display">
              <a class="dropdown-item Dropdown-Item" href="" @click="toMyorder()">Đơn hàng của tôi</a>
              <a class="dropdown-item Dropdown-Item" href="#" @click="openmodal()">Thay đổi mật khẩu</a>

              <a class="dropdown-item Dropdown-Item" href="#" @click="openeditprofilemodal()">Cập nhật thông tin</a>
              <a class="dropdown-item Dropdown-Item" @click="logout()" href="#">Đăng xuất</a>
            </div>
          </li>
        </ul>
        <ul v-else class="navbar-nav" style="display: contents;">

          <li class="nav-item">
            <a class="nav-link" href="/login">Đăng nhập</a>
          </li>
        </ul>
      </div>
      <ModalEditPassword/>
      <ModalEditProfile/>
    </nav>

</template>
<script>
const data = [

   "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js',
  "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js",
]
import { mapGetters, mapActions } from "vuex";
import jquery from 'jquery';
window.$ = jquery;
import ModalEditPassword from '../ModalEditPass/index';
import ModalEditProfile from '../ModalEditProfile/index';
export default {
  name: 'Nav',
  components: {
    ModalEditPassword,
    ModalEditProfile
  },
  props: {
    name:{
      type: String,
      default: '',
      required: false
    },
    account_type:{
      type: String,
      default:'',
      required: false
    },
    home:{
      type: String,
      default:'nav-item',
      required: false
    },
     order:{
      type: String,
      default:'nav-item',
      required: false
    },
     menu:{
      type: String,
      default:'nav-item',
      required: false
    },
    tim:{
      type: String,
      default:'nor',
      required: false
    },
    card:{
      type: String,
      default:'c',
      required: false
    }
  },
  data() {
    return {
      display: false
    }
  },
  computed: {
      ...mapGetters(["authMsg", "authStatus","loading","userInfo","cardtotal"]),
  },
   methods: {
    ...mapActions(["getUser","logOut","getCard"]),
    toMyorder(){
      this.$router.push({ name: 'myorder'});
    },
    towishlist(){
      this.$router.push({ name: 'wishlist'});
    },
    tomycard(){
      this.$router.push({ name: 'mycard' });
    },
    toggleDropdown() {
      this.display = !this.display;
      var next = $(this).next()
      if (next.hasClass('Dropdown-ItemList--closed')) {
        next.removeClass('Dropdown-ItemList--closed')
      } else {
        next.addClass('Dropdown-ItemList--closed')
      }
    },
    async logout(){
       this.$router.push({ name: "user_login" });
      await this.logOut();
    },
    openmodal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    },
    openeditprofilemodal() {
      var modal = document.getElementById("editprofile");
      modal.style.display = "block";
    },
  },
    watch: {
      authStatus: async function() {
        if(this.authStatus === 'loading'){
          return this.$toasted.show(this.authMsg, {
            theme: "toasted-primary",
            position: "top-right",
            duration : 3000,
            type: 'info'
          });
        }
        if(this.authStatus === 'success') {
          return await this.$toasted.show(this.authMsg, {
            theme: "toasted-primary",
            position: "top-right",
            duration : 5000,
            type: this.authStatus
          });
        }
        return this.$toasted.show(this.authMsg, {
            theme: "toasted-primary",
            position: "top-right",
            duration : 5000,
            type: this.authStatus
        });
      }
    },
  async created() {
    await this.getUser();
    await this.getCard();
  },
  beforeUpdate() {
     $('.js-dropdown').on('click', function() {
      var next = $(this).next()
      if (next.hasClass('Dropdown-ItemList--closed')) {
        next.removeClass('Dropdown-ItemList--closed')
      } else {
        next.addClass('Dropdown-ItemList--closed')
      }
    });
  },
  mounted() {
      $('.js-dropdown').on('click', function() {
      var next = $(this).next()
      if (next.hasClass('Dropdown-ItemList--closed')) {
        next.removeClass('Dropdown-ItemList--closed')
      } else {
        next.addClass('Dropdown-ItemList--closed')
      }
    });
    data.forEach(item => {
      const plugin = document.createElement("script");
          plugin.setAttribute(
      "src",
    item
    ); plugin.async = true;
    document.head.appendChild(plugin);
    });

  },

}
</script>
<style lang="scss" scoped>
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css');
.nav-item:hover {
  background-color: red;
}
a {
  font-size: 16px;
}
#tim {
  color:white;
  font-size:35px;
}
#card {
  color: white;
  font-size:35px;
}
#c {
  font-size:35px;color:pink;
}
#nor {
  font-size:35px;color:pink;
}
.Dropdown-Title {
  font-weight: 600;
  text-transform: uppercase;
  padding: 5px 10px;
  border-radius: 2px;
  width: 200px;
  text-align: center;
  cursor: pointer;
}
.Dropdown-ItemList {
  display: flex;
  flex-direction: column;
  width: 200px;
    background-color: darkcyan;
}
.Dropdown-Item {
  width: 100%;
  background-color: darkcyan;
  border-color: white;
  border:1px;
  padding: 5px 10px;
  margin-top: 1px;
  border-radius: 3px;
}
.Dropdown-Item:hover {
  background-color: white;

}
.Dropdown-ItemList--closed {
  display: none;
}
</style>