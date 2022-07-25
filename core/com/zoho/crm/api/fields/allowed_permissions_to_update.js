const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class AllowedPermissionsToUpdate{

	readWrite;
	hidden;
	readOnly;
	keyModified = new Map();
	/**
	 * The method to get the readWrite
	 * @returns {Boolean} A Boolean representing the readWrite
	 */
	getReadWrite()	{
		return this.readWrite;

	}

	/**
	 * The method to set the value to readWrite
	 * @param {Boolean} readWrite A Boolean representing the readWrite
	 */
	setReadWrite(readWrite)	{
		if((readWrite != null) && (!(Object.prototype.toString.call(readWrite) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: readWrite EXPECTED TYPE: Boolean", null, null);
		}
		this.readWrite = readWrite;
		this.keyModified.set("read_write", 1);

	}

	/**
	 * The method to get the hidden
	 * @returns {Boolean} A Boolean representing the hidden
	 */
	getHidden()	{
		return this.hidden;

	}

	/**
	 * The method to set the value to hidden
	 * @param {Boolean} hidden A Boolean representing the hidden
	 */
	setHidden(hidden)	{
		if((hidden != null) && (!(Object.prototype.toString.call(hidden) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: hidden EXPECTED TYPE: Boolean", null, null);
		}
		this.hidden = hidden;
		this.keyModified.set("hidden", 1);

	}

	/**
	 * The method to get the readOnly
	 * @returns {Boolean} A Boolean representing the readOnly
	 */
	getReadOnly()	{
		return this.readOnly;

	}

	/**
	 * The method to set the value to readOnly
	 * @param {Boolean} readOnly A Boolean representing the readOnly
	 */
	setReadOnly(readOnly)	{
		if((readOnly != null) && (!(Object.prototype.toString.call(readOnly) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: readOnly EXPECTED TYPE: Boolean", null, null);
		}
		this.readOnly = readOnly;
		this.keyModified.set("read_only", 1);

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
	MasterModel : AllowedPermissionsToUpdate,
	AllowedPermissionsToUpdate : AllowedPermissionsToUpdate
}
