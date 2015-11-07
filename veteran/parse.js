function facilities(data){
  console.log(data);
  data = data["facilities"];

  for (var i =0 ; i < data.length; i++){
    ele = data[i];
    d = document.createElement("div");

    a = document.createElement("a");
    a.href = ele["url"];
    a.innerHTML = ele["url"];
    $(a).appendTo(d);
    
    title = document.createElement("h2");
    title.innerHTML=ele["name"].replace(/<\/?[^>]+(>|$)/g, " ");

    address = document.createElement("p");
    address.innerHTML= String(ele["address"] + " "+ ele["city"] + ", "  + ele["state"]).replace(/<\/?[^>]+(>|$)/g, "");

    type = document.createElement("p");
    type.innerHTML=ele["type"].replace(/<\/?[^>]+(>|$)/g, " ");

    description = document.createElement("p")
    description.innerHTML=ele["description"].replace(/<\/?[^>]+(>|$)/g, " ");;//replace(/<\/?[^>]+(>|$)/g, " ");


    n = "ele ele" + i;
    $(title).addClass(n).appendTo(d);
    $(address).addClass(n).appendTo(d);
    $(type).addClass(n).appendTo(d);
    $(description).addClass(n).appendTo(d);    
    $(d).addClass(n).appendTo("#info");

  }

}
function getVData(url,parser){
  var stuff, data, success;
   $.ajax({
    dataType: "json",
    url: url,
    data: data,
    success: function(data){
     // console.log(data);
      parser(data);
      
      //stuff = data;
    }
  });
}

function care (data){
  for (var i =0 ; i < data.length; i++){
    ele = data[i];
    d = document.createElement("tr");

    td2 = document.createElement("td");
    title = document.createElement("span");
    title.innerHTML = data[i]["title"];
    $(title).appendTo(td2);
    $(td2).appendTo(d);

    td3 = document.createElement("td");
    content = document.createElement("span");
    content.innerHTML = data[i]["content"].replace(/<\/?[^>]+(>|$)/g, " ");
    $(content).appendTo(td3);
    $(td3).appendTo(d);

    td = document.createElement("td");
    a = document.createElement("a");
    a.href=data[i]["linkName"];
    a.innerHTML = data[i]["linkName"];
    $(a).appendTo(td);
    $(td).appendTo(d);


    //$(title).appendTo(d);
    //$(content).appendTo(d);


    $(d).addClass("ele").appendTo("#data_table");

  }


}