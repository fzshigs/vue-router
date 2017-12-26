<template>
    <div class="user-wrapper">
        <router-link :to="'/user/'+user.id" v-for="user in userList">{{user.username}}</router-link>
        <div class="">
            <p>姓名：{{userData.username}}</p>
            <p>性别: {{userData.sex}}</p>
            <p>爱好: {{userData.hobby}}</p>
        </div>
        <hr>
        <div>
            <router-link exact :to="{path:'/user'/+userData.id,query:{act:'follow'}}">关注</router-link>
            <router-link exact :to="{path:'/user'/+userData.id,query:{act:'share'}}">分享</router-link>
        </div>
        <div>
            {{$route.query}}
        </div>
        <div style="width: 100%;height: 300px"></div>
        <img v-lazy="'http://dynamic-image.yesky.com/185x247/uploadImages/2017/360/58/LRUI1B83N4DU_H.jpg'" alt="">
        <img v-lazy="'src/assets/timg.jpg'" alt="">
    </div>
</template>

<script>
    let users = [
        {id:1,username:'老周',sex:'男', hobby:'电影'},
        {id:2,username:'老bi',sex:'男', hobby:'球'},
        {id:3,username:'碧华',sex:'女', hobby:'购物'}
    ]
    export default {
        data(){
            return{
                userList:[],
                userData:{}
            }
        },
        created(){
            this.userList = users;
            this.getUserData();
        },
        //舰艇一个值得变化
        watch:{
          $route(newData,old){
              //console.log(newData,old) 新变化的值，原来的值
              this.getUserData();
              console.log(newData)
          }
        },
        methods:{
            getUserData(){
                let id =this.$route.params.id;
                if(id){
                    this.userData = this.userList.filter((user)=>{
                        return user.id == id;
                    })[0];
                }else{
                    this.userData = {};
                }

            }
        }
    }
</script>

<style scoped>

.user-wrapper{
    height: 2000px;
}
.user-wrapper a{
    padding:0px 10px;

}
.act{
    background:#333;
    color:#fff;
}


</style>