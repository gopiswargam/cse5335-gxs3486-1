function getData(){
    $("#getd").hide();
    var d = [];
    $.get("https://cse5335-gxs3486.herokuapp.com/getPeople",function(data){
        $("#heading").html("<h1 align='center' style='color:red'>People Data</h1>");
        $("#content").html("<table class='table-striped'><thead><th>SNo.</th><th>Name</th><th>Age</th><th>Profession</th><th>Latitude</th><th>Longitude</th></thead><tbody id=\"tdata\"></tbody></table>");
        d[0] = ['Name','Age'];
        var i=1;
        var details ="";
        $.each(JSON.parse(data),function(key,value){
            d[i]=[value.name,value.age];
            details += "<tr><td>"+i+"</td><td>"+value.name+"</td><td>"+value.age+"</td><td>"+value.profession+"</td><td>"+value.latitude+"</td><td>"+value.longitude+"</td></tr>";
            i++;
        });
        $("#tdata").html(details);
        drawGraph(d);
    });
    
}

function drawGraph(d){
    google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable(d);

      var options = {
        title: 'People age representation',
        chartArea: {height: '100%',width:'30%'},
        hAxis: {
          title: 'Age',
          minValue: 0
        },
        vAxis: {
          title: 'Name'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('grapharea'));

      chart.draw(data, options);
    }
}