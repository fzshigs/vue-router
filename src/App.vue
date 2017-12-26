<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div>
      <button type="button" @click="qianjin">前进</button>
      <button type="button" @click="houtui">后退</button>
      <button type="button" @click="gouser">跳转到user</button>
      <button type="button" @click="go2">go2</button>
      <button type="button" @click="tihuan">替换</button>
    </div>
    <transition :name="name">
      <router-view style="position:absolute;top:100px;left:0;"/>
    </transition>
  </div>
</template>

<script>
    import navBar from '@/components/nav'
export default {

    name: 'app',
    data(){
      return{
          name:'left'
        }
    },
    components:{
      navBar
    },
    watch:{
        $route(to,from){
            console.log(to.meta.index,'to');
            console.log(from.meta.index,'from');
            this.name = to.meta.index>from.meta.index?'right':'left';
        }
    },
    methods:{
        qianjin(){
            this.$router.forward();
        },
        houtui(){
            this.$router.back();
        },
        gouser(){
            //不仅可以跳转，而且可以激活历史记录
            this.$router.push('/user')
        },
        go2(){
            //this.$router.go(2)向前走两步
            this.$router.go(-2);//向后退两步
        },
        tihuan(){
            this.$router.replace('/user')
        }


    }
}
</script>

<style>
  .left-enter{
    transform: translateX(-100%);
  }
  .left-enter-active{
    transition:1s 0.5s;
  }
  /*.left-enter-to{*/
    /*tran*/
  /*}*/
  /*.left-leave{

  }*/
  .left-leave-active{
    transition:1s;
  }
  .left-leave-to{
    transform:translateX(100%);
  }
  .right-enter{
    transform: translateX(100%);
  }
  .right-enter-active{
    transition:1s 0.5s;
  }
  .right-leave-active{
    transition:1s;
  }
  .right-leave-to{
    transform:translateX(-100%);
  }
</style>
