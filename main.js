document.addEventListener('DOMContentLoaded', function() {
    var pontinhos = 0;

    function boaresposta() {
        pontinhos++;
        console.log(pontinhos);
        document.getElementById('pontosvar').innerText = pontinhos;
    }

    document.getElementById('bomb1').addEventListener('click', boaresposta);
    document.getElementById('bomb2').addEventListener('click', boaresposta);
    document.getElementById('bomb3').addEventListener('click', boaresposta);
});
