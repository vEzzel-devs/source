export async function search(tags,name){
  console.log(name, tags);
  
  
  if (name == "" & tags == ""){
    // esta query es para cuando no se ingresa nada en el buscador
    name= String('');
    tags= [''];
    let result = await search_query(name, tags);
    return result;
  }
  else if (name == "" & tags != ""){
    // esta query es para cuando se ingresa solo tags en el buscador
    name= String('');
    tags= tags;
    let result = await search_query(name, tags);
    return result;
  }
  else if (name != "" & tags == ""){
    // esta query es para cuando se ingresa solo nombre en el buscador
    name= name;
    tags= [''];
    let result = await search_query(name, tags);
    return result;
  }
  else{
    let result = await search_query(name, tags);
    return result;
  }

  
}

async function search_query(name, tags){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    "name": name,
    "tags": tags
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  try{
    const result = await fetch("https://vezzel-api.herokuapp.com/spreadsheet_search", requestOptions)
    return await result.json();
  }catch(e){
    console.log(e);
  }

}