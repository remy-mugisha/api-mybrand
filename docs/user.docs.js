const listAllUsers = {
    tags:['User'],
    description:"List all users",
    security: [
        {
          token: [],
        },
      ],
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

const createUser = {
tags:['User'],
description:"Create a User",
requestBody:{
    content:{
        "application/json":{
            schema:{
                type:"object",
                properties:{
                    username:{
                        type:"string",
                        description:"user name",
                        example:"lio"
                    },
                    email:{
                        type:"string",
                        description:"user email",
                        example:"lio@gmail.com"
                    },
                    password:{
                        type:"string",
                        description:"user password",
                        example:"12345"
                    },
                    role:{
                        type:"string",
                        description:"user role",
                        example:"admin"
                    },
                }
            }
        }
    }
},
responses:{
    200:{
        description:"OK",
        content:{
            "application/json":{
                type:"object",
                example:{
                    status:"success",
                    data:[]
                }
            }
        }
    }
}
}

const login = {
tags:['User'],
description:"Login",
requestBody:{
    content:{
        "application/json":{
            schema:{
                type:"object",
                properties:{
                    email:{
                        type:"string",
                        description:" user email",
                        example:"lio@gmail.com"
                    },
                    password:{
                        type:"string",
                        description:" user password",
                        example:"12345"
                    },
                }
            }
        }
    }
},
responses:{
    200:{
        description:"OK",
        content:{
            "application/json":{
                type:"object",
                example:{
                    status:"success",
                    data:[]
                }
            }
        }
    }
}
}

const getUserById = {
tags:['User'],
description:"Get the user by id",
parameters:[
    {
        name:"id",
        in:"path",
        description:"id of user",
        type:"string",
        example:"63caaf3527b29e1d399896da"
    }
],
security: [
    {
      token: [],
    },
  ],
responses:{
    200:{
        description:"OK",
        content:{
             "application/json":{
                type:'object',
                example:{
                    status:"success",
                    data:[]
                }
             }
        }
    }
}
}

const deleteUserById = {
tags:['User'],
description:"Delete the user by id",
parameters:[
    {
        name:"id",
        in:"path",
        description:"id of user",
        type:"string",
        example:"63caaf3527b29e1d399896da"
    }
],
security: [
    {
      token: [],
    },
  ],
responses:{
    200:{
        description:"OK",
        content:{
             "application/json":{
                type:'object',
                example:{
                    status:"success",
                    data:[]
                }
             }
        }
    }
}
}

const updateUserById = {
tags:['User'],
description:"Update user by id",
security: [
    {
      token: [],
    },
  ],
  parameters:[
    {
        name:"id",
        in:"path",
        description:"id of user",
        type:"string",
        example:"63caaf3527b29e1d399896da"
    }
],
requestBody:{
    content:{
        "application/json":{
            schema:{
                type:"object",
                properties:{
                    email:{
                        type:"string",
                        description:"user email",
                        example:"lio@gmail.com"
                    },
                    password:{
                        type:"string",
                        description:"user password",
                        example:"12345"
                    },
                    role:{
                        type:"string",
                        description:"role of the user",
                        example:"admin"
                    }
                }
            }
        }
    }
},
responses:{
    200:{
        description:"OK",
        content:{
            "application/json":{
                type:"object",
                example:{
                    status:"success",
                    data:[]
                }
            }
        }
    }
}
}

exports.userRouteDocs = {
"/api/auth/register":{
    post:createUser,
},
"/api/auth/login":{
    post:login,
},
 "/api/user":{
    get:listAllUsers,
},
"/api/user/{id}":{
    get:getUserById,
},
"/api/user/delete/{id}":{
    delete:deleteUserById
},
"/api/user/update/{id}":{
    put:updateUserById
}
};