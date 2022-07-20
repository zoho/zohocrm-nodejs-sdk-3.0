const  Module  = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/fields/module").Module;

const APIException = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/change_owner/api_exception.js").APIException;
const ActionResponse = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/change_owner/action_response.js").ActionResponse;
const BodyWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/change_owner/body_wrapper.js").BodyWrapper;
const ChangeOwnerOperations = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/change_owner/change_owner_operations.js").ChangeOwnerOperations;
const RecordActionHandler = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/change_owner/record_action_handler.js").RecordActionHandler;
const RecordActionWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/change_owner/record_action_wrapper.js").RecordActionWrapper;
const SuccessResponse = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/change_owner/success_response").SuccessResponse;
const User = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users/user.js").User;
const APIResponse = require("@zohocrm/nodejs-sdk-3.0/routes/controllers/api_response.js").APIResponse;

class ChangeOwner
{
    static async updateRecordsOwner(moduleAPIName)
    {
      let changeOwnerOperations = new ChangeOwnerOperations(moduleAPIName);

      let bodyWrapper = new BodyWrapper();

      let Ids = [];

      Ids.push("312938000000241407");

	  Ids.push("312938000000241406");

	  bodyWrapper.setIds(Ids);

      let owner = new User();

      owner.setId(312938000000232001n);

	  bodyWrapper.setOwner(owner);

      bodyWrapper.setNotify(true);

    //   let relatedModules = [];

    //   let relatedModule = new Module();

    //   // Set ID to the Module instance
	// 	relatedModule.setId(347706114686005n);

	// 	// Set name to the Module instance
	// 	relatedModule.setAPIName("Tasks");

	// 	// Add Module instance to the list
	// 	relatedModules.add(relatedModule);

    //     relatedModule = new Module();

    //     relatedModule.setId(347706114686005n);

	// 	// Set name to the Module instance
	// 	relatedModule.setAPIName("Tasks");

	// 	// Add Module instance to the list
	// 	relatedModules.add(relatedModule);

	// 	// Set the list to relatedModules in BodyWrapper instance
	// 	bodyWrapper.setRelatedModules(relatedModules);

        let response = await changeOwnerOperations.updateRecordsOwner(bodyWrapper);

        if (response != null)
		{
			// Get the status code from response
			 console.log("Status Code: " + response.getStatusCode());

             let responseObject = response.getObject();

             if(responseObject != null)
             {

             if(responseObject instanceof RecordActionWrapper)
             {
                let changeowners = responseObject.getData();

                changeowners.forEach(changeowner => {

                    if(changeowner instanceof SuccessResponse)
                    {
                        console.log("Status:" + changeowner.getStatus().getValue());

                        console.log("Code : "+ changeowner.getCode().getValue());

                        console.log("Details: ");

                        let details = changeowner.getDetails();

                        if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                        }
                        console.log("Message: " + changeowner.getMessage().getValue());
                    }

                    else if( changeowner instanceof APIException)
                    {
                        console.log("Status: " + changeowner.getStatus().getValue());

                        // Get the Code
                        console.log("Code: " + changeowner.getCode().getValue());
    
                        let details = changeowner.getDetails();
    
                        console.log("Details: ");
    
                        // Get the details map
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }
    
                        // Get the Message
                        console.log("Message: " + changeowner.getMessage().getValue());
                    }
                });
             }

             else if(responseObject instanceof APIException)
             {
                console.log("Status: " + responseObject.getStatus().getValue());

                        // Get the Code
                        console.log("Code: " + responseObject.getCode().getValue());
    
                        let details = responseObject.getDetails();
    
                        console.log("Details: ");
    
                        // Get the details map
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }
    
                        // Get the Message
                        console.log("Message: " + responseObject.getMessage().getValue()); 
             }


            }
        }

    }
    
    static async updateRecordOwner(moduleAPIName,recordId)
    {
        let changeOwnerOperations = new ChangeOwnerOperations(moduleAPIName);

        let bodyWrapper = new BodyWrapper();

        let owner = new User();

        owner.setId(312938000000232001n);

		bodyWrapper.setOwner(owner);

		bodyWrapper.setNotify(true);

        // let relatedModules = [];

        // let  relatedModule = new Module();

        // relatedModule.setId(347706114686005n);

		// // Set name to the Module instance
		// relatedModule.setAPIName("Tasks");

		// // Add Module instance to the list
		// relatedModules.add(relatedModule);

        // relatedModule = new Module();

        // relatedModule.setId(347706114686005n);

		// // Set name to the Module instance
		// relatedModule.setAPIName("Tasks");

		// // Add Module instance to the list
		// relatedModules.add(relatedModule);

		// // Set the list to relatedModules in BodyWrapper instance
		// bodyWrapper.setRelatedModules(relatedModules);

        let response = await changeOwnerOperations.updateRecordOwner(recordId, bodyWrapper);

        if (response != null)
		{
			// Get the status code from response
			 console.log("Status Code: " + response.getStatusCode());

             let responseObject = response.getObject();

             if(responseObject != null)
             {

             if(responseObject instanceof RecordActionWrapper)
             {
                let changeowners = responseObject.getData();

                changeowners.forEach(changeowner => {

                    if(changeowner instanceof SuccessResponse)
                    {
                        console.log("Status:" + changeowner.getStatus().getValue());

                        console.log("Code : "+ changeowner.getCode().getValue());

                        console.log("Details: ");

                        let details = changeowner.getDetails();

                        if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                        }
                        console.log("Message: " + changeowner.getMessage().getValue());
                    }

                    else if( changeowner instanceof APIException)
                    {
                        console.log("Status: " + changeowner.getStatus().getValue());

                        // Get the Code
                        console.log("Code: " + changeowner.getCode().getValue());
    
                        let details = changeowner.getDetails();
    
                        console.log("Details: ");
    
                        // Get the details map
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }
    
                        // Get the Message
                        console.log("Message: " + changeowner.getMessage().getValue());
                    }
                });
             }

             else if(responseObject instanceof APIException)
             {
                console.log("Status: " + responseObject.getStatus().getValue());

                        // Get the Code
                        console.log("Code: " + responseObject.getCode().getValue());
    
                        let details = responseObject.getDetails();
    
                        console.log("Details: ");
    
                        // Get the details map
                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }
    
                        // Get the Message
                        console.log("Message: " + responseObject.getMessage().getValue()); 
             }


            }
        }        

    }
}

module.exports={ChangeOwner};