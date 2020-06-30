$(document).ready(function (){
    var firebaseConfig = {
        apiKey: "AIzaSyDodC3NtvG-R72fpGDwVe9Yj6DE7sR1wvY",
        authDomain: "webfinal-48e6a.firebaseapp.com",
        databaseURL: "https://webfinal-48e6a.firebaseio.com",
        projectId: "webfinal-48e6a",
        storageBucket: "webfinal-48e6a.appspot.com",
        messagingSenderId: "786543345920",
        appId: "1:786543345920:web:6f45a0f5cd37c545fb73e5"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
});

function sandOrder(){
    let inputElement = document.getElementsByName("amount");
    var order = new Object();
    let email = document.getElementById("InputEmail").value
    if(email == ""){
        alert("請輸入Email");
    }
    else{
        order["time"] = firebase.firestore.FieldValue.serverTimestamp()
        order["email"] = email;
    
        var i = 0;
        for (i = 0; i < 4; i++){
            if(inputElement[i].value != 0){
                order[inputElement[i].id] = inputElement[i].value;
            }
        }
    
        let db = firebase.firestore();
        var docRef = db.collection("order").add(order)
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            alert(`已送出訂單 訂單編號:${docRef.id}`);
        });
    
        console.log(order);
        alert("送出訂單");
        document.getElementById("myForm").reset(); 
    }
}