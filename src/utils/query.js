export async function spreadsheet(){
    
  let id_user = localStorage.getItem('userid');

  let result = await spreadsheet_query(id_user);
  
  return await result;
}


async function spreadsheet_query(id_user){

  var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };
  try{
    const result = await fetch("https://apivezzel.azurewebsites.net/spreadsheet/"+id_user, requestOptions)
    return await result.json();
  }catch(e){
    console.log(e);
  }
}

export async function getUserComm(){
  // retorna todos los comentarios de un usuario
  let id_user = localStorage.getItem('userid');

  let result = await getUserComm_query(id_user);
  
  return await result;
}

async function getUserComm_query(id_user){

  var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };
  try{
    const result = await fetch("https://apivezzel.azurewebsites.net/getUserComm/"+id_user, requestOptions)
    return await result.json();
  }catch(e){
    console.log(e);
  }
}