<template>
  <div id="app">

    <router-view/>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      sid: "",
      isAuthenticated: false,
      reqToApi: "",
    };
  },
  components: {},
  methods: {
    /**
     * Hàm demo gọi đến backend cần có xác thực
     * Created by nvkhai 29.11.2020
     */
    callToBackendWithToken() {
      var token = window.localStorage.getItem("x-token");
      // var reqContentDemo = {
      //   method: "get",
      //   url: "http://apigateway.toedu.me/nhom5/heathz",
      //   headers: {
      //     Authorization: token,
      //     "Content-Type": "application/json",
      //   },
      //   withCredentials: true,
      //   data:{

      //   },
      // };
      axios.get(
          `http://apigateway.toedu.me/auth/api/intergrates/users/me`,
          // "http://apigateway.toedu.me/nhom5/heathz",
           {
        withCredentials: false,
        data: {
        },
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        }
        ).then((result) => {
          let role=null;
          console.log(result);
          result.data.data.listRoles.split('|').forEach(element => {
            if(element.search('G5') > 0){
              role = element.split('/')[0];
            }
          });
          if(role == 'GROUP_ADMIN') 
          this.$router.push({ name: "admin_home"});
          if(role == 'GROUP_USER') 
          this.$router.push({ name: "student_home"});
          // this.reqToApi = JSON.stringify(result.data, undefined, 4);
        })
        .catch((err2) => {
          console.log(err2);
        });
    },
    /**
     * Hàm kiểm tra có phải được redirect từ Main App hay không
     * true: đúng, false: sai
     * Created by nvkhai 29.11.2020
     */
    isRedirectedFromMainaApp() {
      var url = window.location;
      this.sid = new URLSearchParams(url.search).get("sid");
      console.log(url, '----', this.sid);
      if (
        url.pathname === "/redirect" &&
        this.sid !== null &&
        this.sid !== ""
      ) {
        return true;
      }
      return false;
    },
  },
  // Hàm chạy đầu tiên khi khởi chạy app
  async created() {
    if (this.isRedirectedFromMainaApp()) {
      // clear localStorage
      window.localStorage.clear();
      // lấy về Token từ sid
      axios.defaults.withCredentials = false;
      await axios
        .get(
          `http://apigateway.toedu.me/auth/api/intergrates/token?sid=${this.sid}`,
           {
        withCredentials: false,
        data: {
    }}
        )
        .then((result) => {

          if (result.data.code == 401) {
            // sid không hợp lệ
            this.isAuthenticated = false;
            // window.location.href = "http://toedu.me/";
          } else if (result.data.code == 200) {
            this.isAuthenticated = true;
            // Lấy token Thành công
            // Lưu token vào local storage
            window.localStorage.setItem("x-token", result.data.data.token);
            // Tiếp tục những tác vụ khác của app
            this.callToBackendWithToken();
          } else {
            console.log(result);
            // Lỗi khác
            // window.location.href = "http://toedu.me/";
          }
        })
        .catch((err) => {
          // Có lỗi xảy ra
          console.log(err);
          // window.location.href = "http://toedu.me/";
        });
    } else {
      // Không phải redirect từ Main App, kiểm tra có token không
      var token = window.localStorage.getItem("x-token");
      if (token !== null && typeof token !== undefined && token !== "") {
        // Có token
        // Gửi request check Token
        var reqContent = {
          method: "get",
          url: "http://apigateway.toedu.me/auth/api/intergrates/authen",
          withCredentials: true,
          data: {}
        };
        axios(reqContent)
          .then((result) => {
            if (result.status == 200) {
              // Token hợp lệ
              this.isAuthenticated = true;
              // Gọi tiếp Req đến backend demo
              this.callToBackendWithToken();
            } else {
              // Redirect qua main app
              // window.location.href = "http://toedu.me/";
            }
          })
          .catch((err) => {
            // Có lỗi xảy ra
            this.isAuthenticated = true;
            console.log(err);
            // window.location.href = "http://toedu.me/";
          });
      } else {
        // Trường hợp không có token, redirect qua main app
        // window.location.href = "http://toedu.me/";
      }
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  margin: 0px !important;
}
</style>
