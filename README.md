# Tabela — macros, água e corrida

App web (mobile first) para registrar proteínas, carboidratos, gorduras e água,
cadastrar alimentos com favoritos, ver gráficos e registrar treinos de corrida com metas.

Sem build: é HTML/CSS/JS puro. Salva no Firebase Realtime Database, sem login, e guarda
uma cópia no aparelho para abrir mesmo sem internet.

## Arquivos
| Arquivo | Para quê |
|---|---|
| `index.html` | O app inteiro |
| `config.js` | Configuração do Firebase (já preenchida) e a chave do seu espaço de dados |
| `database.rules.json` | Regras do Realtime Database (cole no console) |
| `manifest.webmanifest`, `icon-*.png`, `apple-touch-icon.png` | Instalar na tela inicial do celular |

## 1. Firebase Realtime Database (sem login)
1. Console do Firebase → **Realtime Database** → aba **Regras**.
2. Apague tudo, cole o conteúdo de `database.rules.json` e clique em **Publicar**.
   Essas regras liberam leitura e escrita só no caminho `/tabela/<sua chave>` e bloqueiam o resto do banco.
3. Pronto: não precisa ativar Authentication nem autorizar domínio.

> Como não tem login, qualquer pessoa que abrir o seu site consegue ver e editar os dados
> (a chave fica dentro do `config.js`, que é público). Não compartilhe o link.
> Se um dia quiser trancar, dá para colocar uma senha de acesso ou login.

## 2. GitHub → Vercel
1. Crie um repositório no GitHub e envie **todos os arquivos desta pasta** (no celular:
   *Add file → Upload files*, selecione os arquivos e *Commit*).
2. Na Vercel: **Add New → Project → Import** o repositório.
   Framework Preset: **Other**. Build Command: vazio. Output Directory: vazio (raiz). **Deploy**.
3. A cada commit no GitHub a Vercel publica sozinha.

## 3. Instalar no celular
Abra o site → menu do navegador → **Adicionar à tela inicial**. Abre em tela cheia como app.

## Estrutura dos dados (Realtime Database)
```
tabela/<chave>/meta/profile        metas diárias, gasto padrão, meta semanal de corrida, peso
tabela/<chave>/foods/<id>          nome, p, c, f (por 100 g), kcal opcional, porção, favorito
tabela/<chave>/days/<AAAA-MM-DD>   entries (refeições), water (ml), weight (kg), burned (kcal)
tabela/<chave>/runs/<id>           data, tipo, duração (s), distância (km), esforço, FC, notas
tabela/<chave>/goals/<id>          tipo (dist|time|pace|week|custom), alvo, batida em
```

## Dicas
- Calorias são calculadas por 4/4/9 kcal por grama, a não ser que você informe as kcal da embalagem.
- Metas de corrida são marcadas como batidas automaticamente quando um treino registrado
  depois da criação da meta alcança o valor.
- Perfil → **Baixar backup** gera um .json com tudo; **Restaurar backup** importa de volta.
- Trocar a chave em `config.js` (e nas regras) começa um espaço de dados novo, vazio.
