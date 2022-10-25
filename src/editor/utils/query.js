export async function savespread(content, name_s, description, tags){
  let id_user = localStorage.getItem('userid');
  content = JSON.stringify(content);
  let result = await savespread_query(id_user,name_s,tags,description,content);
  return result;
}

export async function editspread(sheet_id, content, name_s, description, tags){
  //change for edit!
  let id_user = localStorage.getItem('userid');
  content = JSON.stringify(content);
  let result = await editspread_query(id_user,sheet_id,name_s,tags,description,content);
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

async function editspread_query(id_user,id_sheet,name_s,tags,description,content){
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
    let result = await fetch(`https://vezzel-api.herokuapp.com/spreadsheet_edit/${id_user}/${id_sheet}`, requestOptions)
    return await result.json();
  } catch(e) {
    console.log(e);
  }
}

function loadSheet(res) {
  if (res.error) { return false; }
  let sheet = JSON.parse(res.content);
  let config = JSON.stringify({
    id: String(res["_id"]),
    title: res["name"],
    desc: res["description"],
    tags: res["tags"]
  });
  localStorage.setItem('sheetDim', sheet.shape);
  localStorage.setItem('sheetData', sheet.cont);
  localStorage.setItem('sheetConfig', config);
  return true;
}

export async function latestSpread() {
  try {
    let id_user = localStorage.getItem('userid');
    let res = await latestSpread_query(id_user);
    return loadSheet(res);
  } catch(e) {
    return ({ error: "error" });
  }
}

async function latestSpread_query(id_user){
  // retorna el ultimo spreadsheet usado
  var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };
  
  try{
    let result = await fetch("https://vezzel-api.herokuapp.com/spreadsheet_getlast/"+id_user, requestOptions)
    return await result.json();
  } catch(e) {
    return ({ error: "error" });
  }
}