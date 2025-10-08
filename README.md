🎧 Podcast Filter API

API RESTful para filtrar e listar podcasts com base em critérios como categoria, duração, data e título.

🔍 Funcionalidade principal

Permite consultar uma lista de podcasts aplicando múltiplos filtros via parâmetros de URL.

📂 Endpoints
Método	Rota	Descrição
GET	/podcasts	Retorna a lista de podcasts com ou sem filtros
🎯 Parâmetros de Filtro

Você pode filtrar os podcasts usando os seguintes parâmetros:

Parâmetro	Tipo	Descrição
titulo	string	Filtra por título ou trecho do título
categoria	string	Filtra por categoria (ex: tecnologia, saúde)

🔗 Exemplo de requisição:
GET /podcasts?categoria=tecnologia&duracaoMax=60&dataInicio=2023-01-01

🛠️ Tecnologias usadas

Node.js + TypeScript
