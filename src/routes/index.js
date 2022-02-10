import Vue from 'vue'
import VueRouter from 'vue-router'
import BookList from '../components/BookList.vue'
import Book from '../components/Book.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/books', component: BookList},
    {path: '/books/:id', component: Book}
]

const router = new VueRouter({
    routes
})

export default router