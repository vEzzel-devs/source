export async function getUserChats() {
    /* TO DO */
    let id_user = localStorage.getItem('userid');
    let name_user = localStorage.getItem('username');

    let result = await getUserChats_query(id_user, name_user);
    return await result;
}
async function getUserChats_query(id_user, name_user){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "user1_id": id_user,
      "user1_name": name_user
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    try{
        const result = await fetch("https://vezzel-api.herokuapp.com/getAllChat", requestOptions)
        return await result.json();
    }catch(e){
        console.log(e);
    }
}

export async function sendMsg(active) {
    /* TO DO */
    let id_user = localStorage.getItem('userid');
    let name_user = localStorage.getItem('username');
    let id_user2 = '';
    let name_user2 = '';
    if (active.users[0][0] !== id_user) {
      id_user2 = active.users[0][0];
      name_user2 = active.users[0][1];
    }
    else {
      id_user2 = active.users[1][0];
      name_user2 = active.users[1][1];
    }
    let msg = document.getElementById("msg").value;
    console.log(id_user, name_user, id_user2, name_user2, msg);
    let result = await sendMsg_query(id_user, name_user,id_user2, name_user2, msg);
    return await result;
}
async function sendMsg_query(id_user, name_user,id_user2, name_user2, msg){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "user1_id": id_user,
      "user1_name": name_user,
      "user2_id": id_user2,
      "user2_name": name_user2,
      "msg": msg
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    try{
        const result = await fetch("https://vezzel-api.herokuapp.com/saveChat", requestOptions)
        return await result.json();
    }catch(e){
        console.log(e);
    }
}