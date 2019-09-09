<script>

    /**

     * Array con las imagenes y enlaces que se iran mostrando en la web

     */

    var imagenes=new Array(

        ['images/icons/head1.jpg',''],

        ['images/icons/head3.jpg',''],

        ['images/icons/head5.jpg',''],

        ['images/icons/head4.jpg','']

    );



    /**

     * Funcion para cambiar la imagen y link

     */

    function rotarImagenes()

    {

        // obtenemos un numero aleatorio entre 0 y la cantidad de imagenes que hay

        var index=Math.floor((Math.random()*imagenes.length));



        // cambiamos la imagen y la url

        document.getElementById("imgprincipal").src=imagenes[index][0];

        document.getElementById("linkimgprincipal").href=imagenes[index][1];

    }



    /**

     * Función que se ejecuta una vez cargada la página

     */

    onload=function()

    {

        // Cargamos una imagen aleatoria

        rotarImagenes();



        // Indicamos que cada 5 segundos cambie la imagen

        setInterval(rotarImagenes,10000);

    }

</script>
