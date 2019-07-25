# Servicenet - Back-end

##### Protótipo simplificado de um sistema web solicitado como desafio pela Servicenet.

##### Esse projeto está configurado em modo de produção na plataforma Heroku, acessível pelo link: https://servicenet-challenge.herokuapp.com/

##### O banco de dados Postgres utilizado nesta aplicação está em modo de produção na plataforma Heroku, acessível pelas segintes credenciais:

```
Host: ec2-54-235-92-43.compute-1.amazonaws.com
Database: df7edi9iqs9p93
User: ckfvfonundsgpe
Port: 5432
Password: 22f5746e5927e7b716d048430bf7567c139cce8fc76339df6a5c02f67b50ed76
URI: postgres://ckfvfonundsgpe:22f5746e5927e7b716d048430bf7567c139cce8fc76339df6a5c02f67b50ed76@ec2-54-235-92-43.compute-1.amazonaws.com:5432/df7edi9iqs9p93
Heroku CLI: heroku pg:psql postgresql-sinuous-18156 --app servicenet-challenge
```
##### Configurado com o seguinte script de tabelas:
```
create table client (

    id_client serial not null primary key,
	name text not null,
	phone varchar(12) not null,
    id_main_user text,
    street text not null,
	num text not null,
	city text not null,
	country_state text not null,
	country text not null,
	postalCode text not null

);
```
# Instruções para rodar em servidor de desenvolvimento

## Pré-requisitos
- ##### nodejs (disponível para dowload em: [NODEJS](nodejs.org))
- ##### npm (Normalmente vem junto com o nodejs)

## Configuração do projeto
```
$ cd <meu-workspace>
$ git clone https://github.com/Allanrocksti/servicenet-api.git
$ npm i
$ npm dev start
```
##### O app ficará acessível em [localhost:3000](localhost:3000)

# Requisições

## GET - Todos os clientes

##### Retorna todos os clientes cadastrados de um usuário principal

- ##### Rota:
	``` /clients/:id ```
- ##### Parametros:
	``` :id = UID do firebase do usuário principal ```
- ##### Exemplo de response:
	```
    [
        {
            id_client: 43,
            name: "Allan Roque Barbosa Da Silva",
            phone: "83996199371",
            id_main_user: "rLMSaRYIH3O2qbFnthdo8oAOak03",
            street: "Rua Odom Barbosa",
            num: "193",
            city: "Mataraca",
            country_state: "PB",
            country: "Brazil",
            postalcode: "58292000"
        },
        {
            id_client: 44,
            name: "Jackson Fernandes de Aragão Terceiro",
            phone: "83986802809",
            id_main_user: "rLMSaRYIH3O2qbFnthdo8oAOak03",
            street: "Avenida Sapé",
            num: "123",
            city: "João Pessoa",
            country_state: "PB",
            country: "Brasil",
            postalcode: "58038380"
        }
    ]
    ```

## GET - Cliente

##### Retorna um cliente específico

- ##### Rota:
	``` /client/:id ```
- ##### Parametros:
	``` :id = ID do cliente ```
- ##### Exemplo de response:
	```
    [
        {
            id_client: 24,
            name: "Elton",
            phone: "83986677155",
            id_main_user: "iK1rUOYxfGdmutBx01UaWYPxfJk2",
            street: "Rua João Barbosa Bessa",
            num: "68",
            city: "Mataraca",
            country_state: "PB",
            country: "Brasil",
            postalcode: "58292000"
        }
    ]
    ```

## DELETE - Cliente

##### Apaga o registro de um cliente específico

- ##### Rota:
	``` /client/:id ```
- ##### Parametros:
	``` :id = ID do cliente ```

## POST - Salvar cliente

##### Adiciona um registro de cliente

- ##### Rota:
	``` /client/:id ```
- ##### Parametros:
	``` :id = UID do firebase do usuário principal ```
- ##### Corpo:
	```
	{
        "name": "Allan Roque Barbosa Da Silva",
        "phone": "833996199374",
        "street": "Rua Odom Barbosa",
        "num": "193",
        "city": "Mataraca",
        "country_state": "PB",
        "country": "Brasil",
        "postalcode": "58292000"
    }
    ```

## PUT - Atualizar cliente

##### Adiciona um registro de cliente

- ##### Rota:
	``` /client/:id ```
- ##### Parametros:
	``` :id = ID do cliente ```
- ##### Corpo:
	```
	{
        "name": "Allan Roque Barbosa Da Silva",
        "phone": "833996199374",
        "street": "Rua Odom Barbosa",
        "num": "193",
        "city": "Mataraca",
        "country_state": "PB",
        "country": "Brasil",
        "postalcode": "58292000"
    }
    ```