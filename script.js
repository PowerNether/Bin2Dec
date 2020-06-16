function bin2dec() {
    var bin = document.getElementById('bin').value;
    if (bin !== "") {
        bin.split('').map((char) => {
            if (char == "0" || char == "1") {
                var dec = parseInt(bin, 2);
                document.getElementById('dec').value = dec;
            }
            else {
                return alert("NO!");
                return false;
            }
        });
    }
    else {
        return alert("NO!");
    }
}