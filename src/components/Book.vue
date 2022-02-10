<template>
  <div>
      <button>Back</button>
      <h1>{{book.title}}</h1>
      <h6>{{book.author_name}}</h6>
      <p> {{ book.content }} </p>
      <p>Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Aliquam, laboriosam?</p>
       <p>Lorem ipsum dolor sit amet.</p>
       <button>read later</button>
  </div>
</template>

<script>
export default {
    computed: {  
        book(){  
            const books = this.$store.state.books
            const id = this.$route.params.id
            const book = books.find(item => item.id == id)

            if(book){  
                return book
            } else {  
                return { }
            }
        }
    }
}
</script>

<style>

</style>