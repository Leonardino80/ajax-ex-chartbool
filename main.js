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
    for (var k = 0; k < data.length; k++) {
      if (!venditori.includes(data[k].salesman)) {
        venditori.push(data[k].salesman);
      }
    }
    console.log(venditori);

    for (var i = 0; i < venditori.length; i++) {
      for (var j = 0; j < data.length; j++) {
        if( venditori[i] == data[j].salesman){
          vendite += data[j].amount;
          console.log(vendite);
        }
      }
      vendite_per_venditore.push(vendite);
      vendite = 0;
    }
    console.log(vendite_per_venditore);

    for (var i = 0; i < data.length; i++) {
      var moment_data = moment(data[i].date, "DD/MM/YYYY");
      var mese = moment_data.format('MMMM');
      if (!mesi.includes(mese)) {
        mesi.push(mese);
      }
    }
    console.log(mesi);

    for (var i = 0; i <mesi.length; i++) {
      for (var j = 0; j < data.length; j++) {
        var moment_data1 = moment(data[j].date, "DD/MM/YYYY");
        var mese1 = moment_data1.format('MMMM');
        if(mesi[i] == mese1){
          vendite_mensili += data[j].amount;
          console.log(vendite_mensili);
        }
      }
      vendite_per_mese.push(vendite_mensili);
      vendite_mensili = 0;
    }
    console.log(vendite_per_mese);
  },
  'error':function(){
    alert('GET : si è verificato un errore');
  }
});
