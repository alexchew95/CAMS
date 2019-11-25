//UPLOAD AUTHOR BIOGRAPHY FILE
mergedfile.addEventListener('change',function(e){

    for(let i=0;i<e.target.files.length;i++){

        let mergedfile=e.target.files[i];

        let storage=firebase.storage();

        let storageRef=storage.ref();

        let MERGDEDFILE=storageRef.child('article/'+mergedfile.name)

        MERGDEDFILE.put(mergedfile).then(function (snapshot){
            console.log("Upload success")
            window.alert("Upload success")
        })        
       
        
    }
});

//UPLOAD COVER LETTER
coverpdffile.addEventListener('change',function(e){

    for(let i=0;i<e.target.files.length;i++){

        let coverpdffile=e.target.files[i];

        let storage=firebase.storage();

        let storageRef=storage.ref();

        let COVERFILE=storageRef.child('article/'+sessionStorage.getItem(aid)+coverpdffile.name)

        COVERFILE.put(coverpdffile).then(function (snapshot){
            console.log("Upload success")
            window.alert("ALL Upload Successful! An email will send to user's mailbox!")
        })        
    }
});

    

				

