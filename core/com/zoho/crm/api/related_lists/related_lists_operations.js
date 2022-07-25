const Param = require("../../../../../../routes/param").MasterModel;
const APIResponse = require("../../../../../../routes/controllers/api_response").MasterModel;
const CommonAPIHandler = require("../../../../../../routes/middlewares/common_api_handler").MasterModel;
const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class RelatedListsOperations{

	module;
	layoutId;
	/**
	 * Creates an instance of RelatedListsOperations with the given parameters
	 * @param {String} module A String representing the module
	 * @param {BigInt} layoutId A BigInt representing the layoutId
	 */
	constructor(module=null, layoutId=null){
		if((module != null) && (!(Object.prototype.toString.call(module) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
		}
		if((layoutId != null) && (!(Object.prototype.toString.call(layoutId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: layoutId EXPECTED TYPE: BigInt", null, null);
		}
		this.module = module;
		this.layoutId = layoutId;

	}

	/**
	 * The method to get related lists
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getRelatedLists()	{
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/settings/related_lists");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param("module", "com.zoho.crm.api.RelatedLists.GetRelatedListsParam"), this.module);
		await handlerInstance.addParam(new Param("layout_id", "com.zoho.crm.api.RelatedLists.GetRelatedListsParam"), this.layoutId);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to get related list
	 * @param {BigInt} id A BigInt representing the id
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getRelatedList(id)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/settings/related_lists/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param("module", "com.zoho.crm.api.RelatedLists.GetRelatedListParam"), this.module);
		await handlerInstance.addParam(new Param("layout_id", "com.zoho.crm.api.RelatedLists.GetRelatedListParam"), this.layoutId);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

}
class GetRelatedListsParam{

}

class GetRelatedListParam{

}

module.exports = {
	GetRelatedListsParam : GetRelatedListsParam,
	MasterModel : RelatedListsOperations,
	RelatedListsOperations : RelatedListsOperations,
	GetRelatedListParam : GetRelatedListParam
}
