**Desafio Técnico QA - Open Solutions**

Este repositório contém a automação de testes para o site SauceDemo, desenvolvida como parte do processo seletivo para Analista de Qualidade.

**Tecnologias Utilizadas**

- Framework: Cypress
- Linguagem: JavaScript
- Padrão de Arquitetura: Page Object Model (POM)
- Relatórios: Evidências nativas (Vídeos e Screenshots)

**Arquitetura do Projeto**

O projeto foi estruturado seguindo as melhores práticas para manutenção e organização das pastas:

- cypress/e2e: Contém os arquivos de especificação de testes.
- cypress/support/pages:** Implementação do padrão Page Objects, onde cada página do sistema possui sua respectiva classe e mapeamento de elementos.
- cypress/videos: Gravações automáticas de cada execução para auditoria e debug.
- cypress/screenshots: Capturas de tela em pontos críticos e falhas intermitentes.

**Como Executar o Projeto**

**Pré-requisitos**
- Node.js instalado (versão 18 ou superior recomendada).

**Instalação**
1. Clone o repositório.
2. No terminal, dentro da pasta do projeto, execute:
   - `npm install`

**Execução dos Testes**
- Para rodar via terminal (Modo Headless) e gerar evidências:
  - `npx cypress run`
- Para abrir a interface visual do Cypress:
  - `npx cypress open`

---

**Parte 2: Estratégia e Arquitetura de Qualidade**

**2.1 Planejamento de Cobertura**

**a) Priorização:**
1. Focar no Core Business da empresa: Em sistemas legados, a prioridade máxima é proteger o coração do negócio, garantindo que as funcionalidades fundamentais não parem de funcionar.
2. Fluxos de receita direta: Priorizaria a automação dos processos que sustentam a operação principal, como Login e Checkout, onde qualquer falha impacta diretamente o faturamento.
3. Garantia da Jornada: Assegurar que a jornada do usuário seja concluída com sucesso e sem fricções, utilizando os testes de ponta a ponta (E2E) como a ferramenta mais eficaz para mitigar riscos operacionais.

**b) Estratégia de Testes:**
Para proteger esse Core, utilizaria uma abordagem focada em baixo custo e alta velocidade de feedback:
1. Testes de menor nível: Implementar validações de regras e critérios de forma rápida e barata antes de chegar na interface.
2. Uso estratégico do Cypress: Utilizar a automação E2E para garantir a integridade da jornada do usuário nos fluxos vitais definidos na priorização.
3. Equilíbrio de Confiança: Unir a rapidez dos testes de base com a segurança dos testes de ponta a ponta, otimizando o tempo de execução da suite.

**c) Medição de Progresso:**
O sucesso seria medido pela estabilidade do Core Business através de:
1. Redução do Defect Escape Rate: Monitorar bugs críticos que deixaram de chegar em produção nos fluxos principais.
2. Confiança nas entregas: Garantir que o tempo gasto com testes manuais repetitivos no "caminho feliz" seja eliminado.
3. Saúde da Automação: Acompanhar o Pass Rate e a velocidade de feedback que a ferramenta entrega ao time.

**2.2 Análise de Falha em Pipeline**

**a) Hipóteses para instabilidade:**
1. Sincronismo e Latência: A aplicação ou a rede podem demorar mais para responder em ambiente de CI do que na máquina local, causando falhas por timeout.
2. Concorrência de Dados: Testes que utilizam a mesma massa de dados simultaneamente, onde um processo altera o estado necessário para o outro.
3. Seletores Instáveis: Uso de seletores que dependem de elementos que mudam dinamicamente ou demoram a carregar na tela.

**b) Diagnóstico e Correção:**
1. Evidências Visuais: Inspeção imediata dos vídeos e screenshots gerados automaticamente pelo Cypress para entender o estado real da tela no momento do erro.
2. Depuração de Logs: Análise dos logs de console e requisições de rede (XHR/Fetch) para identificar se a falha foi de serviço (API) ou de interface.
3. Estabilização: Substituição de esperas fixas por esperas dinâmicas (assertions) e garantia de isolamento entre os cenários de teste.

**2.3 Integrando Qualidade no Processo**

**a) Estrutura no CI/CD (Passo a passo):**
1. Validação Inicial (Pre-merge): A pipeline é acionada no Pull Request para rodar testes rápidos e garantir que o código básico está íntegro.
2. Execução de Smoke Tests: Rodar os testes críticos no Cypress (Core Business) para dar um feedback rápido sem travar o desenvolvimento.
3. Regressão e Evidências: Após o merge, a suite completa roda em ambiente de Staging, gerando evidências automáticas para auditoria.

**b) Critérios de Bloqueio de Deploy:**
1. Quebra no Core Business: Se o fluxo de Login ou Compra falhar, o deploy é interrompido imediatamente.
2. Instabilidade na Pipeline: Pausa para manutenção caso a suite apresente falhas constantes sem motivo funcional (testes flaky).
3. Acordo com o Time (Go/No-Go): Falhas menores são avaliadas com o time de Produto para medir o risco da liberação.