# PAE IA Predictive

**Proyecto PAE Predictive Company**

> Para arrancar la aplicación primero hemos de ejecutar: 

1. Instalar dependencias:
```
npm install  
```
2. Arrancar la aplicación con node server.js 
```
node server.js
```

> Arrancar la aplicación usando Docker:

1. Instalar dependencias
```
npm install
```
2. Crear Docker
```
docker build . -t node-web-app
```

3. Arrancar Docker (puerto 3000 porque lo tenemos asi en AWS)
```
docker run -p 3000:8080 -d node-web-app
```