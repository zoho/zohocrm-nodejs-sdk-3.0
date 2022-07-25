const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class Territory{

	id;
	manager;
	name;
	reportingTo;
	records;
	transferToUser;
	keyModified = new Map();
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
	 * The method to get the manager
	 * @returns {User} An instance of User
	 */
	getManager()	{
		return this.manager;

	}

	/**
	 * The method to set the value to manager
	 * @param {User} manager An instance of User
	 */
	setManager(manager)	{
		const User = require("./user").MasterModel;
		if((manager != null) && (!(manager instanceof User)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: manager EXPECTED TYPE: User", null, null);
		}
		this.manager = manager;
		this.keyModified.set("Manager", 1);

	}

	/**
	 * The method to get the name
	 * @returns {String} A String representing the name
	 */
	getName()	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param {String} name A String representing the name
	 */
	setName(name)	{
		if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
		}
		this.name = name;
		this.keyModified.set("Name", 1);

	}

	/**
	 * The method to get the reportingTo
	 * @returns {Territory} An instance of Territory
	 */
	getReportingTo()	{
		return this.reportingTo;

	}

	/**
	 * The method to set the value to reportingTo
	 * @param {Territory} reportingTo An instance of Territory
	 */
	setReportingTo(reportingTo)	{
		if((reportingTo != null) && (!(reportingTo instanceof Territory)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: reportingTo EXPECTED TYPE: Territory", null, null);
		}
		this.reportingTo = reportingTo;
		this.keyModified.set("Reporting_To", 1);

	}

	/**
	 * The method to get the records
	 * @returns {Boolean} A Boolean representing the records
	 */
	getRecords()	{
		return this.records;

	}

	/**
	 * The method to set the value to records
	 * @param {Boolean} records A Boolean representing the records
	 */
	setRecords(records)	{
		if((records != null) && (!(Object.prototype.toString.call(records) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: records EXPECTED TYPE: Boolean", null, null);
		}
		this.records = records;
		this.keyModified.set("records", 1);

	}

	/**
	 * The method to get the transferToUser
	 * @returns {User} An instance of User
	 */
	getTransferToUser()	{
		return this.transferToUser;

	}

	/**
	 * The method to set the value to transferToUser
	 * @param {User} transferToUser An instance of User
	 */
	setTransferToUser(transferToUser)	{
		const User = require("./user").MasterModel;
		if((transferToUser != null) && (!(transferToUser instanceof User)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: transferToUser EXPECTED TYPE: User", null, null);
		}
		this.transferToUser = transferToUser;
		this.keyModified.set("transfer_to_user", 1);

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
	MasterModel : Territory,
	Territory : Territory
}
