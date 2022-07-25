const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class BodyWrapper{

	share;
	notify;
	keyModified = new Map();
	/**
	 * The method to get the share
	 * @returns {Array} An Array representing the share
	 */
	getShare()	{
		return this.share;

	}

	/**
	 * The method to set the value to share
	 * @param {Array} share An Array representing the share
	 */
	setShare(share)	{
		if((share != null) && (!(Object.prototype.toString.call(share) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: share EXPECTED TYPE: Array", null, null);
		}
		this.share = share;
		this.keyModified.set("share", 1);

	}

	/**
	 * The method to get the notify
	 * @returns {Boolean} A Boolean representing the notify
	 */
	getNotify()	{
		return this.notify;

	}

	/**
	 * The method to set the value to notify
	 * @param {Boolean} notify A Boolean representing the notify
	 */
	setNotify(notify)	{
		if((notify != null) && (!(Object.prototype.toString.call(notify) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: notify EXPECTED TYPE: Boolean", null, null);
		}
		this.notify = notify;
		this.keyModified.set("notify", 1);

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
	MasterModel : BodyWrapper,
	BodyWrapper : BodyWrapper
}
