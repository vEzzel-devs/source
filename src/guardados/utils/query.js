export async function removespread(id) {
  let id_user = localStorage.getItem('userid');
  return await killSpread_query(id, id_user);
}

async function killSpread_query(id, user_id){
  // retorna el ultimo spreadsheet usado
  var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };
  
  try{
    let result = await fetch("https://apivezzel.azurewebsites.net/spreadsheet_delete/"+user_id+"/"+id, requestOptions)
    return await result.json();
  }catch(e){
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
    return false;
  }
}

async function latestSpread_query(id_user){
  // retorna el ultimo spreadsheet usado
  var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };
  
  try{
    let result = await fetch("https://apivezzel.azurewebsites.net/spreadsheet_getlast/"+id_user, requestOptions)
    return await result.json();
  } catch(e) {
    return ({ error: "error" });
  }
}