<template>
    <div>
        <div class="container">
        <h1>Welcome Back</h1>
        <div>
           <b-form-group id="formgroup">
             <b-form-input type="text" label="username" placeholder="Enter Username" autocomplete="off" class="mb-2" v-model="loginUsername"/>
             <b-form-input type="password" label="Password" size="sm" placeholder="Enter Password" v-model="loginPassword"/>
             <p v-bind:style="{color:errorMsgColor}">{{passwordErrorMsg}}</p>
             <b-button v-on:click="userLogin" variant="danger" size="sm">Login</b-button>
           </b-form-group>
        </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'Login',
    components: {}
    
}
</script>

<style scoped>

</style>