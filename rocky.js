//Função abrir Menu Mobile

const btnMobile = document.getElementById('btnMobile')


function toggleMenu() {
	const nav = document.getElementById('nav')
	nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)


// Fechar Menu Mobile

const fecharMenu = document.getElementById('fecharMenu')
const homeMobile = document.getElementById('homeMobile')
const sobreMobile = document.getElementById('sobreMobile')
const servicoMobile = document.getElementById('servicosMobile')
const diferenciaisMobile = document.getElementById('diferenciaisMobile')
const contatoMobile = document.getElementById('contatoMobile')

fecharMenu.addEventListener('click', toggleMenu)
homeMobile.addEventListener('click', toggleMenu)
sobreMobile.addEventListener('click', toggleMenu)
servicoMobile.addEventListener('click', toggleMenu)
diferenciaisMobile.addEventListener('click', toggleMenu)
contatoMobile.addEventListener('click', toggleMenu)


// Função de rolagem do Scroll

const menuItens = document.querySelectorAll('#menu a[href^="#"]')

menuItens.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick)
}
)


// Função Faz referencia entre Href e o Item

function getScrollToByHref(element) {
	const id = element.getAttribute('href')
	return document.querySelector(id).offsetTop
}

// Função para manipular o click

function scrollToIdOnClick(event) {
	event.preventDefault()
	const to = getScrollToByHref(event.target) - 150

	scrollToPosition(to)
	
}

// Função para rolar o scroll suave

function scrollToPosition(to) {
	window.scroll({
		top: to,
		behavior: "smooth",
	})
}



// Função de rolagem do Scroll

const menuItensMobile = document.querySelectorAll('#opsMenu a[href^="#"]')

menuItensMobile.forEach(itemMobile => {
	itemMobile.addEventListener('click', scrollToIdOnClickMobile)
}
)


// Função Faz referencia entre Href e o Item

function getScrollToByHrefMoblile(elementMobile) {
	const idMobile = elementMobile.getAttribute('href')
	return document.querySelector(idMobile).offsetTop
}

// Função para manipular o click

function scrollToIdOnClickMobile(eventMobile) {
	eventMobile.preventDefault()
	const toMobile = getScrollToByHref(event.target) - 150

	scrollToPosition(toMobile)
	
}

// Função para rolar o scroll suave

function scrollToPositionMobile(toMobile) {
	window.scroll({
		top: toMobile,
		behavior: "smooth",
	})
}


// Função salvar dados das mensagen

class Mensagens {
	constructor(nome, email, investimento, mensagem) {
		this.nome = nome
		this.email = email
		this.investimento = investimento
		this.mensagem = mensagem
	}
}

function registrarMensagem() {
	let nome = document.getElementById('nome')
	let email = document.getElementById('email')
	let investimento = document.getElementById('investimento')
	let mensagem = document.getElementById('textMensagem')


	let mensagens = new Mensagens(
		nome.value,
		email.value,
		investimento.value,
		mensagem.value
	)

	console.log(mensagens)
}