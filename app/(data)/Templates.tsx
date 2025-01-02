export default [
    {
        name: 'Título do Blog',
        desc: 'Uma ferramenta de IA que gera títulos de blog com base nas informações do seu blog.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt: 'Forneça 5 ideias de títulos para blogs em formato de lista com base no nicho e no esboço fornecidos. Apresente o resultado no formato de editor de texto rico.',
        slug: 'gerar-titulo-blog',
        form: [
            {
                label: 'Insira o nicho do seu blog',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Insira o esboço do blog',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Conteúdo do Blog',
        desc: 'Uma ferramenta de IA que serve como seu assistente pessoal para escrever conteúdo de blog em seu idioma escolhido.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
        slug: 'geracao-conteudo-blog',
        aiPrompt: 'Gere o conteúdo do blog com base no tópico e no esboço, apresentado no formato de editor de texto rico.',
        form: [
            {
                label: 'Insira o tópico do seu blog',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Insira o esboço do blog aqui',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Ideias de Tópicos para Blog',
        desc: 'Uma ferramenta de IA que gera títulos criativos e virais para posts de blog no idioma de sua escolha.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
        slug: 'ideias-topicos-blog',
        aiPrompt: 'Gere as 5 principais ideias de tópicos para blogs em formato de lista (sem descrição) com base no nicho, apresentado no formato de editor de texto rico.',
        form: [
            {
                label: 'Insira o seu nicho',
                field: 'input',
                name: 'niche',
                required: true
            }
        ]
    },
    {
        name: 'Título SEO para YouTube',
        desc: 'Uma ferramenta de IA que cria títulos otimizados e atrativos para seus vídeos no YouTube.',
        category: 'Ferramentas para YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
        slug: 'titulo-seo-youtube',
        aiPrompt: 'Forneça as 5 melhores ideias de títulos otimizados para SEO com base em palavras-chave e esboço, apresentados no formato de tags HTML.',
        form: [
            {
                label: 'Insira as palavras-chave do tópico do seu vídeo no YouTube',
                field: 'input',
                name: 'keywords',
                required: true
            },
            {
                label: 'Insira o esboço da descrição do YouTube aqui',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Descrição para YouTube',
        desc: 'Uma ferramenta de IA que gera descrições curtas e cativantes para vídeos do YouTube com emojis.',
        category: 'Ferramentas para YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
        slug: 'descricao-youtube',
        aiPrompt: 'Gere uma descrição para o YouTube com emojis em 4-5 linhas com base no tópico e no esboço fornecidos, apresentada no formato de editor de texto rico.',
        form: [
            {
                label: 'Insira o tópico/título do seu vídeo',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Insira o esboço do YouTube aqui',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Tags para YouTube',
        desc: 'Uma ferramenta de IA que ajuda a gerar tags para seus vídeos no YouTube.',
        category: 'Ferramentas para YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
        slug: 'tags-youtube',
        aiPrompt: 'Gere 10 tags para YouTube em formato de lista com base no título e no esboço fornecidos, apresentado no formato de editor de texto rico.',
        form: [
            {
                label: 'Insira o título do seu vídeo no YouTube',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Insira o esboço do vídeo no YouTube aqui (Opcional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Reescrever Artigo (Livre de Plágio)',
        desc: 'Use esta ferramenta para reescrever artigos ou postagens de blog existentes, tornando-os livres de plágio e capazes de passar em detectores de IA.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
        category: 'Ferramenta de Reescrita',
        slug: 'reescrever-artigo',
        aiPrompt: 'Reescreva o artigo fornecido sem plágio no formato de editor de texto rico.',
        form: [
            {
                label: '🤖 Forneça seu artigo/postagem ou outro conteúdo para reescrever.',
                field: 'textarea',
                name: 'article',
                required: true
            }
        ]
    },
    {
        name: 'Aprimorador de Texto',
        desc: 'Esta ferramenta prática refina sua escrita, eliminando erros e redundâncias para um resultado claro e legível. Também oferece uma análise abrangente do tom e sugere melhores escolhas de palavras.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
        category: 'Assistente de Escrita',
        slug: 'aprimorar-texto',
        aiPrompt: 'Dado o textoParaMelhorar, reescreva o texto sem erros gramaticais e de forma profissional no formato de editor de texto rico.',
        form: [
            {
                label: 'Insira o texto que deseja reescrever ou melhorar.',
                field: 'textarea',
                name: 'textToImprove'
            }
        ]
    },
    {
        name: 'Adicionar Emojis ao Texto',
        desc: 'Uma ferramenta de IA que serve como escritor pessoal de títulos de postagens de blog, gerando títulos atraentes e virais no idioma escolhido.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
        category: 'Blog',
        slug: 'adicionar-emojis-ao-texto',
        aiPrompt: 'Adicione emojis ao texto fornecido e reescreva no formato de editor de texto rico.',
        form: [
            {
                label: 'Insira seu texto para adicionar emojis.',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ]
    },
    {
        name: 'Gerador de Postagem para Instagram',
        desc: 'Uma ferramenta de IA que serve como criador de postagens para Instagram, gerando conteúdos envolventes e virais.',
        icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
        category: 'Blog',
        slug: 'gerador-de-post-instagram',
        aiPrompt: 'Gere 3 postagens para Instagram com base nas palavras-chave fornecidas e entregue no formato de editor de texto rico.',
        form: [
            {
                label: 'Insira as palavras-chave para sua postagem.',
                field: 'input',
                name: 'keywords',
                required: true
            }
        ]
    },
    {
        name: 'Gerador de Hashtags para Instagram',
        desc: 'Uma ferramenta de IA que gera hashtags atrativas e relevantes para Instagram com base nas palavras-chave fornecidas.',
        icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
        category: 'Blog',
        slug: 'gerador-de-hashtags-instagram',
        aiPrompt: 'Gere 15 hashtags para Instagram com base nas palavras-chave fornecidas e entregue no formato de editor de texto rico.',
        form: [
            {
                label: 'Insira palavras-chave para suas hashtags no Instagram.',
                field: 'input',
                name: 'keywords',
                required: true
            }
        ]
    },
    {
        name: 'Ideias para Post/Reel no Instagram',
        desc: 'Uma ferramenta de IA que gera ideias novas e tendências para postagens no Instagram com base no seu nicho.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
        category: 'Instagram',
        slug: 'gerador-ideias-post-instagram',
        aiPrompt: 'Gere de 5 a 10 ideias para Instagram com base no nicho e tendências atuais e entregue no formato de editor de texto rico.',
        form: [
            {
                label: 'Insira palavras-chave ou nicho para ideias no Instagram.',
                field: 'input',
                name: 'keywords',
                required: true
            }
        ]
    },
    {
        name: 'Verificador Gramatical em Inglês',
        desc: 'Modelo de IA para corrigir a gramática do inglês ao fornecer o texto.',
        icon: 'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
        category: 'Inglês',
        slug: 'verificador-gramatica-ingles',
        aiPrompt: 'Reescreva o texto fornecido corrigindo a gramática e entregue no formato de editor de texto rico.',
        form: [
            {
                label: 'Insira o texto para corrigir a gramática.',
                field: 'input',
                name: 'inputText',
                required: true
            }
        ]
    },
    {
        name: 'Escrever Código',
        desc: 'Modelo de IA para gerar código de programação em qualquer linguagem.',
        icon: 'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
        category: 'Codificação',
        slug: 'escrever-codigo',
        aiPrompt: 'Com base na descrição do código fornecida, escreva o código e entregue no formato de editor de texto rico em bloco de código.',
        form: [
            {
                label: 'Insira a descrição do código desejado, incluindo a linguagem de programação.',
                field: 'textarea',
                name: 'codeDesscripton',
                required: true
            }
        ]
    },
    {
        name: 'Explicar Código',
        desc: 'Modelo de IA para explicar código de programação em qualquer linguagem.',
        icon: 'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
        category: 'Codificação',
        slug: 'explicar-codigo',
        aiPrompt: 'Com base na descrição do código fornecida, explique o código linha por linha e entregue no formato de editor de texto rico em bloco de código.',
        form: [
            {
                label: 'Insira o código que deseja entender.',
                field: 'textarea',
                name: 'codeDesscripton',
                required: true
            }
        ]
    },
    {
        name: 'Detector de Erros de Código',
        desc: 'Esta ferramenta analisa entradas, como mensagens de erro e trechos de código, para identificar e corrigir erros, oferecendo soluções detalhadas e alternativas de forma acessível.',
        icon: 'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
        category: 'Detector de Erros de Código',
        slug: 'detector-erros-codigo',
        aiPrompt: 'Com base no código fornecido, identifique erros e forneça soluções, entregando no formato de editor de texto rico em bloco de código.',
        form: [
            {
                label: 'Insira o código que deseja testar para erros.',
                field: 'textarea',
                name: 'codeInput',
                required: true
            }
        ]
    },
    {
        name: 'Gerador de Slogan',
        desc: 'Com dificuldade para encontrar o slogan perfeito para sua marca? Deixe nossa ferramenta de IA ajudá-lo a criar um slogan que se destaque.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
        category: 'Marketing',
        slug: 'gerador-de-slogan',
        aiPrompt: 'Com base no nome do produto e descrição fornecida, gere de 5 a 10 slogans atrativos para o produto ou negócio e forneça o resultado no formato de editor de texto avançado.',
        form: [
            {
                label: 'Nome do Produto/Marca',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'O que você está vendendo/Marketing',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ]
    },
    {
        name: 'Descrição de Produto',
        desc: 'Seu especialista em SEO com inteligência artificial, criando descrições de produtos cativantes e otimizadas para impulsionar suas vendas online.',
        icon: 'https://cdn-icons-png.flaticon.com/128/679/679922.png',
        category: 'Marketing',
        slug: 'descricao-de-produto',
        aiPrompt: 'Com base no nome do produto e detalhes fornecidos, gere uma breve descrição otimizada para negócios de e-commerce e forneça o resultado no formato de editor de texto avançado.',
        form: [
            {
                label: 'Nome do Produto',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'Detalhes do Produto',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ]
    }

]
