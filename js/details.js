var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

var client = contentful.createClient({
    space: 'qeovitnrltf2',
    accessToken: 'zOxrVP7HSAM4vng42avdDqi5Ky7ejGP0ZHvHNWf1d2Q',
  });

  client.getEntry(id).then(function (entry){
  console.log(entry)

  var item = document.createElement("div");
  item.classList.add("bg");

  var img = document.createElement("img");
    console.log("entry", entry);
    // img.innerHTML = entry.fields.Image;
    img.src = "https:" + entry.fields.bgImage.fields.file.url;
    item.append(img);
    bg.appendChild(item)

    var tagline = document.createElement("h1");
    tagline.innerHTML = entry.fields.tagline;
    item.append(tagline);
    bg.appendChild(item)

  });

  client.getEntry(id).then(function (entry){
    console.log(entry)

    var item1 = document.createElement("div");
    item1.classList.add("gallery");

    var title = document.createElement("h2");
    title.innerHTML = entry.fields.title;
    item1.append(title);
    gallery.appendChild(item1)

    var info = document.createElement("p");
    info.innerHTML = entry.fields.productinfo;
    item1.append(info);
    gallery.appendChild(item1)
});  




document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("active");
});