const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class EntityScore{

	entity;
	id;
	scoringRule;
	score;
	positiveScore;
	touchPointScore;
	negativeScore;
	positiveTouchPointScore;
	negativeTouchPointScore;
	keyModified = new Map();
	/**
	 * The method to get the entity
	 * @returns {Entity} An instance of Entity
	 */
	getEntity()	{
		return this.entity;

	}

	/**
	 * The method to set the value to entity
	 * @param {Entity} entity An instance of Entity
	 */
	setEntity(entity)	{
		const Entity = require("./entity").MasterModel;
		if((entity != null) && (!(entity instanceof Entity)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: entity EXPECTED TYPE: Entity", null, null);
		}
		this.entity = entity;
		this.keyModified.set("Entity", 1);

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
	 * The method to get the scoringRule
	 * @returns {ScoringRule} An instance of ScoringRule
	 */
	getScoringRule()	{
		return this.scoringRule;

	}

	/**
	 * The method to set the value to scoringRule
	 * @param {ScoringRule} scoringRule An instance of ScoringRule
	 */
	setScoringRule(scoringRule)	{
		const ScoringRule = require("./scoring_rule").MasterModel;
		if((scoringRule != null) && (!(scoringRule instanceof ScoringRule)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: scoringRule EXPECTED TYPE: ScoringRule", null, null);
		}
		this.scoringRule = scoringRule;
		this.keyModified.set("Scoring_Rule", 1);

	}

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
		this.keyModified.set("Score", 1);

	}

	/**
	 * The method to get the positiveScore
	 * @returns {number} A number representing the positiveScore
	 */
	getPositiveScore()	{
		return this.positiveScore;

	}

	/**
	 * The method to set the value to positiveScore
	 * @param {number} positiveScore A number representing the positiveScore
	 */
	setPositiveScore(positiveScore)	{
		if((positiveScore != null) && (!(Object.prototype.toString.call(positiveScore) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: positiveScore EXPECTED TYPE: number", null, null);
		}
		this.positiveScore = positiveScore;
		this.keyModified.set("Positive_Score", 1);

	}

	/**
	 * The method to get the touchPointScore
	 * @returns {number} A number representing the touchPointScore
	 */
	getTouchPointScore()	{
		return this.touchPointScore;

	}

	/**
	 * The method to set the value to touchPointScore
	 * @param {number} touchPointScore A number representing the touchPointScore
	 */
	setTouchPointScore(touchPointScore)	{
		if((touchPointScore != null) && (!(Object.prototype.toString.call(touchPointScore) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: touchPointScore EXPECTED TYPE: number", null, null);
		}
		this.touchPointScore = touchPointScore;
		this.keyModified.set("Touch_Point_Score", 1);

	}

	/**
	 * The method to get the negativeScore
	 * @returns {number} A number representing the negativeScore
	 */
	getNegativeScore()	{
		return this.negativeScore;

	}

	/**
	 * The method to set the value to negativeScore
	 * @param {number} negativeScore A number representing the negativeScore
	 */
	setNegativeScore(negativeScore)	{
		if((negativeScore != null) && (!(Object.prototype.toString.call(negativeScore) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: negativeScore EXPECTED TYPE: number", null, null);
		}
		this.negativeScore = negativeScore;
		this.keyModified.set("Negative_Score", 1);

	}

	/**
	 * The method to get the positiveTouchPointScore
	 * @returns {number} A number representing the positiveTouchPointScore
	 */
	getPositiveTouchPointScore()	{
		return this.positiveTouchPointScore;

	}

	/**
	 * The method to set the value to positiveTouchPointScore
	 * @param {number} positiveTouchPointScore A number representing the positiveTouchPointScore
	 */
	setPositiveTouchPointScore(positiveTouchPointScore)	{
		if((positiveTouchPointScore != null) && (!(Object.prototype.toString.call(positiveTouchPointScore) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: positiveTouchPointScore EXPECTED TYPE: number", null, null);
		}
		this.positiveTouchPointScore = positiveTouchPointScore;
		this.keyModified.set("Positive_Touch_Point_Score", 1);

	}

	/**
	 * The method to get the negativeTouchPointScore
	 * @returns {number} A number representing the negativeTouchPointScore
	 */
	getNegativeTouchPointScore()	{
		return this.negativeTouchPointScore;

	}

	/**
	 * The method to set the value to negativeTouchPointScore
	 * @param {number} negativeTouchPointScore A number representing the negativeTouchPointScore
	 */
	setNegativeTouchPointScore(negativeTouchPointScore)	{
		if((negativeTouchPointScore != null) && (!(Object.prototype.toString.call(negativeTouchPointScore) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: negativeTouchPointScore EXPECTED TYPE: number", null, null);
		}
		this.negativeTouchPointScore = negativeTouchPointScore;
		this.keyModified.set("Negative_Touch_Point_Score", 1);

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
	MasterModel : EntityScore,
	EntityScore : EntityScore
}
