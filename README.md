# T9-projeto-1-m-de-maravilhosa
T9 | Front-end | 2020 | Semana 4 | Projeto 1 - M de Maravilhosa
Professora: Priscila Theodoro

## Agenda da Semana
- **30/03**: Apresentação, Introdução ao projeto e Revisão da semana.
- **31/03**: Planejar e Codar.
- **01/04**: Como está seu projeto? Tem dúvidas? / Codar
- **01/04**: Codar e envios de PullRequest.
- **03/04**: Finalização e Apresentação.

## Projeto
Escolha um personlidade Maravilhosa que te inspira para criar uma página de perfil dela.

### Requisitos obrigatórios:
1. A página deve ser responsiva;
2. Seguir o layout conforme protótipo Figma;
3. Inserir na página principal o nome e a foto de sua maravilhosa;

### Requisitos opcionais:
1. Realizar o desenvolvimento mobile first;
2. Criar uma página coom o seu perfil;


## Protótipo Figma
Seguir o layout presente no [link](https://www.figma.com/file/XBEywzd2yF47RaWm0Gw4t7Tz/M-de-Maravilhosa?node-id=0%3A1)


## Orientações
### Copiar os arquivos do repositório da {reprograma}

1. Fazer o _fork_ desse repositório;

2. Fazer o _clone_ do projeto no seu repositório criado através do fork;
``` 
git clone "url do seu reposiório"
```
3. Criar um branch com o seu nome, ex:
```
git checkout -b seu-nome
```
4. Após o clone, abrir o projeto e ler com atenção o código do projeto.

5. Criar a arquitetura de pastas seguindo o padrão abaixo. 

**ATENÇÃO** -  *Este padrão não deve ser alterado*

```
index.html
css/
  style.css
img/
  home-personalidade/
    ada-lovelace-home.png

personalidade/
  ada-lovelace/
    index.html
    css/
      style.css
    img/
      ada-lovelace-perfil.jpeg
      al-bg.jpeg
      

autora
  seu-nome/
    index.html
    css/
      style.css
    img/
      seu-nome-perfil.png
```

**Personalidade:** É a pasta na qual será criado o html, css e imagens da maravilhosa escolhida.

**Autora:** É a pasta na qual será criado o html, css e imagens de seu próprio perfil (opcional).

**Index principal** é o arquivo com todas as personalidades maravilhosas escolhidas pela turma, no qual cada aluna deverá editar apenas as informações para adicionar sua personalidade.

*ATENÇÃO* 
1. Para o **index.html**, você deve colocar uma imagem quadrada da personalidade na pasta **img/home-personalidade** 
2. O site deve conter no total **3 páginas** (homepage, que já está pronta, personalidade e autora) 


## COMMIT

É boa prática realizar commits das alterações realizadas. 
Diariamente entre às 16h e 16h30 realizar commit das alterações realizadas localmente no projeto.
**Atenção** Deve ser realizado ao menos um commit por dia, caso prefira pode realizar mais commits.

### Fazendo um commit

Após realizar as alterações, salve, faça um commit e push para o **seu** repositório.
```
git add .

git commit -m "O que você alterou"

git push origin nome-da-sua-branch

```
