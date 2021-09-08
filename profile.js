class Profile {
    constructor(){
        this.clientId = '',
        this.clientSecret = ''
    }

    async getProfile(username){
        const profileResponse = await fetch(
            `https://jsonplaceholder.typicode.com/users?username=${username}`
        )

        const profile = await profileResponse.json();
        
        const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`)

        const todo = await todoResponse.json();

        return {
            profile,
            todo
        }
    }

}

class UI{
    constructor(){
        this.profileContainer = document.querySelector('#profileContainer'),
        this.alert = document.querySelector('#alert')
    }

    showProfile(profile){
        this.profileContainer.innerHTML = `
        <div class="card card-body">
            <div class="row">
                <div class="col-md-3">
                <a href ="https://placeholder.com"><img src="https://via.placeholder.com/150 class="image-thumbnail" "></a>
                </div>

                <div class="col-md-9">
                    <h4>Contact</h4>
                    <ul class="list-group mt-4">
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
                            Address : ${profile.address.street}
                            ${profile.address.city}
                            ${profile.address.zipcode}
                            ${profile.address.suite}
                        </li>
                        <li class="list-group-item">
                            Phone : ${profile.phone}
                        </li>
                        <li class="list-group-item">
                            Website : ${profile.website}
                        </li>
                        <li class="list-group-item">
                            Company : ${profile.company.name}
                        </li>
                    </ul>
                    <h4 class="mt-4">Todo List</h4>
                    <ul id="todo" class="list-group">
                    </ul>
                </div>
            
            </div>
        
        
        </div>
        `
    }

    showAlert(text){
        this.alert.innerHTML = `${text} is not found.`
    }

    showTodo(todo){
        let html="";

        todo.forEach(item => {
            
            if(item.completed){
                html+= `
                    <li class="list-group-item bg-success">
                        ${item.title}
                    </li>`
            }else{
                 html+=`
                    <li class="list-group-item bg-warning">
                        ${item.title}
                    </li>` 
            }

        });

        this.profileContainer.querySelector('#todo').innerHTML = html;

    }

    clear(){
        this.profileContainer.innerHTML=''
        this.alert.innerHTML=''
    }
}

