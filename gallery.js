let thumbnails = document.getElementsByClassName('thumbnail')

for (var i=0; i < thumbnails.length; i++){
    
    thumbnails[i].addEventListener('mouseover', function(){
        console.log(activeImages)

        if (activeImages.length > 0){
            activeImages[0].classList.remove('active')
        }
                
            this.classList.add('active')
            document.getElementById('featured').src = this.src
    })
}
