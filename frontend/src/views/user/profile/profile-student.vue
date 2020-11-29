<template>
<div class="content">
    <div class="animated fadeIn " style="padding-top:0px;">

    <section class="intro-section">
        <div class="container">
            <div class="row">
                <div class="col-md-1 col-lg-2"></div>
                <div class="col-md-10 col-lg-8">
                    <div class="intro text-center">
                        <div class="profile-img"><a href="04-elements.html"><img src="./assets/images/profile-1-250x250.jpg" alt=""></a></div>
                        <h4><b><a href="ho-so-sinh-vien">Thông tin cá nhân</a></b></h4>

                        <ul class="information margin-tb-30 nav justify-content-center" style="margin-top: 30px;">
                                
                            <form class="form" role="form" style="width: 500px;" v-for="(item, index) in userProfile" :key="index">                               
								<div class="row col">
                                    <div class="col-lg-6 text-right" style="padding-right: 0px;"> Họ và tên 
									</div>
                                    <!-- <label class="col-lg-6 text-right form-control-label">Họ và tên</label> -->
									<div class="col-lg-6 text-left" style="padding-left: 30px;"> {{item.fullname}}
									</div>
								</div>
										
								<div class=" row">
                                    <div class="col-lg-6 text-right"> Mã sinh viên 
									</div>
                                    <!-- <label class="col-lg-6 text-right form-control-label">Mã sinh viên</label> -->
									<div class="col-lg-6 text-left">{{item.studentcode}}
									</div>
								</div>

                                <div class=" row">
                                    <div class="col-lg-6 text-right"> Ngày sinh 
									</div>
									<!-- <label class="col-lg-6 text-right form-control-label">Ngày sinh</label> -->
									<div class="col-lg-6 text-left">{{item.datebirth}}
									</div>
								</div>
                                <div class=" row">
                                    <div class="col-lg-6 text-right"> Giới tính 
									</div>
									<!-- <label class="col-lg-6 text-right form-control-label">Giới tính</label> -->
									<div class="col-lg-6 text-left">{{item.gender}}
									</div>
								</div>
                                <div class=" row">
                                    <div class="col-lg-6 text-right"> Quê quán 
									</div>
									<!-- <label class="col-lg-6 text-right form-control-label">Quê quán</label> -->
									<div class="col-lg-6 text-left">{{item.hometown}}
									</div>
								</div>
                                <div class=" row">
                                    <div class="col-lg-6 text-right"> Lớp khóa học
									</div>
									<!-- <label class="col-lg-6 text-right form-control-label">Lớp khóa học</label> -->
									<div class="col-lg-6 text-left">{{item.class}}
									</div>
								</div>
							</form>

                        </ul>

                    </div><!-- intro -->
                </div><!-- col-sm-8 -->
            </div><!-- row -->
        </div><!-- container -->
    </section><!-- intro-section -->

    <section class="btn-section section">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="heading ">
                        <div class="btn btn-bg-yellow" style="width:65px;height:1px;"></div>
                        <h4><b><a href="ho-so-sinh-vien">Hồ sơ</a></b></h4>

                    </div>
                </div><!-- col-sm-4 -->
            </div><!-- row -->

            <div class="nav justify-content-center">
                <a class="btn btn-bg-yellow" href="/student/repass"
                    style=" margin: 0 10px 10px; padding: 12px 30px; border-radius: 5px;">Thay đổi mật khẩu</a>
            </div>
        </div><!-- container -->
    </section><!-- btn-section -->

    </div>
</div>
</template>

<script>
    import API from "@/services/modules/account.services.js";
    export default {
        data() {
            return {
                userProfile:null
            }
        },

        methods: {
            
            async getProfileStudent(){
                try {
                    const res = await API.getProfileStudent();
                    this.userProfile = res.data.data;
                    this.$toasted.show(this.userProfile.fullname, {
                            theme: "toasted-primary",
                            position: "top-right",
                            duration : 5000,
                            type: 'error'
                        });
                } catch (error) {
                    this.$toasted.show('Đã có lỗi xảy ra', {
                            theme: "toasted-primary",
                            position: "top-right",
                            duration : 5000,
                            type: 'error'
                        });
                }
            },
        },

        watch: {
        },

        async created() {
            await this.getProfileStudent();
        },
    }
</script>


<style lang="scss" scoped>
  .info{
      float: left
  }
</style>