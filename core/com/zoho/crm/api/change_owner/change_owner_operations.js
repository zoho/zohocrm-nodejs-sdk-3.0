const APIResponse = require("../../../../../../routes/controllers/api_response").MasterModel;
const CommonAPIHandler = require("../../../../../../routes/middlewares/common_api_handler").MasterModel;
const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class ChangeOwnerOperations{

	moduleAPIName;
	/**
	 * Creates an instance of ChangeOwnerOperations with the given parameters
	 * @param {String} moduleAPIName A String representing the moduleAPIName
	 */
	constructor(moduleAPIName){
		if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
		}
		this.moduleAPIName = moduleAPIName;

	}

	/**
	 * The method to update record owner
	 * @param {BigInt} recordId A BigInt representing the recordId
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateRecordOwner(recordId, request)	{
		const BodyWrapper = require("./body_wrapper").MasterModel;
		if((!(Object.prototype.toString.call(recordId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
		}
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/actions/change_owner");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		let RecordActionHandler = require.resolve("./record_action_handler");
		return handlerInstance.apiCall(RecordActionHandler, "application/json");

	}

	/**
	 * The method to update records owner
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateRecordsOwner(request)	{
		const BodyWrapper = require("./body_wrapper").MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/actions/change_owner");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		let RecordActionHandler = require.resolve("./record_action_handler");
		return handlerInstance.apiCall(RecordActionHandler, "application/json");

	}

}
module.exports = {
	MasterModel : ChangeOwnerOperations,
	ChangeOwnerOperations : ChangeOwnerOperations
}
