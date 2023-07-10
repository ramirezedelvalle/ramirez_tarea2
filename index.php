<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
    <title>Manipulación del DOM</title>
</head>
<body>
    <h1 id="tituloPagina" class="text-success fw-bold">MANIPULACIÓN DEL DOM</h1>
    <br>
    <button id="botonClick">Click</button>
    <br>
    <div id="cajaTexto">
        <p id="parrafo1" class="text-success">El DOM (Document Object Model) es una interfaz de programación para documentos HTML y XML. Representa la estructura del documento como un árbol de objetos, lo que permite acceder, manipular y modificar los elementos del documento de forma dinámica mediante JavaScript u otros lenguajes de programación.</p>
        <p id="parrafo2">El DOM es ampliamente utilizado en el desarrollo web para realizar acciones como la manipulación del contenido, la modificación de estilos, la gestión de eventos y la creación de elementos HTML de forma dinámica.</p>
        <p id="parrafo3">En este ejercicio, el uso del DOM se muestra en el archivo JavaScript adjunto, `scripts.js`. En este archivo, se obtienen elementos del DOM mediante su ID o selectores, se modifican atributos, se crean nuevos elementos y se añaden al DOM, se navega por el árbol del DOM y se manejan eventos.</p>
        <p id="parrafo4">Entre las ventajas del uso del DOM se encuentran la facilidad para manipular y actualizar el contenido y la apariencia de la página sin necesidad de recargarla por completo, lo que mejora la experiencia del usuario. Además, permite crear interacciones dinámicas y personalizadas en función de las acciones del usuario.</p>
        <p id="parrafo5">Sin embargo, el uso excesivo o incorrecto del DOM puede afectar el rendimiento de la página, ya que cada manipulación del DOM implica un costo computacional. Además, la complejidad del DOM puede dificultar el mantenimiento del código y la depuración de errores.</p>
    </div>
    <br>
    <div class="row">
        <div class="col">
            <form action="" method="POST">
                <label for="email">Correo electrónico</label>
                <input type="email" name="email" id="email" value="">
                <button type="submit">Enviar</button>
            </form>
        </div>
    </div>
    <a href="https://www.google.com">Ir a Google</a>
    <a href="https://www.facebook.com">Ir a Facebook</a>
    <script src="scripts.js"></script>
</body>
</html>
