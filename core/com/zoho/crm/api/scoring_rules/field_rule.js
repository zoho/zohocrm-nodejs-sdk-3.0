const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class FieldRule{

	score;
	id;
	criteria;
	delete1;
	keyModified = new Map();
	/**
	 * The method to get the score
	 * @returns {number} A number representing the score
	 */
	getScore()	{
		return this.score;

	}

	/**
	 * The method to set the value to score
	 * @param {number} score A number representing the score
	 */
	setScore(score)	{
		if((score != null) && (!(Object.prototype.toString.call(score) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: score EXPECTED TYPE: number", null, null);
		}
		this.score = score;
		this.keyModified.set("score", 1);

	}

	/**
	 * The method to get the id
	 * @returns {BigInt} A BigInt representing the id
	 */
	getId()	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param {BigInt} id A BigInt representing the id
	 */
	setId(id)	{
		if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the criteria
	 * @returns {Criteria} An instance of Criteria
	 */
	getCriteria()	{
		return this.criteria;

	}

	/**
	 * The method to set the value to criteria
	 * @param {Criteria} criteria An instance of Criteria
	 */
	setCriteria(criteria)	{
		const Criteria = require("./criteria").MasterModel;
		if((criteria != null) && (!(criteria instanceof Criteria)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteria EXPECTED TYPE: Criteria", null, null);
		}
		this.criteria = criteria;
		this.keyModified.set("criteria", 1);

	}

	/**
	 * The method to get the delete
	 * @returns {String} A String representing the delete1
	 */
	getDelete()	{
		return this.delete1;

	}

	/**
	 * The method to set the value to delete
	 * @param {String} delete1 A String representing the delete1
	 */
	setDelete(delete1)	{
		if((delete1 != null) && (!(Object.prototype.toString.call(delete1) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: delete1 EXPECTED TYPE: String", null, null);
		}
		this.delete1 = delete1;
		this.keyModified.set("_delete", 1);

	}

	/**
	 * The method to check if the user has modified the given key
	 * @param {String} key A String representing the key
	 * @returns {number} A number representing the modification
	 */
	isKeyModified(key)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if(this.keyModified.has(key))	{
			return this.keyModified.get(key);
		}
		return null;

	}

	/**
	 * The method to mark the given key as modified
	 * @param {String} key A String representing the key
	 * @param {number} modification A number representing the modification
	 */
	setKeyModified(key, modification)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: number", null, null);
		}
		this.keyModified.set(key, modification);

	}

}
module.exports = {
	MasterModel : FieldRule,
	FieldRule : FieldRule
}
