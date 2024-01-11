<template>
    <v-avatar :image=getLoggedUser.avatar size="80"></v-avatar>
    <div>
        <h1>{{ getLoggedUser }}</h1>
    </div>
</template>

<script>
import { useUserStore } from '@/stores/user';
export default {
    data() {
        return {
            userStore: useUserStore()
        }
    },
    computed: {
        getLoggedUser() {
            return this.userStore.getUser 
        }
    },
}
</script>

<style lang="scss" scoped>

</style>