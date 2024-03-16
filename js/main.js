var client = contentful.createClient({
  space: 'qeovitnrltf2',
  accessToken: 'zOxrVP7HSAM4vng42avdDqi5Ky7ejGP0ZHvHNWf1d2Q',
});

client.getEntries({content_type: 'products'}).then(function (entries) {
  entries.items.forEach(function (entry) {
      console.log(entry.fields.title);
      console.log(entry.fields.Description);
      console.log(entry.fields.Image);
    });
  });


client.getEntries({content_type: 'products'}).then(function (entries) {
  entries.items.forEach(function (entry) {

    console.log(entry);
    var item = document.createElement("div");
    item.classList.add("gallery-card");

  
    var title = document.createElement("h3");
    var title = document.createElement("a");
    title.innerHTML = entry.fields.title;
    title.href = "details.html?id=" + entry.sys.id;
    item.append(title);
    products.appendChild(item)
    

    var description = document.createElement("h4");
    description.innerHTML = entry.fields.Description;
    item.append(description);
    products.appendChild(item)

    var price = document.createElement("h5");
    price.innerHTML = entry.fields.pricerange;
    item.append(price);
    products.appendChild(item)

    var feature = document.createElement("h5");
    feature.innerHTML = entry.fields.features;
    item.append(feature);
    products.appendChild(item)
    
    var img = document.createElement("img");
    console.log("entry", entry);
    // img.innerHTML = entry.fields.Image;
    img.src = "https:" + entry.fields.Image.fields.file.url;
    item.append(img);
    products.appendChild(item)

  });
});

document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("menu").classList.toggle("active");
});