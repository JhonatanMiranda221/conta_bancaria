# 🏦 Banco do Brazil com Z

Sistema bancário desenvolvido em TypeScript com foco em **Programação Orientada a Objetos (POO)**, aplicando conceitos de herança, polimorfismo e encapsulamento.

## 📋 Sobre o Projeto

Aplicação de terminal que simula operações bancárias completas, desenvolvida como projeto do **Bootcamp Fullstack JavaScript — Generation Brasil**.

## ✨ Funcionalidades

- ✅ Criar conta (Corrente ou Poupança)
- ✅ Listar todas as contas
- ✅ Buscar conta por número
- ✅ Atualizar dados da conta
- ✅ Apagar conta
- ✅ Saque
- ✅ Depósito
- ✅ Transferência entre contas

## 🏗️ Arquitetura

O projeto segue o padrão **MVC (Model-View-Controller)**:
```
src/
├── model/
│   ├── Conta.ts           # Classe abstrata base
│   ├── ContaCorrente.ts   # Herda de Conta (possui limite)
│   └── ContaPoupanca.ts   # Herda de Conta (possui aniversário)
├── controller/
│   └── ContaController.ts # Lógica de negócio e operações
├── repository/
│   └── ContaRepository.ts # Interface de repositório
└── util/
    └── Colors.ts          # Utilitário de cores no terminal
```

## 🧠 Conceitos de POO Aplicados

- **Herança** — `ContaCorrente` e `ContaPoupanca` herdam de `Conta`
- **Polimorfismo** — métodos sobrescritos nas subclasses
- **Encapsulamento** — atributos privados com getters/setters
- **Classes Abstratas** — `Conta` como contrato base
- **Interface** — `ContaRepository` define o contrato do repositório

## 🛠️ Tecnologias

- TypeScript
- Node.js
- readline-sync

## ▶️ Como Executar
```bash
# Clone o repositório
git clone https://github.com/JhonatanMiranda221/conta_bancaria

# Instale as dependências
npm install

# Execute o projeto
npm start
```

## 👨‍💻 Autor

**Jhonatan Miranda**  
Generation Brasil · jhonatanmiranda221@gmail.com  
[github.com/JhonatanMiranda221](https://github.com/JhonatanMiranda221)
