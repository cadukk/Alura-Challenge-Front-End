const areaDoCodigo = document.querySelector('.textoEditor')
const linguagem = document.querySelector('.selectLinguagens')
const botao = document.querySelector('.highlightButton')

function mudaLinguagem() {
  const codigo = areaDoCodigo.querySelector('code')
  areaDoCodigo.innerHTML = `<pre><code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="editor"></code></pre>`
  areaDoCodigo.firstChild.innerText = codigo.innerText
}

linguagem.addEventListener('change', () => {
  mudaLinguagem()
})

botao.addEventListener('click', () => {
  const codigo = areaDoCodigo.querySelector('code')
  hljs.highlightBlock(codigo)
})