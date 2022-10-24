export async function spreadsheet(){
  //id user para test = 6352f98082d156cd0571a0f2
  
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