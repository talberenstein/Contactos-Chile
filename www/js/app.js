// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var example = angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

//MODULO CARGANDO



//FIN MODULO CARGANDO


example.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('inicio2', {
      url: '/inicio2',
      views: {
          inicio2: {
            templateUrl: 'templates/inicio2.html'
      }
    }
})

    .state('about', {
      url: '/about',
      views: {
        about: {
          templateUrl: 'templates/about.html'
        }
      }
    })

    .state('development', {
      url: '/development',
      views: {
        development: {
          templateUrl: 'templates/development.html'
        }
      }
    })

$urlRouterProvider.otherwise('/about');

})

example.controller("ExampleController", function($scope, $cordovaContacts){

      alert("Luego de clickear 'Cargar', esperar que la aplicación cargue todos los contactos. Aprox 30 segundos");

    $scope.getContactList = function(){
    $cordovaContacts.find({filter: ''}).then(function(result){
      $scope.contacts = result;
    }, function(error){
      console.log("ERROR: " + error);
    });
  }

/*  $scope.createContact2 = function(){
    var val = document.getElementById('nombre').value;
    alert(val);
    $cordovaContacts.save({"displayName": "Tal"},{"phoneNumbers": val}).then(function(result){
        //
        $scope.getContactList();
    }, function(error){
      console.log("ERROR: " + error);
    });
  }*/

  $scope.updateContact = function(){

    alert("Esperar que la aplicación modifique los contactos. Aprox 2 minutos");

    var options = new ContactFindOptions();
    options.filter = '9';
    options.multiple = true;

    var fields = ["phoneNumbers"];

    navigator.contacts.find(fields, sucessUpdate, onError, options);

    options.filter = '8';
    options.multiple = true;

    var fields = ["phoneNumbers"];

    navigator.contacts.find(fields, sucessUpdate, onError, options);

    options.filter = '7';
    options.multiple = true;

    var fields = ["phoneNumbers"];

    navigator.contacts.find(fields, sucessUpdate, onError, options);

    options.filter = '6';
    options.multiple = true;

    var fields = ["phoneNumbers"];

    navigator.contacts.find(fields, sucessUpdate, onError, options);

    options.filter = '5';
    options.multiple = true;

    var fields = ["phoneNumbers"];

    navigator.contacts.find(fields, sucessUpdate, onError, options);

    options.filter = '4';
    options.multiple = true;

    var fields = ["phoneNumbers"];

    navigator.contacts.find(fields, sucessUpdate, onError, options);

    options.filter = '3';
    options.multiple = true;

    var fields = ["phoneNumbers"];

    navigator.contacts.find(fields, sucessUpdate, onError, options);

    options.filter = '2';
    options.multiple = true;

    var fields = ["phoneNumbers"];

    navigator.contacts.find(fields, sucessUpdate, onError, options);

    options.filter = '1';
    options.multiple = true;

    var fields = ["phoneNumbers"];

    navigator.contacts.find(fields, sucessUpdate, onError, options);

    function sucessUpdate(contacts){
      var nContacts = contacts.length;
      for (var i = 0 ; i < contacts.length ; i++){
      var contact = contacts[i];
      //alert(contac.phoneNumbers[0].value.indexOf("9"));
      s_obj = new String(contact.phoneNumbers[0].value);
      var cont=0,cont2=0,cont3=0;
      //alert(s_obj.substring(0,3));
      var nums = s_obj.split(" ");
      s_obj = nums.join("");
      nums = s_obj.split("(");
      s_obj = nums.join("");
      nums = s_obj.split(")");
      s_obj = nums.join("");
      nums = s_obj.split("-");
      s_obj = nums.join("");
      //alert("s_obj join: " + s_obj);
      //alert("s_obj[3]: " + s_obj[3]);
      if((s_obj.substring(0,3) == +56)){
        if(s_obj[3] == 9){
          //El contacto ya posee +569. No se reformatea
          cont++;
        }
        if((s_obj[3] == 0 && s_obj[4] == 2) || s_obj[3] == 2){
            //+5622 + s_obj_slice(-7)
            cont2++;
            contact.phoneNumbers[0].value = "+5622" + s_obj.slice(-7);
            contact.save(function(saveSucess){
            //alert("Contact update");
            }, function(saveError){
            //alert("Error updating");
            });
          }
      }
      else if(s_obj[0] == 9 ||s_obj[0] == 8 || s_obj[0] == 7 || s_obj[0] == 6 || s_obj[0] == 5 || s_obj[0] == 4){
            //alert("+569"+s_obj.slice(-8));
            cont3++;
            contact.phoneNumbers[0].value = "+569" + s_obj.slice(-8);
            contact.save(function(saveSucess){
            //alert("Contact update");
            }, function(saveError){
            //alert("Error updating");
            });
      }
      else if(s_obj[0] == 2 || (s_obj[0] == 0 && s_obj[1] == 2)){
            //alert("+5622"+s_obj.slice(-7));
            cont2++;
            contact.phoneNumbers[0].value = "+5622" + s_obj.slice(-7);
            contact.save(function(saveSucess){
           // alert("Contact update");
            }, function(saveError){
            //alert("Error updating");
            });
      }
     /*     if(s_obj.substring(4,4) == ' '){
          alert("Entro al espacio");
          if(s_obj.substring(5,6) == 02){
            alert("Entro al 02 con espacio");
            aux = new String(s_obj.substring(7));
            alert("aux: " + aux);
            contact.phoneNumbers[0].value = "+562" + aux;
            contact.save(function(saveSucess){
            alert("Contact update");
            }, function(saveError){
            alert("Error updating");
            });
          }
          if(s_obj.substring(5,5) == 9){
            alert("El contacto tiene +569");
          }
        }
        else if(s_obj.substring(4,5) == 02){
          alert("Entro al 02 sin espacio");
          aux = new String(s_obj.substring(5));
          contact.phoneNumbers[0].value = "+56" + aux;
          contact.save(function(saveSucess){
          alert("Contact update");
          }, function(saveError){
          alert("Error updating");
          });

          if(s_obj.substring(0,0) == 9 || s_obj.substring(0,1) == 02){
          contact.phoneNumbers[0].value = "+56" + s_obj;
          contact.save(function(saveSucess){
          alert("Contact update");
          }, function(saveError){
          alert("Error updating");
          });
      }
        } */
      }

    /*  alert("Total Contactos: " + nContacts);
      alert("Sin actualizar: " + cont);
      alert("Actualizados Santiago: " + cont2);
      alert("Actualizados Celular: " + cont3); */

      $scope.getContactList();

    }
    

    function onError(contactError){
      alert("Error = " + contactError.code);
    }
  }


    /*$scope.createContact3 = function(){
    // create a new contact
    var val = document.getElementById('numero').value;
    var contact = navigator.contacts.create();

    // store contact phone numbers in ContactField[]
    var phoneNumbers = [];
    phoneNumbers[0] = new ContactField('work', val, false);
    //phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
    //phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
    contact.displayName = "Ejemplo5";
    contact.phoneNumbers = phoneNumbers;

    // save the contact
    contact.save();

  } */

});
