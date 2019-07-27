import VueRouter from "vue-router";


import List from "./components/list.vue"
import Cart from "./components/cart.vue"

const router = new VueRouter({
    routes:[
        {path:"/",redirect:'/list'},
        {path:"/list",component:List},
        {path:"/cart",component:Cart},
    ]
})

export default router;