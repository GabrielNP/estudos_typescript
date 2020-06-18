# Repositório de estudos de Typescript baseado em:

https://cursos.alura.com.br/course/typescript-parte1
https://cursos.alura.com.br/course/typescript-parte2

# Infraestrutura necessária
Node JS 6.x ou superior
NPM

# Instalar o Typescritp
Na pasta do projeto executar o comando abaixo e pressionar \<enter\> até o fim:
```
npm init
``` 
Em seguida:
```
npm install typescript@2.3.2 --save-dev
```
Adicionar o arquivo de configuração `tsconfig.json`. Nele indicamos as configurações do compilador TS. No caso, após a compilação será um código compatível com ES6 e esses arquivos ficarão em `app/js`. Na chave `include` está o caminho de onde o compilador deverá buscar os arquivos para compilar.
```
{
    "compilerOptions": {
        "target": "es6",
        "outDir": "app/js"
    },
    "include": [
        "app/ts/**/*"
    ]
}
```
Em `package.json` adicionar o trecho a seguir. `tsc` é o diretório do compilador na pasta node_modules que o npm vai buscar para executar.
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile": "tsc"
```

# Compilar
```
npm run compile
```