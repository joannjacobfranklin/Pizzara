menu_list_array = ["Veg Margherita Pizza",
                   "Pepperoni Pizza",
                   "Hawaiian Pizza",
                   "Cheese Pizza",
                   "Veggie Pizza",
                   "BBQ Chicken Pizza"
                    ];

function getmenu(){

var htmldata;
htmldata = "<ol class='menulist'>"
menu_list_array.sort();
 for ( var i=0 ; i <menu_list_array.length ; i++ ){    
      htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>'
 }
htmldata= htmldata + "</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata = "<section class='cards'>"
for (var i=0; i<menu_list_array.length; i++){
    htmldata= htmldata + ' <span class="card"> ' + '<img class= "img-responsive" id= "Pizza-img" src="pizzaImg.png"/> '
+  menu_list_array[i] + '</span>'
}
htmldata = htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function add_top(){
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
     add_item();
}