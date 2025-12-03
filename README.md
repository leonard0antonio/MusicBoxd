# 🎵 MusicBoxd

O **MusicBoxd** é uma aplicação completa desenvolvida para explorar músicas, criar playlists, adicionar reviews e interagir com publicações — tudo em uma interface moderna no frontend e um backend robusto em **Java Spring Boot**.

Ele foi desenvolvido como um projeto pessoal para praticar **React + TypeScript**, **Java**, **Spring Boot**, **APIs REST**, arquitetura em camadas e integração entre frontend e backend.

---

## 📌 Introdução

🎯 **Objetivo:**
Criar uma aplicação completa de música que permita:

* Listar músicas
* Ver detalhes
* Criar playlists
* Avaliar músicas (reviews)
* Criar publicações
* Fazer CRUD completo de usuários, músicas, playlists e reviews

✨ **Destaques do projeto:**

* Primeiro projeto unindo **React + TypeScript** com **backend em Java Spring Boot**.
* Organização forte em camadas: *Controller → Service → Repository → Model*.
* Código limpo e estruturado, seguindo boas práticas.
* Backend já com tratamento global de exceções.
* Estrutura pensada para crescer.

---

# 🚀 Funcionalidades

## 🎧 **Músicas**

* Listar músicas
* Buscar por ID
* Criar, atualizar e deletar músicas
  *(MusicController + MusicService + MusicRepository)*

## 🎶 **Playlists**

* Criar playlists
* Adicionar músicas
* Remover músicas
* Listar playlists por usuário
  *(PlaylistController + PlaylistService)*

## 📝 **Reviews**

* Criar avaliações de músicas
* Alterar avaliações
* Listar reviews de determinado usuário ou música
  *(ReviewController + ReviewService)*

## 👥 **Usuários**

* Cadastro de usuários
* CRUD completo
* Associação com reviews e playlists
  *(UserController + UserService)*

## 📰 **Publicações**

* Criar posts/publicações
* Listar publicações
* Buscar por ID
  *(PublicationController + PublicationService)*

## ⚠️ Tratamento Global de Erros

O backend possui um **GlobalExceptionHandler** que captura exceções como:

* UserNotFoundException
* PlaylistNotFoundException
* MusicNotFoundException
* PublicationNotFoundException

E retorna respostas legíveis para o usuário/consumidor da API.

---

# 🛠️ Tecnologias Utilizadas

## 🎨 **Frontend**

* **React**
* **TypeScript**
* **Vite**
* **CSS puro**
* Estrutura limpa e escalável

## 🖥️ **Backend**

### 🟦 *Java + Spring Boot*

* Spring Web
* Spring Data JPA
* Maven
* Validação com Exceptions customizadas
* Arquitetura MVC

### 🗄️ Banco de Dados

* **H2 ou outro DB configurável**
  *(o projeto possui entidades completas e repositórios JPA prontos para qualquer banco relacional)*

---

# 📚 Lições Aprendidas

Durante o desenvolvimento deste projeto, várias habilidades importantes foram fortalecidas:

### 🔹 **Integração entre frontend e backend**

Aprender a consumir APIs REST e estruturar endpoints foi essencial.

### 🔹 **Organização em camadas**

O projeto tem:

* Controllers
* Services
* Repositories
* Models
  Todos separados corretamente.

### 🔹 **Controle de erros**

Uso de GlobalExceptionHandler para respostas amigáveis.

### 🔹 **Aprendizado de Spring Boot**

Rotas, JPA, injeção de dependência, models, validações, tudo funcionando.

### 🔹 **Trabalho com TypeScript**

Tipagem forte ajuda no frontend a evitar erros.

---

# 🏁 Conclusão

O **MusicBoxd** é um marco importante no seu aprendizado.

* Backend profissional
* Modelo de dados completo
* CRUDs funcionais
* Tratamento de erro
* Frontend organizado
