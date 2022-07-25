

const RolesOperations = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/roles/roles_operations").RolesOperations;
const ResponseWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/roles/response_wrapper").ResponseWrapper;
const APIException = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/roles/api_exception").APIException;
const BodyWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/roles/body_wrapper.js").BodyWrapper;
const Roles = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/roles/role.js").Role;
const User = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users/user.js").User;
const ActionWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/roles/action_wrapper.js").ActionWrapper;
const SuccessResponse = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/roles/success_response.js").SuccessResponse;


class Role {

	/**
	 * <h3> Get Roles </h3>
	 * This method is used to retrieve the data of roles through an API request and print the response.
	 */
	static async getRoles() {
		//Get instance of RolesOperations Class
		let rolesOperations = new RolesOperations();

		//Call getRoles method
		let response = await rolesOperations.getRoles();

		if (response != null) {
			//Get the status code from response
			console.log("Status Code: " + response.getStatusCode());

			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

				return;
			}

			//Get object from response
			let responseObject = response.getObject();

			if (responseObject != null) {
				//Check if expected ResponseWrapper instance is received
				if (responseObject instanceof ResponseWrapper) {
					//Get the array of obtained Role instances
					let roles = responseObject.getRoles();

					roles.forEach(async role => {
						//Get the DisplayLabel of each Role
						console.log("Role DisplayLabel: " + role.getDisplayLabel());

						//Get the forecastManager User instance of each Role
						let forecastManager = role.getForecastManager();

						//Check if forecastManager is not null
						if (forecastManager != null) {
							//Get the ID of the forecast Manager
							console.log("Role Forecast Manager User-ID: " + forecastManager.getId());

							//Get the name of the forecast Manager
							console.log("Role Forecast Manager User-Name: " + forecastManager.getName());
						}

						//Get the ShareWithPeers of each Role
						console.log("Role ShareWithPeers: " + role.getShareWithPeers());

						//Get the Name of each Role
						console.log("Role Name: " + role.getName());

						//Get the Description of each Role
						console.log("Role Description: " + role.getDescription());

						//Get the Id of each Role
						console.log("Role ID: " + role.getId());

						//Get the reportingTo User instance of each Role
						let reportingTo = role.getReportingTo();

						//Check if reportingTo is not null
						if (reportingTo != null) {
							//Get the ID of the reportingTo User
							console.log("Role ReportingTo User-ID: " + reportingTo.getId());

							//Get the name of the reportingTo User
							console.log("Role ReportingTo User-Name: " + reportingTo.getName());
						}

						//Get the AdminUser of each Role
						console.log("Role AdminUser: " + role.getAdminUser());
					});
				}
				//Check if the request returned an exception
				else if (responseObject instanceof APIException) {
					//Get the Status
					console.log("Status: " + responseObject.getStatus().getValue());

					//Get the Code
					console.log("Code: " + responseObject.getCode().getValue());

					console.log("Details");

					//Get the details map
					let details = responseObject.getDetails();

					if (details != null) {
						Array.from(details.keys()).forEach(key => {
							console.log(key + ": " + details.get(key));
						});
					}

					//Get the Message
					console.log("Message: " + responseObject.getMessage().getValue());
				}
			}
		}
	}

	/**
	 * <h3> Get Role </h3>
	 * This method is used to retrieve the data of single role through an API request and print the response.
	 * @param {BigInt} roleId The ID of the role to be obtained
	 */
	static async getRole(roleId) {
		//example
		//let roleId = 26005n;

		//Get instance of RolesOperations Class
		let rolesOperations = new RolesOperations();

		//Call getRole method that takes roleId as parameter
		let response = await rolesOperations.getRole(roleId);
		

		if (response != null) {
			//Get the status code from response
			console.log("Status Code: " + response.getStatusCode());

			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

				return;
			}

			//Get object from response
			let responseObject = response.getObject();

			if (responseObject != null) {
				//Check if expected ResponseWrapper instance is received
				if (responseObject instanceof ResponseWrapper) {
					//Get the array of obtained Role instances
					let roles = responseObject.getRoles();

					roles.forEach(role => {
						//Get the DisplayLabel of each Role
						console.log("Role DisplayLabel: " + role.getDisplayLabel());

						//Get the forecastManager User instance of each Role
						let forecastManager = role.getForecastManager();

						//Check if forecastManager is not null
						if (forecastManager != null) {
							//Get the ID of the forecast Manager
							console.log("Role Forecast Manager User-ID: " + forecastManager.getId());

							//Get the name of the forecast Manager
							console.log("Role Forecast Manager User-Name: " + forecastManager.getName());
						}

						//Get the ShareWithPeers of each Role
						console.log("Role ShareWithPeers: " + role.getShareWithPeers());

						//Get the Name of each Role
						console.log("Role Name: " + role.getName());

						//Get the Description of each Role
						console.log("Role Description: " + role.getDescription());

						//Get the Id of each Role
						console.log("Role ID: " + role.getId());

						//Get the reportingTo User instance of each Role
						let reportingTo = role.getReportingTo();

						//Check if reportingTo is not null
						if (reportingTo != null) {
							//Get the ID of the reportingTo User
							console.log("Role ReportingTo User-ID: " + reportingTo.getId());

							//Get the name of the reportingTo User
							console.log("Role ReportingTo User-Name: " + reportingTo.getName());
						}

						//Get the AdminUser of each Role
						console.log("Role AdminUser: " + role.getAdminUser());
					});
				}
				//Check if the request returned an exception
				else if (responseObject instanceof APIException) {
					//Get the Status
					console.log("Status: " + responseObject.getStatus().getValue());

					//Get the Code
					console.log("Code: " + responseObject.getCode().getValue());

					console.log("Details");

					//Get the details map
					let details = responseObject.getDetails();

					if (details != null) {
						Array.from(details.keys()).forEach(key => {
							console.log(key + ": " + details.get(key));
						});
					}

					//Get the Message
					console.log("Message: " + responseObject.getMessage().getValue());
				}
			}
		}
	}

	static async createRoles()
	{
		let rolesOperations = new RolesOperations();

		let bodyWrapper = new BodyWrapper();

		let roles = [];

		let role = new Roles();

		role.setName("Producteeer Manager");

		let reportingTo = new User();

		reportingTo.setId(312938000000031151n);

		role.setReportingTo(reportingTo);

		role.setDescription("Schedule and manage resources");

		role.setShareWithPeers(true);

		// Add ContactRole instance to the list
		roles.push(role);

		// Set the list to roles in BodyWrapper instance
		bodyWrapper.setRoles(roles);

		let response = await rolesOperations.createRoles(bodyWrapper);

		

		if(response != null)
		{
			console.log("Status Code: " + response.getStatusCode());

			let responseObject = response.getObject();

			if (responseObject != null)
			{
				if(responseObject instanceof ActionWrapper)
				{
					let actionResponses = responseObject.getRoles();

					actionResponses.forEach(actionResponse =>{

						if (actionResponse instanceof SuccessResponse) {
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

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }

						else if (actionResponse instanceof APIException) {
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
				else if (responseObject instanceof APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseObject.getDetails();

                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }

			}
		}
    }

	static async updateRoles()
	{
		let rolesOperations = new RolesOperations();

		// Get instance of BodyWrapper Class that will contain the request body
		let bodyWrapper = new BodyWrapper();

		let roles = [];

		let role = new Roles();


		role.setId(312938000000307002n);

		// Set name of the Role
		role.setName("Product Manager555");

		let reportingTo = new User();

		reportingTo.setId( 312938000000031151n);

		role.setReportingTo(reportingTo);

		role.setDescription("Schedule and manage resources and hr");

		role.setShareWithPeers(true);

		// Add ContactRole instance to the list
		roles.push(role);

		// Set the list to roles in BodyWrapper instance
		bodyWrapper.setRoles(roles);

		let response = await rolesOperations.updateRoles(bodyWrapper);

		if(response != null)
		{
			console.log("Status Code: " + response.getStatusCode());

			let responseObject = response.getObject();

			if (responseObject != null)
			{
				if(responseObject instanceof ActionWrapper)
				{
					let actionResponses = responseObject.getRoles();

					actionResponses.forEach(actionResponse =>{

						if (actionResponse instanceof SuccessResponse) {
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

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }

						else if (actionResponse instanceof APIException) {
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
				else if (responseObject instanceof APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseObject.getDetails();

                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }

			}
		}
	}

	static async updateRole(roleId)
	{
		let rolesOperations = new RolesOperations();

		// Get instance of BodyWrapper Class that will contain the request body
		let bodyWrapper = new BodyWrapper();

		let roles = [];

		let role = new Roles();

		role.setName("Product Manager3421");

		let  reportingTo = new User();

		reportingTo.setId(312938000000307007n);

		role.setReportingTo(reportingTo);

		role.setDescription("Schedule and manage resources");

		role.setShareWithPeers(true);

		// Add ContactRole instance to the list
		roles.add(role);

		// Set the list to roles in BodyWrapper instance
		bodyWrapper.setRoles(roles);

		let response = rolesOperations.updateRole(roleId, bodyWrapper);

		if(response != null)
		{
			console.log("Status Code: " + response.getStatusCode());

			let responseObject = response.getObject();

			if (responseObject != null)
			{
				if(responseObject instanceof ActionWrapper)
				{
					let actionResponses = responseObject.getRoles();

					actionResponses.forEach(actionResponse =>{

						if (actionResponse instanceof SuccessResponse) {
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

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }

						else if (actionResponse instanceof APIException) {
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
				else if (responseObject instanceof APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseObject.getDetails();

                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }

			}
		}
    } 

	static async deleteRole(roleId)
	{
		let rolesOperations = new RolesOperations();

		let paramInstance = new ParameterMap();

		paramInstance.add(DeleteRoleParam.TRANSFER_TO_ID, 34770610026008n);

		let response = rolesOperations.deleteRole(roleId, paramInstance);

		if(response != null)
		{
			console.log("Status Code: " + response.getStatusCode());

			let responseObject = response.getObject();

			if (responseObject != null)
			{
				if(responseObject instanceof ActionWrapper)
				{
					let actionResponses = responseObject.getRoles();

					actionResponses.forEach(actionResponse =>{

						if (actionResponse instanceof SuccessResponse) 
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
				else if (responseObject instanceof APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseObject.getDetails();

                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }

			}
		}

    }


}

module.exports = { Role }