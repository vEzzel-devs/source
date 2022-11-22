import { createContext } from "react";

export const DocsDataContext = createContext();
export function DocsDataContextProvider(props) {
    const Layout = [
        {
            title: "Layout",
            level: 0,
            content: ["Al ingresar a las diferentes páginas, existen diferentes elementos que se repiten dentro de éstas, todo esto para tener un estándar interno y así ser consistentes visualmente. Entre estos elementos está una barra superior que se extiende a lo largo de la página, la que llamaremos “Barra de navegación”, esta poseerá diferentes elementos que se van adaptando a la necesidades de la página que se esté visualizando, pero en todas se van a poder encontrar estos dos elementos, un botón que permite intercambiar entre el modo claro y el modo oscuro de la plataforma, y otra a su derecha que es una tooltip, una tooltip es una herramienta de ayuda que entrega una ayuda adicional para informar al usuario, en este caso esta muestra información de lo que se puede realizar dentro de las vista que se esté visualizando."],
        },
        {
            title: "SideBar",
            level: 1,
            content: ["También en el costado izquierdo de las páginas, se puede ver una barra lateral que se extiende por este costado y que se subdivide en tres zonas. En la zona superior se puede observar el logo de vEzzel, el cual al hacerle click esta redirecciona a la página principal de la plataforma, justo al costado de esta se encuentra un icono de una flecha dentro de un círculo, el cual al presionar la barra lateral se extiende, mostrando más grande el logo de vEzzel y de mejor manera los elementos de las otras dos zonas. En la zona del centro se encuentra una serie de iconos que hacer referencia a las diferentes vistas dentro de la plataforma, ya sea para la búsqueda, perfil, editor, etc., además al momento de situar el cursor sobre alguno de estos iconos, aparece una tooltip indicando cual es la página que hace referencia. Por último, en la parte inferior se encuentra un icono de inicio/apagado, el cual es el encargado del cierre de sesión."],
        },
    ];

    const Buscador = [
        {
            title: "Buscador",
            level: 0,
            content: ["Esta es la primera vista que se observa al momento de iniciar sesión, en esta se muestra una serie de tarjetas, en donde cada una hace referencia a un proyecto ya creado y guardado dentro de la plataforma. Las tarjetas muestran el nombre del proyecto en la parte superior izquierda de estas, el nombre de usuario de quien la creó abajo de este y poco después la descripción que dicho creador le dio. En el costado derecho, en la parte superior se pueden observar una serie de estrellas, las que a medida que se llenan representan la valoración que le da la comunidad a ese determinado proyecto, siendo mínimo 1 estrella y máximo las 5. Más abajo se encuentra una serie de etiquetas que ayudan a identificar de qué trata o el enfoque de dicho proyecto, estas etiquetas son asignadas por el mismo creador del proyecto."],
        },
        {
            title: "Pero, cómo realizo una búsqueda?",
            level: 1,
            content: ["Para realizar búsquedas, se ubican dos barras para escribir, de la cuales en la de la derecha se puede escribir algún término que se desee buscar y presionar sobre el icono de la lupa o presionar Enter en el teclado para empezar a buscar, lo ingresado dentro de esta barra se busca tanto dentro de los nombres de los proyectos existentes, como en su descripción."],
        },
        {
            title: " ",
            level: 1,
            content: ["En caso de querer buscar algo mas especifico, existe la opción de realizar un filtrado dentro de la búsqueda filtrando por etiquetas, esta se realiza en la barra de la izquierda, en esta se pueden ingresar diferentes etiquetas en una misma búsqueda, las que ayudan a la obtención de resultados de la búsqueda más precisos."],
        },
    ];

    const Perfil = [
        {
            title: "Perfil",
            level: 0,
            content: ["Esta página se subdivide en tres zonas, además de la barra de navegación. La primera zona se ubica en la parte superior a la izquierda del contenido de la página, en esta nos esforzamos por entregar una bienvenida personalizada, mostrando su nombre de usuario, además de dar la opción de cambiarlo, para esto se debe presionar solo el icono de lápiz para así habilitar la edición del nombre, una vez terminado, para efectuar el cambio se debe presionar sobre el icono de check y en caso contrario, de arrepentirse del cambio, solo debe presionar sobre el icono de la equis."],
        },
        {
            title: " ",
            level: 1,
            content: ["La segunda zona, es una de estadísticas en la que se puede subdividir en dos columnas en donde a la izquierda se muestra todo lo relacionado a las calificaciones, ya sea en las calificaciones promedio de los proyectos realizados y en las calificaciones promedio de los comentarios realizados a otros proyectos. Y en la columna de la derecha, está más dedicada a los números, número de proyectos realizados y el número de comentarios realizados."],
        },
        {
            title: " ",
            level: 1,
            content: ["Ya en la tercera zona, en esta se muestran todos los comentarios que ha realizado separados por tarjetas, mostrando el nombre del proyecto que se comentó, el comentario en sí y la puntuación que se le dio."],
        },
        {
            title: " ",
            level: 1,
            content: ["En la barra de navegación se pueden observar una serie de botones y un recuadro de búsqueda. Yendo de izquierda a derecha, el primer botón es para realizar un refrescado de la página, el segundo es para realizar el cierre de sesión, el tercero es para realizar un cambio de cuenta, solicitando las nuevas credenciales y el tercero es para eliminar la cuenta, aclaramos que al momento de eliminar tu cuenta todos los datos, comentarios y proyectos que hayas realizado se eliminarán permanentemente. Usalo bajo tu propio riesgo."],
        },
        {
            title: " ",
            level: 1,
            content: ["El recuadro de búsqueda, sirve para buscar ciertas palabras o frases que se ingresen en él dentro de los comentarios que se han realizado."],
        },
    ];

    const Editor = [
        {
            title: "Editor",
            level: 0,
            content: ["Dentro del cuerpo de la vista se encuentra una SpreadSheet, es decir, una hoja de cálculo, la cual posee las propiedades de tener un tamaño ajustable a las necesidades del proyecto, ya que al momento de escribir en alguna de las celdas de la columna que sea del extremo derecho o alguna fila del extremo inferior, se agregara una columna o una fila extra, respectivamente."],
        },
        {
            title: " ",
            level: 1,
            content: ["Además, a medida que se ingresa texto en alguna de las celdas, este texto se va agregando de forma simultánea a la barra de edificios, contenida dentro de la barra de navegación."],
        },
        {
            title: " ",
            level: 1,
            content: ["Las celdas dentro de la SpreadSheet poseen un sistema de tipado las que se diferencian visualmente por color, el tipado de una celda en especifico se define a partir de un carácter distintivo que al inicio y en caso de no tener ninguno de estos caracteres se toma por defecto."],
        },
        {
            title: "Defecto",
            level: 4,
            content: ["Celdas por defecto, usadas mayoritariamente para el almacenamiento de datos."],
        },
        {
            title: "Vistas /",
            level: 4,
            content: ["Celdas para definir los widgets que visualizará el usuario en la vista de ejecución de la aplicación."],
        },
        {
            title: "Tablas #",
            level: 4,
            content: ["Celdas para guardar la información masiva, como conjuntos de datos o listas."],
        },
        {
            title: "Control $",
            level: 4,
            content: ["Celdas para realizar operaciones de control con otras celdas, como bucles, condicionales o eventos."],
        },
        {
            title: "Álgebra =",
            level: 4,
            content: ["Celdas para calcular expresiones matemáticas, utilizando funciones y operaciones."],
        },
        {
            title: "Tooltip",
            level: 1,
            content: ["De forma de ayuda, y recordatorio, al momento de presionar sobre alguna celda, sobre esta aparecerá una tooltip clickable que contendrá los cuatro tipos celdas distintivos, identificables por carácter y color representativo."],
        },
        {
            title: "Botones",
            level: 1,
            content: ["En la parte superior derecha de la página, dentro de la barra de navegación, se pueden identificar seis botones identificables por sus iconos representativos."],
        },
        {
            title: "Guardar",
            level: 4,
            content: ["Para el guardado de los proyectos, abre una ventana que solicita el título del mismo, una descripción y etiquetas a elección. Una vez guardado este se puede encontrar en la página de Guardados."],
        },
        {
            title: "Copiar",
            level: 4,
            content: ["Botón que copia el contenido de la celda seleccionada, alojando dentro del portapapeles local."],
        },
        {
            title: "Cortar",
            level: 4,
            content: ["Botón que elimina el contenido de la celda seleccionada, pero almacenando su contenido dentro del portapapeles previamente."],
        },
        {
            title: "Pegar",
            level: 4,
            content: ["Botón que agrega lo alojado en el portapapeles dentro de la celda seleccionada."],
        },
        {
            title: "Deshacer",
            level: 4,
            content: ["Elimina las modificaciones realizadas previamente una por una."],
        },
        {
            title: "Rehacer",
            level: 4,
            content: ["Rehace las modificaciones realizadas por el botón Deshacer."],
        },
        {
            title: "Lenguaje",
            level: 1,
            content: ["//Detalles del lenguaje"],
        },
    ];

    const Guardados = [
        {
            title: "Guardados",
            level: 0,
            content: ["En esta pagina apareceran los proyecto que ya hayas iniciado y guardado en esa cuenta."],
        },
        {
            title: "No tienes ningún proyecto guardado? ¿Qué esperas?!",
            level: 1,
            content: ["Recuerda que para tener uno solo debes dirigirte al Buscador y seleccionar un proyecto ya empezado, o también, iniciar uno completamente nuevo desde el editor. Para dirigirse al editor puede seleccionarlo en la barra lateral izquierda, o en el botón de Nuevo en la barra de navegación. A un costado izquierdo de este botón se encuentra otro que realiza la función de refrescado de página."],
        },
        {
            title: "¿Ya tienes un proyecto iniciado?",
            level: 1,
            content: ["En este caso tendrás tres botones en la barra de navegación, los dos de la izquierda son los mismos dos botones de cuando no hay proyectos guardados y el nuevo es para continuar el último proyecto de tu propiedad que has abierto en el editor."],
        },
        {
            title: " ",
            level: 1,
            content: ["Además, los proyectos se mostrarán en tarjetas indicando su nombre, descripción y etiquetas que le hayas dato, sumado a la calificación promedio de los usuarios junto a un icono de un basurero para la eliminación de ese proyecto."],
        },
    ];

    const Mensajeria = [
        {
            title: "Mensajería",
            level: 0,
            content: ["Esta página sirve para establecer un contacto directo entre diferentes usuarios, a través de un chat de mensajería."],
        },
        {
            title: " ",
            level: 1,
            content: ["Para iniciar un chat se debe presionar el botón de Comunicar, ubicado en la parte izquierda de la barra de navegación, junto al botón de Refrescar, el cual es para actualizar la pagina. Una vez presionado el botón, se abre una ventana flotante en donde se consulta el usuario de destino y el mensaje a enviar, para enviar el mensaje se debe presionar Iniciar y luego esperar a que se envíe."],
        },
        {
            title: " ",
            level: 1,
            content: [" "],
        },
        {
            title: " ",
            level: 1,
            content: [" "],
        },
    ];

    return (
        <DocsDataContext.Provider value={({ Layout, Buscador, Perfil, Editor, Guardados })}>
            {props.children}
        </DocsDataContext.Provider>
    )
}
