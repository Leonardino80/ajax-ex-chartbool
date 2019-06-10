// Dai dati dobbiamo creare due grafici:
// 1.Andamento delle vendite totali della nostra azienda con un grafico di tipo Line
// (http://www.chartjs.org/docs/latest/charts/line.html) con un unico dataset
// che conterrà il numero di vendite totali mese per mese nel 2017.

// Il secondo grafico è quello a torta
// (http://www.chartjs.org/docs/latest/charts/doughnut.html) che evidenzierà il
// contributo di ogni venditore per l’anno 2017. Il valore dovrà essere la
// percentuale di vendite effettuate da quel venditore (fatturato_del venditore /
// fatturato_totale)
// marco 27200 giuseppe 26010 riccardo 33000 roberto 32730

$(document).ready(function(){

  // parte la funzione per restituire il grafico
  chiamata_ajax_aggiornata_con_grafici();

  // array venditori da popolare con un ciclo
  var venditori =[];
  // variabile contenitore per ottenere le vendite di ciascun venditore
  // a zero solo come promemoria
  var vendite = 0;
  // array con length pari al numero de venditori con le loro vendite
  var vendite_per_venditore=[];
  // array mesi
  mesi_ordinati = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // variabile contenitore per ottenere le vendite di ciascun mese
  // a zero solo come promemoria
  var vendite_mensili =0;
  // array che arriverà a length pari a 12 mesi con le vendite mensili
  var vendite_per_mese=[];

  $('.day').append( '<option val=""> seleziona  il giorno </option>');
  for (var i = 1; i <= 31; i++) {
    $('.day').append( '<option val="'+i+'">' + format_corretto(i)+' </option>');
  };

  $('.month').append( '<option val=""> seleziona  il mese </option>');
  for (var i = 1; i <= 12; i++) {
    $('.month').append( '<option val="'+i+'">' + format_corretto(i)+' </option>');
  };

console.log(venditori);

  // $('.venditore').append( '<option val=""> seleziona  un venditore </option>');
  // for (var i = 0; i < venditori.length; i++) {
  //   $('.venditore').append( '<option val="'+ venditori[1] +'">' + venditori[1] +' </option>');
  // };

  $('.aggiungi_vendita').click( function(){

    var day = $('.day').val();
    var month = $('.month').val();
    var year = 2017;
    if(day.length && month.length ){
      var data_moment = moment( day + '/' +  month + '/' + year ,"DD/MM/YYYY");
      // console.log(data_moment);
      var validity = data_moment.isValid();
      $('.validity').text(day + '/' +  month + '/' + year)
    } else if(!validity){
        alert('la data inserita non è valida');
    } else if(!day.length){
      alert('inserisci il giorno');
    } else if(!month.length){
      alert('inserisci il mese');
    }

    var input_venditore = $('.venditore').val();
    var input_data = $('.validity').text();
    console.log(input_data);
    var input_importo = $('.importo').val();
    $.ajax({
      'url': 'http://157.230.17.132:4008/sales',
      'method':'POST',
      'data' : {
        'salesman' : input_venditore,
        'amount' : parseInt(input_importo),
        'date' : input_data
      },
      'success': function(data){
        console.log(data);
        chiamata_ajax_aggiornata_con_grafici();
      },
      'error':function(){
        alert('POST : si è verificato un errore');
      }
    });
    $('validity').text('');
  });

  function chiamata_ajax_aggiornata_con_grafici(){
    $.ajax({
      'url': 'http://157.230.17.132:4008/sales',
      'method':'GET',
      'success': function(data){
        console.log(data);
        // ciclo per ottenere un array col i diversi nomi dei venditori
        for (var k = 0; k < data.length; k++) {
          // if per evitare ripetizioni nel riempimento dell'array
          if (!venditori.includes(data[k].salesman)) {
            venditori.push(data[k].salesman);
          }
        }
        // console.log(venditori);

        for (var i = 0; i < venditori.length; i++) {
          // variabile dalla quale parto per sommarci le vendite
          // si azzera ad ogni ciclo ovvero
          //  dopo aver dato la somma per ciascun venditore
          vendite = 0;
          for (var j = 0; j < data.length; j++) {
            // dentro al primo ciclo sull array nomi venditori, per ogni venditore ciclo i dati,
            // ogni volta che incontro il nome del venditore
            // in esame dal primo ciclo dentro il secondo ciclo
            // aggiungo la relativa proprietà AMOUNT di vendita alla variabile VENDITE
            if( venditori[i] == data[j].salesman){
              vendite += parseInt(data[j].amount);
              // console.log(vendite);
            }
          }
          vendite_per_venditore.push(vendite);
          // qui finisce il ciclo principale, quando riparte vendite ritorna a 0
        }
        // creo array vuoto per le percentuali
        var vendite_per_venditore_in_percentuale=[];
        //calcolo il totale delle vendite
        var totale_vendite = 0;
        for (var i=0; i < vendite_per_venditore.length; i++) {
          totale_vendite += vendite_per_venditore[i]
        }

        // riempo l'array con le vendite in percentuale
        for (var i = 0; i < vendite_per_venditore.length; i++) {
         vendite_per_venditore_in_percentuale.push(percentuale( totale_vendite , vendite_per_venditore[i] ))
        }
        console.log(vendite_per_venditore_in_percentuale);
        // disegno il grafico relativo
        disegna_grafico_torta( venditori , vendite_per_venditore_in_percentuale )

        // codice per ottenere le vendite mensili

        for (var i = 0; i <mesi_ordinati.length; i++) {
          // variabile dalla quale parto per sommarci le vendite mensili
          // si azzera ad ogni ciclo ovvero
          //  dopo aver dato la somma per ciascun mese
          vendite_mensili = 0;
          for (var j = 0; j < data.length; j++) {
            // conversione moment js
            var moment_data1 = moment(data[j].date, "DD/MM/YYYY");
            var mese1 = moment_data1.format('MMMM');

            // dentro al primo ciclo mesi, per ogni mese ciclo i dati,
            // ogni volta che incontro il nome del mese
            // in esame dal primo ciclo dentro il secondo ciclo
            // aggiungo la relativa proprietà AMOUNT di vendita
            // alla variabile VENDITE_MENSILI
            if(mesi_ordinati[i] == mese1){
              vendite_mensili += parseInt(data[j].amount);
              // console.log(vendite_mensili);
            }
          }
          vendite_per_mese.push(vendite_mensili);
          // qui finisce il ciclo principale, quando riparte vendite_mensili ritorna a 0
        }
        // console.log(vendite_per_mese);
        disegna_grafico_linea( mesi_ordinati , vendite_per_mese )
      },
      'error':function(){
        alert('GET : si è verificato un errore');
      }
    });
  }


  // definisco una funzione per il grafico a torta per i venditori
  function disegna_grafico_torta( etichette , dati ){
    var ctx = document.getElementById('myChart1').getContext('2d');
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'pie',

      // The data for our dataset
      data: {
        labels: etichette,
        datasets: [{
          label: 'venditori',
          data: dati,
          backgroundColor: ['yellow','green','blue','pink', 'grey', 'red']
        }]
      },

      // Configuration options go here
      options: {
        legend: {
          labels: {
            fontSize: 15,
            fontColor: 'red',
            boxWidth: 10,
            fontStyle: 'bold'
          }
        }
      }
    });
  }



  // funzione calcolo percentuale
  function percentuale( totale , parziale ){

  var percentuale = (parseFloat( parziale / totale )*100).toFixed(2);

  return percentuale
  }

  //funzione per arrotondare correggere le date dei mesi in input
  function format_corretto(date){
    if(date > 0 && date <= 9){
      date ='0' + date
    }
    return date
  }

  // definisco una funzione per il grafico in linea per i mesi
  function disegna_grafico_linea( mesi , vendite_per_mese ){
    var ctx = document.getElementById('myChart2').getContext('2d');
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',
      data: {
          labels: mesi,
          datasets: [{
              label: 'Fatturato mensile',
              backgroundColor: 'yellow',
              borderColor: 'black',
              data: vendite_per_mese,
              fill: false
          }]
      },
      options: {
        legend: {
          labels: {
            fontSize: 30,
            fontColor: 'red',
            boxWidth: 0,
            fontStyle: 'bold'
          }
        }
      }
    });
  }

});
