export async function comments(){
  let id_user = localStorage.getItem('userid');
  let result = await comment_query(id_user);
  return await result;
}

async function comment_query(id_user){
  var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };
  try{
    const result = await fetch(`https://apivezzel.azurewebsites.net/getUserComm/${id_user}`, requestOptions)
    return await result.json();
  }catch(e){
    console.log(e);
  }
}

export async function remove_comment(id_com, id_spread) {
  let id_user = localStorage.getItem('userid');
  return await killComment_query(id_user, id_com, id_spread);
}

async function killComment_query(user_id, id_com, id_spread){
  // retorna el ultimo spreadsheet usado
  var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };
  
  try{
    let result = await fetch(`https://apivezzel.azurewebsites.net/deleteComm/${user_id}/${id_spread}/${id_com}`, requestOptions)
    return await result.json();
  }catch(e){
    console.log(e);
  }
}

export async function edit_username(new_name){
    
  let id_user = localStorage.getItem('userid');
  let result = await edit_username_query(id_user, new_name);
  
  return await result;
}

async function edit_username_query(id_user, new_name){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    "username": new_name
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  try{
    const result = await fetch(`https://apivezzel.azurewebsites.net/edit_user/${id_user}`, requestOptions)
    return await result.json();
  }catch(e){
    console.log(e);
  }
}


export async function removeuser() {
  let id_user = localStorage.getItem('userid');
  return await killUser_query(id_user);
}

async function killUser_query(user_id){
  // retorna el ultimo spreadsheet usado
  var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };
  try{
    let result = await fetch(`https://apivezzel.azurewebsites.net/deleteUser/${user_id}`, requestOptions)
    return await result.json();
  }catch(e){
    console.log(e);
  }
}

export async function logger(){
  let mail= String(document.getElementById("mail").value);
  let pass= String(document.getElementById("pass").value);
  let result = await logger_query(mail, pass);
  if (!result) {
    return [false, "Falló la conexión"]
  } else if (result.status === 401){
    return [false,String(result.message)];
  } else {
    return [true,String(result.id), String(result.username)];
  }
}

async function logger_query(mail, pass){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    "email": mail,
    "password": pass
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  try{
    const result = await fetch("https://apivezzel.azurewebsites.net/login", requestOptions)
    return await result.json();
  }catch(e){
    console.log(e);
  }

}