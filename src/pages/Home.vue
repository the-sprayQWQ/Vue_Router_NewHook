<template>
<div>
    <h2>Home组件内容</h2>
    <div>
        <ul class="nav nav-tabs">
            <li>
                <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
            </li>
            <li>
                <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
            </li>
        </ul>
        <!-- 缓存一个 -->
        <keep-alive include="News">
            <router-view></router-view>
        </keep-alive>
        <!-- 缓存多个 -->
        <!-- <keep-alive include="[News,Message]">
        
        </keep-alive> -->
    </div>
</div>
</template>

<script>
import News from './News'
import Message from './Message'
export default {
    name:'Home',
    components:{ News,Message }
}
</script>

<style>

</style>