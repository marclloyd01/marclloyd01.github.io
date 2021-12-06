function handleSubmit(event) {
  event.preventDefault();
  var formElem = document.querySelector("form");
  var formData = new FormData(formElem);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "../phpfiles/php-to-email.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(formData);

  formData.forEach((item) => {
    console.log(item);
  });
}

// function postData(data) {
//   return new Promise((resolve, reject) => {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "../phpfiles/php-to-email.php", true);
//     xhr.onload = () =>
//       xhr.status == 200 ? resolve(xhr.response) : reject(Error(xhr.statusText));
//     xhr.onerror = (e) => reject(Error(`Networking error: ${e}`));
//     xhr.send(data);
//   });
// }
