// Initialize Firebase
var config = {
    apiKey: "AIzaSyC19nBr-SnKtlCQ-8Q9nsEAq7GGNGyIMwQ",
    authDomain: "fortnitewallpapers.firebaseapp.com",
    databaseURL: "https://fortnitewallpapers.firebaseio.com",
    projectId: "fortnitewallpapers",
    storageBucket: "fortnitewallpapers.appspot.com",
    messagingSenderId: "395891832468"
  };
  firebase.initializeApp(config);

  firebase.auth.Auth.Persistence.LOCAL;

  $("#btn-login").click(function(){
        
    var email = $("#email").val();
    var password = $("#password").val(); 

    var result = firebase.auth().signInWithEmailAndPassword(email, password);

    result.catch(function(error){
        var errorCode = error.code; 
        var errorMessage = error.message; 

        console.log(errorCode);
        console.log(errorMessage);
    });

});

$("#btn-logout").click(function(){
    firebase.auth().signOut();
});

function switchView(view){
    $.get({
        url:view,
        cache: false,  
    }).then(function(data){
        $("#container").html(data);
    });
}