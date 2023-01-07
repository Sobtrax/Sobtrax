function changeBg() {
    var images = [
        'img/bg/1.jpg',
        'img/bg/2.jpg',
        'img/bg/3.png',
        'img/bg/4.png',
        'img/bg/5.jpg',
        'img/bg/6.jpg',
        'img/bg/7.jpg',
        'img/bg/8.jpg',
        'img/bg/9.jpg'
    ];

    $('body').css({
        'background': 'url(' + images[Math.floor(Math.random() * images.length)] + ') no-repeat center center fixed',
        'background-size': 'cover'
    });
}
changeBg();