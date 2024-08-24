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

2. **Configure as variáveis de ambiente:**

**Inicie o servidor back-end:**
```bash
cd server
npm start
```

**Inicie o servidor front-end:**
```bash
cd web
npm start
```

## Endpoints da API

**Veículos**
- GET `/veiculos` - Lista todos os veículos
- POST `/veiculos` - Criar um novo veículo
- PUT `/veiculos/:id` - Atualiza um veículo extistente
- DELETE `/veiculos/:id` - Remove um veículo

**Motoristas**
- GET `/motoristas` - Lista todos os motoristas
- POST `/motoristas` - Criar um novo motorista
- PUT `/motoristas/:id` - Atualiza um motorista extistente
- DELETE `/motoristas/:id` - Remove um motorista

**Rotas**
- GET `/rotas` - Lista todos os rotas
- POST `/rotas` - Criar um novo rota
- PUT `/rotas/:id` - Atualiza um rota extistente
- DELETE `/rotas/:id` - Remove um rota

**Entregas**
- GET `/entregas` - Lista todos os entregas
- POST `/entregas` - Criar um novo entrega
- PUT `/entregas/:id` - Atualiza um entrega extistente
- DELETE `/entregas/:id` - Remove um entrega

## Contato

- Autor: Wagner Santos de Jesus
- Email: wagner.jesus98@outlook.com
- LinkedIn: https://www.linkedin.com/in/wagnersjesus/