const ParameterMap = require("@zohocrm/nodejs-sdk-3.0/routes/parameter_map.js").ParameterMap;
const APIException = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users_unavailability/api_exception.js").APIException;
const ActionHandler = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users_unavailability/action_handler.js").ActionHandler;
const ActionWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users_unavailability/action_wrapper").ActionWrapper;
const BodyWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users_unavailability/body_wrapper").BodyWrapper;
const Info = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users_unavailability/info").Info;
const ResponseHandler = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users_unavailability/response_handler").ResponseHandler;
const SuccessResponse = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users_unavailability/success_response").SuccessResponse;
const GetUsersUnavailabilityHoursParam = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users_unavailability/users_unavailability_operations.js").UsersUnavailabilityOperations;
const UsersUnavailabilityOperation = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users_unavailability/users_unavailability_operations.js").UsersUnavailabilityOperations;
const APIResponse = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/change_owner/action_response.js").ActionResponse;
const ZCRMusersUnavailability = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users_unavailability/users_unavailability.js").UsersUnavailability;
const User = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users/user.js").User;
const ResponseWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users_unavailability/response_wrapper.js").ResponseWrapper;
const GetUserUnavailabilityHoursParam = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users_unavailability/users_unavailability_operations.js").UsersUnavailabilityOperations;

class UsersUnavailability
{
    static async getUserUnavailabilityHours(id)
    {
        let usersUnavailabilityOperations = new UsersUnavailabilityOperation();

        let paramInstance = new ParameterMap();

        let response = await usersUnavailabilityOperations.getUserUnavailabilityHours(id, paramInstance);

        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode());
            
            if ([204, 304].includes(response.getStatusCode())) 
             {
              console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
              return;
             }
            let responseObject = response.getObject();

           if(responseObject != null)
            {
                if (responseObject instanceof ResponseWrapper)
                {
                   let users = responseObject.getUsersUnavailability();

                   users.forEach(usersUnavailability => {

                    console.log("UsersUnavailability Comments: " + usersUnavailability.getComments());

                    console.log("UsersUnavailability From: " + usersUnavailability.getFrom());
						
				      console.log("UsersUnavailability Id: " + usersUnavailability.getId());
						
				      console.log("UsersUnavailability to: " + usersUnavailability.getTo());

                    let user = usersUnavailability.getUser();

                    if (user != null)
						{
							console.log("UsersUnavailability User-Name: " + user.getName());

							console.log("UsersUnavailability User-Id: " + user.getId());
							
							console.log("UsersUnavailability User-ZuId: " + user.getZuid());
						}
                   });

                   let info = responseObject.getInfo();

                   if (info != null)
					{
						if (info.getPerPage() != null)
						{
							// Get the PerPage of the Info
							console.log("User Info PerPage: " + info.getPerPage().toString());
						}

						if (info.getCount() != null)
						{
							// Get the Count of the Info
							console.log("User Info Count: " + info.getCount().toString());
						}

						if (info.getPage() != null)
						{
							// Get the Page of the Info
							console.log("User Info Page: " + info.getPage().toString());
						}

						if (info.getMoreRecords() != null)
						{
							// Get the MoreRecords of the Info
							console.log("User Info MoreRecords: " + info.getMoreRecords().toString());
						}
					}

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

    static async usersUnavailabilityHours()
    {
        let usersOperations = new UsersUnavailabilityOperation();

        let request = new BodyWrapper();

        let userList =  [];

        let user1 = new ZCRMusersUnavailability();

        user1.setComments("Unavailable");

        let from = new Date('2022-08-14 04:30:00 UTC');

        user1.setFrom(from);

        let to = new Date('2022-08-16 04:30:00 UTC');

        user1.setTo(to);

        let user = new User();

        user.setId(312938000000232001n);
		
		user1.setUser(user);

		userList.push(user1);

		request.setUsersUnavailability(userList);

        let response = await usersOperations.usersUnavailabilityHours(request);

        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode());

            let responseObject = response.getObject();

            if(responseObject != null)
            {
                if (responseObject instanceof ActionWrapper)
                {
                   let actionResponses = responseObject.getUsersUnavailability();
                   
                   actionResponses.forEach(actionResponse =>{

                    if (actionResponse instanceof SuccessResponse)
                    {
                        console.log("Status: " + actionResponse.getStatus().getValue());

						//Get the Code
						console.log("Code: " + actionResponse.getCode().getValue());

						console.log("Details");

						//Get the details map
						let details = actionResponse.getDetails();

						if (details != null) {
					    	Array.from(details.keys()).forEach(key => {
								console.log(key + ": " + details.get(key));
								});
							}

						console.log("Message: " + actionResponse.getMessage().getValue());
                    }
                        //Check if the request returned an exception
					else if (actionResponse instanceof APIException) 
                    {
						//Get the Status
						console.log("Status: " + actionResponse.getStatus().getValue());

						//Get the Code
						console.log("Code: " + actionResponse.getCode().getValue());

						console.log("Details");

						//Get the details map
						let details = actionResponse.getDetails();

						if (details != null) {
								Array.from(details.keys()).forEach(key => {
									console.log(key + ": " + details.get(key));
								});
							}

					    //Get the Message
						console.log("Message: " + actionResponse.getMessage().getValue());
						
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

    static async updateUsersUnavailabilityHours()
    {
        let usersOperations = new UsersUnavailabilityOperation();

        let request = new BodyWrapper();

        let userList = [];

        let  user1 = new ZCRMusersUnavailability();

        user1.setComments("Unavailable");
		
		user1.setId(312938000000343001n);
		
		let  from = new Date('2022-08-15 04:30:00 UTC');

		user1.setFrom(from);
		
		let  to = new Date('2022-08-16 04:30:00 UTC');

		user1.setTo(to);

        let user = new User();

        user.setId(312938000000232001n);
		
		user1.setUser(user);

		userList.push(user1);

		request.setUsersUnavailability(userList);

        let response = await usersOperations.updateUsersUnavailabilityHours(request);

        if(response != null)
        {
            console.log("Status Code: " + response.getStatusCode());

            let responseObject = response.getObject();

            if(responseObject != null)
            {
                if(responseObject instanceof  ActionWrapper)
                {
                    let actionResponses = responseObject.getUsersUnavailability();

                    actionResponses.forEach(actionResponse => {

                    if (actionResponse instanceof SuccessResponse)
                      {
                        console.log("Status: " + actionResponse.getStatus().getValue());

						//Get the Code
						console.log("Code: " + actionResponse.getCode().getValue());

						console.log("Details");

						//Get the details map
						let details = actionResponse.getDetails();

						if (details != null) {
					    	Array.from(details.keys()).forEach(key => {
								console.log(key + ": " + details.get(key));
								});
							}

						console.log("Message: " + actionResponse.getMessage().getValue());
                      }

                      else if (actionResponse instanceof APIException) 
                      {
                          //Get the Status
                          console.log("Status: " + actionResponse.getStatus().getValue());
  
                          //Get the Code
                          console.log("Code: " + actionResponse.getCode().getValue());
  
                          console.log("Details");
  
                          //Get the details map
                          let details = actionResponse.getDetails();
  
                          if (details != null) {
                                  Array.from(details.keys()).forEach(key => {
                                      console.log(key + ": " + details.get(key));
                                  });
                              }
  
                          //Get the Message
                          console.log("Message: " + actionResponse.getMessage().getValue());
                          
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

    static async deleteUsersUnavailabilityHour(id)
    {
        let usersOperations = new UsersUnavailabilityOperation();

        let response = await usersOperations.deleteUsersUnavailabilityHour(id);

        if (response != null)
        {

            console.log("Status Code: " + response.getStatusCode());

            let responseObject = response.getObject();

            if(responseObject instanceof ActionWrapper)
            {
                let actionResponses = responseObject.getUsersUnavailability();

                actionResponses.forEach(actionResponse => {

                    if(actionResponse instanceof SuccessResponse)
                    {
                        console.log("Status: " + actionResponse.getStatus().getValue());

						//Get the Code
						console.log("Code: " + actionResponse.getCode().getValue());

						console.log("Details");

						//Get the details map
						let details = actionResponse.getDetails();

						if (details != null) {
					    	Array.from(details.keys()).forEach(key => {
								console.log(key + ": " + details.get(key));
								});
							}

						console.log("Message: " + actionResponse.getMessage().getValue());

                    }
                    else if (actionResponse instanceof APIException) 
                    {
                        //Get the Status
                        console.log("Status: " + actionResponse.getStatus().getValue());

                        //Get the Code
                        console.log("Code: " + actionResponse.getCode().getValue());

                        console.log("Details");

                        //Get the details map
                        let details = actionResponse.getDetails();

                        if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                        //Get the Message
                        console.log("Message: " + actionResponse.getMessage().getValue());
                        
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

    static async getUsersUnavailabilityHours()
    {
         let usersOperations = new UsersUnavailabilityOperation();

        let paramInstance = new ParameterMap();

        // await paramInstance.add(GetUsersUnavailabilityHoursParam.GROUP_IDS, "347706109,34770610912");

		// await paramInstance.add(GetUsersUnavailabilityHoursParam.INCLUDE_INNER_DETAILS, "56xxx8");
		
		// await paramInstance.add(GetUsersUnavailabilityHoursParam.ROLE_IDS, "3433706109,34037061091");

        // await paramInstance.add(GetUsersUnavailabilityHoursParam.TERRITORY_IDS, 312938000000321221n);

    //    let filters = {};

    //     filters.group_operator = 'or';

    //     filters.group=[];

    //     filters.group.push({});

    //     filters.group[0].comparator='between'

    //     filters.group[0].field = { api_name: 'from'};

    //     filters.group[0].value = [ '2021-09-18T19:00:00+05:30', '2021-09-19T19:00:00+05:30'];

    //     filters.group.push({});

    //     filters.group[1].comparator = 'between';

    //     filters.group[1]. field = {api_name: 'to'};

    //     filters.group[1].value = ['2022-09-18T19:00:00+05:30','2021-09-19T19:00:00+05:30'];




        // await paramInstance.add(GetUsersUnavailabilityHoursParam.FILTERS, JSON.stringify(filters,null,4));


        let response = await usersOperations.getUsersUnavailabilityHours(paramInstance);

        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) 
             {
              console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
              return;
             }
            let responseObject = response.getObject();

            if(responseObject != null)
            {
                if (responseObject instanceof ResponseWrapper)
                {
                   let users = responseObject.getUsersUnavailability();

                   users.forEach(usersUnavailability => {

                    console.log("UsersUnavailability Comments: " + usersUnavailability.getComments());

                    console.log("UsersUnavailability From: " + usersUnavailability.getFrom());
						
				      console.log("UsersUnavailability Id: " + usersUnavailability.getId());
						
				      console.log("UsersUnavailability to: " + usersUnavailability.getTo());

                    let user = usersUnavailability.getUser();

                    if (user != null)
						{
							console.log("UsersUnavailability User-Name: " + user.getName());

							console.log("UsersUnavailability User-Id: " + user.getId());
							
							console.log("UsersUnavailability User-ZuId: " + user.getZuid());
						}
                   });

                   let info = responseObject.getInfo();

                   if (info != null)
					{
						if (info.getPerPage() != null)
						{
							// Get the PerPage of the Info
							console.log("User Info PerPage: " + info.getPerPage().toString());
						}

						if (info.getCount() != null)
						{
							// Get the Count of the Info
							console.log("User Info Count: " + info.getCount().toString());
						}

						if (info.getPage() != null)
						{
							// Get the Page of the Info
							console.log("User Info Page: " + info.getPage().toString());
						}

						if (info.getMoreRecords() != null)
						{
							// Get the MoreRecords of the Info
							console.log("User Info MoreRecords: " + info.getMoreRecords().toString());
						}
					}

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

module.exports ={UsersUnavailability};