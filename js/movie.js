function loaded() {
        let movie = document.getElementById('quadro');
        let link = window.location.href;
        link = link.toString();
        link = link.substr(link.indexOf('=')+1);
        link = 'https://www.youtube.com/embed/' + link;
        movie.src=link;
}
