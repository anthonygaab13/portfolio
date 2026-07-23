# Portfólio — Anthony Gabriel

Site pessoal (Next.js + Tailwind), bilíngue PT/EN, publicado na Vercel.

Este README existe pra você conseguir editar textos, foto e experiências **sem precisar mexer em lógica de componente** — só em arquivos de conteúdo simples. Todo o código-fonte também está comentado explicando o que cada arquivo faz.

## Como rodar o site no seu computador

```bash
npm install       # só na primeira vez, ou quando adicionar uma dependência nova
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) — o site recarrega sozinho a cada alteração salva.

Antes de publicar, sempre rode:

```bash
npm run build   # garante que não quebrou nada
npm run lint    # garante que o código está limpo
```

## Onde editar cada coisa

Textos do site (bio, experiências, formação, skills, projetos etc.) ficam **separados** do código visual, em `src/content/`:

| O que você quer mudar | Onde mexer |
| --- | --- |
| Nome, cargo, frase de impacto, resumo, lema (Hero) | `src/content/pt/profile.ts` (e `src/content/en/profile.ts` pra versão em inglês) |
| Email, telefone, LinkedIn, GitHub | `src/content/shared/profile-meta.ts` (campo `contactBase` — vale pros dois idiomas) |
| Foto de perfil | Substitua o arquivo `public/images/avatar.jpg` (mesmo nome) |
| Currículo em PDF | Coloque o arquivo em `public/cv/` com o nome referenciado em `cvUrl` (`profile.ts`) |
| Experiências profissionais | Empresa/datas/stack em `src/content/shared/profile-meta.ts` (`experienceMeta`); cargo/bullets em `src/content/pt/experience.ts` e `src/content/en/experience.ts` |
| Formação acadêmica | Instituição/datas em `profile-meta.ts` (`educationMeta`); curso em `src/content/pt/education.ts` e `en/education.ts` |
| Competências (skills) e idiomas falados | `src/content/pt/skills.ts` e `src/content/en/skills.ts` |
| Cards de "Diferenciais" | `src/content/pt/differentials.ts` e `src/content/en/differentials.ts` |
| Projetos (seção "Projetos", hoje vazia) | Ver passo a passo dentro de `src/content/pt/projects.ts` |
| Textos fixos de interface (menu, botões, "Atual", mensagens) | `src/lib/i18n.ts` (objeto `ui`) |

Cada um desses arquivos tem comentários no topo explicando exatamente o que ele controla e como adicionar itens novos (ex: um emprego novo, um projeto novo).

**Regra geral:** todo texto/data/link não-visual está em `src/content/`. Os arquivos dentro de `src/components/` só decidem *como* esse conteúdo aparece na tela (cores, espaçamento, layout) — normalmente você não precisa entrar neles.

**Exceção:** `src/components/ui/` são componentes gerados automaticamente pelo shadcn/ui (botão, card, badge etc.) — não são feitos pra editar na mão; se precisar mudar visual deles, é melhor pedir ajuda em vez de editar direto, pra não quebrar nada.

## Português e inglês sempre em par

Sempre que adicionar/mudar algo em `content/pt/algo.ts`, faça o mesmo em `content/en/algo.ts`. O site quebra no build se um "id" existir em um idioma e faltar no outro (isso é proposital — evita esquecer de traduzir).

## Publicar as alterações

```bash
git add -A
git commit -m "Descreve o que mudou"
git push
npx vercel --prod --yes
```

(O deploy automático via GitHub ainda não está conectado na Vercel — é sempre esse último comando que publica.)

O link oficial do site é **https://anthonygabriel.vercel.app**. Esse domínio não segue automaticamente os novos deploys — depois de publicar, rode:

```bash
npx vercel alias set <url-do-deployment-mostrada-no-passo-anterior> anthonygabriel.vercel.app
```

(a URL do deployment aparece na saída do comando `vercel --prod --yes` acima, no campo `"url"`).

## Stack técnica

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui · next-themes (dark/light) · i18n próprio (PT/EN, sem biblioteca externa).
