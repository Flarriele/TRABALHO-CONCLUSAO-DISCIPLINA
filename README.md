Atualização para teste do gatilho push.
# Trabalho – Integração Contínua para Automação de Testes

# Objetivo

Implementar uma pipeline de Integração Contínua (CI) utilizando GitHub Actions para execução automatizada de testes, geração de relatório e publicação dos resultados.

# Projeto Utilizado

Para o desenvolvimento desta atividade foi utilizado o projeto criado na disciplina Programação para Automação de Testes, contendo testes automatizados desenvolvidos com Node.js e Mocha.

# Conceito de Integração Contínua (CI)

Integração Contínua (Continuous Integration - CI) é uma prática de desenvolvimento de software que consiste em integrar alterações de código frequentemente em um repositório compartilhado. A cada alteração, processos automatizados são executados para validar a qualidade da aplicação, reduzindo riscos e identificando problemas rapidamente.

# Conceito de Pipeline

Uma pipeline é um fluxo automatizado composto por etapas que são executadas de forma sequencial. Neste projeto, a pipeline realiza:

1. Checkout do código-fonte.
2. Configuração do ambiente Node.js.
3. Instalação das dependências.
4. Execução dos testes automatizados.
5. Geração de relatório.
6. Publicação do relatório como artefato.

# Tecnologias Utilizadas

* GitHub Actions
* Node.js
* Mocha
* Git
* GitHub

# Estrutura da Pipeline

Arquivo:

.github/workflows/ci.yml

# Etapas executadas

* Checkout do código.
* Instalação das dependências com npm install.
* Execução dos testes com npm test.
* Geração do relatório de execução.
* Publicação do relatório como artefato da pipeline.

# Tipos de Execução Implementados

# Execução por Push

A pipeline é executada automaticamente sempre que um novo commit é enviado para o repositório.

# Execução Manual

A execução manual é realizada através da opção Run Workflow disponível na aba Actions do GitHub.

# Execução Agendada

A execução agendada foi configurada utilizando expressão CRON:

0 12 * * 1

Esta configuração executa a pipeline toda segunda-feira às 12:00 UTC.

# Execução dos Testes

Para executar os testes localmente:

```bash
npm install
npm test
```

Resultado esperado:

* 2 testes executados com sucesso.
* Nenhuma falha encontrada.

# Relatórios

Ao final da execução, a pipeline gera um relatório contendo o resultado da execução dos testes.

O relatório é armazenado como artefato do GitHub Actions com o nome:

relatorio-testes

# Evidências

Inserir nesta seção as capturas de tela:

* Execução da pipeline com status Success.
* Lista de execuções na aba Actions.
* Artefato gerado pela pipeline.
* Conteúdo do relatório gerado.

## Repositório

URL do projeto:

https://github.com/Flarriele/TRABALHO-CONCLUSAO-DISCIPLINA
