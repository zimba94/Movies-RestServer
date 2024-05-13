# WebServer + RestServer

Recuerden que deben de ejecutar ```npm install``` para reconstruir los módulos de Node.

Correr con ```npm run start```


# Ejemplos de peticiones


# ====== USUARIOS =====

=> POST

http://localhost:8080/api/usuarios

*BODY: JSON


{
	"nombre": "test1",
	"correo": "test1@test.com",
	"password": "123456",
	"img": "",
	"rol": "ADMIN_ROLE",
	"google": true,
	"estado": true
}

=> PUT

http://localhost:8080/api/usuarios/{{idUsuario}}

Ej. http://localhost:8080/api/usuarios/66427148ab8bbc1c8caf86b0


*BODY: JSON


{
	"nombre": "test2",
	"correo": "test1@test.com",
	"password": "123456",
	"img": "",
	"rol": "ADMIN_ROLE",
	"google": true,
	"estado": true
}



=> GET USUARIOS

http://localhost:8080/api/usuarios

*Paginado

http://localhost:8080/api/usuarios?limite=10
http://localhost:8080/api/usuarios?desde=5&limite=10





=> DELETE

http://localhost:8080/api/usuarios/{{idUsuario}}

Ej. http://localhost:8080/api/usuarios/66427148ab8bbc1c8caf86b0


*HEADERS:

KEY: x-token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NjQyNzE0OGFiOGJiYzFjOGNhZjg2YjAiLCJpYXQiOjE3MTU2MzMwODcsImV4cCI6MTcxNTY0NzQ4N30.5f_hKUI39x7HnWHh52L6yN4SJf_a1a6g4hKX4VGTSA8

*Es un JWT de ejemplo, se debe obtener después de hacer un login con un usuario registrado en la base



# ====== AUTH =====

=> POST

http://localhost:8080/api/auth/login

{
	"correo": "test1@test.com",
	"password": "123456"
}




# ====== AUTH GOOGLE =====

URL: http://localhost:8080/





# ====== CATEGORIAS =====


=> POST


http://localhost:8080/api/categorias


*BODY: JSON

{
	"nombre": "Acción"
}


*HEADERS:

KEY: x-token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NjQyNzE0OGFiOGJiYzFjOGNhZjg2YjAiLCJpYXQiOjE3MTU2MzMwODcsImV4cCI6MTcxNTY0NzQ4N30.5f_hKUI39x7HnWHh52L6yN4SJf_a1a6g4hKX4VGTSA8

*Es un JWT de ejemplo, se debe obtener después de hacer un login con un usuario registrado en la base


=> GET CATEGORIAS

http://localhost:8080/api/categorias

*Paginado

http://localhost:8080/api/categorias?limite=10
http://localhost:8080/api/categorias?desde=5&limite=10


=> GET 1 CATEGORIA

http://localhost:8080/api/categorias/{{idCategoria}}

Ej. http://localhost:8080/api/categorias/664286140bc9d12cbbfa3a0d





=> PUT


http://localhost:8080/api/categorias/{{idCategoria}}

Ej. http://localhost:8080/api/categorias/664286140bc9d12cbbfa3a0d



*BODY: JSON

{
	"nombre": "Acción Modificada"
}


*HEADERS:

KEY: x-token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NjQyNzE0OGFiOGJiYzFjOGNhZjg2YjAiLCJpYXQiOjE3MTU2MzMwODcsImV4cCI6MTcxNTY0NzQ4N30.5f_hKUI39x7HnWHh52L6yN4SJf_a1a6g4hKX4VGTSA8

*Es un JWT de ejemplo, se debe obtener después de hacer un login con un usuario registrado en la base




=> DELETE

http://localhost:8080/api/categorias/{{idCategoria}}

Ej. http://localhost:8080/api/categorias/664286140bc9d12cbbfa3a0d


*HEADERS:

KEY: x-token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NjQyNzE0OGFiOGJiYzFjOGNhZjg2YjAiLCJpYXQiOjE3MTU2MzMwODcsImV4cCI6MTcxNTY0NzQ4N30.5f_hKUI39x7HnWHh52L6yN4SJf_a1a6g4hKX4VGTSA8

*Es un JWT de ejemplo, se debe obtener después de hacer un login con un usuario registrado en la base









# ====== PELICULAS =====


=> POST


http://localhost:8080/api/peliculas


*BODY: JSON

{
	"nombre": "Avengers",
	"categoria": "664286140bc9d12cbbfa3a0d"
}

*ID de la categoria (opcional)

*HEADERS:

KEY: x-token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NjQyNzE0OGFiOGJiYzFjOGNhZjg2YjAiLCJpYXQiOjE3MTU2MzMwODcsImV4cCI6MTcxNTY0NzQ4N30.5f_hKUI39x7HnWHh52L6yN4SJf_a1a6g4hKX4VGTSA8

*Es un JWT de ejemplo, se debe obtener después de hacer un login con un usuario registrado en la base


=> GET PELICULAS

http://localhost:8080/api/peliculas

*Paginado

http://localhost:8080/api/peliculas?limite=10
http://localhost:8080/api/peliculas?desde=5&limite=10


=> GET 1 CATEGORIA

http://localhost:8080/api/peliculas/66428e45f61fc52d4d0f492f






=> PUT

http://localhost:8080/api/peliculas/{{idPelicula}}

Ej. http://localhost:8080/api/peliculas/66428e45f61fc52d4d0f492f


*BODY: JSON

{
	"nombre": "Avengers Modificada",
	"categoria": "664286140bc9d12cbbfa3a0d"
}


*HEADERS:

KEY: x-token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NjQyNzE0OGFiOGJiYzFjOGNhZjg2YjAiLCJpYXQiOjE3MTU2MzMwODcsImV4cCI6MTcxNTY0NzQ4N30.5f_hKUI39x7HnWHh52L6yN4SJf_a1a6g4hKX4VGTSA8

*Es un JWT de ejemplo, se debe obtener después de hacer un login con un usuario registrado en la base




=> DELETE

http://localhost:8080/api/peliculas/{{idPelicula}}

Ej. http://localhost:8080/api/peliculas/66428e45f61fc52d4d0f492f


*HEADERS:

KEY: x-token
value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NjQyNzE0OGFiOGJiYzFjOGNhZjg2YjAiLCJpYXQiOjE3MTU2MzMwODcsImV4cCI6MTcxNTY0NzQ4N30.5f_hKUI39x7HnWHh52L6yN4SJf_a1a6g4hKX4VGTSA8

*Es un JWT de ejemplo, se debe obtener después de hacer un login con un usuario registrado en la base






# ====== BÚSQUEDAS =====


=> GET


http://localhost:8080/api/buscar/{{colleciones}}/{{termino}}

Ej. http://localhost:8080/api/buscar/peliculas/ironman

