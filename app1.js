const profile = new Profile();
const ui = new UI();

const search = document.getElementById('search');


search.addEventListener('keyup',(event) => {
    ui.clear();
    let text = event.target.value
    if(text !==''){
        profile.getProfile(text)
         .then(res => {
             if(res.profile.length ===0){
                 ui.showAlert(text);
             }else{
                 console.log(res);
                 ui.showProfile(res.profile[0]);
                 ui.showTodo(res.todo);
             }
         }).catch(err =>{
             ui.showAlert(text)
         })
    }



    
})