class UI{
    constructor(){
        this.profileContainer = document.getElementById('profiles1');
        this.alert = document.getElementById('alert');
    }
    
    showAlert(text){
        this.alert.innerHTML=` ${text} is not found`
    }
    
    showProfile(profile){
        this.profileContainer.innerHTML=`

        <div class="card card-body mt-4">
            <h4> Contact </h4>
            <ul class="list-group">
                <li class="list-group-item">
                    Name : ${profile.name}
                </li>
                <li class="list-group-item">
                    Username : ${profile.username}
                </li>
                <li class="list-group-item">
                    Email : ${profile.email}
                </li>
                <li class="list-group-item">
                    Website : ${profile.website}
                </li>
                <li class="list-group-item">
                    Address : ${profile.address.street} street
                    ${profile.address.suite}
                    ${profile.address.city}
                    ${profile.address.zipcode}
                </li>
                <li class="list-group-item">
                    Phone : ${profile.phone}
                </li>
            </ul>
            <h4 class="mt-4"> Person's To Do's</h4>
            <ul id="todo" class="list-group">
            </ul>
        </div>
        
        `
    }

    showTodo(todo){

        let html =''
        todo.forEach(item => {

            if(item.completed){
                html+=`
                <div class="card card-body">
                        <li class="list-group-item bg-success">
                            ${item.title}
                        </li>
                </div>
                `
            }else{
                html+=`
                <div class="card card-body">
                        <li class="list-group-item bg-warning">
                            ${item.title}
                </div>
                `
            }
            this.profileContainer.querySelector('#todo').innerHTML = html;
            
        });
    }

    clear(){
        this.alert.innerHTML=''
        this.profileContainer.innerHTML=''
    }

}