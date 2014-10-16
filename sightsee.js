// JavaScript Document


    var logos = [
    "http://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2014/01/BA-logo.jpg",
    "https://doublethedonation.com/wp-content/uploads/2012/11/Delta-Matching-Gift-Logo.png",
    "http://netdna.webdesignerdepot.com/uploads/2013/02/american-airlines-1968-logo-1024x707.jpg",  
	"http://netdna.webdesignerdepot.com/uploads/2009/03/aircanada.gif",
	"http://vector.me/files/images/6/6/664094/united_airlines.png"
    ];
	
	var Hotellogos = [
    "http://www.gmkfreelogos.com/logos/S/img/Super_8_Motel-1.gif",
    "http://webneel.com/image/logo/32-hotel-logos.gif",
    "http://www.gmkfreelogos.com/logos/S/img/Super_8_Motel-1.gif",
    "http://webneel.com/image/logo/32-hotel-logos.gif",
    "http://www.gmkfreelogos.com/logos/S/img/Super_8_Motel-1.gif",
    "http://webneel.com/image/logo/32-hotel-logos.gif"];
	
	var Carlogos=[
    "http://image.motortrend.com/f/features/auto_news/2011/1112_ford_focus_powershift_transmission_is_much_improved/36039328/ford-focus-side-view.jpg",
  "http://static.usnews.rankingsandreviews.com/images/Auto/izmo/360633/2014_toyota_camry_angularfront.jpg",
    "http://static.usnews.rankingsandreviews.com/images/Auto/izmo/360633/2014_toyota_camry_angularfront.jpg",
    "http://static.usnews.rankingsandreviews.com/images/Auto/izmo/360633/2014_toyota_camry_angularfront.jpg",
    "http://static.usnews.rankingsandreviews.com/images/Auto/izmo/360633/2014_toyota_camry_angularfront.jpg"
    
 ];

var sightlogos=[
    "http://www.crimemuseum.org/wp-content/uploads/2014/06/alcatraz.jpg",
    "http://www.crimemuseum.org/wp-content/uploads/2014/06/alcatraz.jpg",
    "http://www.crimemuseum.org/wp-content/uploads/2014/06/alcatraz.jpg",
    "http://www.crimemuseum.org/wp-content/uploads/2014/06/alcatraz.jpg",
    "http://www.crimemuseum.org/wp-content/uploads/2014/06/alcatraz.jpg"
    
    ];


    var hotel_json = JSON.parse(hoteldata);
  	alert(hotel_json[0].name);

/* ================================================= */

function addLogo(type) {
	var newdiv = document.createElement('div');
    newdiv.setAttribute('class', 'location');
    var img = new Image();
    newdiv.appendChild(img);
	var r = Math.floor((Math.random() * 100) % 5);
	if (type == 'hotel')
        img.src = Hotellogos[r];
    else if (type =='car')
        img.src = Carlogos[r];
    else if (type=='sightsee')
        img.src = sightlogos[r];
        else
        img.src = sightlogos[r];
    return newdiv;
}

function addimagewithtext(text,textstyle,image,imagestyle)
{
    var parent = document.createElement('div');
    parent.setAttribute('class', 'location');
  //  parent.appendChild(addElement('economy', 'place'));
	parent.appendChild(addElement(text,textstyle));
   // parent.appendChild(addLogo('car','carimage'));
	parent.appendChild(addLogo(image,imagestyle));

    return parent;
    
}

function addElement(text, style) {
    var newdiv = document.createElement('div');
    newdiv.setAttribute('class', style);
    newdiv.innerHTML = text;
    return newdiv;
}
function addcolumns4(col1,col2,col3,col4,col5,style) {
    var parent = document.createElement('div');
    parent.setAttribute('class', style);
    parent.appendChild(addElement(col1, 'place'));
    parent.appendChild(addElement(col2, 'date'));
    parent.appendChild(addElement(col3, 'time'));
  	parent.appendChild(addElement(col4, 'time'));
   	parent.appendChild(addButton(col5, 'time'));

    return parent;
}

function addcolumns3(col1,col2,col3,style) {
    var parent = document.createElement('div');
    parent.setAttribute('class', style);
    parent.appendChild(addElement(col1, 'place'));
    parent.appendChild(addElement(col2, 'date'));
    parent.appendChild(addElement(col3, 'time'));
 	return parent;
}

function addcolumns6(col1,col2,col3,col4,col5,col6,style) {
    var parent = document.createElement('div');
    parent.setAttribute('class', style);
    parent.appendChild(addElement(col1, 'place'));
    parent.appendChild(addElement(col2, 'date'));
    parent.appendChild(addElement(col3, 'time'));
	parent.appendChild(addElement(col4, 'time'));
	parent.appendChild(addElement(col5, 'time'));
	parent.appendChild(addElement(col6, 'time'));
 	return parent;
}

function addcolumnsbuttons6(col1,col2,col3,col4,col5,col6,style)
{
	var parent = document.createElement('div');
    parent.setAttribute('class', style);
    parent.appendChild(addElement(col1, 'place'));
    parent.appendChild(addElement(col2, 'date'));
    parent.appendChild(addElement(col3, 'time'));
	parent.appendChild(addElement(col4, 'time'));
	parent.appendChild(addElement(col5, 'time'));
	parent.appendChild(addElement(col6, 'time'));
 	return parent;
}

function addButton(text,style) {
    var newdiv = document.createElement('div');
    newdiv.setAttribute('class', style);
    var myButton = document.createElement("input");
    myButton.type = "button";
    myButton.value = text;
    newdiv.appendChild(myButton);

    document.body.appendChild(newdiv);
    return newdiv;
}

function addLocationWithTime(loc) {
    var parent = document.createElement('div');
    parent.setAttribute('class', 'location');
    parent.appendChild(addElement(loc, 'place'));
    var d = Math.floor((Math.random() * 100) % 30);
    var mm = Math.floor((Math.random() * 100) % 12);

    
    parent.appendChild(addElement('2014/'+ mm + "/"+d, 'date'));

    var h = Math.floor((Math.random() * 100) % 24);
    var m = Math.floor((Math.random() * 100) % 60);

    parent.appendChild(addElement(h + ':' + m, 'time'));
    return parent;
}


    function addStylizedSightsee(divname) {
	var container_div = 
	document.getElementById(divname);
	
    var parent = document.createElement('div');
    parent.setAttribute('class', 'flight');

       parent.appendChild(addimagewithtext('Alcatrez','place','sightsee','location'));
	   var str0="Golden gate bridge";
	   str0=str0.bold();
	  
	   parent.appendChild(addcolumns3(str0,'show on map','Probably the most famous bridge in the whole world, this one is an absolute must-see in San Francisco.', 'location'));
	var str1,str2,str3,str4;
	str1="Official website";
	str1=str1.bold();
	str2="Visit:www.goldengate.org";
	str2=str2.link();
	str3="Wikipedia";
	str3=str3.bold();
	str4="Visit:en.wikipedia.org/wiki/Golden_Gate";
	str4=str4.link();
	
        parent.appendChild(addcolumns4(str1,str2,str3,str4
  ,'Add Trip', 'location'));
   
        
   		//parent.appendChild(addLocationWithTime(source));
        //parent.appendChild(addLocationWithTime(dest));

   /* parent.appendChild(addElement('', 'location'));

    var price_button = addElement('', 'price_button');
    price_button.appendChild(addElement(price, 'price'));
    price_button.appendChild(addButton('Add place','button'));

   parent.appendChild(price_button);*/
           		//parent.appendChild(addLocationWithTime(source));
 //parent.appendChild(addElement(source, 'location'));

        
    container_div.appendChild(parent);
}

function addNSightsee(divname,n) {
    for (var i = 0; i < n; i++) 
	{
        addStylizedSightsee(divname);
    }
}


function addStylizedFlights(divname, source, dest, price) {
	var container_div = 
	document.getElementById(divname);
	
    var parent = document.createElement('div');
    parent.setAttribute('class', 'flight');

    parent.appendChild(addLogo('flight'));

    //parent.appendChild(addElement(source, 'location'));
   		parent.appendChild(addLocationWithTime(source));
        parent.appendChild(addLocationWithTime(dest));

    parent.appendChild(addElement('', 'location'));

    var price_button = addElement('', 'price_button');
    price_button.appendChild(addElement(price, 'price'));
    price_button.appendChild(addButton('Add Flight','button'));

    parent.appendChild(price_button);
    container_div.appendChild(parent);
}

function addNFlights(divname, source, dest, n) {
    for (var i = 0; i < n; i++) 
	{
        var p = Math.floor((Math.random() * 100) + 1000);
        addStylizedFlights(divname, source, dest, '$' + p);
    }
}
	
	//for cars
	function addStylizedCars(divname, location, carcompany, price) 
	{
    var container_div = document.getElementById(divname);

    var parent = document.createElement('div');
    parent.setAttribute('class', 'car');
    parent.appendChild(addLogo('car'));

    parent.appendChild(addElement(location, 'location'));
	//parent.appendChild(addElement(cartype, 'cartype'));

   	var price_button = addElement('', 'price_button');
    price_button.appendChild(addElement(price, 'price'));
    price_button.appendChild(addButton('Add Car','button'));

    parent.appendChild(price_button);
    container_div.appendChild(parent);
}
//for cars
function addNCars(divname, location, carcompany, n) {
    for (var i = 0; i < n; i++) 
	{
        var p = Math.floor((Math.random() * 50) + 10);
        addStylizedCars(divname, location, carcompany, '$' + p);
    }
	
}

function addHotelFromJson(hotel_json) {

}

	function addStylizedHotels(divname,hotel_json, price)
	 {
    var container_div= document.getElementById(divname);
	var parent = document.createElement('div');
    parent.setAttribute('class', 'hotel');
    parent.appendChild(addimagewithtext(hotel_json[0].name,'place','hotel','location'));
	var col1= 'hotelname';
	col1=col1.bold();
	var col2= 'rating';
	col2=col2.bold()
	var p4=Math.floor((Math.random() * 100) %30);
	var col3= '# '+p4+' out of 236 hotels in dest';
	col3=col3.bold()
	var col4= 'some content';
	var p5=Math.floor((Math.random() * 100) + 1);
	var col5= 'Trip Advisor Reviews: '+p5;
	var p6=Math.floor((Math.random() * 100) + 1);
	var col6= 'currently '+p6+' people are viewing this hotel';
	
	//parent.appendChild(addcolumns6(col1,col2,col3,col4,col5,col6,'location'));
	parent.appendChild(addcolumns6(hoteldata[0].name, col2,col3,col4,col5,col6,'location'));
	
	var col7,col8,col9,col10,col11,col12;
	col7='Listed price in various websites';
	col7=col7.bold();
	col8='';
	col9=Math.floor((Math.random() * 100) + 100);
	col10='';
	col11=Math.floor((Math.random() * 100) + 100);
	
	parent.appendChild(addcolumnsbuttons6(col7,col8,'$'+col9,col10,'$'+ col11,'location'));

	
   /* var price_button = addElement('', 'price_button');
    price_button.appendChild(addElement(price, 'price'));
    price_button.appendChild(addButton('Add Hotel'));

    parent.appendChild(price_button); */
    container_div.appendChild(parent); 
	}

function addNHotels(divname, source, dest, n) {
    for (var i = 0; i < n; i++) {
        var p = Math.floor((Math.random() * 100) + 100);
        addStylizedHotels(divname,hotel_json, '$' + p);
    }
}
/*	function onflightclick() {
    //source = document.form1.getElementById("source").value;
	alert('i am clicked');	
	var source = document.form1.source;
		var destination = document.form1.destination;

	   // destination = document.form1.getElementById("destination").value;
					addNFlights('flightlist',source, destination, 15);

}*/
    
    //addNFlights('Sightseelist', 'sanfrancisco', 'dhagh', 5);