var saeed = document.getElementById('saeed');
var saeedSize = 250;

var feed = document.getElementById('feed');
var shop = document.getElementById('shop');

var feedmenu = document.getElementById('feedmenu');
var shopmenu = document.getElementById('shopmenu');

var food = document.getElementById('food');

var alerted = false;

feed.onclick = () => {
    if (feedmenu.style.display != 'none')
    {
        feedmenu.style.display = 'none'
    }
    else
    {
        feedmenu.style.display = 'block'
    };
};

shop.onclick = () => {
    if (shopmenu.style.display != 'none')
    {
        shopmenu.style.display = 'none'
    }
    else
    {
        shopmenu.style.display = 'block'
    }
};


food.onclick = () => {
    saeedSize += 10
    saeed.style.height = saeedSize + 'px'
    saeed.style.width = saeedSize + 'px'
    console.log(saeedSize)
};

setInterval(() => {
    saeedSize -= 2
    saeed.style.height = saeedSize + 'px'
    saeed.style.width = saeedSize + "px"

    if (saeedSize >= 500)
    {
        if (alerted != true) {
            alert("THE SAEED BECAME TOO FAT TO LIVE!")
            setTimeout(() => {
                window.location.reload()
            }, 3000);
        };
        alerted = true;
        saeed.style.display = 'none';
    }
    else if (saeedSize <= 20)
    {
        if (alerted != true) {
            alert("THE SAEED BECAME TOO SMALL TO LIVE!")
            setTimeout(() => {
                window.location.reload()
            }, 3000);
        };
        alerted = true
    }
}, 100)