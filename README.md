## Projeto

Criar uma API que possibilite criar enquetes.

## Objetivo

Criar uma pequena API em node com express para exercitar alguns aprendizados da linguagem.

## Configurando ambiente

1. Instale o [nvm](https://github.com/nvm-sh/nvm) ele vai ajudar no gerenciamento das versões do nodejs.
2. Abra seu shell favorito e execute os comandos abaixo.

```bash
  > nvm install
  > nvm use
  > npm install
```

## Executando local

1. Abra seu shell favorito.
2. Execute o comando `npm run start:dev`
3. Seja Feliz! :smile:

## Ambientes

| Ambiente | Url                    |
| -------- | ---------------------- |
| dev      | http://localhost:3000/ |
| homolog  |                        |
| prod     |                        |

## Recursos

### Cadastro de enquete

Faça uma socitiação `POST /v1/survey`

```json
{
  "question": "Você gostou e usaria esse projeto?",
  "description": "Gostou desse projeto, conta pra gente",
  "startPublish": "2023-02-01T00:00:00Z",
  "stopPublish": "2023-03-01T00:00:00Z",
  "options": ["Sim", "Não"]
}
```

## Importante conhecer

- Express
