# Sistema de Gestão de Transportadoras

## Visão Geral

O Sistena de Gestão de Transportadoras é uma aplicação web desenvolvida para facilitar o gerenciamento de veículos, motoristas, rotas, entregas e manutenções de transportadoras. A aplicação também oferece funcionalidades de rastreamento em tempo real e geração de relatórios detalhados.

## Tecnologias Utilizadas

- **Front-end**: React.js
- **Back-end**: Node.js com Express
- **Banco de Dados**: MongoDB
- **Autenticação**: JSON Web Tokens (JWT) e Auth
- **Outras Ferramentas**:  Docker, Git, Github

## Funcionalidades

1. **Gestão de Veículos**
    - Cadastro e edição de veículos.
    - Monitoramento do status de manutenção.

2. **Gestão de Motorista**
    - Cadastro e edição de motoristas.
    - Gestão da disponibilidade e histórico de viagens.

3. **Gestão de Rotas e Entregas**
    - Planejamento e otimização de rotas.
    - Atribuição de entregas a motoristas.
    - Rastreamento de entregas em tempo real.

4. **Manutenção de Veículos**
    - Agendamento de manutenções.
    - Registro de histórico de manutenções.

5. **Gestão de Combustível**
    - Registro de abastecimentos.
    - Monitoramento do consumo de combustível.

6. **Relatórios e Análises**
    - Relatórios de desempenho de motoristas e veículos.
    - Relatórios de eficiência de rotas e entregas.

7. **notificações e Alertas**
    - Alertas sobre manutenções programadas.
    - Notificações sobre status de entregas.

8. **Autenticação e Controle de Acesso**
    - Registro e login de usuários.
    - Controle de acesso baseado em funções (administradores, motoristas, operadores).

## Requisitos de Instalção

- Node.js (versão 14 ou superior)
- MongoDB
- Docker (opcional, para deploy)
- Git 

## Configurações do Ambiente de Desenvolvimento

1. **Clone o repositório:**
```bash
git clone https://github.com/WagnerSantos98/TrackWise.git
cd TrackWise
```

2. **Instale as dependências do back-end:**
```bash
cd ws
npm install
```

3. **Instale as dependências do front-end:**
```bash
cd web
npm install
```

4. **Configure as variáveis de ambiente:**

5. **Inicie o servidor back-end:**
```bash
cd ws
npm start
```

6. **Inicie o servidor front-end:**
```bash
cd web
npm start
```

## Endpoints da API

**Veículos**
- GET '/api/veiculos' - Lista todos os veículos