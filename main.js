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

var venditori =[]
var venditore
var vendite = 0;
var vendite_per_venditore=[]
var mesi =[]
var vendite_mensili =0;
var vendite_per_mese=[]

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
    console.log(venditori);

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
          vendite += data[j].amount;
          // console.log(vendite);
        }
      }
      vendite_per_venditore.push(vendite);
      // qui finisce il ciclo principale, quando riparte vendite ritorna a 0
    }
    console.log(vendite_per_venditore);

    for (var i = 0; i < data.length; i++) {
      // ciclo per ottenere un array col i diversi mesi
      // prima converto la data in oggetto moment
      var moment_data = moment(data[i].date, "DD/MM/YYYY");
      var mese = moment_data.format('MMMM');
      // if per evitare ripetizioni nel riempimento dell'array
      // !punto esclamativo intende essere negativo
      if (!mesi.includes(mese)) {
        mesi.push(mese);
      }
    }
    console.log(mesi);

    for (var i = 0; i <mesi.length; i++) {
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
        if(mesi[i] == mese1){
          vendite_mensili += data[j].amount;
          // console.log(vendite_mensili);
        }
      }
      vendite_per_mese.push(vendite_mensili);
      // qui finisce il ciclo principale, quando riparte vendite_mensili ritorna a 0
    }
    console.log(vendite_per_mese);
  },
  'error':function(){
    alert('GET : si è verificato un errore');
  }
});

var ctx = $('#graph1');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: venditori,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: vendite_per_venditore
        }]
    },

    // Configuration options go here
    options: {}
});
