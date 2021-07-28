function created() {
    if (col.value.length > 0 && row.value.length > 0) {
        var cot = eval(col.value);
        var don = eval(row.value);

        var vung = document.getElementById("show");
        var bang = document.createElement("table");


        for (var i = 0; i < don; i++) {
            var dong = document.createElement("tr");
            for (var j = 0; j < cot; j++) {
                var cott = document.createElement("td");
                var text = document.createTextNode(i + " " + j);
                cott.appendChild(text);
                dong.appendChild(cott);
            }
            bang.appendChild(dong);
        }
        document.getElementById("show").appendChild(bang);

    }
}