class Poke {
    constructor(items, classeLista) {
        this.items = items;
        this.lista = document.querySelector(classeLista);

        this.selectedPokes = []; // Lista para armazenar os índices dos carros selecionados

        this.items.forEach((item, index) => {
            this.createItem(item, index);
        });

        this.dialog = document.getElementById("compare");
        this.compareBtn = document.getElementById("compare_btn");
        this.closeBtn = document.getElementById("close_compare");

        this.compareBtn.onclick = () => this.ShowCompare();
        this.closeBtn.onclick = () => this.dialog.close();
    }

    createItem(item, index) {
        this.objetoLista = document.createElement("li");
        this.objetoLista.id = "poke-item";

        this.objetoImagem = document.createElement("img");
        this.objetoImagem.src = item.imagem;

        this.infoPokeDiv = document.createElement("div");
        this.infoPokeDiv.classList.add("poke-area");

        this.checkboxItem = document.createElement("input");
        this.checkboxItem.type = "checkbox";
        this.checkboxItem.value = index; // Guardar o índice do carro

        // Adiciona o evento de clique ao checkbox
        this.checkboxItem.onclick = (event) => this.SetCarToCompare(index, event);

        this.infoDiv = document.createElement("div");

        this.itemTitle = document.createElement("h2");
        this.itemTitle.innerText = item.titulo;

        this.pokeTipo = document.createElement("p");
        this.pokeTipo.innerText = item.tipo;

        this.infoDiv.appendChild(this.itemTitle);
        this.infoDiv.appendChild(this.pokeTipo);

        this.infoPokeDiv.appendChild(this.checkboxItem);
        this.infoPokeDiv.appendChild(this.infoDiv);

        this.objetoLista.appendChild(this.objetoImagem);
        this.objetoLista.appendChild(this.infoPokeDiv);

        this.lista.appendChild(this.objetoLista);
    }

    SetCarToCompare(index, event) {
        if (this.selectedPokes.includes(index)) {
            // Se o carro já estiver na lista, removê-lo
            this.selectedPokes = this.selectedPokes.filter(pokeIndex => pokeIndex !== index);
        } else {
            if (this.selectedPokes.length >= 2) {
                alert("Para comparação, o máximo de itens são dois.");
                event.preventDefault(); // Impede a seleção do terceiro checkbox
                return;
            }
            this.selectedPokes.push(index);
        }
    }

    ShowCompare() {
        if (this.selectedPokes.length === 2) {
            this.UpdateCompareTable();
            this.dialog.showModal();
        } else {
            alert("Para comparação, é necessário marcar dois itens");
        }
    }

    UpdateCompareTable() {
        this.poke1 = this.items[this.selectedPokes[0]];
        this.poke2 = this.items[this.selectedPokes[1]];
    
        // Atualiza imagens
        document.getElementById("imagem_0").src = this.poke1.imagem;
        document.getElementById("imagem_1").src = this.poke2.imagem;
    
        // Atualiza nome
        document.getElementById("nome_0").innerText = this.poke1.titulo;
        document.getElementById("nome_1").innerText = this.poke2.titulo;
    
        // Atualiza tipo
        document.getElementById("tipo_0").innerText = this.poke1.tipo;
        document.getElementById("tipo_1").innerText = this.poke2.tipo;
    
        // Atualiza altura
        document.getElementById("altura_0").innerText = this.poke1.altura;
        document.getElementById("altura_1").innerText = this.poke2.altura;
    
        // Atualiza peso
        document.getElementById("peso_0").innerText = this.poke1.peso;
        document.getElementById("peso_1").innerText = this.poke2.peso;
    
        // Atualiza evolução
        document.getElementById("evolução_0").innerText = this.poke1.evolucao;
        document.getElementById("evolução_1").innerText = this.poke2.evolucao;
    }
    
}

const pokemons = [
    {
        imagem: "img/th.jpg",
        titulo: "Charizard",
        tipo: "Fogo, Voador",
        altura: "1.7m",
        peso: "90.5kg",
        evolucao: "Evolui de Charmeleon"
    },
    {
        imagem: "img/mewtwo.png",
        titulo: "Mewtwo",
        tipo: "Psíquico",
        altura: "2.0m",
        peso: "122.0kg",
        evolucao: "Não evolui"
    },
    {
        imagem: "img/pikachu.png",
        titulo: "Pikachu",
        tipo: "Elétrico",
        altura: "0.4m",
        peso: "6.0kg",
        evolucao: "Evolui de Pichu e para Raichu"
    },
    {
        imagem: "img/squirtle.png",
        titulo: "Squirtle",
        tipo: "Água",
        altura: "0.5m",
        peso: "9.0kg",
        evolucao: "Evolui para Wartortle"
    },
    {
        imagem: "img/gengar.png",
        titulo: "Gengar",
        tipo: "Fantasma, Veneno",
        altura: "1.5m",
        peso: "40.5kg",
        evolucao: "Evolui de Haunter"
    }
];



new Poke(pokemons, ".pokemodels");
