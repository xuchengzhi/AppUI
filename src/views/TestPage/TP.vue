<template>
    
    <el-amap vid="amapDemo" :zoom="zoom" :searchOption="searchOption" :center="center"></el-amap>
    
    
</template>

<script>
export default {
    data(){
        return {
            zoom: 12,
            center: [121.59996, 31.197646], 
            searchOption: {
            city: '上海',
            citylimit: true
          },
        } 
    },
    methods: {
        
    }
    
}
    
</script>

<style>
    
</style>