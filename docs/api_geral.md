FORMAT: 1A
HOST: http://api.cgctec.com.br/v1

# Documentação da API

Esta documentação descreve de maneira geral o funcionamento e os parâmetros da API que alimenta o site.

# Group CGCTec API

## Sobre [/]

Aqui podemos descrever detalhes que são comuns a todos os serviços como formatos, headers, tipos de erros, etc

# Group Usuários

## UserLogin [/login]

### Fazer Login [POST]

+ Request login
    + Headers

            Accept: application/json
            Content-Type: application/json

    + Attributes (Login)

+ Response 200 (application/json)

    + Attributes (Loged)

+ Response 401 (application/json)
    + Attributes (Error401)

+ Response 404 (application/json)
    + Attributes (Error404)


## UserPassword [/password]

### Alterar a Senha [POST]

+ Request alterar password

    + Headers

            Accept: application/json
            Content-Type: application/json

    + Attributes (Password)

+ Response 200 (application/json)
    + Attributes (Created)

+ Response 401 (application/json)
    + Attributes (Error401)

+ Response 404 (application/json)
    + Attributes (Error404)


## UserForgotPassword [/forgotpassword]

### Resetar a Senha [POST]

+ Request reset password

    + Headers

            Accept: application/json
            Content-Type: application/json

    + Attributes (ResetPassword)

+ Response 200 (application/json)
    + Attributes (Created)

+ Response 401 (application/json)
    + Attributes (Error401)

+ Response 404 (application/json)
    + Attributes (Error404)


## User [/user]

### Criar um Usuário [POST]

+ Request Criar um usuário

    + Headers

            Accept: application/json
            Content-Type: application/json

    + Attributes (user)

+ Response 201 (application/json)
    + Attributes (Created)


### Listar Usuarios [GET]

+ Request listar usuários

    + Headers

            Accept: application/json
            Content-Type: application/json

+ Response 200 (application/json)
    + Attributes (array[user])

+ Response 404 (application/json)
    + Attributes (Error)

### Listar um Usuário [GET /user/{id}]

+ Request listar um usuário

    + Headers

            Accept: application/json
            Content-Type: application/json

+ Parameters
    + id: 1 (number, required) - ID do usuário

+ Response 200 (application/json)
    + Attributes (user)

+ Response 404 (application/json)
    + Attributes (Error404)

### Alterar um Usuário [PUT  /user/{id}]
+ Request Alterar um usuário

    + Headers

            Accept: application/json
            Content-Type: application/json

    + Attributes (user)

+ Parameters
    + id: 1 (number, required) - ID do usuário

+ Response 200 (application/json)
    + Attributes (Created)

+ Response 404 (application/json)
    + Attributes (Error404)

### Excluir um Usuário [DELETE /user/{id}]
+ Request excluir um usuário

    + Headers

            Accept: application/json
            Content-Type: application/json

+ Parameters
    + id: 1 (number, required) - ID do usuário

+ Response 200 (application/json)
    + Attributes (Id)

+ Response 404 (application/json)
    + Attributes (Error404)

## User Type [/usertypes]

### Criar um Tipo de Usuário [POST]

+ Request Criar um tipo de usuário

    + Headers

            Accept: application/json
            Content-Type: application/json

    + Attributes (usertype)

+ Response 201 (application/json)
    + Attributes (Created)

+ Response 400 (application/json)
    + Attributes (Error400)

### Listar Tipos de Usuarios [GET]

+ Request listar tipo de usuários

    + Headers

            Accept: application/json
            Content-Type: application/json

+ Response 200 (application/json)
    + Attributes (array[usertype])

+ Response 404 (application/json)
    + Attributes (Error404)

### Listar um Tipo de Usuário [GET /usertype/{id}]

+ Request listar um tipo de usuário

    + Headers

            Accept: application/json
            Content-Type: application/json

+ Parameters
    + id: 1 (number, required) - ID do tipo de usuário

+ Response 200 (application/json)
    + Attributes (usertype)

+ Response 404 (application/json)
    + Attributes (Error404)


### Alterar um Tipo Usuário [PUT  /usertype/{id}]
+ Request Alterar um tipo de usuário

    + Headers

            Accept: application/json
            Content-Type: application/json

    + Attributes (usertype)

+ Parameters
    + id: 1 (number, required) - ID do tipo de usuário

+ Response 200 (application/json)
    + Attributes (Id)

+ Response 404 (application/json)
    + Attributes (Error404)


### Excluir um Tipo de Usuário [DELETE /usertype/{id}]
+ Request excluir um tipo de usuário

    + Headers

            Accept: application/json
            Content-Type: application/json

+ Parameters
    + id: 1 (number, required) - ID do tipo de usuário

+ Response 200 (application/json)
    + Attributes (Id)

+ Response 404 (application/json)
    + Attributes (Error404)

## User Status [/userstatus]

### Criar um Status de Usuário [POST]

+ Request Criar um status de usuário

    + Headers

            Accept: application/json
            Content-Type: application/json

    + Attributes (userstatus)

+ Response 200 (application/json)
    + Attributes (Created)

+ Response 400 (application/json)
    + Attributes (Error400)

### Listar Status de Usuarios [GET]

+ Request listar status de usuários

    + Headers

            Accept: application/json
            Content-Type: application/json

+ Response 200 (application/json)
    + Attributes (array[userstatus])

+ Response 404 (application/json)
    + Attributes (Error404)

### Listar um Status de Usuário [GET /userstatus/{id}]

+ Request listar um status de usuário

    + Headers

            Accept: application/json
            Content-Type: application/json

+ Parameters
    + id: 1 (number, required) - ID do status do usuário

+ Response 200 (application/json)
    + Attributes (userstatus)

+ Response 404 (application/json)
    + Attributes (Error404)


### Alterar um Status Usuário [PUT  /userstatus/{id}]
+ Request Alterar um status usuário

    + Headers

            Accept: application/json
            Content-Type: application/json

    + Attributes (usertype)

+ Parameters
    + id: 1 (number, required) - ID do status do usuário

+ Response 200 (application/json)
    + Attributes (Id)

+ Response 404 (application/json)
    + Attributes (Error404)


### Excluir um Status de Usuário [DELETE /userstatus/{id}]
+ Request excluir um status de usuário

    + Headers

            Accept: application/json
            Content-Type: application/json

+ Parameters
    + id: 1 (number, required) - ID do status do usuário

+ Response 200 (application/json)
    + Attributes (Id)

+ Response 404 (application/json)
    + Attributes (Error404)


# Data Structures

## user (object)
+ id: 1 (number, required) - auto incremento - Código do usuário
+ name: `Fulano de Tal` (required) - Nome do usuário
+ email: `fulano@email.com` (required) - Email do usuário
+ password: `*********` (required) - criptografada MD5 gerado pela API - Senha do usuário
+ password_token: `HUHHyyy887-uu76gGG` (required) - gerenciado pela API - Usado para gerar a password
+ password_reset_token: `HUHHyyy887-uu76gGG` - gerenciado pela API - Controle de alteração da password
+ password_reset_token_expired: `2014-11-11T08:40:51.620Z` - gerenciado pela API - Tempo de expiração do token
+ date_create: `2014-11-11T08:40:51.620Z` (required) - gerenciado pela API - Data da criação do usuário
+ date_update: `2014-11-11T08:40:51.620Z` (required) - gerenciado pela API - Data da última alteração do usuário
+ user_type_id: 1 ([usertype:id], required) - FK do Tipo de Usuário
+ typeName: `Dono` ([usertype:name], required) - Tipo de Usuário
+ user_status_id: 1 ([userstatus:id], required) - FK do Status do Usuário
+ statusName: `Ativo` ([userstatus:name], required) - Status do Usuário

## usertype (object)
+ id: 1 (number, required) - Código do tipo de usuário
+ name: `Dono` (required) - Tipo de usuário
+ desc: `Dono Master do Aplicativo` - Descrição do tipo
+ readonly: 1 (number, required) - Tipo apenas para leitura?

## userstatus (object)
+ id: 1 (number, required) - Código do status do usuário
+ name: `Ativo` (required) - Status do usuário
+ desc: `Usuário ativo` - Descrição do status
+ readonly: 1 (number, required) - Status apenas para leitura?

## Login (object)
+ email: `fulano@email.com` (required)
+ password: `********` (required)

## Loged (object)
+ id: 1 (number)
+ name: `Fulano de Tal`
+ email: `fulano@email.com`
+ date_create: `2014-11-11T08:40:51.620Z`
+ date_update: `2014-11-11T08:40:51.620Z`
+ user_type_id: 1 (number)
+ typeName: `Dono`
+ user_status_id: 1 (number)
+ statusName: `Ativo`
+ token: `UHUh88hTt444` (string)

## Loged1 (object)
+ id: 1 ([user:id])
+ name: `Fulano de Tal` ([user:name])
+ email: `fulano@email.com` ([user:email])
+ date_create: `2014-11-11T08:40:51.620Z`
+ date_update: `2014-11-11T08:40:51.620Z` ([user:date_update])
+ user_type_id: 1 ([user:user_type_id])
+ typeName: `Dono` ([user:typeName])
+ user_status_id: 1 ([user:user_status_id])
+ statusName: `Ativo` ([user:statusName])
+ token: `UHUh88hTt444` (string)

## Password (object)
+ email: `fulano@email.com` (required)
+ password: `********` (required)
+ newpassword: `********` (required)

## ResetPassword (object)
+ email: `fulano@email.com` (required)
+ password: `********` (required)
+ token: `UHUh88hTt444` (required)

## Created (object)
+ id: 1 (number) - Id gerado

## Id (object)
+ id: 1 (number) - Id do parâmetro

## Error (object)
+ code: 400 (number) - Status code
+ message: `Mensagem do erro` (string) - Mensagem do erro
+ description: `Descrição do erro` (string) - Descrição do erro

## Error400 (object)
+ status 400 (number) - Status code
+ code: `BadRequestError` - Status name
+ message: `Mensagem do erro` - Mensagem do erro

## Error401 (object)
+ status 401 (number) - Status code
+ code: `Unauthorized` - Status name
+ message: `Mensagem do erro` - Mensagem do erro

## Error404 (object)
+ status 404 (number) - Status code
+ code: `NotFound` - Status name
+ message: `Mensagem do erro` - Mensagem do erro

