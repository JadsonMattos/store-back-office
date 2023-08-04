# Boas-vindas ao repositório do exercício Store Back office!

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

Nesse exercício você irá desenvolver um _back office_ para uma loja. O _back office_ deve permitir que o usuário gerencie os produtos, cadastrando-os e excluindo-os.
</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

  Neste exercício, verificamos se você é capaz de:

- Ler o estado de um componente e usá-lo para alterar o que exibimos no _browser_;
- Inicializar um componente, dando a ele um estado predefinido;
- Atualizar o estado de um componente;
- Capturar eventos utilizando a sintaxe do React;
- Criar formulários utilizando sintaxe JSX com as _tags_: `input`, `textarea`, `select`, `form`, `checkbox`;
- Transmitir informações de componentes-filhos para componentes-pais via _callbacks_.
</details>

## 1. Renderize apenas um dos componentes no `App` por vez.

<details>
<summary>Apenas um dos componentes deverá ser visível por vez</summary><br />

  Para isso, crie um estado no componente `App` para controlar qual componente será renderizado.
  
  - Adicione eventos para os botões `Cadastrar` e `Ver produtos`, alterando o estado do componente `App` que controla qual componente será renderizado;
  - Utilize renderização condicional para exibir apenas um dos componentes por vez:
    - Caso o usuário clique no botão "Cadastrar", o componente `RegisterProduct` deverá ser renderizado;
    - Caso o usuário clique no botão "Ver produtos", o componente `ListProducts` deverá ser renderizado.
</details>

## 2. Exiba o _preview_ das informações enquanto o usuário cadastra um novo produto.

<details>
<summary>As informações do produto devem ser exibidas no componente <code>Product</code> do formulário</summary><br />

  - Adicione eventos aos campos do formulário e armazene suas informações no estado do componente `RegisterProduct`;
  - Passe as informações do formulário para o componente `Product` através da _prop_ `productInfo`:
> **De olho na dica 👀**: O `Product` se encontra comentado no final do componente `RegisterProduct`.
  
  - A prop `productInfo` deverá ser um objeto com as seguintes chaves:

    ```json
    { 
      name: "Nome do produto",
      price: 100,
      description: "Descrição do produto",
      tags: "tag1, tag2, tag3",
      image: "https://url-da-imagem" 
    }
    ```
</details>

## 3. Implemente a funcionalidade de cadastrar um novo produto.

<details>
<summary>O botão "Salvar" do componente <code>RegisterProduct</code> deve adicionar um novo produto à lista de produtos</summary><br />

  - Implemente a função `onSubmit` presente no formulário de cadastro de produtos. Essa função deverá:
    - Chamar a função `handleSubmit` recebida por _props_;
    - Limpar o formulário.

  - Implemente a função `handleSubmit` que o componente `RegisteProduct` deve receber por _props_. A função deverá:
    - Criar um `id` único para o produto;
    - Armazenar as informações do produto (com o ID) em um estado do componente `App` dentro de um _array_;
  
  > **De olho na dica 👀**: O `id` pode ser qualquer valor único, desde um número que sempre será incrementado, ou até mesmo um `date.now()`.

  > **Observação 🔎**: Note que estamos salvando os produtos no `App` porque, dessa forma, podemos compartilhar as informações entre os componentes `RegisterProduct` e `ListProducts` 😉
  > **Atenção ⚠️**: Lembre-se de alterar as tipagens sempre que necessário.
</details>

## 4. Exiba a lista de produtos cadastrados ao clicar no botão "Ver produtos".

<details>
<summary>Os produtos cadastrados devem ser exibidos no componente <code>ListProducts</code></summary><br />

  - Passe as informações do estado do componente `App` para o componente `ListProducts` através da _prop_ `products`.
</details>

<details>
<summary>Implemente a função <code>handleDelete</code> que o componente <code>ListProducts</code> deve receber por _props_</summary><br />

A função `handleDelete` será responsável por remover um produto da lista de produtos. Ela é chamada quando o usuário clica no botão "X" de um produto (só será exibido quando o componente ListProducts receber a prop `handleDelete`).

  - Implemente a função `handleDelete` que o componente `ListProducts` deve receber por _props_. A função deverá:
    - Remover o produto clicado do estado do componente `App`.
</details>

## 5. Implemente um novo campo no formulário de cadastro de produtos.

<details>
<summary>Sugestão de novo campo</summary>

  - Adicione um campo para dizer se o produto possui frete grátis ou não, e exiba essa informação no _preview_ e na lista de produtos.
</details>

## 6. Implemente o CSS.
