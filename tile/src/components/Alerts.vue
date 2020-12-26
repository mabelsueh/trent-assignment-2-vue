<template>
    <div class="alerts">
        {{message}}
    </div>
</template>

<script>
export default {
    name: "Alerts",
    props:['message']
    
}
</script>

<style scoped>
.alerts {
    background-color: pink;
}

</style>