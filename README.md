# portfolioWeb

Este projeto é uma página de portfólio pessoal desenvolvida para apresentar projetos, habilidades e informações de contato.

## Sugestões de melhorias

### Conteúdo
- Substituir os textos de exemplo por experiências e projetos reais (incluindo stack, impacto e links).
- Adicionar uma seção de projetos em destaque com imagem, descrição curta e botão para repositório/demo.
- Incluir um resumo profissional objetivo no topo com foco em propostas de valor.

### Acessibilidade
- Garantir contraste adequado entre texto e fundo em todas as seções.
- Adicionar textos alternativos descritivos para imagens relevantes.
- Revisar hierarquia de títulos (`h1`, `h2`, `h3`) para navegação por leitores de tela.

### SEO e compartilhamento
- Incluir `meta description` e tags Open Graph/Twitter Card para melhor prévia em redes sociais.
- Definir favicon e título consistente em todas as páginas (caso o site cresça para múltiplas rotas).
- Registrar o domínio no Google Search Console para monitorar indexação.

### Performance
- Otimizar imagens (WebP/AVIF) e usar versões dimensionadas para diferentes telas.
- Considerar pré-carregamento de fontes e recursos críticos de estilo.
- Minificar CSS/JS em ambiente de produção.

### Experiência e conversão
- Trocar links `#` por URLs reais (LinkedIn, GitHub, e-mail com `mailto:`).
- Adicionar CTA principal claro (ex.: “Falar sobre projeto”).
- Inserir formulário simples de contato com validação básica.

### Qualidade do código
- Mover o JavaScript inline para um arquivo dedicado (`scripts/main.js`) para melhorar manutenção.
- Padronizar nomenclatura de classes/IDs e corrigir pequenos erros ortográficos.
- Adicionar um formatador/linter (ex.: Prettier + Stylelint) no fluxo de desenvolvimento.
