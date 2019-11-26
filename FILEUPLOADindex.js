//UPLOAD AUTHOR BIOGRAPHY FILE
mergedfile.addEventListener('change', function (e) {

    for (let i = 0; i < e.target.files.length; i++) {

        let mergedfile = e.target.files[i];

        let storage = firebase.storage();

        let storageRef = storage.ref();

        let AID = sessionStorage.getItem("aid");


        let MERGDEDFILE = storageRef.child('article/' + AID + "-" + mergedfile.name + "(Merged File)")

        MERGDEDFILE.put(mergedfile).then(function (snapshot) {
            console.log("Upload success")
            window.alert("Upload success")

            snapshot.ref.getDownloadURL().then(function (downloadURL) {
                var db = firebase.firestore();
                var aid = sessionStorage.getItem("aid");

                console.log("File available at", downloadURL);
                if (status=="true" ) {
                    sessionStorage.setItem("resubmission", "false")
                    obj = new Object();
                    obj.resubmitStatus = "Submitted"
                    db.collection("Article").doc(aid).update(obj).then(function(a){
                        console.log("done")
                    }).catch(function(err){
        
                        console.log(err)
        
                    })
                }if (status=="submit" ) {
                    sessionStorage.setItem("resubmission", "false")
                    obj = new Object();
                    obj.resubmitStatus = "Not available"
                    db.collection("Article").doc(aid).update(obj).then(function(a){
                        console.log("done")
                    }).catch(function(err){
        
                        console.log(err)
        
                    })
                }
                var merged = sessionStorage.getItem("aid");
                var Merge = downloadURL;
                // var obj = new Object();
                // obj.Cover = Cover;

                db.collection("Article").doc(aid).update({
                    MergeURL: Merge,
                });




            });
        })


    }
});

//UPLOAD COVER LETTER
coverpdffile.addEventListener('change', function (e) {

    for (let i = 0; i < e.target.files.length; i++) {

        let coverpdffile = e.target.files[i];

        let storage = firebase.storage();

        let storageRef = storage.ref();

        let AID = sessionStorage.getItem("aid");

        let COVERFILE = storageRef.child('article/' + AID + "-" + coverpdffile.name + "(Cover Letter)")

        COVERFILE.put(coverpdffile).then(function (snapshot) {
            console.log("Upload success")
            window.alert("ALL Upload Successful! An email will send to user's mailbox!")

            snapshot.ref.getDownloadURL().then(function (downloadURL) {
                console.log("File available at", downloadURL);
                console.log(sessionStorage.getItem("aid"))
                var coverpdf = sessionStorage.getItem("aid");
                var Cover = downloadURL;
                // var obj = new Object();
                // obj.Cover = Cover;
                var aid = sessionStorage.getItem("aid");

                var db = firebase.firestore();
                db.collection("Article").doc(aid).update({
                    CoverURL: Cover,
                });

            });

        });
    }
});





