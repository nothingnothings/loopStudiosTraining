# loopStudiosTraining

[![en](https://img.shields.io/badge/lang-en-red.svg?style=flat-square)](https://github.com/nothingnothings/loopStudiosTraining)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg?style=flat-square)](https://github.com/nothingnothings/loopStudiosTraining/blob/master/README.pt-br.md)

Este README fornece uma visão geral do arquivo `index.html` para o projeto LoopStudiosTraining, focando nas classes Tailwind CSS e na funcionalidade usadas ao longo do documento. O arquivo é estruturado em várias seções principais, cada uma utilizando várias utilidades do Tailwind para criar um layout responsivo e visualmente atraente.

![screenshot2](screenshot2.png)

## Tabela de Conteúdos
1. [Hero Section](#hero-section)
2. [Features Section](#features-section)
3. [Creations Section](#creations-section)
4. [Footer Section](#footer-section)

## Hero Section

A seção hero serve como a introdução à página, apresentando uma barra de navegação e um destaque para a chamada à ação.

### Principais Classes Tailwind:
- **Container**: `max-w-6xl mx-auto px-6 py-12 md:px-0` - Centraliza o conteúdo e aplica padding.
- **Utilitários Flexbox**: `flex justify-between items-center` - Alinha os itens de navegação horizontalmente.
- **Estilização de Texto**: `font-bold text-white` - Aplica uma fonte em negrito e cor de texto branca.
- **Visibilidade Responsiva**: `hidden md:flex` - Oculta elementos em telas pequenas e os exibe em telas médias e maiores.
- **Menu Hambúrguer**: `block hamburger md:hidden` - Mostra o ícone de hambúrguer apenas em dispositivos móveis.

## Features Section

Esta seção destaca as principais funcionalidades do produto com uma imagem e texto de apoio.

### Principais Classes Tailwind:
- **Layout Flexível**: `flex flex-col md:flex-row` - Organiza os itens em coluna em telas pequenas e em linha em telas médias e maiores.
- **Centralização de Texto**: `text-center md:text-left` - Centraliza o texto em telas pequenas e alinha à esquerda em telas maiores.
- **Utilitários de Espaçamento**: `my-32 px-6` - Adiciona margens verticais e padding horizontal.

## Creations Section

A seção de criações apresenta vários projetos com imagens e descrições.

### Principais Classes Tailwind:
- **Sistema de Grid**: `flex justify-center mb-20 md:justify-between` - Centraliza o cabeçalho e ajusta o layout com base no tamanho da tela.
- **Escalonamento de Imagem**: `hidden w-full duration-200 md:block group-hover:scale-110` - Oculta imagens móveis em telas maiores e aplica um efeito de escala ao passar o mouse.
- **Efeitos de Hover de Grupo**: `group-hover:border-b group-hover:border-blue-50` - Cria um efeito de hover interativo nos links de navegação.

## Footer Section

O rodapé conclui a página com navegação adicional e links para redes sociais.

### Principais Classes Tailwind:
- **Cor de Fundo**: `bg-black` - Define a cor de fundo do rodapé como preta.
- **Utilitários Flexíveis**: `flex flex-col md:flex-row` - Permite que o conteúdo do rodapé empilhe verticalmente em telas pequenas e horizontalmente em telas maiores.
- **Cor do Texto**: `text-gray-500` - Aplica uma cor cinza claro ao texto.
