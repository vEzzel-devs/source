export async function spreadsheet(){
  //id user para test = 6352f98082d156cd0571a0f2
  // obtener id guardada al iniciar sesion
  let id_user = '6352f98082d156cd0571a0f2';
  
  let result = await spreadsheet_query(id_user);
  console.log(result);
  return result;
}


async function spreadsheet_query(id_user){
  var myHeaders = new Headers();
  
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