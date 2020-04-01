'use strict';

function calcular(){

    var json = { "datos1": [
    {
        dni : 65748392,
        año_nacimiento : 1979,
        ingreso_empresa : 2010,
        plus_productividad : 25,
        plus_antigüedad : 10,
        sueldo_base : 1500
    }],
        "datos2": [
   {
        dni : 93748920,
        año_nacimiento : 1997,
        ingreso_empresa : 2020,
        plus_productividad : 10,
        plus_antigüedad : 10,
        sueldo_base : 900
   
    }],
 	"datos3": [
    {
        dni : 857638399,
        año_nacimiento : 1989,
        ingreso_empresa : 2005,
        plus_productividad : 30,
        plus_antigüedad : 10,
        sueldo_base : 1600
    }
    ]};
    
    var edad1 = 0;
    var sueldo1 = 0;
    var antigüedad1 = 0;
    var contador1 = 0;
    
    var edad2 = 0;
    var sueldo2 = 0;
    var antigüedad2 = 0;
    var contador2 = 0;

    var edad3 = 0;
    var sueldo3 = 0;
    var antigüedad3 = 0;
    var contador3 = 0;
    
    var year = new Date();

    for(var i = 0; i < json.datos1.length; i++){

        edad1 = year.getFullYear() - json.datos1[i].año_nacimiento;
        antigüedad1 = year.getFullYear() - json.datos1[i].ingreso_empresa;
        contador1 = antigüedad1 / 3;

        sueldo1 = json.datos1[i].sueldo_base + json.datos1[i].sueldo_base * (json.datos1[i].plus_productividad / 100)
                + json.datos1[i].sueldo_base * (json.datos1[i].plus_antigüedad * contador1 / 100);

    }

    for(var i = 0; i < json.datos2.length; i++){

        edad2 = year.getFullYear() - json.datos2[i].año_nacimiento;
        antigüedad2 = year.getFullYear() - json.datos2[i].ingreso_empresa;
        contador2 = antigüedad2 / 3;

        sueldo2 = json.datos2[i].sueldo_base + json.datos2[i].sueldo_base * (json.datos2[i].plus_productividad / 100)
                + json.datos2[i].sueldo_base * (json.datos2[i].plus_antigüedad * contador2 / 100);

    }

	for(var i = 0; i < json.datos3.length; i++){

        edad3 = year.getFullYear() - json.datos3[i].año_nacimiento;
        antigüedad3 = year.getFullYear() - json.datos3[i].ingreso_empresa;
        contador3 = antigüedad3 / 3;

        sueldo3 = json.datos3[i].sueldo_base + json.datos3[i].sueldo_base * (json.datos3[i].plus_productividad / 100)
                + json.datos3[i].sueldo_base * (json.datos3[i].plus_antigüedad * contador3 / 100);

    }
	console.log('Resultado de sueldo y edad de los usuarios');
    	console.log('Sueldo usuario 1:', sueldo1, 'euros');   
	console.log('Edad usuario 1:' , edad1, 'años');
    	console.log('Sueldo del usuario 2:', sueldo2, 'euros');
	console.log('Edad usuario 2:' , edad2, 'años');
	console.log('Sueldo usuario 1:', sueldo3, 'euros');
	console.log('Edad usuario 2:' , edad3, 'años');   
    
}

calcular()
