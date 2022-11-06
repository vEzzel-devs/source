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
    let result = await fetch("https://vezzel-api.herokuapp.com/spreadsheet_save/"+id_user, requestOptions)
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
    let result = await fetch("https://vezzel-api.herokuapp.com/getSpreadComm/"+spread_id, requestOptions)
    return await result.json();
  } catch(e) {
    console.log(e);
  }
}