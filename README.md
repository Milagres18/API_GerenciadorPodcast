# 🎧 API Gerenciadora de Podcasts

![status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express.js-Framework-blue)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

> API RESTful simples feita com Node.js para **listar** e **filtrar** podcasts por título, categoria, data, duração e convidados. Criada para fins de aprendizado e prática em back-end.

---

## 📸 Preview (opcional)

<img src="https://via.placeholder.com/800x200.png?text=API+de+Gerenciamento+de+Podcasts" alt="banner do projeto" />

---

## 🚀 Funcionalidades

- 🔍 Filtro de podcasts por:
  - Título
  - Categoria
  - Data de publicação
  - Duração (mínima/máxima)
  - Convidados

- 📄 Respostas em JSON
- ✅ Estrutura simples e organizada
- 🌱 Ideal para aprendizado de API com Node.js

---

## 📂 Endpoints principais

### `GET /podcasts`

Retorna uma lista de podcasts com suporte a filtros via query string.

**Exemplo:**

```http
GET /podcasts?categoria=tecnologia&duracaoMax=30
