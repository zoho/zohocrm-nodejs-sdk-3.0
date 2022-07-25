const Param = require("../../../../../../routes/param").MasterModel;
const ParameterMap = require("../../../../../../routes/parameter_map").MasterModel;
const APIResponse = require("../../../../../../routes/controllers/api_response").MasterModel;
const CommonAPIHandler = require("../../../../../../routes/middlewares/common_api_handler").MasterModel;
const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class ScoringRulesOperations{
	/**
	 * The method to create scoring rules
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async createScoringRules(request)	{
		const BodyWrapper = require("./body_wrapper").MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/settings/automation/scoring_rules");
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
	 * The method to get scoring rules
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getScoringRules(paramInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/settings/automation/scoring_rules");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to update scoring rules
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateScoringRules(request)	{
		const BodyWrapper = require("./body_wrapper").MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/settings/automation/scoring_rules");
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
	 * The method to delete scoring rules
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteScoringRules(paramInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/settings/automation/scoring_rules");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setParam(paramInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to update scoring rule
	 * @param {BigInt} id A BigInt representing the id
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateScoringRule(id, request)	{
		const BodyWrapper = require("./body_wrapper").MasterModel;
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/settings/automation/scoring_rules/");
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
	 * The method to get scoring rule
	 * @param {BigInt} id A BigInt representing the id
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getScoringRule(id, paramInstance=null)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/settings/automation/scoring_rules/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to delete scoring rule
	 * @param {BigInt} id A BigInt representing the id
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteScoringRule(id)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/settings/automation/scoring_rules/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to activate scoring rule
	 * @param {BigInt} id A BigInt representing the id
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async activateScoringRule(id)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/settings/automation/scoring_rules/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/activate");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to deactivate scoring rule
	 * @param {BigInt} id A BigInt representing the id
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deactivateScoringRule(id)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/settings/automation/scoring_rules/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/activate");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to clone scoring rule
	 * @param {BigInt} id A BigInt representing the id
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async cloneScoringRule(id)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/settings/automation/scoring_rules/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/clone");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to scoring rule execution using layout id
	 * @param {String} moduleAPIName A String representing the moduleAPIName
	 * @param {LayoutRequestWrapper} request An instance of LayoutRequestWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async scoringRuleExecutionUsingLayoutId(moduleAPIName, request)	{
		const LayoutRequestWrapper = require("./layout_request_wrapper").MasterModel;
		if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
		}
		if((request != null) && (!(request instanceof LayoutRequestWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: LayoutRequestWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/actions/run_scoring_rules");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		let ActionResponse = require.resolve("./action_response");
		return handlerInstance.apiCall(ActionResponse, "application/json");

	}

	/**
	 * The method to scoring rule execution using rule ids
	 * @param {String} moduleAPIName A String representing the moduleAPIName
	 * @param {RoleRequestWrapper} request An instance of RoleRequestWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async scoringRuleExecutionUsingRuleIds(moduleAPIName, request)	{
		const RoleRequestWrapper = require("./role_request_wrapper").MasterModel;
		if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
		}
		if((request != null) && (!(request instanceof RoleRequestWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: RoleRequestWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/actions/run_scoring_rules");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to get entity score record
	 * @param {BigInt} id A BigInt representing the id
	 * @param {String} moduleAPIName A String representing the moduleAPIName
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getEntityScoreRecord(id, moduleAPIName, paramInstance=null)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/Entity_Scores__s");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to get entity score records
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getEntityScoreRecords(paramInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v3/Entity_Scores__s");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

}
class GetScoringRulesParam{

	static MODULE = new Param("module", "com.zoho.crm.api.ScoringRules.GetScoringRulesParam");
	static LAYOUT_ID = new Param("layout_id", "com.zoho.crm.api.ScoringRules.GetScoringRulesParam");
	static ACTIVE = new Param("active", "com.zoho.crm.api.ScoringRules.GetScoringRulesParam");
	static NAME = new Param("name", "com.zoho.crm.api.ScoringRules.GetScoringRulesParam");
	static PAGE = new Param("page", "com.zoho.crm.api.ScoringRules.GetScoringRulesParam");
	static PER_PAGE = new Param("per_page", "com.zoho.crm.api.ScoringRules.GetScoringRulesParam");
}

class DeleteScoringRulesParam{

	static IDS = new Param("ids", "com.zoho.crm.api.ScoringRules.DeleteScoringRulesParam");
}

class GetScoringRuleParam{

	static MODULE = new Param("module", "com.zoho.crm.api.ScoringRules.GetScoringRuleParam");
	static LAYOUT_ID = new Param("layout_id", "com.zoho.crm.api.ScoringRules.GetScoringRuleParam");
	static ACTIVE = new Param("active", "com.zoho.crm.api.ScoringRules.GetScoringRuleParam");
	static NAME = new Param("name", "com.zoho.crm.api.ScoringRules.GetScoringRuleParam");
}

class GetEntityScoreRecordParam{

	static FIELDS = new Param("fields", "com.zoho.crm.api.ScoringRules.GetEntityScoreRecordParam");
}

class GetEntityScoreRecordsParam{

	static FIELDS = new Param("fields", "com.zoho.crm.api.ScoringRules.GetEntityScoreRecordsParam");
}

module.exports = {
	GetEntityScoreRecordsParam : GetEntityScoreRecordsParam,
	MasterModel : ScoringRulesOperations,
	ScoringRulesOperations : ScoringRulesOperations,
	DeleteScoringRulesParam : DeleteScoringRulesParam,
	GetScoringRuleParam : GetScoringRuleParam,
	GetEntityScoreRecordParam : GetEntityScoreRecordParam,
	GetScoringRulesParam : GetScoringRulesParam
}
