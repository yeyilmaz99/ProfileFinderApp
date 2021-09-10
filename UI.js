class UI{
    constructor(){
        this.profileContainer = document.getElementById('alert');
        // this.alert = document.getElementById('alert')
    }


    showProfile(profile){
        this.profileContainer.innerHTML = `
        <div class="card card-body mt-4">
            <div>
                <ul class="list-group">
                <h4>Contact</h4>
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
                    Address: ${profile.address.street}
                    ${profile.address.city}
                    ${profile.address.zipcode}
                    ${profile.address.suite}
                    </li>
                </ul>
            </div>
        </div>
        `
    }

    showAlert(text){
        this.alert.innerHTML = `
        <p>${text} is not found </p>
        
        `
    }


    clear(){
        this.profileContainer.innerHTML=''
        this.alert.innerHTML=''
    }

}