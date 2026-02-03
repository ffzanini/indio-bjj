<p align="center">
  <strong>JA Índio Jiu Jitsu</strong>
</p>

<p align="center">
  Site institucional da academia JA Índio Jiu Jitsu — programas, horários, cursos online e contato.
</p>

<p align="center">
  <a href="#sobre-o-projeto">Sobre</a> &nbsp;&nbsp;•&nbsp;&nbsp;
  <a href="#funcionalidades">Funcionalidades</a> &nbsp;&nbsp;•&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a> &nbsp;&nbsp;•&nbsp;&nbsp;
  <a href="#como-executar">Como executar</a> &nbsp;&nbsp;•&nbsp;&nbsp;
  <a href="#deploy">Deploy</a> &nbsp;&nbsp;•&nbsp;&nbsp;
  <a href="#contato">Contato</a>
</p>

---

## 📋 Sobre o projeto

Este repositório contém o **site institucional** da academia **JA Índio Jiu Jitsu**, pensado como vitrine da escola: apresentação da academia, programas (iniciante, intermediário, avançado, competição, kids, 35+, nogi, feminino, etc.), grade de horários, depoimentos, cursos online (drills, guarda aberta, meia guarda, nogi) e página de contato.

O foco é **usabilidade** e **acessibilidade**: navegação clara, suporte a múltiplos idiomas (PT, EN), tema claro/escuro e layout responsivo para leitura em qualquer dispositivo.

O projeto foi desenvolvido com **Next.js**, **TypeScript** e **Tailwind CSS**, priorizando performance e boa experiência em desktop e mobile.

---

## ✨ Funcionalidades

- **Idiomas:** Português e Inglês (i18n)
- **Tema:** Alternância entre modo claro e escuro
- **Academia:** Sobre nós, programas, horários e depoimentos
- **Cursos online:** Páginas dedicadas (Drills, Guarda Aberta, Meia Guarda, No-Gi)
- **Contato:** Formulário e integração com WhatsApp
- **SEO:** Sitemap e metadados configurados para indexação
- **Analytics:** Integração com Vercel Analytics e Speed Insights
- **Layout responsivo:** Pensado para uso em qualquer dispositivo

---

## 🛠 Tecnologias

### Principais

| Tecnologia                                    | Uso                                   |
| --------------------------------------------- | ------------------------------------- |
| [Next.js](https://nextjs.org/)                | Framework React, SSR, rotas e layouts |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática                      |
| [Tailwind CSS](https://tailwindcss.com/)      | Estilização e design system           |
| [React](https://react.dev/)                   | Interface e componentes               |
| [Vercel](https://vercel.com/)                 | Hospedagem e deploy                   |

### Complementares

| Tecnologia                                                                                                   | Uso                                            |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| [Framer Motion](https://motion.dev/)                                                                         | Animações e transições                         |
| [React Hook Form](https://react-hook-form.com/)                                                              | Formulários                                    |
| [React Icons](https://react-icons.github.io/react-icons/)                                                    | Ícones                                         |
| [next-themes](https://github.com/pacocoursey/next-themes)                                                    | Tema claro/escuro                              |
| [next-sitemap](https://github.com/iamvishnusankar/next-sitemap)                                              | Geração de sitemap                             |
| [react-hot-toast](https://react-hot-toast.com/)                                                              | Notificações (toast)                           |
| [SWR](https://swr.vercel.app/)                                                                               | Requisições e cache de dados                   |
| [react-medium-image-zoom](https://github.com/rpearce/react-medium-image-zoom)                                | Zoom em imagens                                |
| [class-variance-authority](https://cva.style/) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Variantes de componentes e merge de classes    |
| [Brasil API](https://brasilapi.com.br/)                                                                      | Integração (ex.: CEP no formulário de contato) |

---

## 🚀 Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado: LTS)
- npm ou yarn

### Passos

**1. Clonar o repositório**

```bash
git clone https://github.com/ffzanini/indio-bjj.git
cd indio-bjj
```

**2. Instalar dependências**

```bash
npm install
```

**3. Rodar em desenvolvimento**

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

**4. Build para produção**

```bash
npm run build
npm start
```

---

## 📦 Deploy

O projeto está preparado para deploy na **Vercel**: build com `next build`, com `postbuild` gerando o sitemap via `next-sitemap`. Basta conectar o repositório ao projeto na Vercel e configurar variáveis de ambiente, se houver (por exemplo, para integração com Notion ou APIs externas).

---

## 👋 Contato

Dúvidas sobre o projeto ou interesse em desenvolvimento de sites e produtos digitais? Entre em contato:

- **Site:** [ffzanini.dev](https://www.ffzanini.dev)
- **LinkedIn:** [linkedin.com/in/ffzanini](https://www.linkedin.com/in/ffzanini/)

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

---

<p align="center">
  Feito com 💙 por Felipe Frantz Zanini
</p>
