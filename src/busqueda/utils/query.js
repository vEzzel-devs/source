export async function search(){
  let name= String(document.getElementById("input-search").value);
  let tags= String(document.getElementById("tags").values);
  console.log(name,tags);
  let result = await search_query(name, tags);
  console.log(result);
  return result;
}

export async function search_default(){
  let name= String('');
  let tags= [''];
  let result = await search_query(name, tags);
  console.log(result);
  return result;
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