function carregarTabela() {
  const container = document.getElementById('tabela');

  container.innerHTML = '';

  elementos.forEach(elem => {
    const div = document.createElement('div');
    div.className = 'elemento';
    div.innerHTML = `<strong>${elem.simbolo}</strong><br>${elem.numeroAtomico}`;

    if (elem.linha && elem.coluna) {
      div.style.gridRow = elem.linha;
      div.style.gridColumn = elem.coluna;
    }

    div.onclick = () => mostrarInfo(elem);

    container.appendChild(div);
  });
}

function mostrarInfo(elem) {
  const info = document.getElementById('info');
  info.innerHTML = `
    <h2>${elem.nome} (${elem.simbolo})</h2>
    <p><strong>Número atômico:</strong> ${elem.numeroAtomico}</p>
    <p><strong>Massa atômica:</strong> ${elem.massaAtomica}</p>
    <p><strong>Grupo:</strong> ${elem.grupo}</p>
    <p><strong>Estado padrão:</strong> ${elem.estadoPadrao}</p>
    <p><strong>Configuração eletrônica:</strong> ${elem.configuracaoEletronica}</p>
    <p><strong>Eletronegatividade:</strong> ${elem.eletronegatividade}</p>
    <p><strong>Tipo de ligação:</strong> ${elem.tipoDeLigacao}</p>
    <p><strong>Ponto de ebulição:</strong> ${elem.pontoDeEbulicao} K</p>
    <p><strong>Ponto de fusão:</strong> ${elem.pontoDeFusao} K</p>
    <p><strong>Raio atômico:</strong> ${elem.raioAtomico} pm</p>
    <p><strong>Descoberto em:</strong> ${elem.anoDeDescoberta}</p>
  `;
  info.style.display = 'block';
}

window.onload = carregarTabela;

function getClasseGrupo(grupo) {
  grupo = grupo.toLowerCase();

  if (grupo.includes('não metal')) return 'nao-metal';
  if (grupo.includes('gases nobres')) return 'gases-nobres';
  if (grupo.includes('alcalino') && !grupo.includes('terroso')) return 'metais-alcalinos';
  if (grupo.includes('alcalino-terroso')) return 'metais-alcalino-terrosos';
  if (grupo.includes('transição')) return 'metais-de-transicao';
  if (grupo.includes('metalóide') || grupo.includes('metaloide')) return 'metaloides';
  if (grupo.includes('halogênio') || grupo.includes('halogenio')) return 'halogenios';
  if (grupo.includes('lantanídeos') || grupo.includes('lantanideos')) return 'lantanideos';
  if (grupo.includes('actinídeos') || grupo.includes('actinideos')) return 'actinideos';

  return ''; // classe padrão (sem cor)
}

function carregarTabela() {
  const container = document.getElementById('tabela');
  container.innerHTML = '';

  elementos.forEach(elem => {
    const div = document.createElement('div');
    div.className = 'elemento';

    const classeGrupo = getClasseGrupo(elem.grupo || '');
    if (classeGrupo) div.classList.add(classeGrupo);

    div.innerHTML = `<strong>${elem.simbolo}</strong><br>${elem.numeroAtomico}`;

    if (elem.linha && elem.coluna) {
      div.style.gridRow = elem.linha;
      div.style.gridColumn = elem.coluna;
    }

    div.onclick = () => mostrarInfo(elem);

    container.appendChild(div);
  });
}

