function myFunction() {
  var str = document.getElementById("fechain").value;
  var res = str.split("/");
  var dia = res[0];
  var mes = res[1];
  var anio = parseInt(res[2]);
  var diasin = document.getElementById("diasin").value;
  if (dia>31 ) {
    document.getElementById("demo").innerHTML = "Error!";
    document.getElementById("demo2").innerHTML = "Inserte una fecha de incio valida";
    console.log("Error en el dia");
    console.log("Inserte una fecha de incio valida");
  }
  else if (mes>12) {
    document.getElementById("demo").innerHTML = "Error!";
    document.getElementById("demo2").innerHTML = "Inserte una fecha de incio valida";
    console.log("Error en el mes")
    console.log("Inserte una fecha de incio valida");
  }
  else {
    for (var i = 0; i < diasin ; i++) {
      if (mes==1) {
        // Enero
        if (dia==31) {
          dia=0;
          mes=2
        }
        document.getElementById("mesfinal").innerHTML = "Enero";
      }
      if (mes==2) {
        // Febrero
        if (dia==28) {
          if (anio % 4 == 0 && anio % 100 != 0 || anio % 400 == 0) {
            switch (dia) {
              case 28:
              break;
              default:
              break;
            }
          }else {
            dia=0
            mes=3
          }
        }if (dia==29) {
          dia=0
          mes=3
        }
        document.getElementById("mesfinal").innerHTML = "Febrero";
      }
      if (mes==3) {
        // Marzo
        if (dia==31) {
          dia=0
          mes=4
        }
        document.getElementById("mesfinal").innerHTML = "Marzo";
      }
      if (mes==4) {
        // Abril
        if (dia==30) {
          dia=0
          mes=5
        }
        document.getElementById("mesfinal").innerHTML = "Abril";
      }
      if (mes==5) {
        // Mayo
        if (dia==31) {
          dia=0
          mes=6
        }
        document.getElementById("mesfinal").innerHTML = "Mayo";
      }
      if (mes==6) {
        // Junia
        if (dia==30) {
          dia=0
          mes=7
        }
        document.getElementById("mesfinal").innerHTML = "Junio";
      }
      if (mes==7) {
        // Julio
        if (dia==31) {
          dia=0
          mes=8
        }
        document.getElementById("mesfinal").innerHTML = "Julio";
      }
      if (mes==8) {
        // Agosto
        if (dia==31) {
          dia=0
          mes=9
        }
        document.getElementById("mesfinal").innerHTML = "Agosto";
      }
      if (mes==9) {
        // Septiembre
        if (dia==30) {
          dia=0
          mes=10
        }
        document.getElementById("mesfinal").innerHTML = "Septiembre";
      }
      if (mes==10) {
        // Octubre
        if (dia==31) {
          dia=0
          mes=11
        }
        document.getElementById("mesfinal").innerHTML = "Octubre";
      }
      if (mes==11) {
        // Noviembre
        if (dia==30) {
          dia=0
          mes=12
        }
        document.getElementById("mesfinal").innerHTML = "Noviembre";
      }
      if (mes==12) {
        // Diciembre
        if (dia==31) {
          dia=0
          mes=1
          anio=anio+1;
        }
        document.getElementById("mesfinal").innerHTML = "Diciembre";
      }
      dia++;
      console.log("Bucle "+i);
      console.log("dia "+dia);
      console.log("mes "+mes);
      console.log("año "+anio);
      console.log("****************");
    // for (var j = 0; j < i; j++) {
    //   document.getElementById(j).innerHTML = "<li class='days'>"+i+"</li>";
    // }
    var text;
    text = "<li>";
    for (j = -1; j < i; j++) {
      text += dia ;
      document.getElementById("calendario"+i).innerHTML = text;
      console.log(text);
      console.log("Generador de calendario, vuelta: "+j);
      break;
    }
    text += "</li>";
  }
    console.log("+-+-+-+-+-+-+-+-+");
    console.log("dias a generar: "+diasin);
    console.log("Dia generado: "+dia);
    console.log("Mes generado: "+mes);
    console.log("Año generado: "+anio);
    console.log("+-+-+-+-+-+-+-+-+");
    document.getElementById("demo").innerHTML = "Fecha generada Dia: "+dia+" Mes: "+mes+" Año: "+anio;
    document.getElementById("demo2").innerHTML = "Dias generados: "+diasin;
    document.getElementById("demo2").innerHTML = "Dias generados: "+diasin;
  }
}
