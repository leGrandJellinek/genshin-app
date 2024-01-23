<script lang="ts">
import { defineComponent } from 'vue';
import { Router, useRouter } from 'vue-router';

import mainMenu from "@/router/navigation/mainMenu";


export default defineComponent({
    name: 'Header' as string,
    data(){
        return {
          menu:  mainMenu as Object[], 
        }
    },
    setup(){
        const router:Router = useRouter();

        const routeChange = (link:string) => {
            router.push({ path: `/${link}` })
        }
        return {
            routeChange
        }
    }
})
</script>

<template>
    <div>
        <VAppBar :elevation="3">
            <template v-slot:prepend>
                <VAppBarNavIcon></VAppBarNavIcon>
            </template>
            <VAppBarTitle>Test</VAppBarTitle>
            <template v-slot:append>
                <ThemeSwitcher/>
            </template>
        </VAppBar>
        <VNavigationDrawer :width="219">
            <VList>
                <VListItem  v-for="(link,index) in menu" :key="index"
                    @click="routeChange(link.to)"
                >
                    <template #title>
                        {{link.title}}
                    </template>
                </VListItem>
            </VList>
        </VNavigationDrawer>
    </div>
</template>


<style lang="sass" scoped>

</style>