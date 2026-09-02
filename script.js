const casas = [
    {
        id: 1,
        titulo: "Casa Moderna com Piscina",
        preco: 850000,
        quartos: 3,
        banheiros: 2,
        area: 180,
        imagem: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        titulo: "Sobrado Espaçoso em Condomínio",
        preco: 1200000,
        quartos: 4,
        banheiros: 4,
        area: 250,
        imagem: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        titulo: "Casa de Campo Aconchegante",
        preco: 450000,
        quartos: 2,
        banheiros: 1,
        area: 95,
        imagem: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        titulo: "Mansão Minimalista com Vista Panorâmica",
        preco: 2500000,
        quartos: 5,
        banheiros: 6,
        area: 420,
        imagem: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        titulo: "Casa Térrea com Amplo Quintal",
        preco: 620000,
        quartos: 3,
        banheiros: 2,
        area: 140,
        imagem: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        titulo: "Residência Contemporânea Iluminada",
        preco: 980000,
        quartos: 3,
        banheiros: 3,
        area: 210,
        imagem: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        titulo: "Chácara Familiar com Área Gourmet",
        preco: 750000,
        quartos: 4,
        banheiros: 3,
        area: 300,
        imagem: "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        titulo: "Casa Compacta e Funcional",
        preco: 380000,
        quartos: 2,
        banheiros: 1,
        area: 75,
        imagem: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
    }
];

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function renderizarCasas(lista) {
    const container = document.getElementById("lista-casas");
    container.innerHTML = "";

    if (lista.length === 0) {
        container.innerHTML = "<p style='grid-column: 1/-1; text-align: center;'>Nenhum imóvel encontrado com esses critérios.</p>";
        return;
    }

    lista.forEach(casa => {
        const card = document.createElement("div");
        card.className = "card-casa";
        card.innerHTML = `
            <img src="${casa.imagem}" alt="${casa.titulo}">
            <div class="conteudo-card">
                <h2 class="titulo-casa">${casa.titulo}</h2>
                <div class="preco-casa">${formatarMoeda(casa.preco)}</div>
                <div class="detalhes-casa">
                    <span>🛏️ ${casa.quartos} Quarto(s)</span>
                    <span>🚿 ${casa.banheiros} Banheiro(s)</span>
                    <span>📐 ${casa.area} m²</span>
                </div>
                <button class="btn-contato">Tenho Interesse</button>
            </div>
        `;
        container.appendChild(card);
    });
}

document.getElementById("campo-busca").addEventListener("input", (e) => {
    const termo = e.target.value.toLowerCase();
    const casasFiltradas = casas.filter(casa => 
        casa.titulo.toLowerCase().includes(termo)
    );
    renderizarCasas(casasFiltradas);
});

// Renderização inicial
renderizarCasas(casas);
