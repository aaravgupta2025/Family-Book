var familyimages = [
    "download (25).jpg","Father.jpg","Sonal.jpg","Grandmother.JPG","Grandfather.jpg","Nani.jpg"
];
var familynames = [
   "Family Book","Nitin Gupta","Sonal Gupta","Urmila Gupta","Raj Gupta","Kamal Arora"
];
var i = 0;
function next(){
    document.getElementById("family_member_image").src = familyimages[i];
    document.getElementById("family_member_name").innerHTML = familynames[i];
    i++
    if(i == 6){
        i=0;
    }
}