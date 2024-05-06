function show_search_advance () {
    if (document.getElementById("search_advance").style.display === "none") {
        document.getElementById("search_advance").style.display = "block";
        document.getElementById("show_search_advance").innerHTML = "Bỏ tìm kiếm nâng cao";
    } else {
        document.getElementById(search_advance).style.display = "none";
        document.getElementById("show_search_advance").innerHTML = "Tìm kiếm nâng cao";
    }
}
