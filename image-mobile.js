const gallery = document.querySelectorAll(".gallery-mobile .image"),
previewBox = document.querySelector(".preview-box"),
preview = previewBox.querySelector("img"),
current= previewBox.querySelector(".current-img"),
total = previewBox.querySelector(".total"),
closeIcon = previewBox.querySelector(".icon");
shadow = document.querySelector(".shadow")

window.onload = () =>{
    for(let i  = 0; i< gallery.length; i++)
    {
    total.textContent = gallery.length;
    let newIndex = i;
    let clickImg;
      gallery[i].onclick = () =>{

        clickImg = newIndex;
        console.log(i);
        function prev(){
            current.textContent = newIndex+1;
            let selectedImgurl = gallery[newIndex].querySelector("img").src;
            preview.src = selectedImgurl;

        }
        const prevBtn = document.querySelector(".prev");
        const nextBtn = document.querySelector(".next");
        if(newIndex == 0){
            prevBtn.style.display="none";
        }
        if(newIndex >= gallery.length-1){
            nextBtn.style.display="none";
        }
        
        prevBtn.onclick = () =>{
            newIndex--;
            if(newIndex == 0){
                prevBtn.style.display="none";
            }
            else{
                prev();
                nextBtn.style.display="block";
            }
        }

        nextBtn.onclick = () =>{
            newIndex++;
            if(newIndex >= gallery.length-1){
                nextBtn.style.display="none";
            }
            else{
                prev();
                prevBtn.style.display="block";
            }
        }
        prev();
        previewBox.classList.add("show");
        shadow.style.display = "block";

        closeIcon.onclick = () =>{
            newIndex = clickImg;
            prevBtn.style.display="block";
            nextBtn.style.display="block";
            previewBox.classList.remove("show");
            shadow.style.display = "none";
          }
      }
      
    }
}