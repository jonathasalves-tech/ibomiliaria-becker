const casas = [
    {
        id: 1,
        titulo: "Casa Moderna com Piscina",
        preco: "R$ 850.000",
         quartos: 3,
        banheiros: 2,
        area: 180,
        imagem: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        titulo: "Sobrado Espaçoso em Condomínio",
        preco: "R$ 1.200.000",
        quartos: 4,
        banheiros: 4,
        area: 250,
        imagem: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        titulo: "Casa de Campo Aconchegante",
        preco: "R$ 450.000",
        quartos: 2,
        banheiros: 1,
        area: 95,
        imagem: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80"
    }
];

function renderizarCasas(lista) {
    const container = document.getElementById("lista-casas");
    container.innerHTML = "";

    lista.forEach(casa => {
        const card = document.createElement("div");
        card.className = "card-casa";
        card.innerHTML = `
            <img src="${casa.imagem}" alt="${casa.titulo}">
            <div class="conteudo-card">
                <h2 class="titulo-casa">${casa.titulo}</h2>
                <div class="preco-casa">${casa.preco}</div>
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

// Inicializa a renderização
renderizarCasas(casas);
