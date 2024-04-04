//Array relativo ao objeto participante e seus atributos
let participantes = [
  {
    nome: 'Josias Netto',
    email: 'josiascaldasneto@gmail.com',
    data_inscricao: new Date(2024, 1, 22, 19, 20),
    data_checkin: new Date(2024, 2, 25, 22, 10)
  },
  {
    nome: 'Roberta Maria',
    email: 'robertamaria@gmail.com',
    data_inscricao: new Date(2024, 1, 2, 19, 23),
    data_checkin: new Date(2024, 1, 5, 20, 20)
  },
  {
    nome: 'Fernando Silva',
    email: 'fernandosilva@gmail.com',
    data_inscricao: new Date(2024, 0, 15, 10, 30),
    data_checkin: new Date(2024, 0, 20, 18, 45)
  },
  {
    nome: 'Ana Sousa',
    email: 'anasousa@gmail.com',
    data_inscricao: new Date(2023, 11, 10, 14, 55),
    data_checkin: new Date(2023, 11, 15, 16, 30)
  },
  {
    nome: 'Pedro Santos',
    email: 'pedrosantos@gmail.com',
    data_inscricao: new Date(2023, 10, 5, 20, 10),
    data_checkin: new Date(2023, 10, 8, 22, 5)
  },
  {
    nome: 'Mariana Lima',
    email: 'marianalima@gmail.com',
    data_inscricao: new Date(2023, 9, 30, 16, 40),
    data_checkin: new Date(2023, 10, 3, 18, 20)
  },
  {
    nome: 'Ricardo Oliveira',
    email: 'ricardooliveira@gmail.com',
    data_inscricao: new Date(2023, 8, 25, 12, 15),
    data_checkin: new Date(2023, 9, 1, 14, 10)
  },
  {
    nome: 'Aline Costa',
    email: 'alinecosta@gmail.com',
    data_inscricao: new Date(2023, 7, 20, 21, 5),
    data_checkin: new Date(2023, 7, 25, 23, 30)
  },
  {
    nome: 'Gabriel Oliveira',
    email: 'gabrieloliveira@gmail.com',
    data_inscricao: new Date(2023, 6, 15, 17, 45),
    data_checkin: new Date(2023, 6, 20, 19, 40)
  },
  {
    nome: 'Larissa Silva',
    email: 'larissasilva@gmail.com',
    data_inscricao: new Date(2023, 5, 10, 13, 20),
    data_checkin: new Date(2023, 5, 15, 15, 25)
  }
];

//Funcao que recebe o participante e retorna todas suas infos no formato da tabela
const criar_participante = (participante) => {

  //Declarando as info datas dos participantes no formato do day.js
  const data_inscricao = dayjs(Date.now()).to(participante.data_inscricao)
  let data_checkin = dayjs(Date.now()).to(participante.data_checkin)

  //Verifica se o participante ja fez check-in
  ///Caso nao, a info da data do check-in eh declarada como o proprio botao para faze-lo
  if(participante.data_checkin == null) {
    data_checkin = `
    <button data-email="${participante.email}"onclick="fazer_checkin(event)">
      Confirmar check-in
    </button>
    `
  }

  //Retorna as infos do participante no formato pronto para a table no Html
  return `
  <tr>
    <td> 
    <strong> ${participante.nome} </strong> 
    <br> 
    <small> ${participante.email} </small>
    </td>
    <td> ${data_inscricao} </td>
    <td>${data_checkin}</td>
  </tr>
  `
}

//Funcao que atualiza a tabela de participantes no HTML
const atualizar_lista = (participantes) => {

  //Declarando a variavel que agrupara todos os participantes no formato da table
  let output = ""

  //Loop que passa pelo array de participantes, e add cada um a var do output
  for (let participante of participantes) {
    output = output + criar_participante(participante)
  }

  //Substituir info do Html
  document.querySelector('tbody').innerHTML = output
}

//Executa a funcao
atualizar_lista(participantes)

//Funcao que adciona participante ao apertar o botao
const adcionar_participante = (event) => {
  event.preventDefault()

  //Declara a variavel que recebe as infos do formulario 
  const form_data = new FormData(event.target)
  
  //Declara o obj participante com as infos do form
  const participante = {
    nome: form_data.get('nome'),
    email: form_data.get('email'),
    data_inscricao: new Date(),
    data_checkin: null
  }

  //Variavel para verificar se o email do participante ja foi add anteriormente
  ///Caso nao, a variavel sera nula
  ///find() = Itera e procura o participante onde a funcao colocada dentro dela seja True
  const participante_existe = participantes.find( 
    (p) => {
      return p.email == participante.email
    }
  )

  //Caso o partipante ja exista na lista, emite o alerta e acaba a funcao
  if(participante_existe){
    alert('Email ja cadastrado!')
    return
  }

  //Atualiza a lista de participantes com o novo participante
  participantes = [participante, ...participantes]

  atualizar_lista(participantes)

  //Apaga os valores do nome e email colocados no form
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""

}

//Funcao que faz o check-in ao apertar o respectivo botao
const fazer_checkin = (event) => {

  //Verifica se o usuario realmente deseja fazer o check-in
  //Casp nao, finaliza a funcao
  if (confirm('Tem certeza que deseja fazer o check-in?') == false){
    return
  }

  //Declara o participante, ao procurar pelo email na lista igual ao email da info do botao
  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email 
  })

  //Declara a data do check-in
  participante.data_checkin = new Date()

  atualizar_lista(participantes)
}

