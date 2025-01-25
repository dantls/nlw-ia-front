# upload.ai

**upload.ai** é uma aplicação web que utiliza Inteligência Artificial para gerar títulos, descrições e outros conteúdos para vídeos. Ela permite que você envie prompts para o modelo GPT e utilize o conteúdo de um vídeo como variável no processo de criação, tudo de maneira intuitiva e fácil.

## Funcionalidades

- **Envio de prompt**: Permite inserir um prompt para a IA gerar resultados, como título ou descrição para vídeos do YouTube.
- **Integração com vídeos**: Use a variável `{transcription}` no prompt para incluir o conteúdo do vídeo selecionado.
- **Personalização do modelo**: Escolha entre diferentes modelos de IA para gerar resultados.
- **Temperatura ajustável**: Controle o nível de criatividade da IA através de um slider de temperatura.
- **Interface intuitiva**: Layout responsivo e fácil de usar, com uma área dedicada para exibir o resultado da IA.

## Tecnologias Usadas

- **React**: Biblioteca JavaScript para construção da interface do usuário.
- **Tailwind CSS**: Framework de CSS para estilo e layout rápidos e responsivos.
- **TypeScript**: Para garantir a segurança de tipos e melhorar a qualidade do código.
- **OpenAI API**: Usada para gerar resultados com base em IA (como GPT-3.5).
  
## Como Rodar Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/your-username/upload.ai.git
cd upload.ai
2. Instale as dependências
bash
Copiar
npm install
3. Configuração da API (caso use OpenAI ou outra API)
Adicione suas chaves de API no arquivo de configuração. O exemplo abaixo é para o OpenAI:

Crie um arquivo .env na raiz do projeto e insira a chave da API:
bash
Copiar
OPENAI_API_KEY=your-api-key-here
4. Execute a aplicação
bash
Copiar
npm run dev
Agora, a aplicação estará rodando em http://localhost:3000.

Estrutura do Projeto
src/: Contém o código-fonte principal da aplicação.
components/: Componentes reutilizáveis (como botões, seletores, etc.).
pages/: Contém as páginas principais do site, incluindo a home page.
utils/: Funções auxiliares, como a chamada à API da OpenAI.
Contribuindo
Se você quiser contribuir com melhorias, correções ou novas funcionalidades, siga os passos abaixo:

Faça um fork do repositório.
Crie uma branch para suas mudanças (git checkout -b feature/nova-funcionalidade).
Faça suas alterações e commit (git commit -am 'Adiciona nova funcionalidade').
Faça push para a branch (git push origin feature/nova-funcionalidade).
Abra um Pull Request.
Licença
Esse projeto é licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

Desenvolvedor
Desenvolvido por Danilo Gomes ⚙️🛠️
