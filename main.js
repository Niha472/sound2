function check(){
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Ue1SnlE3C/model.json",modelready)
}
function modelready(){
    classifier.classify(getresult)
}
function getresult(error,result){
    if (error) {
        console.log(error)
    }
    else{
        console.log(results)
    random_number_r=Math.floor(Math.random()*255)+1
    random_number_g=Math.floor(Math.random()*255)+1
    random_number_b=Math.floor(Math.random()*255)+1
    document.getElementById("soundne").innerHTML="I can hear"+results[0].label
    document.getElementById("identify").innerHTML="Acuracy"+results[0].confidence
    document.getElementById("identify").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("soundne").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    img1=document.getElementById("1")
    img2=document.getElementById("2")
    img3=document.getElementById("3")
    img4=document.getElementById("4")
    if (results[0].label=="cat") {
        img1.src="alien-01.gif"
        img2.src="alien-02.png"
        img3.src="alien-03.png"
        img4.src="alien-04.png"
    } else if (results[0].label=="dog") {
        img1.src="alien-01.png"
        img2.src="alien-02.gif"
        img3.src="alien-03.png"
        img4.src="alien-04.png" 
    } 
    else if (results[0].label=="snake") {
        img1.src="alien-01.png"
        img2.src="alien-02.png"
        img3.src="alien-03.gif"
        img4.src="alien-04.png" 
    } 
    else  {
        img1.src="alien-01.png"
        img2.src="alien-02.ong"
        img3.src="alien-03.png"
        img4.src="alien-04.gif" 
    } 
    }
    }