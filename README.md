# ProjetoMvpFrontEndDocker
Projeto FrontEnd MVP - Cadastro de auto escolas com consumo de API
Objetivo - realizar a conexão Rest com a api de back-end -  o ambiente pode ser local ou contenerizado.

O objetivo do projeto é um cadastro simples de auto escolas com relacionamento de carros e instrutores em uma base de dados sqlite e a contenerização utilizando docker.
A Api backend , quando solicitada pelos metodos POST e PUT , realiza uma conexão http-get , passando um cep válido, para a API externa ViaCEP (https://viacep.com.br/) , retornando o endereço completo e atualizando no banco de dados sqlite.


![image](https://github.com/ronanrj/ProjetoMvpFrontEndDocker/assets/20301129/64958347-1709-40d0-8e0a-896269530f83)




## Como executar

Basta fazer o download do projeto e abrir o arquivo index.html no seu browser.

---
## Como executar através do Docker

Certifique-se de ter o [Docker](https://docs.docker.com/engine/install/) instalado e em execução em sua máquina.

Navegue até o diretório que contém o Dockerfile e o requirements.txt no terminal.
Execute **como administrador** o seguinte comando para construir a imagem Docker:

```
$ docker build -t front-cfc .
```

Uma vez criada a imagem, para executar o container basta executar, **como administrador**, seguinte o comando:

```
$ docker run -p 8081:8000 front-cfc 
```

Uma vez executando, para acessar a API, basta abrir o [http://localhost:8081](http://localhost:8081) no navegador.



### Alguns comandos úteis do Docker

>**Para verificar se a imagem foi criada** você pode executar o seguinte comando:
>
>```
>$ docker images
>```
>
> Caso queira **remover uma imagem**, basta executar o comando:
>```
>$ docker rmi <IMAGE ID>
>```
>Subistituindo o `IMAGE ID` pelo código da imagem
>
>**Para verificar se o container está em exceução** você pode executar o seguinte comando:
>
>```
>$ docker container ls --all
>```
>
> Caso queira **parar um conatiner**, basta executar o comando:
>```
>$ docker stop <CONTAINER ID>
>```
>Subistituindo o `CONTAINER ID` pelo ID do conatiner
>
>
> Caso queira **destruir um conatiner**, basta executar o comando:
>```
>$ docker rm <CONTAINER ID>
>```
>Para mais comandos, veja a [documentação do docker](https://docs.docker.com/engine/reference/run/).
