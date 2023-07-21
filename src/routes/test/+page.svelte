<main>
    <div class="w-full h-fit bg-rose-100">
        <div class="pt-32 pb-16 px-12">
            <main class="container mx-auto px-4 md:px-0 md:pt-6 pt-6 pb-12">
                <div class="container mx-auto px-4 text-sm md:text-xl flex justify-end bg-red-400/0 text-red-700">
                    <a href="/" class="p-2 px-2 hover:text-black duration-500">Home</a>
                    <!-- <a href="/signature" class="p-2 px-2 hover:text-black duration-500">Signature</a> -->
                    <a href="/thedish" class="p-2 px-2 hover:text-black duration-500">The Dish</a>
                    <a href="/about" class="p-2 px-2 hover:text-black duration-500">About Us</a>
                </div>
                <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-8"> 
                    <div class="shadow card">
                        <img src="https://img.taste.com.au/IsrYo4xC/taste/2016/11/easy-yellow-fish-curry-101937-1.jpeg" alt="" class=" hover:scale-110">
                        <div class="content">
                        <div class="name">แกงเหลืองปลาม้า</div>
                        <div class="des">โดยที่ประชาชนแห่งสหประชาชาติ ได้ยืนยันอีกครั้งไว้ในกฎบัตรถึงศรัทธาในสิทธิมนุษย์ชนขั้นพื้นฐาน</div>
                        </div>
                    </div>
                    <div class="shadow card">
                        <img src="https://simply-delicious-food.com/wp-content/uploads/2021/08/Thai-red-curry-fish-4.jpg" alt="" class=" hover:scale-110">
                        <div class="content">
                        <div class="name">แกงกะทิปลาคัง</div>
                        <div class="des">โดยที่ประชาชนแห่งสหประชาชาติ ได้ยืนยันอีกครั้งไว้ในกฎบัตรถึงศรัทธาในสิทธิมนุษย์ชนขั้นพื้นฐาน</div>
                        </div>
                    </div>
                    <div class="shadow card">
                        <img src="https://www.thespruceeats.com/thmb/2HbdZRfNWF-8V622bWjySpFBWHA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/thai-basil-shrimp-3217540-Hero_01-2684da3ec5374854928d223636bc91d6.jpg" alt="" class=" hover:scale-110">
                        <div class="content">
                        <div class="name">ผัดกระเพรากุ้ง</div>
                        <div class="des">โดยที่ประชาชนแห่งสหประชาชาติ ได้ยืนยันอีกครั้งไว้ในกฎบัตรถึงศรัทธาในสิทธิมนุษย์ชนขั้นพื้นฐาน</div>
                        </div>
                    </div>
                    <div class="shadow card">
                        <img src="https://simply-delicious-food.com/wp-content/uploads/2022/05/Spaghetti-Vongole5.jpg" alt="" class=" hover:scale-110">
                        <div class="content">
                        <div class="name">พาสต้าขี้เมา หอยลาย</div>
                        <div class="des">โดยที่ประชาชนแห่งสหประชาชาติ ได้ยืนยันอีกครั้งไว้ในกฎบัตรถึงศรัทธาในสิทธิมนุษย์ชนขั้นพื้นฐาน</div>
                        </div>
                    </div>
                    <div class="shadow card">
                        <img src="https://simply-delicious-food.com/wp-content/uploads/2022/02/Shrimp-Scampi-pasta-1.jpg" alt="" class=" hover:scale-110">
                        <div class="content">
                            <div class="name">พาสต้ากุ้ง</div>
                            <div class="des">โดยที่ประชาชนแห่งสหประชาชาติ ได้ยืนยันอีกครั้งไว้ในกฎบัตรถึงศรัทธาในสิทธิมนุษย์ชนขั้นพื้นฐาน</div>
                        </div>
                    </div>
                </div>
                <p class="md:columns-3 xl:columns-4 text-sm">Magnam corrupti voluptatem placeat, obcaecati consectetur aliquid ad cupiditate eaque ipsam natus iste fugit veritatis ratione, consequatur quae, porro sint impedit dolores perferendis quibusdam earum accusantium ut asperiores. Modi error accusantium repudiandae qui, corrupti dicta temporibus a obcaecati aliquid inventore quisquam quos totam eius perspiciatis nemo consequatur nam, quasi quod nihil quae culpa deserunt officia eos in? Explicabo facere dolor ipsam culpa, cupiditate minus rerum necessitatibus molestiae. Officia ea autem ad quod cum consequuntur earum ipsa ipsum, ipsam aut labore tenetur, quaerat, maxime accusamus nemo error nam numquam reiciendis a. Quaerat aut iste nulla vero exercitationem quibusdam praesentium ut quis ratione distinctio, dolor delectus doloremque tenetur dolore mollitia saepe omnis cumque temporibus ab, excepturi totam?</p>
            </main>
            
        </div>
    </div>
</main>
<style>
    /* .shadow{
        @apply drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)];
    } */
    .card {
        @apply h-[380px] border-2 border-red-500 rounded-2xl text-white overflow-hidden drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]; 
    }
    .card img {
        @apply  w-full h-[250px] object-cover overflow-hidden duration-300; 
    }
    .card .name {
        @apply text-lg font-semibold border-b-2 pt-2 border-rose-400; 
    }
    .card .des {
        @apply text-sm px-0 pt-2 border-0; 
    }
    .card .content {
        @apply px-4 h-[130px] bg-red-800 absolute; 
    }
</style>

