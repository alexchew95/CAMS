//UPLOAD AUTHOR BIOGRAPHY FILE
mergedfile.addEventListener('change',function(e){

    for(let i=0;i<e.target.files.length;i++){

        let mergedfile=e.target.files[i];

        let storageRef=firebase.storage().ref("article/ "+mergedfile.name);

        let task=storageRef.put(mergedfile);

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
coverpdffile.addEventListener('change',function(e){

    for(let i=0;i<e.target.files.length;i++){

        let coverpdffile=e.target.files[i];

        var storageRef=firebase.storage().ref('article/'+coverpdffile.name);

        let task=storageRef.put(coverpdffile);

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

