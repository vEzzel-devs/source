export async function getUserChats() {
  /* TO DO */
  let id_user = localStorage.getItem('userid');
  let result = await getUserChats_query(id_user);
  return await result;
}
async function getUserChats_query(id_user){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "user1_id": id_user
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  try{
      const result = await fetch("https://apivezzel.azurewebsites.net/getAllChat", requestOptions)
      return await result.json();
  }catch(e){
      console.log(e);
  }
}

export async function createChat(target,msg) {
  /* TO DO */
  
  let id_user = localStorage.getItem('userid');
  let user2_id = target.userid;
  let time = Date().toLocaleString();

  let result = await createChat_query(id_user,user2_id,msg,time);
  return await result;
}

async function createChat_query(id_user,user2_id,msg,time){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "user1_id": id_user,
    "user2_id": user2_id,
    "msg": msg,
    "time": time
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  try{
    const result = await fetch("https://apivezzel.azurewebsites.net/createChat", requestOptions)
    return await result.json();
  }catch(e){
      console.log(e);
  }
}




export async function blockChat(name) {
  /* TO DO */
  return undefined;
}



export async function getAllUser() {
  /* TO DO */
  
  let result = await getAllUser_query();
  result = result.map((user) => {
    return {
      label: user.username,
      userid: user._id
    };
  });
  return await result;
}
async function getAllUser_query(){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
    
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  try{
      const result = await fetch("https://apivezzel.azurewebsites.net/getall", requestOptions)
      return await result.json();
  }catch(e){
      console.log(e);
  }
}