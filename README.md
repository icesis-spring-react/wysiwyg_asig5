# wysiwyg_asig5

## About

Este repositorio tiene el fin de contener los archivos correspondientes a la asignación 5 del curso de Computación en Internet II.

---

## Integrantes

- Dennis Masso Macías
- Sebastián Hidalgo
- Sebastián García
- Yuluka Gigante Muriel

# INFORME

## Lo que se hizo

Cuando iniciamos la aplicacion, lo primero que nos envia es la pantalla del Login

![Alt text](media/Login.png)

Una vez logueados con cualquier usuario existente, Accedemos al menu Home.

![Alt text](media/Home.png)

Una vez aqui, podemos acceder a las demas funciones del codigo. Como por ejemplo registrar otro usuario del sistema.

![Alt text](media/Register.png)

Crear y ver los directores

![Alt text](media/DirectorCreate.png)

Eliminar o Actualizar los existentes

![Alt text](media/DirectorDeleteUpdate1.png)

![Alt text](media/DirectorDeleteUpdate2.png)

Crear y ver peliculas existentes

![Alt text](media/CreateMovie.png)

O modificarlas y eliminarlas.

![Alt text](media/DeleteUpdateMovie1.png)

![Alt text](media/DeleteUpdateMovie2.png)

## Sobre la BD

Se ha usado una BD de postgresql, en local, para almacenar la información correspondiente a los usuarios, directores, y películas. 

Para poder usar la aplicación, entonces, es necesario tener una BD como la nuestra:

- Nombre BD: asig_5_postgre_db
- Puerto BD: 5432
- Contraseña BD: 1234
- Usuario owner BD: postgres

## Las dificultades que tuvimos. 

Lo que nos entretuvo varias horas (Sino dias) fue la politica de CORS. Que con el JWT y la manera en la que lo implementamos, sumado a que estamos usando las ultimas version de Spring boot y Spring Security, nos dieron un verdadero quebradero de cabeza (el moni puede confirmar eso).

## Conclusiones. 

Como conclusion de este trabajo nos llevamos que la seguridad y el hacer un projecto no es una tarea sencilla. Requiere de mucho compromiso, investigacion y sobre todo comprension. 

**Nota importante:** Debido a que el token de JWT tiene un lapso de vigencia, a veces sucede que se vence ese tiempo después de un rato de haber iniciado sesión, lo que hace que dejen de funcionar las solicitudes al backend. Para solucionarlo, basta con recargar la página y volver a iniciar sesión.
