# Thiago Pontes — Personal Trainer

Projeto de landing page responsiva em **React + Vite**, inspirado no protótipo visual aprovado.

## Requisitos
- Node.js 20.19+ ou 22.12+ (compatível com as versões recentes do Vite)
- npm

## Rodar localmente

```bash
npm install
npm run dev
```

Abra a URL exibida no terminal (geralmente http://localhost:5173).

## Gerar versão para publicar

```bash
npm run build
npm run preview
```

O comando de build cria a pasta `dist/`, que pode ser publicada em serviços de hospedagem estática como Vercel, Netlify ou Cloudflare Pages.

## Estrutura

```text
src/
  App.jsx       # Componentes e textos da página
  main.jsx      # Ponto de entrada React
  styles.css    # Identidade visual e responsividade
public/
  images/       # Fotos incluídas no projeto
  favicon.svg
```

## Personalizar
- **Instagram:** edite `INSTAGRAM_URL` em `src/App.jsx`.
- **CREF:** edite `CREF` em `src/App.jsx`.
- **Textos e seções:** edite os arrays `benefits`, `steps`, `gallery`, `principles` e `questions` em `src/App.jsx`.
- **Cores:** edite `--accent`, `--bg` e variáveis correlatas em `src/styles.css`.
- **Fotos:** substitua as imagens de `public/images/` mantendo os mesmos nomes ou atualizando os caminhos no JSX/CSS.

## Observações editoriais
- O projeto utiliza fotografias recortadas das capturas de tela fornecidas, portanto a resolução é limitada. Recomenda-se substituir por fotografias originais de alta resolução antes da publicação.
- A área que simulava depoimentos no conceito visual foi adaptada para **pilares de treinamento**, evitando apresentar avaliações ou clientes fictícios.
- Valores, formatos de atendimento, locais, disponibilidade, depoimentos e metodologia devem ser confirmados com o profissional antes da publicação.
- Todos os botões de contato apontam para o Instagram oficial informado. Não há formulário funcional, pagamento ou agendamento integrado.
- O logotipo TP é representado tipograficamente neste projeto; para reprodução 100% fiel da marca, substitua por seu arquivo SVG/PNG original.
