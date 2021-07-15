//callback hell:: Refactor the code for the better, using any techniques you are aware of
    //1. Verify user login details i.e username and password of a user.
    //2. Get application roles for the user.
    //3. Log application access time for the user.

    const verifyUser = function(username, password, callback){
        dataBase.verifyUser(username, password, (error, userInfo) => {
            if (error) {
                callback(error)
            }else{
                dataBase.getRoles(username, (error, roles) => {
                    if (error){
                        callback(error)
                    }else {
                        dataBase.logAccess(username, (error) => {
                            if (error){
                                callback(error);
                            }else{
                                callback(null, userInfo, roles);
                            }
                        })
                    }
                })
            }
        })
     };