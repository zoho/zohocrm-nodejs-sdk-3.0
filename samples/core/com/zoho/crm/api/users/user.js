const { UsersOperations, GetUserHeader, GetUsersHeader, GetUsersParam, GetTerritoriesofUserParam} = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users/users_operations");
const ResponseWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users/response_wrapper").ResponseWrapper;
const ZCRMUser = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users/user").User;
const ZCRMRole = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/roles/role").Role;
const ZCRMProfile = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/profiles/profile").Profile;
const ActionWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users/action_wrapper").ActionWrapper;
const BodyWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users/body_wrapper").BodyWrapper;
const RequestWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users/request_wrapper").RequestWrapper;
const APIException = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users/api_exception").APIException;
const SuccessResponse = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users/success_response").SuccessResponse;
const ParameterMap = require("@zohocrm/nodejs-sdk-3.0/routes/parameter_map").ParameterMap;
const HeaderMap = require("@zohocrm/nodejs-sdk-3.0/routes/header_map").HeaderMap;
const TerritoryResponseWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users/territory_response_wrapper.js").TerritoryResponseWrapper;
const TerritoryBodyWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users/territory_body_wrapper.js").TerritoryBodyWrapper;
const ZCRMTerritory = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users/territory.js").Territory;
const TerritoryActionWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users/territory_action_wrapper.js").TerritoryActionWrapper;
const TransferActionWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users/transfer_action_wrapper.js").TransferActionWrapper;
const TransferBodyWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users/transfer_body_wrapper.js").TransferBodyWrapper;
const TransferringResponseWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users/transferring_response_wrapper.js").TransferringResponseWrapper;

class User {

	/**
	 * <h3> Get Users </h3>
	 * This method is used to retrieve the users data specified in the API request.
	 */
	static async getUsers() {
		//Get instance of UsersOperations Class
		let usersOperations = new UsersOperations();

		//Get instance of ParameterMap Class
		let paramInstance = new ParameterMap();

		/* Possible parameters for Get Users operation */
		await paramInstance.add(GetUsersParam.TYPE, "ActiveUsers");

		await paramInstance.add(GetUsersParam.PAGE, 1);

		await paramInstance.add(GetUsersParam.PER_PAGE, 200);

		//Get instance of HeaderMap Class
		let headerInstance = new HeaderMap();

		/* Possible headers for Get Users operation */
		await headerInstance.add(GetUsersHeader.IF_MODIFIED_SINCE, new Date("2019-07-07T10:00:00+05:30"));

		//Call getUsers method that takes ParameterMap instance and HeaderMap instance as parameters
		let response = await usersOperations.getUsers(paramInstance, headerInstance);

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
					//Get the array of obtained User instances
					let users = responseObject.getUsers();

					users.forEach(user => {
						//Get the Country of each User
						console.log("User Country: " + user.getCountry());

						// Get the Role instance of each User
						let role = user.getRole();

						//Check if role is not null
						if (role != null) {
							//Get the Name of each Role
							console.log("User Role Name: " + role.getName());

							//Get the ID of each Role
							console.log("User Role ID: " + role.getId());
						}

						// Get the CustomizeInfo instance of each User
						let customizeInfo = user.getCustomizeInfo();

						//Check if customizeInfo is not null
						if (customizeInfo != null) {
							if (customizeInfo.getNotesDesc() != null) {
								//Get the NotesDesc of each User
								console.log("User CustomizeInfo NotesDesc: " + customizeInfo.getNotesDesc().toString());
							}

							if (customizeInfo.getShowRightPanel() != null) {
								//Get the ShowRightPanel of each User
								console.log("User CustomizeInfo ShowRightPanel: " + customizeInfo.getShowRightPanel().toString());
							}

							if (customizeInfo.getBcView() != null) {
								//Get the BcView of each User
								console.log("User CustomizeInfo BcView: " + customizeInfo.getBcView().toString());
							}

							if (customizeInfo.getShowHome() != null) {
								//Get the ShowHome of each User
								console.log("User CustomizeInfo ShowHome: " + customizeInfo.getShowHome().toString());
							}

							if (customizeInfo.getShowDetailView() != null) {
								//Get the ShowDetailView of each User
								console.log("User CustomizeInfo ShowDetailView: " + customizeInfo.getShowDetailView().toString());
							}

							if (customizeInfo.getUnpinRecentItem() != null) {
								//Get the UnpinRecentItem of each User
								console.log("User CustomizeInfo UnpinRecentItem: " + customizeInfo.getUnpinRecentItem().toString());
							}
						}

						//Get the Signature of each User
						console.log("User Signature: " + user.getSignature());

						//Get the City of each User
						console.log("User City: " + user.getCity());

						//Get the SortOrderPreference of each User
						console.log("User SortOrderPreference: " + user.getSortOrderPreference());

						//Get the NameFormat of each User
						console.log("User NameFormat: " + user.getNameFormat());

						//Get the Language of each User
						console.log("User Language: " + user.getLanguage());

						//Get the Locale of each User
						console.log("User Locale: " + user.getLocale());

						//Get the Microsoft of each User
						console.log("User Microsoft: " + user.getMicrosoft().toString());

						if (user.getPersonalAccount() != null) {
							//Get the PersonalAccount of each User
							console.log("User PersonalAccount: " + user.getPersonalAccount().toString());
						}

						//Get the DefaultTabGroup of each User
						console.log("User DefaultTabGroup: " + user.getDefaultTabGroup());

						//Get the Isonline of each User
						console.log("User Isonline: " + user.getIsonline().toString());

						//Get the modifiedBy User instance of each User
						let modifiedBy = user.getModifiedBy();

						//Check if modifiedBy is not null
						if (modifiedBy != null) {
							//Get the Name of the modifiedBy User
							console.log("User Modified By User-Name: " + modifiedBy.getName());

							//Get the ID of the modifiedBy User
							console.log("User Modified By User-ID: " + modifiedBy.getId());
						}

						//Get the Street of each User
						console.log("User Street: " + user.getStreet());

						//Get the Currency of each User
						console.log("User Currency: " + user.getCurrency());

						//Get the Alias of each User
						console.log("User Alias: " + user.getAlias());

						// Get the Theme instance of each User
						let theme = user.getTheme();

						//Check if theme is not null
						if (theme != null) {
							// Get the TabTheme instance of Theme
							let normalTab = theme.getNormalTab();

							//Check if normalTab is not null
							if (normalTab != null) {
								//Get the FontColor of NormalTab
								console.log("User Theme NormalTab FontColor: " + normalTab.getFontColor());

								//Get the Background of NormalTab
								console.log("User Theme NormalTab Name: " + normalTab.getBackground());
							}

							// Get the TabTheme instance of Theme
							let selectedTab = theme.getSelectedTab();

							//Check if selectedTab is not null
							if (selectedTab != null) {
								//Get the FontColor of SelectedTab
								console.log("User Theme SelectedTab FontColor: " + selectedTab.getFontColor());

								//Get the Name of SelectedTab
								console.log("User Theme SelectedTab Name: " + selectedTab.getBackground());
							}

							//Get the NewBackground of each Theme
							console.log("User Theme NewBackground: " + theme.getNewBackground());

							//Get the Background of each Theme
							console.log("User Theme Background: " + theme.getBackground());

							//Get the Screen of each Theme
							console.log("User Theme Screen: " + theme.getScreen());

							//Get the Type of each Theme
							console.log("User Theme Type: " + theme.getType());
						}

						//Get the ID of each User
						console.log("User ID: " + user.getId());

						//Get the State of each User
						console.log("User State: " + user.getState());

						//Get the Fax of each User
						console.log("User Fax: " + user.getFax());

						//Get the CountryLocale of each User
						console.log("User CountryLocale: " + user.getCountryLocale());

						//Get the SandboxDeveloper of each User
						console.log("User SandboxDeveloper: " + user.getSandboxdeveloper());

						//Get the FirstName of each User
						console.log("User FirstName: " + user.getFirstName());

						//Get the Email of each User
						console.log("User Email: " + user.getEmail());

						//Get the reportingTo User instance of each User
						let reportingTo = user.getReportingTo();

						//Check if reportingTo is not null
						if (reportingTo != null) {
							//Get the Name of the reportingTo User
							console.log("User ReportingTo Name: " + reportingTo.getName());

							//Get the ID of the reportingTo User
							console.log("User ReportingTo ID: " + reportingTo.getId());
						}

						//Get the DecimalSeparator of each User
						console.log("User DecimalSeparator: " + user.getDecimalSeparator());

						//Get the Zip of each User
						console.log("User Zip: " + user.getZip());

						//Get the CreatedTime of each User
						console.log("User CreatedTime: " + user.getCreatedTime());

						//Get the Website of each User
						console.log("User Website: " + user.getWebsite());

						//Get the ModifiedTime of each User
						console.log("User ModifiedTime: " + user.getModifiedTime());

						//Get the TimeFormat of each User
						console.log("User TimeFormat: " + user.getTimeFormat());

						//Get the Offset of each User
						console.log("User Offset: " + user.getOffset().toString());

						//Get the Profile instance of each User
						let profile = user.getProfile();

						//Check if profile is not null
						if (profile != null) {
							//Get the Name of each Profile
							console.log("User Profile Name: " + profile.getName());

							//Get the ID of each Profile
							console.log("User Profile ID: " + profile.getId());
						}

						//Get the Mobile of each User
						console.log("User Mobile: " + user.getMobile());

						//Get the LastName of each User
						console.log("User LastName: " + user.getLastName());

						//Get the TimeZone of each User
						console.log("User TimeZone: " + user.getTimeZone());

						//Get the createdBy User instance of each User
						let createdBy = user.getCreatedBy();

						//Check if createdBy is not null
						if (createdBy != null) {
							//Get the Name of the createdBy User
							console.log("User Created By User-Name: " + createdBy.getName());

							//Get the ID of the createdBy User
							console.log("User Created By User-ID: " + createdBy.getId());
						}

						//Get the Zuid of each User
						console.log("User Zuid: " + user.getZuid());

						//Get the Confirm of each User
						console.log("User Confirm: " + user.getConfirm().toString());

						//Get the FullName of each User
						console.log("User FullName: " + user.getFullName());

						//Get the Phone of each User
						console.log("User Phone: " + user.getPhone());

						//Get the DOB of each User
						console.log("User DOB: " + user.getDob());

						//Get the DateFormat of each User
						console.log("User DateFormat: " + user.getDateFormat());

						//Get the Status of each User
						console.log("User Status: " + user.getStatus());
					});

					//Get the obtained Info object
					let info = responseObject.getInfo();

					if (info != null) {
						if (info.getPerPage() != null) {
							//Get the PerPage of the Info
							console.log("User Info PerPage: " + info.getPerPage().toString());
						}

						if (info.getCount() != null) {
							//Get the Count of the Info
							console.log("User Info Count: " + info.getCount().toString());
						}

						if (info.getPage() != null) {
							//Get the Page of the Info
							console.log("User Info Page: " + info.getPage().toString());
						}

						if (info.getMoreRecords() != null) {
							//Get the MoreRecords of the Info
							console.log("User Info MoreRecords: " + info.getMoreRecords().toString());
						}
					}
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
	 * <h3> Create Users </h3>
	 * This method is used to add a user to your organization and print the response.
	 */
	static async createUser() {
		//Get instance of UsersOperations Class
		let usersOperations = new UsersOperations();

		//Get instance of RequestWrapper Class that will contain the request body
		let request = new RequestWrapper();

		//Array to hold User instances
		let userArray = [];

		//Get instance of User Class
		let user = new ZCRMUser();

		//Get instance of Role Class
		let role = new ZCRMRole();

		//Set ID to Role instance
		role.setId(34770610026008n);

		//Set Role instance to role in User
		user.setRole(role);

		user.setCountryLocale("en_US");

		user.setFirstName("Test");

		user.setLastName("User");

		user.setEmail("testuser1234567@zoho.com");

		//Get instance of Profile Class
		let profile = new ZCRMProfile();

		profile.setId(34770610026014n);

		//Set profile instance to profile in User instance
		user.setProfile(profile);

		//Add the User instance to array
		userArray.push(user);

		//Set the array to users in RequestWrapper instance
		request.setUsers(userArray);

		//Call createUser method that takes RequestWrapper class instance as parameter
		let response = await usersOperations.createUser(request);

		if (response != null) {
			//Get the status code from response
			console.log("Status Code: " + response.getStatusCode());

			//Get object from response
			let responseObject = response.getObject();

			if (responseObject != null) {
				//Check if expected ActionWrapper instance is received
				if (responseObject instanceof ActionWrapper) {
					//Get the array of obtained ActionResponse instances
					let actionResponses = responseObject.getUsers();

					actionResponses.forEach(actionResponse => {
						//Check if the request is successful
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
						//Check if the request returned an exception
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
	 * <h3> Update Users </h3>
	 * This method is used to update the details of multiple users of your organization and print the response.
	 */
	static async updateUsers() {
		//Get instance of UsersOperations Class
		let usersOperations = new UsersOperations();

		//Get instance of BodyWrapper Class that will contain the request body
		let request = new BodyWrapper();

		//Array to hold User instances
		let userArray = [];

		//Get instance of User Class
		let user = new ZCRMUser();

		//Set ID to User instance
		user.setId(312938000000232001n);

		//Get instance of Role Class
		let role = new ZCRMRole();

		//Set ID to Role instance
		role.setId(312938000000031151n);

		//Set role instance to role in User
		user.setRole(role);

		user.setCountryLocale("en_US");

		//Add User instance to array
		userArray.push(user);

		//Set the array to users in BodyWrapper
		request.setUsers(userArray);

		//Call updateUsers method that takes BodyWrapper instance as parameter
		let response = await usersOperations.updateUsers(request);

		if (response != null) {
			//Get the status code from response
			console.log("Status Code: " + response.getStatusCode());

			//Get object from response
			let responseObject = response.getObject();

			if (responseObject != null) {
				//Check if expected ActionWrapper instance is received
				if (responseObject instanceof ActionWrapper) {
					//Get the array of obtained ActionResponse instances
					let actionResponses = responseObject.getUsers();

					actionResponses.forEach(actionResponse => {
						//Check if the request is successful
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
						//Check if the request returned an exception
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
	 * <h3> Get User </h3>
	 * This method is used to get the details of any specific user.
	 * Specify the unique id of the user in your API request to get the data for that particular user.
	 * @param {BigInt} userId The ID of the User to be obtained
	 */
	static async getuser(userId) {
		//example
		//let userId = 302031n;

		//Get instance of UsersOperations Class
		let usersOperations = new UsersOperations();

		//Get instance of HeaderMap Class
		let headerInstance = new HeaderMap();

		/* Possible parameters for Get User operation */
		await headerInstance.add(GetUserHeader.IF_MODIFIED_SINCE, new Date("2019-12-12T12:12:12+05:30"));

		//Call getUser method that takes headerInstance and userId as parameters
		let response = await usersOperations.getUser(userId, headerInstance);

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
					//Get the array of obtained User instances
					let users = responseObject.getUsers();

					users.forEach(user => {
						//Get the Country of each User
						console.log("User Country: " + user.getCountry());

						// Get the Role instance of each User
						let role = user.getRole();

						//Check if role is not null
						if (role != null) {
							//Get the Name of each Role
							console.log("User Role Name: " + role.getName());

							//Get the ID of each Role
							console.log("User Role ID: " + role.getId());
						}

						// Get the CustomizeInfo instance of each User
						let customizeInfo = user.getCustomizeInfo();

						//Check if customizeInfo is not null
						if (customizeInfo != null) {
							if (customizeInfo.getNotesDesc() != null) {
								//Get the NotesDesc of each User
								console.log("User CustomizeInfo NotesDesc: " + customizeInfo.getNotesDesc().toString());
							}

							if (customizeInfo.getShowRightPanel() != null) {
								//Get the ShowRightPanel of each User
								console.log("User CustomizeInfo ShowRightPanel: " + customizeInfo.getShowRightPanel().toString());
							}

							if (customizeInfo.getBcView() != null) {
								//Get the BcView of each User
								console.log("User CustomizeInfo BcView: " + customizeInfo.getBcView().toString());
							}

							if (customizeInfo.getShowHome() != null) {
								//Get the ShowHome of each User
								console.log("User CustomizeInfo ShowHome: " + customizeInfo.getShowHome().toString());
							}

							if (customizeInfo.getShowDetailView() != null) {
								//Get the ShowDetailView of each User
								console.log("User CustomizeInfo ShowDetailView: " + customizeInfo.getShowDetailView().toString());
							}

							if (customizeInfo.getUnpinRecentItem() != null) {
								//Get the UnpinRecentItem of each User
								console.log("User CustomizeInfo UnpinRecentItem: " + customizeInfo.getUnpinRecentItem().toString());
							}
						}

						//Get the Signature of each User
						console.log("User Signature: " + user.getSignature());

						//Get the SortOrderPreference of each User
						console.log("User SortOrderPreference: " + user.getSortOrderPreference());

						//Get the City of each User
						console.log("User City: " + user.getCity());

						//Get the NameFormat of each User
						console.log("User NameFormat: " + user.getNameFormat());

						//Get the Language of each User
						console.log("User Language: " + user.getLanguage());

						//Get the Locale of each User
						console.log("User Locale: " + user.getLocale());

						//Get the Microsoft of each User
						console.log("User Microsoft: " + user.getMicrosoft().toString());

						if (user.getPersonalAccount() != null) {
							//Get the PersonalAccount of each User
							console.log("User PersonalAccount: " + user.getPersonalAccount().toString());
						}

						//Get the DefaultTabGroup of each User
						console.log("User DefaultTabGroup: " + user.getDefaultTabGroup());

						//Get the Isonline of each User
						console.log("User Isonline: " + user.getIsonline().toString());

						//Get the modifiedBy User instance of each User
						let modifiedBy = user.getModifiedBy();

						//Check if modifiedBy is not null
						if (modifiedBy != null) {
							//Get the Name of the modifiedBy User
							console.log("User Modified By User-Name: " + modifiedBy.getName());

							//Get the ID of the modifiedBy User
							console.log("User Modified By User-ID: " + modifiedBy.getId());
						}

						//Get the Street of each User
						console.log("User Street: " + user.getStreet());

						//Get the Currency of each User
						console.log("User Currency: " + user.getCurrency());

						//Get the Alias of each User
						console.log("User Alias: " + user.getAlias());

						// Get the Theme instance of each User
						let theme = user.getTheme();

						//Check if theme is not null
						if (theme != null) {
							// Get the TabTheme instance of Theme
							let normalTab = theme.getNormalTab();

							//Check if normalTab is not null
							if (normalTab != null) {
								//Get the FontColor of NormalTab
								console.log("User Theme NormalTab FontColor: " + normalTab.getFontColor());

								//Get the Name of NormalTab
								console.log("User Theme NormalTab Name: " + normalTab.getBackground());
							}

							// Get the TabTheme instance of Theme
							let selectedTab = theme.getSelectedTab();

							//Check if selectedTab is not null
							if (selectedTab != null) {
								//Get the FontColor of SelectedTab
								console.log("User Theme SelectedTab FontColor: " + selectedTab.getFontColor());

								//Get the Name of SelectedTab
								console.log("User Theme SelectedTab Name: " + selectedTab.getBackground());
							}

							//Get the NewBackground of each Theme
							console.log("User Theme NewBackground: " + theme.getNewBackground());

							//Get the Background of each Theme
							console.log("User Theme Background: " + theme.getBackground());

							//Get the Screen of each Theme
							console.log("User Theme Screen: " + theme.getScreen());

							//Get the Type of each Theme
							console.log("User Theme Type: " + theme.getType());
						}

						//Get the ID of each User
						console.log("User ID: " + user.getId());

						//Get the State of each User
						console.log("User State: " + user.getState());

						//Get the Fax of each User
						console.log("User Fax: " + user.getFax());

						//Get the CountryLocale of each User
						console.log("User CountryLocale: " + user.getCountryLocale());

						//Get the SandboxDeveloper of each User
						console.log("User SandboxDeveloper: " + user.getSandboxdeveloper());

						//Get the FirstName of each User
						console.log("User FirstName: " + user.getFirstName());

						//Get the Email of each User
						console.log("User Email: " + user.getEmail());

						//Get the reportingTo User instance of each User
						let reportingTo = user.getReportingTo();

						//Check if reportingTo is not null
						if (reportingTo != null) {
							//Get the Name of the reportingTo User
							console.log("User ReportingTo Name: " + reportingTo.getName());

							//Get the ID of the reportingTo User
							console.log("User ReportingTo ID: " + reportingTo.getId());
						}

						//Get the DecimalSeparator of each User
						console.log("User DecimalSeparator: " + user.getDecimalSeparator());

						//Get the Zip of each User
						console.log("User Zip: " + user.getZip());

						//Get the CreatedTime of each User
						console.log("User CreatedTime: " + user.getCreatedTime());

						//Get the Website of each User
						console.log("User Website: " + user.getWebsite());

						//Get the ModifiedTime of each User
						console.log("User ModifiedTime: " + user.getModifiedTime());

						//Get the TimeFormat of each User
						console.log("User TimeFormat: " + user.getTimeFormat());

						//Get the Offset of each User
						console.log("User Offset: " + user.getOffset().toString());

						//Get the Profile instance of each User
						let profile = user.getProfile();

						//Check if profile is not null
						if (profile != null) {
							//Get the Name of each Profile
							console.log("User Profile Name: " + profile.getName());

							//Get the ID of each Profile
							console.log("User Profile ID: " + profile.getId());
						}

						//Get the Mobile of each User
						console.log("User Mobile: " + user.getMobile());

						//Get the LastName of each User
						console.log("User LastName: " + user.getLastName());

						//Get the TimeZone of each User
						console.log("User TimeZone: " + user.getTimeZone());

						//Get the createdBy User instance of each User
						let createdBy = user.getCreatedBy();

						//Check if createdBy is not null
						if (createdBy != null) {
							//Get the Name of the createdBy User
							console.log("User Created By User-Name: " + createdBy.getName());

							//Get the ID of the createdBy User
							console.log("User Created By User-ID: " + createdBy.getId());
						}

						//Get the Zuid of each User
						console.log("User Zuid: " + user.getZuid());

						//Get the Confirm of each User
						console.log("User Confirm: " + user.getConfirm().toString());

						//Get the FullName of each User
						console.log("User FullName: " + user.getFullName());


						//Get the Phone of each User
						console.log("User Phone: " + user.getPhone());

						//Get the DOB of each User
						console.log("User DOB: " + user.getDob());

						//Get the DateFormat of each User
						console.log("User DateFormat: " + user.getDateFormat());

						//Get the Status of each User
						console.log("User Status: " + user.getStatus());
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
	 * <h3> Get User </h3>
	 * This method is used to update the details of any specific user.
	 * @param {BigInt} userId The ID of the User to be updated
	 */
	static async updateUser(userId) {
		//example
		//let userId = 302031n;

		//Get instance of UsersOperations Class
		let usersOperations = new UsersOperations();

		//Get instance of BodyWrapper Class that will contain the request body
		let request = new BodyWrapper();

		//Array to hold User instances
		let userArray = [];

		//Get instance of User Class
		let user = new ZCRMUser();

		//Get instance of Role Class
		let role = new ZCRMRole();

		//Set ID to role
		role.setId(34770610026008n);

		//Set role instance to role in User instance
		user.setRole(role);

		//Set the country locale
		user.setCountryLocale("en_US");

		//Add the User instance to the array
		userArray.push(user);

		//Set the array to users in BodyWrapper instance
		request.setUsers(userArray);

		//Call updateUser method that takes BodyWrapper instance and userId as parameters
		let response = await usersOperations.updateUser(userId, request);

		if (response != null) {
			//Get the status code from response
			console.log("Status Code: " + response.getStatusCode());

			//Get object from response
			let responseObject = response.getObject();

			if (responseObject != null) {
				//Check if expected ActionWrapper instance is received
				if (responseObject instanceof ActionWrapper) {
					//Get the array of obtained ActionResponse instances
					let actionResponses = responseObject.getUsers();

					actionResponses.forEach(actionResponse => {
						//Check if the request is successful
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
						//Check if the request returned an exception
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
	 * <h3> Delete User </h3>
	 * This method is used to delete a user from your organization and print the response.
	 * @param {BigInt} userId The ID of the User to be deleted
	 */
	static async deleteUser(userId) {
		//example
		//let userId = 302031n;

		//Get instance of UsersOperations Class
		let usersOperations = new UsersOperations();

		//Call deleteUser method that takes userId as parameter
		let response = await usersOperations.deleteUser(userId);

		if (response != null) {

			//Get the status code from response
			console.log("Status Code: " + response.getStatusCode());

			//Get object from response
			let responseObject = response.getObject();

			if (responseObject != null) {
				//Check if expected ActionWrapper instance is received
				if (responseObject instanceof ActionWrapper) {
					//Get the array of obtained ActionResponse instances
					let actionResponses = responseObject.getUsers();

					actionResponses.forEach(actionResponse => {
						//Check if the request is successful
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
						//Check if the request returned an exception
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

	

	static async getTerritoriesOfUser(userId)
	{
       let  usersOperations = new UsersOperations();

	   // Get instance of ParameterMap Class
	   let paramInstance = new ParameterMap();

	   paramInstance.add(GetTerritoriesofUserParam.PAGE, 1);

	   let response = await usersOperations.getTerritoriesOfUser(userId, paramInstance);

	   if (response != null)
	   {
		   console.log("Status Code: " + response.getStatusCode());

		   if ([204, 304].includes(response.getStatusCode())) 
		   {
			console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

			return;
		   }

		//Get object from response
		  let responseObject = response.getObject();

		  if (responseObject instanceof TerritoryResponseWrapper)
		   {
			let usersTerritory = responseObject.getTerritories();

			usersTerritory.forEach( territory => {

				console.log("User Territory ID: " + territory.getId());

				let manager = territory.getManager();

				if (manager != null)
				{
				  // Get the Name of the Manager
				  console.log("User Territory Manager Name: " + manager.getName());

				  // Get the ID of the Manager
				  console.log("User Territory Manager ID: " + manager.getId());
				}

				let reportingTo = territory.getReportingTo();

				if (reportingTo != null)
				{
				  // Get the Name of the ReportingTo
				  console.log("User Territory ReportingTo Name: " + reportingTo.getName());

				 // Get the ID of the ReportingTo
				 console.log("User Territory ReportingTo ID: " + reportingTo.getId());
				}

				console.log("User Territory Name: " + territory.getName());
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

		  else if (responseObject instanceof APIException)
		  {
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

	static async updateTerritoriesOfUser(userId)
	{
		let usersOperations = new UsersOperations();

		let request = new TerritoryBodyWrapper();

		let userTerritoryList = [];

		let territory = new ZCRMTerritory();

		territory.setId(34770613051397n);

		userTerritoryList.push(territory);

		request.setTerritories(userTerritoryList);

		let  response = await usersOperations.updateTerritoriesOfUser(userId, request);

		if(response != null)
		{
			console.log("Status Code: " + response.getStatusCode());

			let responseObject = response.getObject();

			if(responseObject != null)
			{
				if(responseObject instanceof TerritoryActionWrapper)
				{
					let actionResponses = responseObject.getTerritories();

					actionResponses.forEach(actionResponse => {

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
						//Check if the request returned an exception
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

	static async getSpecificTerritoryOfUser(userId, territoryId)
	{
		let usersOperations = new UsersOperations();

		let response = await usersOperations.getSpecificTerritoryOfUser(territoryId, userId);

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
			   if(responseObject instanceof TerritoryResponseWrapper)
			   {
				   let usersTerritory = responseObject.getTerritories();

				   usersTerritory.forEach(territory => {

					console.log("User Territory ID: " + territory.getId());

					let manager = territory.getManager();

					// Check if manager is not null
					if (manager != null)
					{
						// Get the Name of the Manager
						console.log("User Territory Manager Name: " + manager.getName());

						// Get the ID of the Manager
						console.log("User Territory Manager ID: " + manager.getId());
					}

					let reportingTo = territory.getReportingTo();
					
					// Check if reportingTo is not null
					if (reportingTo != null)
					{
						// Get the Name of the ReportingTo
						console.log("User Territory ReportingTo Name: " + reportingTo.getName());

						// Get the ID of the ReportingTo
						console.log("User Territory ReportingTo ID: " + reportingTo.getId());
					}

					console.log("User Territory Name: " + territory.getName());

				   });
			   }
			   else if (responseObject instanceof APIException)
			   {
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

	static async getValidateTerritoriesBeforeTransferring(userId)
    {
        let usersOperations = new UsersOperations();

        let response = await usersOperations.getValidateTerritoriesBeforeTransferring(userId);

        if (response != null)
        {
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) 
            {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }

            let responseObject = response.getObject();

            if(responseObject instanceof  TransferringResponseWrapper)
            {
              let usersTerritory = responseObject.getValidateBeforeTransfer();

              usersTerritory.forEach(territory => {

                console.log("User Territory ID: " + territory.getId());

				console.log("User Territory Name: " + territory.getName());

				console.log("User Territory Records: " + territory.getRecords());
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
				if (details != null) 
                {
                     Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                    });
                }

					// Get the Message
				console.log("Message: " + responseObject.getMessage().getValue());
            }
        }
    }

    static async getValidateSpecificTerritoryBeforeTransferring(userId,territoryId)
    {
        let usersOperations = new UsersOperations();

        let response = await usersOperations.getValidateSpecificTerritoryBeforeTransferring(territoryId, userId);

        if(response != null)
        {
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) 
            {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }

            let responseObject = response.getObject();

            if(responseObject instanceof TransferringResponseWrapper)
            {
                let usersTerritory = responseObject.getValidateBeforeTransfer();

                usersTerritory.forEach(territory =>{

                    // Get the ID of each User Territory
						console.log("User Territory ID: " + territory.getId());

						console.log("User Territory Name: " + territory.getName());

						console.log("User Territory Records: " + territory.getRecords());
                })
            }

            // Check if the request returned an exception
			else if (responseObject instanceof APIException)
            {
              console.log("Status: " + responseObject.getStatus().getValue());

              // Get the Code
              console.log("Code: " + responseObject.getCode().getValue());

              let details = responseObject.getDetails();

              console.log("Details: ");

            // Get the details map
              if(details != null) 
              {
                 Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                });
              }

             // Get the Message
             console.log("Message: " + responseObject.getMessage().getValue());
            
            }
    
        }
    }

	static async delinkAndTransferTerritoriesOfUser(userId)
    {
        let usersOperations = new UsersOperations();

        let request = new TransferBodyWrapper();

        let userTerritoryList =[];

        let territory = new ZCRMTerritory();

		territory.setId(312938000000321221n);

		let transferToUser = new ZCRMUser();

		transferToUser.setId(312938000000232001n);

		territory.setTransferToUser(transferToUser);

		userTerritoryList.push(territory);

		request.setTransferAndDelink(userTerritoryList);

		let response = await usersOperations.delinkAndTransferTerritoriesOfUser(userId, request);

		if (response != null)
		{
			console.log("Status Code: " + response.getStatusCode());

			let responseObject = response.getObject();

			if(responseObject != null)
			{
				if(responseObject instanceof  TransferActionWrapper)
				{
					let actionResponses = responseObject.getTransferAndDelink();

					actionResponses.forEach(actionResponse => {

					  if(actionResponse instanceof SuccessResponse)

                      {
						console.log("Status: " + actionResponse.getStatus().getValue());

						// Get the Code
						console.log("Code: " + actionResponse.getCode().getValue());

						let details = actionResponse.getDetails();

						console.log("Details: ");
		  
					      // Get the details map
						if(details != null) 
						{
						   Array.from(details.keys()).forEach(key => {
								  console.log(key + ": " + details.get(key));
						  });
						}
						// Get the Message
						console.log("Message: " + actionResponse.getMessage().getValue());
					 }
			         else if (actionResponse instanceof APIException)
                     {
                      console.log("Status: " + actionResponse.getStatus().getValue());

                      // Get the Code
                      console.log("Code: " + actionResponse.getCode().getValue());

                      let details = actionResponse.getDetails();

                      console.log("Details: ");

                     // Get the details map
                     if(details != null) 
                     {
                      Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                      });
                     }

                     // Get the Message
                     console.log("Message: " + actionResponse.getMessage().getValue());
     			   } 	
		    });
		 }
			else if (responseObject instanceof APIException)
            {
             console.log("Status: " + responseObject.getStatus().getValue());

              // Get the Code
             console.log("Code: " + responseObject.getCode().getValue());

             let details = responseObject.getDetails();

             console.log("Details: ");

             // Get the details map
             if(details != null) 
              {
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

	static async delinkAndTransferSpecificTerritoryOfUser(userId,territoryId)
	{
		let usersOperations = new UsersOperations();

        let request = new TransferBodyWrapper();

        let userTerritoryList =[];

        let territory = new ZCRMTerritory();

		territory.setId(312938000000321221n);

		let transferToUser = new ZCRMUser();

		transferToUser.setId(312938000000232001n);

		territory.setTransferToUser(transferToUser);

		userTerritoryList.push(territory);

		request.setTransferAndDelink(userTerritoryList);

		let response = await usersOperations.delinkAndTransferSpecificTerritoryOfUser(territoryId,userId, request);

		if (response != null)
		{
			console.log("Status Code: " + response.getStatusCode());

			let responseObject = response.getObject();

			if(responseObject != null)
			{
				if(responseObject instanceof  TransferActionWrapper)
				{
					let actionResponses = responseObject.getTransferAndDelink();

					actionResponses.forEach(actionResponse => {

					  if(actionResponses instanceof SuccessResponse)

                      {
						console.log("Status: " + actionResponse.getStatus().getValue());

						// Get the Code
						console.log("Code: " + actionResponse.getCode().getValue());

						let details = actionResponse.getDetails();

						console.log("Details: ");
		  
					      // Get the details map
						if(details != null) 
						{
						   Array.from(details.keys()).forEach(key => {
								  console.log(key + ": " + details.get(key));
						  });
						}
						// Get the Message
						console.log("Message: " + actionResponse.getMessage().getValue());
					 }
			         else if (actionResponse instanceof APIException)
                     {
                      console.log("Status: " + actionResponse.getStatus().getValue());

                      // Get the Code
                      console.log("Code: " + actionResponse.getCode().getValue());

                      let details = actionResponse.getDetails();

                      console.log("Details: ");

                     // Get the details map
                     if(details != null) 
                     {
                      Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                      });
                     }

                     // Get the Message
                     console.log("Message: " + actionResponse.getMessage().getValue());
     			   } 	
		    });
		 }
			else if (responseObject instanceof APIException)
            {
             console.log("Status: " + responseObject.getStatus().getValue());

              // Get the Code
             console.log("Code: " + responseObject.getCode().getValue());

             let details = responseObject.getDetails();

             console.log("Details: ");

             // Get the details map
             if(details != null) 
              {
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

module.exports = { User }