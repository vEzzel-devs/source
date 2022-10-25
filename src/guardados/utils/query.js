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
    const result = await fetch("https://vezzel-api.herokuapp.com/spreadsheet/"+id_user, requestOptions)
    return await result.json();
  }catch(e){
    console.log(e);
  }
}

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
    let result = await fetch(`https://vezzel-api.herokuapp.com/spreadsheet_delete/${user_id}/${id}`, requestOptions)
    return await result.json();
  }catch(e){
    console.log(e);
  }
}