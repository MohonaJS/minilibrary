import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {  
        books: [
            {  
                id:1,
                title: 'bangla',
                author_name: 'Jasim uddin',
                content: 'বাংলা লাইব্রেরির সাথে যোগাযোগ, মন্তব্য, উপদেশ, অনুরোধ এবং নতুন বাংলা বইয়ের তাৎক্ষণিক আপডেট পেতে ফেসবুক পেজ'
            },
            {  
                id:2,
                title: 'english',
                author_name: 'JElizabeth',
                content: 'Hijab row: The India woman who is the face of the fight to wear headscarf'
            },
            {  
                id:3,
                title: 'SWedish',
                author_name: 'David lingberg',
                content: 'Riksbanken lämnar reporäntan oförändrad – igen. En höjning kan tidigast ske andra halvåret 2024, vilket är något före tidigare prognos'
            },
            {  
                id:4,
                title: 'Finissh',
                author_name: 'Kalle',
                content: 'Riksbanken lämnar reporäntan oförändrad – igen. En höjning kan tidigast ske andra halvåret 2024, vilket är något före tidigare prognos'
            },
            {  
                id:5,
                title: 'Dansk',
                author_name: 'Darwin larsson',
                content: ' En höjning kan tidigast ske andra halvåret 2024, vilket är något före tidigare prognos'
            },
        ]
    }
})

export default store