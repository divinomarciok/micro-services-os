# Sistema de Ordem de Serviço - Arquitetura de Microserviços

Este projeto é composto por múltiplos microserviços, cada um responsável por uma parte do domínio do sistema de Ordem de Serviço. Os serviços são independentes e se comunicam via API REST.

## Serviços Disponíveis

- **service_tecnico_cliente**: Gerencia técnicos e clientes.
- **service_produtos_servicos**: Gerencia produtos e serviços.
- **service_os**: Gerencia ordens de serviço.
- **service_faturamento_nota**: Gerencia notas fiscais.

## Como Rodar o Projeto

Cada serviço é um projeto Node.js independente. Para rodar o sistema completo, siga os passos abaixo para cada pasta de serviço:

### 1. Instale as dependências

```bash
npm install
```

### 2. Configure o arquivo `.env`

Cada serviço possui um arquivo `.env` com as configurações de banco de dados e porta. Ajuste conforme necessário.

### 3. Rode as migrations (se necessário)

Se o serviço utilizar migrations, rode:

```bash
npm run typeorm migration:run
```

### 4. Inicie o serviço

Para rodar em modo desenvolvimento:

```bash
npm run dev
```

Ou para rodar normalmente:

```bash
npm start
```

Repita o processo em cada pasta de serviço para subir todos os microserviços.

## Testando as APIs

Cada serviço possui uma collection Postman na raiz do projeto para facilitar os testes das rotas.

## Observações

- Certifique-se de que cada serviço está rodando em uma porta diferente (ajuste a variável `PORT` no `.env` de cada serviço).
- Os bancos de dados devem estar criados e acessíveis conforme as configurações dos arquivos `.env`.

---

Desenvolvido para fins acadêmicos - Arquitetura de Software - 2025
