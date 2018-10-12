FORMAT: 1A
HOST: http://api.cgctec.com.br/v1

# Documentação da API

Esta documentação descreve de maneira geral o funcionamento e os parâmetros da API que alimenta o site.

# API

## Sobre [/]

Aqui podemos descrever detalhes que são comuns a todos os serviços como formatos, headers, tipos de erros, etc

# Group Usuários

## UserLogin [/login]

### Fazer login [POST]

+ Request login
    + Headers

            Accept: application/json
            Content-Type: application/json

    + Attributes (Login)

+ Response 201 (application/json)

    + Attributes (Loged)


## UserPassword [/password]

### Alterar a senha [POST]

+ Request alterar password

    + Headers

            Accept: application/json
            Content-Type: application/json

    + Attributes (Password)

+ Response 201 (application/json)
    + Attributes (Created)


## UserForgotPassword [/forgotpassword]

### Resetar a senha [POST]

+ Request reset password

    + Headers

            Accept: application/json
            Content-Type: application/json

    + Attributes (ResetPassword)

+ Response 201 (application/json)
    + Attributes (Created)


## User [/user]

### Criar um usuário [POST]

+ Request Criar um usuário

    + Headers

            Accept: application/json
            Content-Type: application/json

    + Attributes (user)

+ Response 201 (application/json)
    + Attributes (Created)


### Listar usuarios [GET]

+ Request listar usuários

    + Headers

            Accept: application/json
            Content-Type: application/json

+ Response 200 (application/json)
    + Attributes (array[user])

+ Response 404 (application/json)
    + Attributes (Error)


## UserID [/user/{id}]

### Listar um Usuário [GET]

+ Request listar um usuário

    + Headers

            Accept: application/json
            Content-Type: application/json

    + Parameters
     + id: 1 (number, required) - ID do usuário

+ Response 200 (application/json)
    + Attributes (Id)

+ Response 404 (application/json)
    + Attributes (Error)


# Data Structures

## user (object)
+ id: 1 (number) - auto incremento - Código do usuário
+ name: `Fulano de Tal` (required) - Nome do usuário
+ email: `fulano@email.com` (required) - Email do usuário
+ password: `*********` (required) - criptografada MD5 gerado pela API - Senha do usuário
+ password_token: `HUHHyyy887-uu76gGG` (required) - gerenciado pela API - Usado para gerar a password
+ password_reset_token: `HUHHyyy887-uu76gGG` - gerenciado pela API - Controle de alteração da password
+ password_reset_token_expired: `2014-11-11T08:40:51.620Z` - gerenciado pela API - Tempo de expiração do token
+ date_create: `2014-11-11T08:40:51.620Z` (required) - gerenciado pela API - Data da criação do usuário
+ date_update: `2014-11-11T08:40:51.620Z` (required) - gerenciado pela API - Data da última alteração do usuário
+ user_type_id: 1 ([userType:id], required) - FK do Tipo de Usuário
+ user_status_id: 1 ([userStatus:id], required) - FK do Status do Usuário

## userType (object)
+id: 1 (number, required) - Código do tipo de usuário
+name: `Dono` (required) - Tipo de usuário
+desc: `Dono Master do Aplicativo` - Descrição do tipo
+readonly: 1 (number, required) - Tipo apenas para leitura?

## userStatus (object)
+id: 1 (number, required) - Código do status do usuário
+name: `Ativo` (required) - Status do usuário
+desc: `Usuário ativo` - Descrição do status
+readonly: 1 (number, required) - Status apenas para leitura?

## Login (object)
+ email: `fulano@email.com` (required)
+ password: `********` (required)

## Loged (user)
+ user ([user])
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
+ id: 1 (number, required) - Id a ser processado

## Error (object)
+ code: 400 (number) - Status code
+ message: `Mensagem do erro` (string) - Mensagem do erro
+ description: `Descrição do erro` (string) - Descrição do erro


