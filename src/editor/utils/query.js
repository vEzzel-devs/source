export async function savespread(){
  // cambiar los parametros de esta funcion 
  let id_user = localStorage.getItem('userid');
  name_s= 'nombre';
  tags = ['tag1','tag2'];
  description = 'descripcion';
  content = 'contenido';
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


  try{
    fetch("https://vezzel-api.herokuapp.com/spreadsheet_save/"+id_user, requestOptions)
    return await result.json();
  }catch(e){
    console.log(e);
  }
}

export async function latesSpread(){
  // esta funcion es para obtener el ultims spreadsheet usado
  let id_user = localStorage.getItem('userid');
  name_s= 'nombre';
  tags = ['tag1','tag2'];
  description = 'descripcion';
  content = 'contenido';
  let result = await latesSpread_query(id_user);
  
  return result;
}

async function latesSpread_query(id_user){
  // retorna el ultimo spreadsheet usado
  var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };
  
  try{
    fetch("https://vezzel-api.herokuapp.com/spreadsheet_getlast/"+id_user, requestOptions)
    return await result.json();
  }catch(e){
    console.log(e);
  }
}