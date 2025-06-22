-- Tabelas para service_tecnico_cliente
CREATE TABLE IF NOT EXISTS Cliente (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cpfCnpj VARCHAR(20) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Tecnico (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cargo VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
);

-- Tabela para service_produtos_servicos
CREATE TABLE IF NOT EXISTS ProdutoServico (
    id SERIAL PRIMARY KEY,
    codigo VARCHAR(255) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    valor DOUBLE PRECISION NOT NULL,
    tempoEstimado INT NOT NULL
);

-- Tabela para service_os
CREATE TABLE IF NOT EXISTS OS (
    id SERIAL PRIMARY KEY,
    cliente INT NOT NULL REFERENCES Cliente(id),
    produtoServico INT NOT NULL REFERENCES ProdutoServico(id),
    tecnico INT NOT NULL REFERENCES Tecnico(id),
    dataAbertura DATE NOT NULL,
    status VARCHAR(255) NOT NULL,
    descricaoProblema VARCHAR(255) NOT NULL
);

-- Tabela para service_faturamento_nota
CREATE TABLE IF NOT EXISTS NotaFiscal (
    id SERIAL PRIMARY KEY,
    dataEmissao DATE NOT NULL,
    ordemDeServico INT NOT NULL REFERENCES OS(id),
    valorTotal DOUBLE PRECISION NOT NULL
);
