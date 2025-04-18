# Guia de Instalação do FitQuest 🚀

Este guia fornecerá instruções detalhadas para configurar seu ambiente de desenvolvimento para o FitQuest.

## 1. Pré-requisitos

Antes de começar, você precisa ter instalado em seu computador:

- [Node.js](https://nodejs.org/) (versão 14.0 ou superior)
- npm (geralmente vem com o Node.js) ou [yarn](https://yarnpkg.com/)
- Um editor de código (recomendamos [VS Code](https://code.visualstudio.com/))

## 2. Instalando o Expo CLI

O Expo CLI é a ferramenta de linha de comando que usamos para criar e gerenciar projetos Expo.

### Windows

1. Abra o PowerShell como administrador
   - Clique com o botão direito no ícone do PowerShell
   - Selecione "Executar como administrador"

2. Execute o comando:
\`\`\`bash
npm install -g expo-cli
\`\`\`

3. Verifique a instalação:
\`\`\`bash
expo --version
\`\`\`

### macOS/Linux

1. Abra o Terminal

2. Execute o comando (pode precisar de sudo):
\`\`\`bash
sudo npm install -g expo-cli
\`\`\`

3. Verifique a instalação:
\`\`\`bash
expo --version
\`\`\`

## 3. Configurando o Ambiente

### 3.1 Instalando o Expo Go no seu dispositivo móvel

1. Baixe o Expo Go:
   - [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)

2. Crie uma conta Expo em [https://expo.dev/signup](https://expo.dev/signup)

### 3.2 Clonando o Projeto

1. Clone o repositório:
\`\`\`bash
git clone https://github.com/seu-usuario/fitquest.git
\`\`\`

2. Entre na pasta do projeto:
\`\`\`bash
cd fitquest
\`\`\`

3. Instale as dependências:
\`\`\`bash
npm install
# ou
yarn install
\`\`\`

## 4. Executando o Projeto

1. Inicie o servidor de desenvolvimento:
\`\`\`bash
npm start
# ou
yarn start
\`\`\`

2. Você verá um QR Code no terminal

3. Para testar no dispositivo:
   - **Android**: Abra o Expo Go e escaneie o QR Code
   - **iOS**: Use a câmera do iPhone para escanear o QR Code

## 5. Comandos Úteis

- Iniciar o projeto:
\`\`\`bash
npm start
\`\`\`

- Iniciar em um emulador Android:
\`\`\`bash
npm run android
\`\`\`

- Iniciar em um simulador iOS:
\`\`\`bash
npm run ios
\`\`\`

- Limpar cache:
\`\`\`bash
expo start -c
\`\`\`

## 6. Solução de Problemas Comuns

### Erro: "expo : O arquivo não pode ser carregado porque a execução de scripts foi desabilitada neste sistema."

**Solução**: No PowerShell como administrador, execute:
\`\`\`bash
Set-ExecutionPolicy RemoteSigned
\`\`\`

### Erro: "EACCES: permission denied"

**Solução**: No macOS/Linux, use sudo:
\`\`\`bash
sudo npm install -g expo-cli
\`\`\`

### Erro de Porta em Uso

**Solução**: Mate o processo na porta 19000:
\`\`\`bash
# Windows
netstat -ano | findstr :19000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :19000
kill -9 <PID>
\`\`\`

## 7. Próximos Passos

Após a instalação:

1. Explore o código fonte na pasta `src/`
2. Verifique as telas em `src/screens/`
3. Teste as funcionalidades básicas
4. Configure seu ambiente de desenvolvimento (VS Code, etc.)

## 8. Recursos Adicionais

- [Documentação do Expo](https://docs.expo.dev/)
- [Documentação do React Native](https://reactnative.dev/docs/getting-started)
- [Guia de Estilo do FitQuest](./STYLE_GUIDE.md)
- [Guia de Contribuição](./CONTRIBUTING.md)

## Suporte

Se encontrar algum problema durante a instalação, entre em contato:

- Abra uma issue no GitHub
- Email: suporte@fitquest.com
- Discord: [Canal FitQuest](https://discord.gg/fitquest) 