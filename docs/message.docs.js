const listAllMessages = {
    tags:['Message'],
    description:"List all messages",
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

const messageById = {
    tags:['Message'],
    description:"get the message by id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of message",
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

const sendMessage = {
    tags:['Message'],
    description:"Send message",
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        fullName:{
                            type:"string",
                            description:"Your name",
                            example:"remy mugisha"
                        },
                        email:{
                            type:"string",
                            description:"your email",
                            example:"@gmail.com"
                        },
                        subject:{
                            type:"string",
                            description:"content of message",
                            example:"apply for job"
                        },
                        message:{
                            type:"string",
                            description:"the message you want to send",
                            example:"hi, i want to give you a job"
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

const deleteMessagebyId = {
    tags:['Message'],
    description:"Delete the message by id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of message",
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


exports.messageRouteDocs = {
    "/api/messages/create":{
        post:sendMessage,
    },
    "/api/messages":{
        get:listAllMessages
    },
    "/api/messages/{id}":{
        get:messageById
    },
    "/api/messages/delete/{id}":{
        delete:deleteMessagebyId
    }
}