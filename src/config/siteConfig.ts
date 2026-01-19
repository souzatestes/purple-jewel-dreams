/**
 * ═══════════════════════════════════════════════════════════════
 * 🎨 CONFIGURAÇÃO DO SITE - EDITE AQUI PARA ALTERAR O CONTEÚDO
 * ═══════════════════════════════════════════════════════════════
 * 
 * Este arquivo centraliza TODO o conteúdo do site.
 * Basta editar os textos abaixo e salvar para atualizar o site.
 */

// ═══════════════════════════════════════════════════════════════
// 📱 CONTATOS E REDES SOCIAIS
// ═══════════════════════════════════════════════════════════════

export const CONTATOS = {
  whatsapp: {
    numero: "5519971154949", // Número com código do país (55) + DDD + número
    mensagem: "Olá, vim pelo site e quero conhecer mais sobre as joias",
  },
  instagram: {
    usuario: "adagioielli",
    url: "https://www.instagram.com/adagioielli/",
  },
  email: "contato@adagioielli.com.br",
};

// ═══════════════════════════════════════════════════════════════
// 🏷️ MARCA
// ═══════════════════════════════════════════════════════════════

export const MARCA = {
  nome: "ADA",
  sobrenome: "Gioielli",
  slogan: "Transformando amor em joias",
  ano: "2024",
};

// ═══════════════════════════════════════════════════════════════
// 🏠 HERO - SEÇÃO PRINCIPAL
// ═══════════════════════════════════════════════════════════════

export const HERO = {
  titulo: {
    parte1: "Sua",
    parte2: "feminilidade em",
    parte3: "joias",
  },
  subtitulo: "Semijoias delicadas que celebram sua coragem de ser quem você é. Cada peça é um lembrete diário de sua força e feminilidade.",
  botaoPrincipal: "Quero conhecer as joias",
  botaoSecundario: "Conheça Nossa História",
};

// ═══════════════════════════════════════════════════════════════
// 💜 SOBRE NÓS - MANIFESTO
// ═══════════════════════════════════════════════════════════════

export const SOBRE = {
  titulo: "Quem Somos",
  manifesto: {
    frase: "Acreditamos que o amor e o zelo têm o poder de transformar e melhorar as vidas das pessoas.",
    texto: "Queremos te encorajar a abraçar e mostrar a sua feminilidade e delicadeza sem medo. Nossas joias serão o seu lembrete diário de coragem para buscar as transformações que você busca na sua vida, sem abrir mão da sua feminilidade e delicadeza.",
  },
  valores: [
    { icone: "♥", texto: "Amor" },
    { icone: "✨", texto: "Delicadeza" },
    { icone: "💪", texto: "Coragem" },
    { icone: "🌸", texto: "Feminilidade" },
  ],
};

// ═══════════════════════════════════════════════════════════════
// 📦 CATEGORIAS
// ═══════════════════════════════════════════════════════════════

export const CATEGORIAS = [
  { nome: "Anéis", slug: "anel" },
  { nome: "Brincos", slug: "brinco" },
  { nome: "Colares", slug: "colar" },
  { nome: "Coleção Sim", slug: "colecao-sim" },
  { nome: "Especial Criança", slug: "especial-crianca" },
  { nome: "Pingentes", slug: "pingente" },
  { nome: "Pulseiras", slug: "pulseira" },
  { nome: "Religiosos", slug: "religioso" },
  { nome: "Sobre", slug: "sobre" },
];

// ═══════════════════════════════════════════════════════════════
// 🖼️ IMAGENS DE DESTAQUE POR CATEGORIA
// ═══════════════════════════════════════════════════════════════
// 
// Adicione até 10 imagens por categoria para o carrossel de destaque
// Cada imagem tem: src (caminho), alt (descrição), link (opcional)
//
// Para adicionar imagens:
// 1. Adicione a imagem na pasta src/assets/
// 2. Importe a imagem no arquivo Index.tsx e adicione ao IMAGENS
// 3. Use o nome do arquivo aqui

export const DESTAQUES_CATEGORIA: Record<string, { src: string; alt: string; link?: string }[]> = {
  "anel": [
    { src: "jewelry-ring.jpg", alt: "Anel destaque 1" },
    { src: "jewelry-ring.jpg", alt: "Anel destaque 2" },
    { src: "jewelry-ring.jpg", alt: "Anel destaque 3" },
  ],
  "brinco": [
    { src: "jewelry-earrings.jpg", alt: "Brinco destaque 1" },
    { src: "jewelry-earrings.jpg", alt: "Brinco destaque 2" },
    { src: "jewelry-earrings.jpg", alt: "Brinco destaque 3" },
  ],
  "colar": [
    { src: "jewelry-necklace.jpg", alt: "Colar destaque 1" },
    { src: "jewelry-necklace.jpg", alt: "Colar destaque 2" },
    { src: "jewelry-necklace.jpg", alt: "Colar destaque 3" },
  ],
  "colecao-sim": [
    { src: "jewelry-ring.jpg", alt: "Coleção Sim destaque 1" },
    { src: "jewelry-earrings.jpg", alt: "Coleção Sim destaque 2" },
    { src: "jewelry-necklace.jpg", alt: "Coleção Sim destaque 3" },
  ],
  "especial-crianca": [
    { src: "jewelry-bracelet.jpg", alt: "Infantil destaque 1" },
    { src: "jewelry-necklace.jpg", alt: "Infantil destaque 2" },
  ],
  "pingente": [
    { src: "jewelry-necklace.jpg", alt: "Pingente destaque 1" },
    { src: "jewelry-earrings.jpg", alt: "Pingente destaque 2" },
  ],
  "pulseira": [
    { src: "jewelry-bracelet.jpg", alt: "Pulseira destaque 1" },
    { src: "jewelry-bracelet.jpg", alt: "Pulseira destaque 2" },
  ],
  "religioso": [
    { src: "jewelry-necklace.jpg", alt: "Religioso destaque 1" },
    { src: "jewelry-earrings.jpg", alt: "Religioso destaque 2" },
  ],
  "sobre": [],
};

// ═══════════════════════════════════════════════════════════════
// 💎 PRODUTOS
// ═══════════════════════════════════════════════════════════════
// 
// Para adicionar um produto:
// 1. Adicione a imagem na pasta src/assets/
// 2. Importe a imagem no arquivo src/pages/Index.tsx
// 3. Adicione o produto na lista abaixo
//
// Exemplo:
// { nome: "Nome da Joia", imagem: "jewelry-necklace.jpg", preco: "R$ 150,00", categoria: "colares" }
// 
// A categoria deve ser o "slug" de uma das categorias acima

export const PRODUTOS = [
  { nome: "Colar Delicato", imagem: "jewelry-necklace.jpg", preco: "Sob consulta", categoria: "colares" },
  { nome: "Brincos Grace", imagem: "jewelry-earrings.jpg", preco: "Sob consulta", categoria: "brincos" },
  { nome: "Anel Amore", imagem: "jewelry-ring.jpg", preco: "Sob consulta", categoria: "aneis" },
  { nome: "Pulseira Bella", imagem: "jewelry-bracelet.jpg", preco: "Sob consulta", categoria: "pulseiras" },
  { nome: "Colar Bambina", imagem: "jewelry-necklace.jpg", preco: "Sob consulta", categoria: "infantil" },
  { nome: "Pingente Fé", imagem: "jewelry-earrings.jpg", preco: "Sob consulta", categoria: "religiosas" },
];

// ═══════════════════════════════════════════════════════════════
// 🔗 MENU DE NAVEGAÇÃO
// ═══════════════════════════════════════════════════════════════

export const MENU = [
  { texto: "Início", link: "#inicio" },
  { texto: "Quem Somos", link: "#sobre" },
  { texto: "Categorias", link: "#categorias" },
  { texto: "Joias", link: "#joias" },
  { texto: "Contato", link: "#contato" },
];

// ═══════════════════════════════════════════════════════════════
// 📞 SEÇÃO DE CONTATO
// ═══════════════════════════════════════════════════════════════

export const CONTATO_SECAO = {
  titulo: "Fale Conosco",
  subtitulo: "Estamos prontas para te ajudar a encontrar a joia perfeita",
  descricao: "Entre em contato pelo canal que preferir. Respondemos rapidamente!",
  botao: "Iniciar conversa no WhatsApp",
};

// ═══════════════════════════════════════════════════════════════
// 🛠️ FUNÇÕES AUXILIARES (NÃO EDITAR)
// ═══════════════════════════════════════════════════════════════

export const getWhatsAppUrl = (mensagemCustomizada?: string) => {
  const mensagem = mensagemCustomizada || CONTATOS.whatsapp.mensagem;
  return `https://api.whatsapp.com/send?phone=${CONTATOS.whatsapp.numero}&text=${encodeURIComponent(mensagem)}`;
};

export const getCategoryBySlug = (slug: string) => {
  return CATEGORIAS.find(c => c.slug === slug);
};
