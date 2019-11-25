//UPLOAD AUTHOR BIOGRAPHY FILE
mergedfile.addEventListener('change',function(e){

    for(let i=0;i<e.target.files.length;i++){

        let mergedfile=e.target.files[i];

        let storage=firebase.storage();

        let storageRef=storage.ref();

        let AID=sessionStorage.getItem("aid");

        let MERGDEDFILE=storageRef.child('article/'+AID+"-"+mergedfile.name+"(Merged File)")

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

        let AID=sessionStorage.getItem("aid");

        let COVERFILE=storageRef.child('article/'+AID+"-"+coverpdffile.name+"(Cover Letter)")

        COVERFILE.put(coverpdffile).then(function (snapshot){
            console.log("Upload success")
            window.alert("ALL Upload Successful! An email will send to user's mailbox!")

            snapshot.ref.getDownloadURL().then(function(downloadURL) {
                console.log("File available at", downloadURL);
              
                var coverpdf = sessionStorage.getItem("aid");
                var Cover = downloadURL;
                var obj = new Object();
                obj.Cover = Cover;

                var db = firebase.firestore();
				db.collection("Article").doc(firebase.auth().currentUser.aid).update({
				Cover: downloadURL,
							});
            
            });

          
            })
        }
});

    

				

