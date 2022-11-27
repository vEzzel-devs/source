export async function savespread(content, name_s, description, tags){
  let id_user = localStorage.getItem('userid');
  content = JSON.stringify(content);
  let result = await savespread_query(id_user,name_s,tags,description,content);
  return result;
}

async function savespread_query(id_user,name_s,tags,description,content){
  // guarda un spreadsheet en la base de datos
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "name": name_s,
    "description": description,
    "content":content,
    "tags": tags
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };


  try {
    let result = await fetch("https://apivezzel.azurewebsites.net/spreadsheet_save/"+id_user, requestOptions)
    return await result.json();
  } catch(e) {
    console.log(e);
  }
}

export async function getSpreadComm(){
  let sheetConfig = localStorage.getItem('sheetConfig');
  let result = await getSpreadComm_query(JSON.parse(sheetConfig).id);
  return result;
}

async function getSpreadComm_query(spread_id){
  // obtiene comentarios de un spreadsheet en la base de datos
  var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };


  try {
    let result = await fetch("https://apivezzel.azurewebsites.net/getSpreadComm/"+spread_id, requestOptions)
    return await result.json();
  } catch(e) {
    console.log(e);
  }
}

export async function getOneSpread(){
  let sheetConfig = localStorage.getItem('sheetConfig');
  let result = await getOneSpread_query(JSON.parse(sheetConfig).id);
  return result;
}

async function getOneSpread_query(spread_id){
  // obtiene comentarios de un spreadsheet en la base de datos
  var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };


  try {
    let result = await fetch("https://apivezzel.azurewebsites.net/getOneSpread/"+spread_id, requestOptions)
    return await result.json();
  } catch(e) {
    console.log(e);
  }
}

export async function editComm(id_comm,desc, stars){
  // edita el comentario de un spreadsheet
  let id_user = localStorage.getItem('userid');
  let sheetConfig = localStorage.getItem('sheetConfig');
  let spread_id = JSON.parse(sheetConfig).id;
  let result = await editComm_query(id_user,spread_id,id_comm,desc, stars);
  return result;
}

async function editComm_query(id_user,spread_id,id_comm,desc, stars){
  // edita el comentario de un spreadsheet
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "comment": desc,
    "score": stars
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };


  try {
    let result = await fetch("https://apivezzel.azurewebsites.net/editComm/"+id_user+'/'+spread_id+'/'+id_comm, requestOptions)
    return await result.json();
  } catch(e) {
    console.log(e);
  }
}

export async function getUserSpreadComm(){
  let id_user = localStorage.getItem('userid');
  let sheetConfig = localStorage.getItem('sheetConfig');
  let spread_id = JSON.parse(sheetConfig).id;
  let result = await getUserSpreadComm_query(id_user,spread_id);
  return result;
}

async function getUserSpreadComm_query(id_user,spread_id){
  // obtiene el comentario de un spreadsheet
  var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };
  try {
    let result = await fetch("https://apivezzel.azurewebsites.net/getUserSpreadComm/"+id_user+'/'+spread_id, requestOptions)
    return await result.json();
  } catch(e) {
    console.log(e);
  }
}

export async function deleteComm(id_comm){
  // elimina el comentario de un spreadsheet
  let id_user = localStorage.getItem('userid');
  let sheetConfig = localStorage.getItem('sheetConfig');
  let spread_id = JSON.parse(sheetConfig).id;
  let result = await deleteComm_query(id_user,spread_id,id_comm);
  return result;
}

async function deleteComm_query(id_user,spread_id,id_comm){
  // elimina el comentario de un spreadsheet
  
  var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };


  try {
    let result = await fetch("https://apivezzel.azurewebsites.net/deleteComm/"+id_user+'/'+spread_id+'/'+id_comm, requestOptions)
    return await result.json();
  } catch(e) {
    console.log(e);
  }
}


export async function createComm(desc, stars){
  // edita el comentario de un spreadsheet
  let id_user = localStorage.getItem('userid');
  let sheetConfig = localStorage.getItem('sheetConfig');
  let spread_id = JSON.parse(sheetConfig).id;
  let result = await createComm_query(id_user,spread_id,desc, stars);
  return result;
}

async function createComm_query(id_user,spread_id,desc, stars){
  // edita el comentario de un spreadsheet
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "comment": desc,
    "score": stars
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };


  try {
    let result = await fetch("https://apivezzel.azurewebsites.net/createComm/"+id_user+'/'+spread_id, requestOptions)
    return await result.json();
  } catch(e) {
    console.log(e);
  }
}