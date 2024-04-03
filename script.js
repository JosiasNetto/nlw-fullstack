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

  const data_inscricao = dayjs(Date.now()).to(participante.data_inscricao)
  const data_checkin = dayjs(Date.now()).to(participante.data_checkin)

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
  //pegar info do Html

  let output = ""

  //loop
  for (let participante of participantes) {
    output = output + criar_participante(participante)
  }

  //Substituir info do Html
  document.querySelector('tbody').innerHTML = output
}

atualizar_lista(participantes)

