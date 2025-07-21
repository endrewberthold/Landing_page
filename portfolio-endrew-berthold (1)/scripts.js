// Navegação suave
function navegarPara(secao) {
  document.querySelector(secao).scrollIntoView({
    behavior: "smooth",
  })
}

// Gerenciamento de modais
function abrirModal(idModal) {
  const modal = document.getElementById(idModal)
  modal.style.display = "block"
  document.body.style.overflow = "hidden"

  // Adiciona animação de entrada
  modal.style.opacity = "0"
  setTimeout(() => {
    modal.style.opacity = "1"
    modal.style.transition = "opacity 0.3s ease"
  }, 10)
}

function fecharModal(idModal) {
  const modal = document.getElementById(idModal)
  modal.style.opacity = "0"

  setTimeout(() => {
    modal.style.display = "none"
    document.body.style.overflow = "auto"
  }, 300)
}

// Fechar modal clicando fora do conteúdo
window.onclick = (evento) => {
  const modais = document.querySelectorAll(".modal-projeto")
  modais.forEach((modal) => {
    if (evento.target === modal) {
      const idModal = modal.id
      fecharModal(idModal)
    }
  })
}

// Fechar modal com tecla ESC
document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape") {
    const modaisAbertos = document.querySelectorAll('.modal-projeto[style*="block"]')
    modaisAbertos.forEach((modal) => {
      fecharModal(modal.id)
    })
  }
})

// Envio do formulário de contato
function enviarFormulario(evento) {
  evento.preventDefault()

  const nome = document.getElementById("nome").value
  const email = document.getElementById("email").value
  const mensagem = document.getElementById("mensagem").value

  // Simulação de envio
  const botaoEnviar = document.querySelector(".botao-enviar")
  const textoOriginal = botaoEnviar.textContent

  botaoEnviar.textContent = "Enviando..."
  botaoEnviar.disabled = true

  setTimeout(() => {
    alert(`Obrigado ${nome}! Sua mensagem foi enviada com sucesso. Retornarei em breve.`)

    // Limpar formulário
    document.getElementById("nome").value = ""
    document.getElementById("email").value = ""
    document.getElementById("mensagem").value = ""

    botaoEnviar.textContent = textoOriginal
    botaoEnviar.disabled = false
  }, 2000)
}

// Navegação ativa no menu
function atualizarMenuAtivo() {
  const secoes = document.querySelectorAll("section")
  const linksMenu = document.querySelectorAll(".link-navegacao")

  window.addEventListener("scroll", () => {
    let secaoAtual = ""

    secoes.forEach((secao) => {
      const topoSecao = secao.offsetTop
      const alturaSecao = secao.clientHeight

      if (window.pageYOffset >= topoSecao - 200) {
        secaoAtual = secao.getAttribute("id")
      }
    })

    linksMenu.forEach((link) => {
      link.classList.remove("ativo")
      if (link.getAttribute("href") === `#${secaoAtual}`) {
        link.classList.add("ativo")
      }
    })
  })
}

// Animação de entrada dos elementos
function animarElementosNaEntrada() {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.style.opacity = "1"
        entrada.target.style.transform = "translateY(0)"
      }
    })
  })

  const elementos = document.querySelectorAll(".card-projeto, .categoria-habilidade, .item-experiencia")
  elementos.forEach((elemento) => {
    elemento.style.opacity = "0"
    elemento.style.transform = "translateY(30px)"
    elemento.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observador.observe(elemento)
  })
}

// Inicialização quando a página carrega
document.addEventListener("DOMContentLoaded", () => {
  atualizarMenuAtivo()
  animarElementosNaEntrada()

  // Adicionar classe ativa ao link do menu baseado na URL
  const urlAtual = window.location.hash
  if (urlAtual) {
    const linkAtivo = document.querySelector(`a[href="${urlAtual}"]`)
    if (linkAtivo) {
      linkAtivo.classList.add("ativo")
    }
  }
})

// Smooth scroll para navegação
document.querySelectorAll(".link-navegacao").forEach((link) => {
  link.addEventListener("click", function (evento) {
    evento.preventDefault()
    const destino = this.getAttribute("href")
    navegarPara(destino)

    // Atualizar URL sem recarregar a página
    history.pushState(null, null, destino)
  })
})

// Efeito parallax sutil no círculo decorativo
window.addEventListener("scroll", () => {
  const circulo = document.querySelector(".circulo-decorativo")
  const scrolled = window.pageYOffset
  const rate = scrolled * -0.5

  if (circulo) {
    circulo.style.transform = `translateY(${rate}px)`
  }
})

// Validação em tempo real do formulário
function configurarValidacaoFormulario() {
  const campos = document.querySelectorAll("#nome, #email, #mensagem")

  campos.forEach((campo) => {
    campo.addEventListener("blur", function () {
      validarCampo(this)
    })

    campo.addEventListener("input", function () {
      if (this.classList.contains("erro")) {
        validarCampo(this)
      }
    })
  })
}

function validarCampo(campo) {
  const valor = campo.value.trim()
  let valido = true

  // Remover classes de erro anteriores
  campo.classList.remove("erro")

  // Validações específicas
  if (campo.id === "nome" && valor.length < 2) {
    valido = false
  } else if (campo.id === "email" && !validarEmail(valor)) {
    valido = false
  } else if (campo.id === "mensagem" && valor.length < 10) {
    valido = false
  }

  if (!valido) {
    campo.classList.add("erro")
    campo.style.borderColor = "#ff4444"
  } else {
    campo.style.borderColor = "var(--cor-destaque)"
  }

  return valido
}

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

// Inicializar validação do formulário
document.addEventListener("DOMContentLoaded", () => {
  configurarValidacaoFormulario()
})
document.addEventListener("DOMContentLoaded", () => {
  const anoSpan = document.getElementById("ano-atual")
  if (anoSpan) {
    anoSpan.textContent = new Date().getFullYear()
  }
})

