<template>

<main style="margin-bottom:60px;"  class="hero-image">
  <div class="container" style="padding-top: 80px;">
    <div id="white" class="border" style="border-radius: 10px;background-color:#fff2f0;">
    <div class="row py-4">

      <!-- Cột 1 -->
      <div class="col-12 col-md-6 col-xl-6 col-lg-6 d-md-block d-sm-none d-none border-right">
        <div class="text-center pt-5">
          <img src="https://www.lotteria.vn/grs-static/icons/logo_512.png" style="width: auto; height: 300px;margin-top: -15px;">
          <br>
          <br>
          <input type="button" class="btn btn-success px-5 round-button" value="Đăng ký ngay" onclick="window.location.href='/register'"/>
          <br>
        </div>
      </div>


      <!-- Cột 2-->
      <div class="col-md-6 col-xl-6 col-lg-6">
        <div class="row py-4" >
        <div class="col-1 col-sm-1 col-md-3"></div>
        <div class="col-10 col-sm-10 col-md-6">

        <div class="box-container box-middle box-space-around box-row-wrap">
          <div class="box-md-40 box-sm-80 box-xs-100">
            <div class="d-md-none d-xl-none d-lg-none text-center">
              <img src="https://www.lotteria.vn/grs-static/icons/logo_512.png" style="width: auto; height: 100px;">
            </div>
            <div class="text-center">
              <h1 class="title orange">
                Đăng nhập
              </h1>
            </div>
          </div>
        </div>

        <div class="box-container box-top box-space-around box-row-wrap">
          <div class="box-md-68 box-sm-80 box-xs-100">
            <div class="box-container box-top box-space-around box-row-wrap box-md-reverse">

              <div class="box-md-44 box-xs-100">
                <div class="panel panel-default box-xs-100">
                  <div class="panel-body panel-body-custom">
                    <div>

                      <div class="new_user" id="new_user">

                        <input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="/gpz+p9FcwYP8fBJ2VgSlWFgkQsehFfzFQsgcc50FRYx2fFCb9XP5Tjux4riYQEakeslGHnO75upC6T7hfMOgQ==" />

                        <div class="form-group margin-bottom-15px">
                          <label for="user_email">Email</label>:
                          <input class="form-control" v-model="userInfo.email"  type="email" placeholder="Email" autofocus="autofocus" required="required" value="" id="user_email" />
                        </div>

                        <div class="form-group margin-bottom-15px">
                          <label for="user_password">Mật khẩu</label>:

                          <input class="form-control" v-model="userInfo.password" placeholder="Password" required="required" type="password" name="userpassword" id="user_password" />
                        </div>

                      <div class="margin-bottom-15px">
                        <div class="row">
                          <div class="col-6 col-sm-6 col-md-6">
                          <input name="userremember_me" type="hidden" value="0" /><input type="checkbox" value="1" name="userremember_me" id="user_remember_me" />
                          <label for="user_remember_me">Nhớ tài khoản</label>
                          </div>

                          <div class="col-6 col-sm-6 col-md-6">
                            <a id="quenmatkhau" href="/sendmail" style="color: orange;">Quên mật khẩu?</a><br>
                          </div>
                        </div>
                      </div>
                        <div class="button">
                          <div class="form-group">
                            <button type="submit" class="btn btn-success btn-block round-button" @click="loginUserByInfo">Đăng nhập</button>
                            <input type="button" class="btn btn-success btn-block round-button d-md-none d-xl-none d-lg-none"
                            value="Đăng ký ngay" onclick="window.location.href='/register'"/>

                          </div>
                        </div>
                        <hr>
                        <!-- <div class="text-center margin-bottom-15px">Hoặc đăng nhập bằng</div><br> -->

                        <div class="box-container box-space-around margin-bottom-20px">

                            <div class="row">
                              <div class="col-6 col-sm-6 col-md-12 col-lg-6 col-xl-6">
                            <!-- <a id="facebook" class="btn btn-block btn-social btn-facebook round-button" href="/auth/facebook">
                              <span class="fa fa-facebook"></span>
                              <font color="white">Facebook</font>
                            </a> -->
                              </div>
                              <div class="col-6 col-sm-6 col-md-12 col-lg-6 col-xl-6">
                              <!-- <a id="google" class="btn btn-block btn-social btn-google round-button" href="/auth/google">
                                <span class="fa fa-google"></span>
                                <font color="white">Google</font>
                              </a> -->
                            </div>
                            </div>
                          </div>

                          </div>
                        </div>
                      </div>
                    </div>

                  </div>


                </div>
              </div>
            </div>
          </div>
          <div class="col-1 col-sm-1 col-md-3"></div>
        </div>
      </div>

    </div>
    </div>
  </div>
  <Footer/>
</main>
</template>
  <script>
import logInAdmin from "@/services/modules/account.services.js";
 import Footer from '../../../components/Footer/index';
  export default {
    name:'login',
    components:{
      Footer
    },
    data() {
      return {
        userInfo: {
          email:'',
          password:''
        },
        authMsg:"",
        authStatus:"",
        redirectDomain:""
      };
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
          await this.$toasted.show(this.authMsg, {
            theme: "toasted-primary",
            position: "top-right",
            duration : 5000,
            type: this.authStatus
          });
          await this.getUser();
          if(this.redirectDomain === 'homeadmin'){
             this.$router.push("homeadmin");
             return;
          }
          else{
             this.$router.push("home");
            await this.createOrderID();
            return;
          }

        }
        return this.$toasted.show(this.authMsg, {
            theme: "toasted-primary",
            position: "top-right",
            duration : 5000,
            type: this.authStatus
        });
      }
    },
    methods: {
        async loginUserByInfo(){
          await logInAdmin.loginByUser(this.userInfo);
        }
    }
    }
</script>

<style lang="scss" scoped>
body {
  padding-top: 2rem;
  color: black;
  /*background-color: #DDDDDD;*/
}

#logo{
  font-family: Abril Fatface;
  font-size: 40px;
  font-weight: bold;
  margin-left: 40px;
}

#search{
  border-radius: 15px;
  width: 300px;
}
#search2{
  border-radius: 9px;
  width: 200%;
}

#footer{
  text-align: center;
  color: #ffffff;
  background-color: #736f6f;
  margin-top: 60px;
}
.featurette-divider {
  margin: 0.5rem 0;
}
#bv{
  margin: 1rem 0;
}
.card{
  border-radius: 10px;
}
.card-img-top{
  border-top-left-radius: 10px;border-top-right-radius: 10px;
}
.step-derc .step-photo{
  display: block;
  width: 100%;
}

.step-images {
  text-align: center;
  width: 48%;
  margin: 4px;
  background-color: #fafafafa;
  display: inline-block;
  float: left;
  border-radius: 16px;
  overflow: hidden;
}
img {
  max-width: 100%;
}
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}
.marketing .col-lg-4 {
  margin-right: .75rem;
  margin-left: .75rem;
}
#sp{
  max-width: 250px;
  border-top: solid 5px;
  text-align: center;
  font-size: 300px;
  margin: 25px auto 30px;
}

.icon-add{
  position: relative;
  top:2.5px;
}
.round-button{
  border-radius: 10px;
}
body, html {
  color: #333333;
}
.title{
	font-size: 40px;
}
main {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 15px;
    line-height: 1.428571429;
    margin-bottom: 60px;
}

/*Css cho phan Signin1*/
#quenmatkhau{
	float: right;
}
#facebook{
	background-color: #4267b2;
}
#google{
	background-color: #EA4335;
}
</style>
