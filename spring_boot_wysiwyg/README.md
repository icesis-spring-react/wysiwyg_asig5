# spring_boot_wysiwyg

## Integrantes:

- Sebastián Hidalgo
- Dennis Masso Macías
- Yuluka Gigante
- Sebastián García

## Cómo usar el proyecto

### Base de datos

Crear una base de datos

```bash
mysql -u root -p
CREATE DATABASE asig3_compnet_db;
```

### Ejecución

Para usar el poryecto, basta con ejecutarlo desde el IDE de preferencia (IntlliJ preferiblemente). 

### Registro de usuario

Una vez hecho esto, dirigirse a Postman y hacer el registro de un usuario para poder usar los endpoints, pues están todos protegidos. Para crear un usuario, debe:

1) Diríjase a la ruta http://localhost:8080/auth/register.
2) Vaya a Body.
3) Seleccione 'raw'.
4) Ponga el tipo de cuerpo en JSON.
5) Cree el cuerpo de la petición de la siguiente manera:
   {
    "username" : "un_correo@lo_que_sea.com",
    "password" : "una_contraseña",
    "lastname" : "Apellido",
    "firstname" : "Nombre",
    "country" : "País"
  }

Una vez creado el usuario, será retornado un token de autenticación con el que se podrá hacer uso de los endpoints.

### Login de usuario

En caso de perder el token, puede logearse con el usuario creado:
1) Diríjase a la ruta http://localhost:8080/auth/login.
2) Vaya a Body.
3) Seleccione 'raw'.
4) Ponga el tipo de cuerpo en JSON.
5) Cree el cuerpo de la petición de la siguiente manera:
   {
    "username" : "un_correo_registrado@lo_que_sea.com",
    "password" : "contraseña_correspondiente"

  }
  
Una vez se ha hecho el login, será retornado un token de autenticación con el que se podrá hacer uso de los endpoints.

### Endpoints

En cuanto tenga el token de autenticación estará en capacidad empezar a hacer las solicitudes a los endpoints, desde Postman. Para esto:

1) Diríjase a la ruta del endpoint deseado (las rutas se explican más abajo).
2) Vaya a la pestaña Authorization.
3) En el select llamado Type, seleccione la opción 'Bearer Token'.
4) En el campo llamado Token, pegue el token de autenticación producido en el registro, o loging, de usuario.
5) Envíe la solicitud.

#### Rutas de endpoints

Para los relacionados con las películas, las rutas inician con localhost:8080/movies. Los enlaces para de entrar a los endpoints son:

  - /all (GET): para ver todas las películas creadas.
  - /add (POST): para agregar una película.
    
    Se debe agregar la película por medio de un JSON. La estructura es:
    {
    "name" : "Test 2",
    "genre" : "K-Drama",
    "directorId" : 3,
    "releaseDate":"2023-11-13T05:00:00.000+00:00"
    }

  - /{id} (GET): para buscar una película por id.
  - /update/{id} (PUT): para actualizar la película con el id pasado en el enlace.
  - /delete/{id} (DELETE): para eliminar la película con el id pasado en el enlace.

  Para los relacionados con los directores, las rutas inician con localhost:8080/directors. Los enlaces para de entrar a los endpoints son:

  - /all (GET): para ver todas los directores creados.
  - /add (POST): para agregar un director.
    
    Se debe agregar la película por medio de un JSON. La estructura es:
    {
    "name" : "Scorsese"
    }

  - /{id} (GET): para buscar un director por id.
  - /update/{id} (PUT): para actualizar el director con el id pasado en el enlace.
  - /delete/{id} (DELETE): para eliminar al director con el id pasado en el enlace.
  - /{id}/movies (GET): para obtener todas las películas cuyo director tenga el id pasado en el enlace.

---

## Notas importantes

Para implementar la autenticación con JWT fue necesario el uso de una BD, pues no logramos encontrar cómo hacerlo sin una.

En nuestro caso, usamos una BD de MYSQL, en local, de la siguiente manera:
- URL: 127.0.0.1
- Puerto: 3306
- Nombre: asig3_compnet_db
- Nombre de usuario: root (es el default)
- Contraseña usuario: 1234

Esta información es relevante pues es así como está configurada la conexión a la BD en el archivo application.properties.

La forma más sencilla es crear una BD de MYSQL con esas características y pasar directamente a probar.
