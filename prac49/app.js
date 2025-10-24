function submit(){
 var fname = document.getElementById('fname').value
    var lname = document.getElementById('lname').value
    var heading = document.getElementById("heading")
    console.log(fname,lname);
    
    heading.innerText= "<i>"+fname+ " "+ lname+  "</i>"
    heading.innerHTML= "<i>"+fname+ " "+ lname+  "</i>"
}

function expandText(){
    var shortText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    var text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda totam sunt ea eligendi explicabo quibusdam voluptatum repudiandae facere blanditiis quisquam. Tempora asperiores consequatur, ipsam nulla suscipit dolore. Nulla, soluta neque."
    var para = document.getElementById("para")
    var link = document.getElementById("link")

    if(link.innerHTML ==="See more"){
        link.innerHTML="See less"
        para.innerHTML = text
    }else{
        link.innerHTML="See more"
        para.innerHTML = shortText
    }
    // para.innerHTML = text
}