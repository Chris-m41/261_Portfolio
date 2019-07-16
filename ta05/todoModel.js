export default class todoModel {
constructor(key) {
    this.key = key;
    this.toDos =readLS(this.key);
}
add(data){

}
delete(data) {

}
getFilteredItems(query)
{

}
complete(id){

}
}
function readLS(key) {
return JSON.parse(window.localStorage.getItem(key));
}
function writeLS(toDos) {
    window.localStorage.setItem(key, JSON.stringify(data));
}