(function() {
    let offset = 3;
    let items = document.getElementsByClassName("col-xl-8");
    for(let item of items) {
        if (item.classList.contains('offset-xl-2')) {
            if (offset != 0) {
                offset--;
                continue
            }
            console.log("hi")
            item.classList.remove('offset-xl-2');
            item.classList.remove('offset-lg-1')
            item.classList.add('col-xl-12');
            break;
        }
    }
})()