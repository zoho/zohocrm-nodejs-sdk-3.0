const Header = require("../../../../../../routes/header").MasterModel;
const HeaderMap = require("../../../../../../routes/header_map").MasterModel;
const Param = require("../../../../../../routes/param").MasterModel;
const ParameterMap = require("../../../../../../routes/parameter_map").MasterModel;
const APIResponse = require("../../../../../../routes/controllers/api_response").MasterModel;
const CommonAPIHandler = require("../../../../../../routes/middlewares/common_api_handler").MasterModel;
const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class UsersOperations{
	/**
	 * The method to get users
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getUsers(paramInstance=null, headerInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/users");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to create user
	 * @param {RequestWrapper} request An instance of RequestWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async createUser(request)	{
		const RequestWrapper = require("./request_wrapper").MasterModel;
		if((request != null) && (!(request instanceof RequestWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: RequestWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/users");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to update users
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateUsers(request)	{
		const BodyWrapper = require("./body_wrapper").MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/users");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to get user
	 * @param {BigInt} id A BigInt representing the id
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getUser(id, headerInstance=null)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/users/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setHeader(headerInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to update user
	 * @param {BigInt} id A BigInt representing the id
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateUser(id, request)	{
		const BodyWrapper = require("./body_wrapper").MasterModel;
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/users/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to delete user
	 * @param {BigInt} id A BigInt representing the id
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteUser(id)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/users/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to get territories of user
	 * @param {BigInt} id A BigInt representing the id
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getTerritoriesOfUser(id, paramInstance=null)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/users/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/territories");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to update territories of user
	 * @param {BigInt} id A BigInt representing the id
	 * @param {TerritoryBodyWrapper} request An instance of TerritoryBodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateTerritoriesOfUser(id, request)	{
		const TerritoryBodyWrapper = require("./territory_body_wrapper").MasterModel;
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((request != null) && (!(request instanceof TerritoryBodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: TerritoryBodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/users/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/territories");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to get specific territory of user
	 * @param {BigInt} territoryId A BigInt representing the territoryId
	 * @param {BigInt} id A BigInt representing the id
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getSpecificTerritoryOfUser(territoryId, id)	{
		if((!(Object.prototype.toString.call(territoryId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territoryId EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/users/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/territories/");
		apiPath = apiPath.concat(territoryId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to get validate territories before transferring
	 * @param {BigInt} id A BigInt representing the id
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getValidateTerritoriesBeforeTransferring(id)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/users/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/territories/actions/validate_before_transfer");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to get validate specific territory before transferring
	 * @param {BigInt} territoryId A BigInt representing the territoryId
	 * @param {BigInt} id A BigInt representing the id
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getValidateSpecificTerritoryBeforeTransferring(territoryId, id)	{
		if((!(Object.prototype.toString.call(territoryId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territoryId EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/users/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/territories/");
		apiPath = apiPath.concat(territoryId.toString());
		apiPath = apiPath.concat("/actions/validate_before_transfer");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to delink and transfer territories of user
	 * @param {BigInt} id A BigInt representing the id
	 * @param {TransferBodyWrapper} request An instance of TransferBodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async delinkAndTransferTerritoriesOfUser(id, request)	{
		const TransferBodyWrapper = require("./transfer_body_wrapper").MasterModel;
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((request != null) && (!(request instanceof TransferBodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: TransferBodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/users/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/territories/actions/transfer_and_delink");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to delink and transfer specific territory of user
	 * @param {BigInt} territoryId A BigInt representing the territoryId
	 * @param {BigInt} id A BigInt representing the id
	 * @param {TransferBodyWrapper} request An instance of TransferBodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async delinkAndTransferSpecificTerritoryOfUser(territoryId, id, request)	{
		const TransferBodyWrapper = require("./transfer_body_wrapper").MasterModel;
		if((!(Object.prototype.toString.call(territoryId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territoryId EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((request != null) && (!(request instanceof TransferBodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: TransferBodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/users/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/territories/");
		apiPath = apiPath.concat(territoryId.toString());
		apiPath = apiPath.concat("/actions/transfer_and_delink");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

}
class GetUsersParam{

	static TYPE = new Param("type", "com.zoho.crm.api.Users.GetUsersParam");
	static PAGE = new Param("page", "com.zoho.crm.api.Users.GetUsersParam");
	static PER_PAGE = new Param("per_page", "com.zoho.crm.api.Users.GetUsersParam");
}

class GetUsersHeader{

	static IF_MODIFIED_SINCE = new Header("If-Modified-Since", "com.zoho.crm.api.Users.GetUsersHeader");
}

class GetUserHeader{

	static IF_MODIFIED_SINCE = new Header("If-Modified-Since", "com.zoho.crm.api.Users.GetUserHeader");
}

class GetTerritoriesofUserParam{

	static PAGE = new Param("page", "com.zoho.crm.api.Users.GetTerritoriesofUserParam");
	static PER_PAGE = new Param("per_page", "com.zoho.crm.api.Users.GetTerritoriesofUserParam");
	static COUNT = new Param("count", "com.zoho.crm.api.Users.GetTerritoriesofUserParam");
	static MORE_RECORDS = new Param("more_records", "com.zoho.crm.api.Users.GetTerritoriesofUserParam");
}

module.exports = {
	MasterModel : UsersOperations,
	UsersOperations : UsersOperations,
	GetUsersHeader : GetUsersHeader,
	GetUsersParam : GetUsersParam,
	GetTerritoriesofUserParam : GetTerritoriesofUserParam,
	GetUserHeader : GetUserHeader
}
