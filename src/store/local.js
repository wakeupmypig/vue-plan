export default {
  setStorage(datas){
    localStorage.setItem('plain',JSON.stringify(datas))
  },
  getStorage(){
    return JSON.parse(localStorage.getItem('plain'));
  }
}
