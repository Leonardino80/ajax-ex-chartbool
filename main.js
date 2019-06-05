$.ajax({
  'url': 'http://157.230.17.132:4008/sales',
  'method':'GET',
  'success': function(data){
    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
  },
  'error':function(){
    alert('GET : si è verificato un errore');
  }
});









































// [
//   {
//     "id": 1,
//     "salesman": "Marco",
//     "amount": 9000,
//     "date": "12/02/2017"
//   },
//   {
//     "id": 2,
//     "salesman": "Giuseppe",
//     "amount": 1000,
//     "date": "12/04/2017"
//   },
//   {
//     "id": 3,
//     "salesman": "Riccardo",
//     "amount": 1000,
//     "date": "01/04/2017"
//   },
//   {
//     "id": 4,
//     "salesman": "Riccardo",
//     "amount": 1000,
//     "date": "30/04/2017"
//   },
//   {
//     "salesman": "Riccardo",
//     "amount": 3200,
//     "date": "25/01/2017",
//     "id": 5
//   },
//   {
//     "salesman": "Riccardo",
//     "amount": 4200,
//     "date": "30/03/2017",
//     "id": 7
//   },
//   {
//     "salesman": "Riccardo",
//     "amount": 2000,
//     "date": "20/04/2017",
//     "id": 8
//   },
//   {
//     "salesman": "Riccardo",
//     "amount": 1300,
//     "date": "02/05/2017",
//     "id": 9
//   },
//   {
//     "salesman": "Riccardo",
//     "amount": 1340,
//     "date": "12/06/2017",
//     "id": 10
//   },
//   {
//     "salesman": "Riccardo",
//     "amount": 4350,
//     "date": "12/07/2017",
//     "id": 11
//   },
//   {
//     "salesman": "Riccardo",
//     "amount": 4350,
//     "date": "23/09/2017",
//     "id": 12
//   },
//   {
//     "salesman": "Riccardo",
//     "amount": 8250,
//     "date": "03/10/2017",
//     "id": 13
//   },
//   {
//     "salesman": "Riccardo",
//     "amount": 2010,
//     "date": "03/12/2017",
//     "id": 14
//   },
//   {
//     "salesman": "Roberto",
//     "amount": 2010,
//     "date": "03/01/2017",
//     "id": 15
//   },
//   {
//     "salesman": "Roberto",
//     "amount": 3010,
//     "date": "28/02/2017",
//     "id": 16
//   },
//   {
//     "salesman": "Roberto",
//     "amount": 7010,
//     "date": "10/03/2017",
//     "id": 17
//   },
//   {
//     "salesman": "Roberto",
//     "amount": 1350,
//     "date": "10/04/2017",
//     "id": 18
//   },
//   {
//     "salesman": "Roberto",
//     "amount": 7850,
//     "date": "10/05/2017",
//     "id": 19
//   },
//   {
//     "salesman": "Roberto",
//     "amount": 2850,
//     "date": "11/06/2017",
//     "id": 20
//   },
//   {
//     "salesman": "Roberto",
//     "amount": 550,
//     "date": "11/09/2017",
//     "id": 21
//   },
//   {
//     "salesman": "Roberto",
//     "amount": 1550,
//     "date": "21/10/2017",
//     "id": 22
//   },
//   {
//     "salesman": "Roberto",
//     "amount": 6550,
//     "date": "21/11/2017",
//     "id": 23
//   },
//   {
//     "salesman": "Marco",
//     "amount": 1550,
//     "date": "21/12/2017",
//     "id": 24
//   },
//   {
//     "salesman": "Marco",
//     "amount": 4550,
//     "date": "01/11/2017",
//     "id": 25
//   },
//   {
//     "salesman": "Marco",
//     "amount": 1150,
//     "date": "02/10/2017",
//     "id": 26
//   },
//   {
//     "salesman": "Marco",
//     "amount": 3450,
//     "date": "12/09/2017",
//     "id": 27
//   },
//   {
//     "salesman": "Marco",
//     "amount": 2250,
//     "date": "10/07/2017",
//     "id": 28
//   },
//   {
//     "salesman": "Marco",
//     "amount": 3250,
//     "date": "16/06/2017",
//     "id": 29
//   },
//   {
//     "salesman": "Marco",
//     "amount": 1250,
//     "date": "09/04/2017",
//     "id": 30
//   },
//   {
//     "salesman": "Marco",
//     "amount": 750,
//     "date": "12/02/2017",
//     "id": 31
//   },
//   {
//     "salesman": "Giuseppe",
//     "amount": 750,
//     "date": "12/01/2017",
//     "id": 32
//   },
//   {
//     "salesman": "Giuseppe",
//     "amount": 2480,
//     "date": "12/02/2017",
//     "id": 33
//   },
//   {
//     "salesman": "Giuseppe",
//     "amount": 2580,
//     "date": "04/03/2017",
//     "id": 34
//   },
//   {
//     "salesman": "Giuseppe",
//     "amount": 5800,
//     "date": "04/08/2017",
//     "id": 35
//   },
//   {
//     "salesman": "Giuseppe",
//     "amount": 5800,
//     "date": "04/05/2017",
//     "id": 36
//   },
//   {
//     "salesman": "Giuseppe",
//     "amount": 2800,
//     "date": "30/08/2017",
//     "id": 37
//   },
//   {
//     "salesman": "Giuseppe",
//     "amount": 4800,
//     "date": "30/10/2017",
//     "id": 38
//   }
// ]
