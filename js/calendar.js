function myFunction(){
  
  let myElement = document.getElementsByTagName("td");
  
  for (let i = 0; i < myElement.length;i++){
    console.log(myElement[i].innerHTML);
  }

}
