<template>
  <div style="background-color:#B0C4DE;">


        <!-- Sign up form -->

        <!-- Sing in  Form -->
        <section class="sign-in" style="padding-top:70px;" >
            <div class="container" style="background-color: #f1f5f7;">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src="./images/signup-image.png" alt="sing up image"></figure>
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Login For Student</h2>

                            <div class="form-group">
                                <!-- <?php if (isset($error)) : ?>
                                <div class="alert alert-danger"><?php echo $error; ?></div>
                                <?php endif; ?> -->
                            </div>
                            <div class="form-group">
                                <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" id="exampleInputEmail" v-model="user.studentcode" placeholder="Student ID" name="mssv" required style="background-color: #f1f5f7;" />
                            </div>
                            <div class="form-group">
                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" id="exampleInputPassword" v-model="user.password" placeholder="Password" name="pass"  style="background-color: #f1f5f7;" required/>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="remember" id="customCheck" class="agree-term"/>
                                <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div class="form-group form-button" style="align-content: center;">
                                <button type="submit" name="signin" id="signin" class="btn btn-secondary" style="align-content: center;" @click="submit">Login</button>
                            </div>


                    </div>
                </div>
            </div>
        </section>

</div>
</template>
<script>
    import LoginAPI from "@/services/modules/account.services.js";
    export default {
        data() {
            return {
                user:{
                    studentcode:'',
                    password:''
                }
            }
        },

        methods: {
            async submit(){
                try {
                    const res = await LoginAPI.logInUser(this.user);                   
                    if(res.data.success){
                        this.$router.push('/student/home');
                        this.$toasted.show('Đăng nhập thành công', {
                            theme: "toasted-primary",
                            position: "top-right",
                            duration : 5000,
                            type: 'success'
                        });
                    }
                } catch (error) {
                    this.$toasted.show('Đăng nhập thất bại', {
                        theme: "toasted-primary",
                        position: "top-right",
                        duration : 5000,
                        type: 'error'
                    });
                }
            }
        },

        watch: {
        },

        created() {
            
        },
    }
</script>

<style lang="scss" scoped>
@import url('./css/style.css');
@import url('./fonts/material-icon/css/material-design-iconic-font.min.css');
</style>