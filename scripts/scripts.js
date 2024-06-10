/*
  --------------------------------------------------------------------------------------
  Função para obter a lista existente do servidor via requisição GET
  --------------------------------------------------------------------------------------
*/
const getCfcById = async (url) => {
  fetch(url, {
    method: "get",
  })
    .then((response) => response.json())
    .then((data) => {
      insertList(
        data.id,
        data.cnpj,
        data.codigo,
        data.nome,
        data.cep,
        data.status
      );
      data.instrutores.forEach((instrutor) =>
        insertInstrutorList(
          instrutor.id,
          instrutor.cpf,
          instrutor.aula,
          instrutor.status,
          instrutor.cfc
        )
      );
      data.carros.forEach((carro) =>
        insertCarroList(
          carro.id,
          carro.renavan,
          carro.placa,
          carro.marca,
          carro.modelo,
          carro.status,
          carro.cfc
        )
      );
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

/*
  --------------------------------------------------------------------------------------
  Função para obter a lista existente do servidor via requisição GET
  --------------------------------------------------------------------------------------
*/
const getCfcList = async () => {
  let url = "http://127.0.0.1:5000/cfc";
  fetch(url, {
    method: "get",
  })
    .then((response) => response.json())
    .then((data) => {
      data.cfcs.forEach((item) =>
        insertList(
          item.id,
          item.cnpj,
          item.codigo,
          item.nome,
          item.cep,
          item.status
        )
      );
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

/*
  /*
  --------------------------------------------------------------------------------------
  Função para obter a lista existente do servidor via requisição GET
  --------------------------------------------------------------------------------------
*/
const getInstrutorList = async () => {
  let url = "http://127.0.0.1:5000/instrutor";
  fetch(url, {
    method: "get",
  })
    .then((response) => response.json())
    .then((data) => {
      data.instrutores.forEach((item) =>
        insertInstrutorList(item.id, item.cpf, item.aula, item.status, item.cfc)
      );
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

/*
  --------------------------------------------------------------------------------------
  Função para obter a lista existente do servidor via requisição GET
  --------------------------------------------------------------------------------------
*/
const getCarroList = async () => {
  let url = "http://127.0.0.1:5000/carro";
  fetch(url, {
    method: "get",
  })
    .then((response) => response.json())
    .then((data) => {
      data.carros.forEach((item) =>
        insertCarroList(
          item.id,
          item.renavan,
          item.placa,
          item.marca,
          item.modelo,
          item.status,
          item.cfc
        )
      );
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

/*
    --------------------------------------------------------------------------------------
    Função para colocar um item na lista do servidor via requisição POST
    --------------------------------------------------------------------------------------
  */
const postItem = async (
  inputCodigo,
  inputNome,
  inputCnpj,
  inputCep,
  inputStatus
) => {
  const formData = new FormData();
  formData.append("codigo", inputCodigo);
  formData.append("nome", inputNome);
  formData.append("cnpj", inputCnpj);
  formData.append("cep", inputCep);
  formData.append("status", inputStatus);

  let url = "http://127.0.0.1:5000/cfc";
  fetch(url, {
    method: "post",
    body: formData,
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};

/*
    --------------------------------------------------------------------------------------
    Função para colocar um item na lista do servidor via requisição POST
    --------------------------------------------------------------------------------------
  */
const postInstrutorItem = async (
  inputCpf,
  inputNome,
  inputAula,
  inputStatusInstrutor,
  inputCfc
) => {
  const formData = new FormData();
  formData.append("cpf", inputCpf);
  formData.append("nome", inputNome);
  formData.append("aula", inputAula);
  formData.append("status", inputStatusInstrutor);
  formData.append("cfc", inputCfc);

  let url = "http://127.0.0.1:5000/instrutor";
  fetch(url, {
    method: "post",
    body: formData,
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};

/*
    --------------------------------------------------------------------------------------
    Função para colocar um item na lista do servidor via requisição POST
    --------------------------------------------------------------------------------------
  */
const postCarroItem = async (
  inputRenavan,
  inputPlaca,
  inputMarca,
  inputModelo,
  inputStatusCarro,
  inputCfcCarro
) => {
  const formData = new FormData();
  formData.append("renavan", inputRenavan);
  formData.append("placa", inputPlaca);
  formData.append("marca", inputMarca);
  formData.append("modelo", inputModelo);
  formData.append("status", inputStatusCarro);
  formData.append("cfc", inputCfcCarro);

  let url = "http://127.0.0.1:5000/carro";
  fetch(url, {
    method: "post",
    body: formData,
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};

/*
    --------------------------------------------------------------------------------------
    Função para criar um botão close para cada item da lista
    --------------------------------------------------------------------------------------
  */
    const insertButton = (parent) => {
      let closeSpan = document.createElement("span");
    
      // Ícones
      let closeImg = document.createElement("img");
    
      // Configuração dos ícones
      closeImg.src = "https://cdn-icons-png.flaticon.com/512/126/126468.png"; // Ícone de lixeira
      closeImg.alt = "Excluir";
      closeImg.style.width = "15px";
      closeImg.style.height = "15px";
    
      closeSpan.className = "close";
    
      closeSpan.appendChild(closeImg);
    
      parent.appendChild(closeSpan);
    };
    
    const insertButtonModify = (parent) => {
      let modifySpan = document.createElement("span");
    
      // Criar o ícone de modificação (lápis)
      let modifyImg = document.createElement("img");
      modifyImg.src = "https://cdn-icons-png.flaticon.com/512/84/84380.png"; // Ícone de lápis
      modifyImg.alt = "Modificar";
      modifyImg.style.width = "15px";
      modifyImg.style.height = "15px";
      modifyImg.style.cursor = "pointer"; // Cursor pointer para indicar que é clicável
    
      // Ação ao clicar no ícone
      modifyImg.onclick = () => {
        // Obter a linha pai
        let row = parent.parentNode.parentNode;
        // Chamar a função de edição passando a linha
        editRow(row);
      };
    
      modifySpan.className = "modify";
      modifySpan.appendChild(modifyImg);
      parent.appendChild(modifySpan);
    };

/*
    --------------------------------------------------------------------------------------
    Função para remover um item da lista de acordo com o click no botão close
    --------------------------------------------------------------------------------------
  */
const removeElement = () => {
  let close = document.getElementsByClassName("close");
  // var table = document.getElementById('myTable');
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement.parentElement;
      var tableId = this.parentElement.offsetParent.id;
      let nomeItem;
      let url;
      if (tableId === "myTable") {
        nomeItem = div.getElementsByTagName("td")[2].innerHTML;
        url = "http://127.0.0.1:5000/cfc/{codigo}?codigo=" + nomeItem;
      } else if (tableId === "myTable2") {
        nomeItem = div.getElementsByTagName("td")[1].innerHTML;
        url = "http://127.0.0.1:5000/instrutor/{cpf}?cpf=" + nomeItem;
      } else if (tableId === "myTable3") {
        nomeItem = div.getElementsByTagName("td")[1].innerHTML;
        url = "http://127.0.0.1:5000/carro/{renavan}?renavan=" + nomeItem;
      }

      if (confirm("Você tem certeza?")) {
        div.remove();
        deleteItem(url);
        alert("Removido!");
      }
    };
  }
};

/*
    --------------------------------------------------------------------------------------
    Função para limpar as tabelas
    --------------------------------------------------------------------------------------
  */
const clearMyTable = (table) => {
  var tableHeaderRowCount = 1;
  var table = document.getElementById(table);
  var rowCount = table.rows.length;
  for (var i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
  }
};

/*
    --------------------------------------------------------------------------------------
    Função para limpar campos
    --------------------------------------------------------------------------------------
  */
const ClearInputElement = () => {
  document.getElementById("newCnpj").value = "";
  document.getElementById("newCodigo").value = "";
  document.getElementById("newNome").value = "";
  document.getElementById("newCep").value = "";
  document.getElementById("newStatus").value = "";
};

/*
    --------------------------------------------------------------------------------------
    Função para limpar campos
    --------------------------------------------------------------------------------------
  */
const ClearInstrutorElement = () => {
  document.getElementById("newCpf").value = "";
  document.getElementById("newNomeInstrutor").value = "";
  document.getElementById("newAula").value = "";
  document.getElementById("newStatusInstrutor").value = "";
  document.getElementById("newCfc").value = "";
};

/*
    --------------------------------------------------------------------------------------
    Função para limpar campos
    --------------------------------------------------------------------------------------
  */
const ClearCarroElement = () => {
  document.getElementById("newRenavan").value = "";
  document.getElementById("newPlaca").value = "";
  document.getElementById("newMarca").value = "";
  document.getElementById("newModelo").value = "";
  document.getElementById("newStatusCarro").value = "";
  document.getElementById("newCfcCarro").value = "";
};

/*
    --------------------------------------------------------------------------------------
    Função para deletar um item da lista do servidor via requisição DELETE
    --------------------------------------------------------------------------------------
  */
const deleteItem = (url) => {
  console.log(url);
  // let url ;
  fetch(url, {
    method: "delete",
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};

/*
    --------------------------------------------------------------------------------------
    Função para realizar a busca de cfc por id
    --------------------------------------------------------------------------------------
  */
const getCfcId = () => {
  let searchCodigo = document.getElementById("searchCfc").value;
  let url = "http://127.0.0.1:5000/cfc/{codigo}?codigo=" + searchCodigo;
  clearMyTable("myTable");
  clearMyTable("myTable2");
  clearMyTable("myTable3");
  getCfcById(url);
  document.getElementById("searchCfc").value = "";
  alert("busca realizada!");
};

/*
    --------------------------------------------------------------------------------------
    Função para adicionar um novo item
    --------------------------------------------------------------------------------------
  */
const newItem = () => {
  let inputCodigo = document.getElementById("newCodigo").value;
  let inputNome = document.getElementById("newNome").value;
  let inputCnpj = document.getElementById("newCnpj").value;
  let inputCep = document.getElementById("newCep").value;
  let inputStatus = document.getElementById("newStatus").value;

  if (inputStatus === "true" || inputStatus === "false") {
    postItem(inputCodigo, inputNome, inputCnpj, inputCep, inputStatus);
    clearMyTable("myTable");
    ClearInputElement();
    getCfcList();
    alert("Item adicionado!");
  } else {
    alert("Status só pode ser true or false!");
  }
};

/*
    --------------------------------------------------------------------------------------
    Função para adicionar um novo item
    --------------------------------------------------------------------------------------
  */
const newItemInstrutor = () => {
  let inputCpf = document.getElementById("newCpf").value;
  let inputNomeInstrutor = document.getElementById("newNomeInstrutor").value;
  let inputAula = document.getElementById("newAula").value;
  let inputStatusInstrutor =
    document.getElementById("newStatusInstrutor").value;
  let inputCfc = document.getElementById("newCfc").value;

  if (inputStatusInstrutor === "true" || inputStatusInstrutor === "false") {
    postInstrutorItem(inputCpf,inputNomeInstrutor ,inputAula, inputStatusInstrutor, inputCfc);
    clearMyTable("myTable2");
    ClearInstrutorElement();
    getInstrutorList();
    alert("Item adicionado!");
  } else {
    alert("Status só pode ser true or false!");
  }
};

/*
    --------------------------------------------------------------------------------------
    Função para adicionar um novo item
    --------------------------------------------------------------------------------------
  */
const newItemCarro = () => {
  let inputRenavan = document.getElementById("newRenavan").value;
  let inputPlaca = document.getElementById("newPlaca").value;
  let inputMarca = document.getElementById("newMarca").value;
  let inputModelo = document.getElementById("newModelo").value;
  let inputStatusCarro = document.getElementById("newStatusCarro").value;
  let inputCfcCarro = document.getElementById("newCfcCarro").value;

  if (inputStatusCarro === "true" || inputStatusCarro === "false") {
    postCarroItem(
      inputRenavan,
      inputPlaca,
      inputMarca,
      inputModelo,
      inputStatusCarro,
      inputCfcCarro
    );
    clearMyTable("myTable3");
    ClearCarroElement();
    getCarroList();
    alert("Item adicionado!");
  } else {
    alert("Status só pode ser true or false!");
  }
};

/*
    --------------------------------------------------------------------------------------
    Função para inserir items na lista apresentada
    --------------------------------------------------------------------------------------
  */
const insertList = (id, cnpj, codigo, nome, cep, status) => {
  var item = [id, cnpj, codigo, nome, cep, status];
  var table = document.getElementById("myTable");
  var row = table.insertRow();

  for (var i = 0; i < item.length; i++) {
    var cel = row.insertCell(i);
    cel.textContent = item[i];
  }
  insertButton(row.insertCell(-1));
  insertButtonModify(row.insertCell(-1))
  removeElement();
  modifyElement();
};

/*
    --------------------------------------------------------------------------------------
    Função para inserir items na lista apresentada
    --------------------------------------------------------------------------------------
  */
const insertInstrutorList = (id, cpf, aula, status, cfc) => {
  var item = [id, cpf, aula, status, cfc];
  var table = document.getElementById("myTable2");
  var row = table.insertRow();

  for (var i = 0; i < item.length; i++) {
    var cel = row.insertCell(i);
    cel.textContent = item[i];
  }
  insertButton(row.insertCell(-1));
  removeElement();
};

/*
    --------------------------------------------------------------------------------------
    Função para inserir items na lista apresentada
    --------------------------------------------------------------------------------------
  */
const insertCarroList = (id, renavan, placa, marca, modelo, status, cfc) => {
  var item = [id, renavan, placa, marca, modelo, status, cfc];
  var table = document.getElementById("myTable3");
  var row = table.insertRow();

  for (var i = 0; i < item.length; i++) {
    var cel = row.insertCell(i);
    cel.textContent = item[i];
  }
  insertButton(row.insertCell(-1));
  removeElement();
};


const modifyElement = () => {
  let modify = document.getElementsByClassName("modify");
  for (let i = 0; i < modify.length; i++) {
    modify[i].onclick = function () {
      let row = this.closest("tr");
      let id = row.cells[0].textContent;
      let cnpj = prompt("Novo CNPJ:", row.cells[1].textContent);
      let codigo = prompt("Novo Código:", row.cells[2].textContent);
      let nome = prompt("Novo Nome:", row.cells[3].textContent);
      let cep = prompt("Novo CEP:", row.cells[4].textContent);
      let status = prompt("Novo Status (true/false):", row.cells[5].textContent);

      // Criando um objeto para enviar na solicitação PUT
      const formData = new FormData();
      formData.append("cnpj", cnpj);
      formData.append("codigo", codigo);
      formData.append("nome", nome);
      formData.append("cep", cep);
      formData.append("status", status);

      if (confirm("Você deseja modificar este item?")) {
        putItem(`http://127.0.0.1:5000/cfc/{id}?id=` + id, formData);
      }
    };
  }
};

const putItem = (url, formData) => {
  fetch(url, {
    method: 'PUT',
    body: formData,
  })
  .then(response => {
    if (response.ok) {
      alert('Item atualizado com sucesso!');
      clearMyTable("myTable");
      getCfcList();
      // Opcionalmente, atualizar a linha da tabela com os novos dados
    } else {
      alert('Erro ao atualizar o item.');
    }
  })
  .catch((error) => {
    console.error('Erro:', error);
    alert('Erro ao atualizar o item.');
  });
};


/*
    --------------------------------------------------------------------------------------
    Chamada da função para carregamento inicial dos dados
    --------------------------------------------------------------------------------------
  */
getCfcList();
getInstrutorList();
getCarroList();
