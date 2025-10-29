class Aluno {
    #nota;

    constructor(nome, nota) {
        this.nome = nome;
        this.#nota = nota;
    }

    get nota() {
        return this.#nota;
    }

    get aprovado() {
    return this.#nota >= 6;
    }
}


const alunos = [
    new Aluno('Ana', 8),
    new Aluno('Bruno', 5),
    new Aluno('Carlos', 9),
    new Aluno('Diana', 4),
    new Aluno('Eduardo', 6)
];


const filtrarAprovados = (lista = []) => 
    lista.filter(({ nota }) => nota >= 6);

const aprovados = filtrarAprovados(alunos);

console.log('✅ Alunos aprovados:', aprovados.map(a => a.nome));


const novosAlunos = [
    ...alunos,
    new Aluno('Fernanda', 10),
    new Aluno('Gustavo', 3)
];

const listarNomes = (...lista) => lista.map(a => a.nome);
console.log('📚 Todos os alunos:', listarNomes(...novosAlunos));


const mapaNotas = new Map(novosAlunos.map(a => [a.nome, a.nota]));
console.log('🗺️ Mapa de notas:', mapaNotas);

const nomesUnicos = new Set(novosAlunos.map(a => a.nome));
console.log('🔢 Nomes únicos:', [...nomesUnicos]);

const buscarAprovadosAsync = () => {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(filtrarAprovados(novosAlunos));
    }, 1000);
    });
};

(async () => {
    const resultado = await buscarAprovadosAsync();
    console.log('⏳ Resultado assíncrono:', resultado.map(a => a.nome));
})();
