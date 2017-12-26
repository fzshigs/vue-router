<template>
    <ul class="nav-wrapper">
        <router-link active-class="act" to="/home" tag="li">首页</router-link>
        <router-link active-class="act" to="/article" tag="li">article</router-link>
        <router-link active-class="act" to="/user" tag="li">user</router-link>
    </ul>
</template>

<script>
    export default {
    }
</script>

<style scoped>

.nav-wrapper {
    padding: 0;
    margin: 0;
    list-style: none;
    height: 60px;
    line-height: 60px;
    background: rgba(1, 17, 27, 0.2);
}
.nav-wrapper li{
    float:left;
    padding: 0px 10px;
}
.nav-wrapper li.act{
    background:#333;
    color:#fff;
}
</style>