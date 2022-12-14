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


export async function register(){
  let mail= String(document.getElementById("mail").value);
  let pass= String(document.getElementById("pass").value);
  let user= String(document.getElementById("name").value);

  let result = await register_query(mail, pass, user);
  if (!result) {
    return [false, "Falló la conexión"]
  } else if (result.status === 401) {
    return [false,String(Object.values(result.message).join().split(',').join('\n'))];
  } else{
    return [true,String(result.id), String(result.username)];
  }
}

async function register_query(mail, pass,user){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    "email": mail,
    "password": pass,
    "username": user
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  try{
    const result = await fetch("https://apivezzel.azurewebsites.net/add", requestOptions);
    return await result.json();
  }catch(e){
    console.log(e);
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