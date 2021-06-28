function load(number) {
    var name = "linkList_2021_" + number;
    var items = document.getElementById(name);
    if(items.style.display == "block") {
        items.style.display = "none";
    } else {
        items.style.display = "block";
    }

}