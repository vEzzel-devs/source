function updateConfig(res, title, desc, tags) {
  let config = JSON.stringify({
    id: res.id,
    title,
    desc,
    tags
  });
  localStorage.setItem('sheetConfig', config);
}

export async function savespread(content, name_s, description, tags){
  let id_user = localStorage.getItem('userid');
  content = JSON.stringify(content);
  let result = await savespread_query(id_user,name_s,tags,description,content);
  updateConfig(result, name_s, description, tags);
  return result;
}

export async function editspread(sheet_id, content, name_s, description, tags){
  let id_user = localStorage.getItem('userid');
  content = JSON.stringify(content);
  let result = await editspread_query(id_user,sheet_id,name_s,tags,description,content);
  updateConfig(result, name_s, description, tags);
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