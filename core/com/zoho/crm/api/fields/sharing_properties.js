const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class SharingProperties{

	schedulerStatus;
	sharePreferenceEnabled;
	keyModified = new Map();
	/**
	 * The method to get the schedulerStatus
	 * @returns {String} A String representing the schedulerStatus
	 */
	getSchedulerStatus()	{
		return this.schedulerStatus;

	}

	/**
	 * The method to set the value to schedulerStatus
	 * @param {String} schedulerStatus A String representing the schedulerStatus
	 */
	setSchedulerStatus(schedulerStatus)	{
		if((schedulerStatus != null) && (!(Object.prototype.toString.call(schedulerStatus) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: schedulerStatus EXPECTED TYPE: String", null, null);
		}
		this.schedulerStatus = schedulerStatus;
		this.keyModified.set("scheduler_status", 1);

	}

	/**
	 * The method to get the sharePreferenceEnabled
	 * @returns {Boolean} A Boolean representing the sharePreferenceEnabled
	 */
	getSharePreferenceEnabled()	{
		return this.sharePreferenceEnabled;

	}

	/**
	 * The method to set the value to sharePreferenceEnabled
	 * @param {Boolean} sharePreferenceEnabled A Boolean representing the sharePreferenceEnabled
	 */
	setSharePreferenceEnabled(sharePreferenceEnabled)	{
		if((sharePreferenceEnabled != null) && (!(Object.prototype.toString.call(sharePreferenceEnabled) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sharePreferenceEnabled EXPECTED TYPE: Boolean", null, null);
		}
		this.sharePreferenceEnabled = sharePreferenceEnabled;
		this.keyModified.set("share_preference_enabled", 1);

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
	MasterModel : SharingProperties,
	SharingProperties : SharingProperties
}
