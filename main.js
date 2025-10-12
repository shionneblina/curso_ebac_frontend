async function carregarDados() {
    const usuario = 'shionneblina';
    const url = `https://api.github.com/users/${usuario}`;

    try {
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`Erro ao buscar dados: ${resposta.status}`);
        }

        const dados = await resposta.json();

        document.querySelector('.profile-avatar').src = dados.avatar_url;
        document.querySelector('.profile-name').textContent = dados.name || 'Nome não disponível';
        document.querySelector('.profile-username').textContent = `@${dados.login}`;
        document.getElementById('repos').textContent = dados.public_repos;
        document.getElementById('followers').textContent = dados.followers;
        document.getElementById('following').textContent = dados.following;
        document.querySelector('.profile-link').href = dados.html_url;

    } catch (erro) {
        console.error('Erro ao carregar dados:', erro);
        document.querySelector('.container').innerHTML = `
            <p style="color:red; text-align:center;">Não foi possível carregar os dados do GitHub</p>
        `;
    }
}

carregarDados();

