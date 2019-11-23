//UPLOAD AUTHOR BIOGRAPHY FILE
file2.addEventListener('change',function(e){

    for(let i=0;i<e.target.files.length;i++){

        let file2=e.target.files[i];

        let storageRef=firebase.storage().ref("article/ "+file2.name);

        let task=storageRef.put(file2);

        task.on('state_changed',function progress(snapshot){
            
            let percentage=snapshot.bytesTransferred/snapshot.totalBytes *100;
            
            console.log("Upload is "+percentage+"%done");
            switch(snapshot.state){
                case firebase.storage.TaskState.PAUSED:
                    console.log("Upload is Paused");
                    break;
                case firebase.storage.TaskState.RUNNING:
                     console.log("Upload is Running");
                     break;
            }
        })

    }
});

//UPLOAD COVER LETTER
file3.addEventListener('change',function(e){

    for(let i=0;i<e.target.files.length;i++){

        let file3=e.target.files[i];

        let storageRef=firebase.storage().ref('article/'+file3.name);

        let task=storageRef.put(file3);

        task.on('state_changed',function progress(snapshot){
            
            let percentage=snapshot.bytesTransferred/snapshot.totalBytes *100;
            
            console.log("Upload is "+percentage+"%done");
            switch(snapshot.state){
                case firebase.storage.TaskState.PAUSED:
                    console.log("Upload is Paused");
                    break;
                case firebase.storage.TaskState.RUNNING:
                     console.log("Upload is Running");
                     break;
            }
        })

    }
});

filepdf.addEventListener('change',function(e){

    for(let i=0;i<e.target.files.length;i++){

        let filepdf=e.target.files[i]

        let storageRef=firebase.storage().ref('article'+filepdf.name);

        let task=storageRef.put(filepdf);

        task.on('state_changed',function progress(snapshot){
            
            let percentage=snapshot.bytesTransferred/snapshot.totalBytes *100;
            
            console.log("Upload is "+percentage+"%done");
            switch(snapshot.state){
                case firebase.storage.TaskState.PAUSED:
                    console.log("Upload is Paused");
                    break;
                case firebase.storage.TaskState.RUNNING:
                     console.log("Upload is Running");
                     break;
            }
        })

    }
});