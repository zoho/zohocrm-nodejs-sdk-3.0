const { Module } = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/fields/module");
const territory = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/modules/territory").Territory;
const field = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/record/field").Field;
const {ScoringRulesOperations,DeleteScoringRulesParam,GetEntityScoreRecordsParam,GetScoringRulesParam} = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/scoring_rules/scoring_rules_operations.js");
const { ParameterMap } = require("@zohocrm/nodejs-sdk-3.0/routes/parameter_map.js");
const Layout = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/layouts/layout.js").Layout;
const ActionHandler = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/scoring_rules/action_handler.js").ActionHandler;
const ActionWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/scoring_rules/action_wrapper.js").ActionWrapper;
const BodyWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/scoring_rules/body_wrapper.js").BodyWrapper;
const Criteria = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/scoring_rules/criteria.js").Criteria;
const EntityResponseWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/scoring_rules/entity_response_wrapper.js").EntityResponseWrapper;
const EntityScore = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/scoring_rules/entity_score.js").EntityScore;
const FieldRule =require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/scoring_rules/field_rule.js").FieldRule;
const Info = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/scoring_rules/info.js").Info;
const LayoutRequestWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/scoring_rules/layout_request_wrapper.js").LayoutRequestWrapper;
const RoleRequestWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/scoring_rules/role_request_wrapper.js").RoleRequestWrapper;
const Signal = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/scoring_rules/signal.js").Signal;
const SignalRule = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/scoring_rules/signal_rule.js").SignalRule;
const SuccessResponse = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/scoring_rules/success_response.js").SuccessResponse;
const User = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/users/user.js").User;
const APIResponse = require("@zohocrm/nodejs-sdk-3.0/routes/controllers/api_response.js").APIResponse;
const Choice = require("@zohocrm/nodejs-sdk-3.0/utils/util/choice.js").Choice;
const ResponseWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/scoring_rules/response_wrapper").ResponseWrapper;
const ZCRMScoringRule = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/scoring_rules/scoring_rule.js").ScoringRule;
const Modules = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/modules/module.js").Module;
const Field = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/fields/field.js").Field;
const APIException = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/modules/api_exception").APIException;
const TransferringResponseWrapper = require("/home/ajeet-zt678/Documents/Dummy_trial/node_modules/zohocrm-nodejs-sdk-3.0/core/com/zoho/crm/api/users/transferring_response_wrapper.js").TransferringResponseWrapper;


class ScoringRule
{
  static async getScoringRules()
  {
     let scoringRulesOperations = new ScoringRulesOperations();

     let paramInstance = new ParameterMap();
    
     await paramInstance.add(GetScoringRulesParam.MODULE, "Leads");

     let response = await scoringRulesOperations.getScoringRules(paramInstance);

     if(response!= null)
     {
        console.log("Status Code: " + response.getStatusCode());

        if ([204, 304].includes(response.getStatusCode())) 
        {
            console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
            return;
        }
     

             //Get object from response
			let responseObject = response.getObject();

            if (responseObject != null) 
            {
                if (responseObject instanceof ResponseWrapper) 
                {
                    let scoringRules = responseObject.getScoringRules();

                    scoringRules.forEach(scoringRule=>{

                        let layout = scoringRule.getLayout();

                        if(layout!=null)
                        {
                            console.log("ScoringRule Layout ID : " +layout.getId());

                            console.log("ScoringRule Layout APIName: " + layout.getAPIName());
                        }
                    console.log("ScoringRule CreatedTime: " + scoringRule.getCreatedTime());

                    console.log("ScoringRule ModifiedTime: "+ scoringRule.getModifiedTime());

                    let fieldRules = scoringRule.getFieldRules();

                    fieldRules.forEach(fieldRule =>{

                      console.log("ScoringRule FieldRule Id :" + fieldRule.getId());

                      let criteria =  fieldRule.getCriteria();

                      if (criteria != null)
                      {
                        ScoringRule.printCriteria(criteria); 
                      }
                     
                     console.log("ScoringRule FieldRule Id: " + fieldRule.getId());                        
                    
                    });
                    
                    let modules = scoringRule.getModule();

                    if (modules != null)
						{
							console.log("ScoringRule Module ID: " + modules.getId());

							console.log("ScoringRule Module APIName: " + modules.getAPIName());
						}

                        console.log("ScoringRule Name: " + scoringRule.getName());
                        
                        let  modifiedBy = scoringRule.getModifiedBy();

                        if (modifiedBy != null)
						{
							console.log("ScoringRule Modified By Name : " + modifiedBy.getName());

							console.log("ScoringRule Modified By id : " + modifiedBy.getId());
						}

                        console.log("ScoringRule Active: " + scoringRule.getActive());

                        console.log("ScoringRule Description: " + scoringRule.getDescription());

                        console.log("ScoringRule Id: " + scoringRule.getId());

                        let signalRules = scoringRule.getSignalRules();

                        if(signalRules != null)
                        {

                        signalRules.forEach(SignalRule1=>{

                            console.log("ScoringRule SignalRule Score: " + SignalRule1.getScore());

                            console.log("ScoringRule SignalRule Id: " + SignalRule1.getId());

                            let signal = signalRule1.getSignal();

                            if (signal != null)
                            {
                                console.log("ScoringRule SignalRule Signal Namespace: " + signal.getNamespace());

								console.log("ScoringRule SignalRule Signal Id: " + signal.getId());
                            }
                        });
                    }

                     let createdBy = scoringRule.getCreatedBy();
                     
                     
						if (createdBy != null)
						{
							console.log("ScoringRule Created By Name : " + createdBy.getName());

							console.log("ScoringRule Created By id : " + createdBy.getId());
						}
                    });

                   let info =  responseObject.getInfo();

                   if(info!= null)
                   {
                     if(info.getPerPage() != null)
                     {
                      console.log("Info PerPage: " + info.getPerPage().toString());
                     }
                     if(info.getCount() != null)
					 {
                      console.log("Info Count: " + info.getCount().toString());
                     }
                     if(info.getPage() != null)
					 {
                        console.log("Info Page: " + info.getPage());
                     }
                     if(info.getMoreRecords() != null)
					 {
                        console.log("Info MoreRecords: " + info.getMoreRecords().toString());
                     }
						
                   }
                }

                else if(responseObject instanceof APIException)
                {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    //Get the Code
					console.log("Code: " + responseObject.getCode().getValue());

					console.log("Details");

                    let details = responseObject.getDetails();

                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }

            }

        }
  }

  static async getScoringRule(id)
  {
     let scoringRulesOperations = new ScoringRulesOperations();

     let paramInstance = new ParameterMap();
    
     await paramInstance.add(GetScoringRulesParam.MODULE, "Leads");

     let response = await scoringRulesOperations.getScoringRule(id,paramInstance);

     if(response!= null)
     {
        console.log("Status Code: " + response.getStatusCode());

        if ([204, 304].includes(response.getStatusCode())) 
        {
            console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
            return;
        }
     

             //Get object from response
			let responseObject = response.getObject();

            if (responseObject != null) 
            {
                if (responseObject instanceof ResponseWrapper) 
                {
                    let scoringRules = responseObject.getScoringRules();

                    scoringRules.forEach(scoringRule=>{

                        let layout = scoringRule.getLayout();

                        if(layout!=null)
                        {
                            console.log("ScoringRule Layout ID : " +layout.getId());

                            console.log("ScoringRule Layout APIName: " + layout.getAPIName());
                        }
                    console.log("ScoringRule CreatedTime: " + scoringRule.getCreatedTime());

                    console.log("ScoringRule ModifiedTime: "+ scoringRule.getModifiedTime());

                    let fieldRules = scoringRule.getFieldRules();

                    fieldRules.forEach(fieldRule =>{

                      console.log("ScoringRule FieldRule Id :" + fieldRule.getId());

                      let criteria =  fieldRule.getCriteria();

                      if (criteria != null)
                      {
                        ScoringRule.printCriteria(criteria); 
                      }
                     
                     console.log("ScoringRule FieldRule Id: " + fieldRule.getId());                        
                    
                    });
                    
                    let modules = scoringRule.getModule();

                    if (modules != null)
						{
							console.log("ScoringRule Module ID: " + modules.getId());

							console.log("ScoringRule Module APIName: " + modules.getAPIName());
						}

                        console.log("ScoringRule Name: " + scoringRule.getName());
                        
                        let  modifiedBy = scoringRule.getModifiedBy();

                        if (modifiedBy != null)
						{
							console.log("ScoringRule Modified By Name : " + modifiedBy.getName());

							console.log("ScoringRule Modified By id : " + modifiedBy.getId());
						}

                        console.log("ScoringRule Active: " + scoringRule.getActive());

                        console.log("ScoringRule Description: " + scoringRule.getDescription());

                        console.log("ScoringRule Id: " + scoringRule.getId());

                        let signalRules = scoringRule.getSignalRules();

                        if(signalRules != null)
                        {

                        signalRules.forEach(SignalRule1=>{

                            console.log("ScoringRule SignalRule Score: " + SignalRule1.getScore());

                            console.log("ScoringRule SignalRule Id: " + SignalRule1.getId());

                            let signal = signalRule1.getSignal();

                            if (signal != null)
                            {
                                console.log("ScoringRule SignalRule Signal Namespace: " + signal.getNamespace());

								console.log("ScoringRule SignalRule Signal Id: " + signal.getId());
                            }
                        });
                    }

                     let createdBy = scoringRule.getCreatedBy();
                     
                     
						if (createdBy != null)
						{
							console.log("ScoringRule Created By Name : " + createdBy.getName());

							console.log("ScoringRule Created By id : " + createdBy.getId());
						}
                    });

                   let info =  responseObject.getInfo();

                   if(info!= null)
                   {
                     if(info.getPerPage() != null)
                     {
                      console.log("Info PerPage: " + info.getPerPage().toString());
                     }
                     if(info.getCount() != null)
					 {
                      console.log("Info Count: " + info.getCount().toString());
                     }
                     if(info.getPage() != null)
					 {
                        console.log("Info Page: " + info.getPage());
                     }
                     if(info.getMoreRecords() != null)
					 {
                        console.log("Info MoreRecords: " + info.getMoreRecords().toString());
                     }
						
                   }
                }

                else if(responseObject instanceof APIException)
                {
                    console.log("Status: " + responseObject.getStatus().getValue());
                    //Get the Code
					console.log("Code: " + responseObject.getCode().getValue());

					console.log("Details");

                    let details = responseObject.getDetails();

                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }

            }
            

        }
  }

  static async printCriteria(criteria)
  {
      if(criteria.getComparator()!=null)
      {
         console.log("CustomView Criteria Comparator: " + criteria.getComparator().getValue());
      }

      if (criteria.getValue() != null)
		{
            console.log("CustomView Criteria Value: " + criteria.getValue().toString());
        }

        let criteriaGroup = criteria.getGroup();

        if (criteriaGroup != null)
		{
            criteriaGroup.forEach(criteria1=>{

                ScoringRule.printCriteria(criteria1);
            });
        }

        if (criteria.getGroupOperator() != null)
		{
			// Get the Group Operator of the Criteria
			console.log("CustomView Criteria Group Operator: " + criteria.getGroupOperator().getValue());
		}
  }

  static async createScoringRules()
  {
      let scoringRulesOperations = new ScoringRulesOperations();

      let bodyWrapper = new BodyWrapper();

      let scoringRules = []
      
      let scoringRule = new ZCRMScoringRule();

      scoringRule.setName("Rule 11");

      scoringRule.setDescription("Rule for Module Leads");

      let module = new Modules();

      module.setAPIName("Leads");

	  module.setId(312938000000241400n);

	  scoringRule.setModule(module);

      let layout = new Layout();

      layout.setAPIName("Standard");

	  layout.setId(312938000000000167n);

	  scoringRule.setLayout(layout);

	  scoringRule.setActive(true);

      let fieldRules = [];

      let fieldRule = new FieldRule();

      fieldRule.setScore(10);

      let criteria = new Criteria();

      criteria.setGroupOperator(new Choice("or"));

      let group =[];

      let criteria1 = new Criteria();

      let field1 = new Field();

      field1.setAPIName("Company");

	  criteria1.setField(field1);

	  criteria1.setComparator(new Choice("equal"));

	  criteria1.setValue("Zoho");

      group.push(criteria1);

    //   let criteria2 = new Criteria();

    //   field1 =  new Field();
 
    //   field1.setAPIName("Designation");

    //   criteria2.setField(field1);

    //   criteria2.setComparator(new Choice("equal"));

	//   criteria2.setValue("review");

	//   group.push(criteria2);

    //   let criteria3 = new Criteria();

    //   field1 =  new Field();
 
    //   field1.setAPIName("Last_Name");

	// 	criteria3.setField(field1);

	// 	criteria3.setComparator(new Choice("equal"));

	// 	criteria3.setValue("SDK");

	// 	group.push(criteria3);
       

	    criteria.setGroup(group);

	    fieldRule.setCriteria(criteria);

		fieldRules.push(fieldRule);

		scoringRule.setFieldRules(fieldRules);

		scoringRules.push(scoringRule);

		bodyWrapper.setScoringRules(scoringRules);

        let response = await scoringRulesOperations.createScoringRules(bodyWrapper);
 
        if (response != null)
		{
			// Get the status code from response
			 console.log("Status Code: " + response.getStatusCode());

             let responseObject = response.getObject();

			// Check if expected response is received
			if (responseObject != null)
			{
			  if(responseObject instanceof ActionWrapper)
                {
					
              	// Get the list of obtained ActionResponse instances
					let  scoringRules = responseObject.getScoringRules();

                    scoringRules.forEach(scoringRule=>{

                        if (scoringRule instanceof SuccessResponse)
						{
							// Get the Status
							console.log("Status: " + scoringRule.getStatus().getValue());

							// Get the Code
							console.log("Code: " + scoringRule.getCode().getValue());

							console.log("Details: ");

                            let details = scoringRule.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

							// Get the Message
							console.log("Message: " + scoringRule.getMessage().getValue());
						}
						// Check if the request returned an exception
						else if (scoringRule instanceof APIException)
						{
							
							// Get the Status
							console.log("Status: " + scoringRule.getStatus().getValue());

							// Get the Code
							console.log("Code: " + scoringRule.getCode().getValue());

                            let details = scoringRule.getDetails();

						    console.log("Details: ");

							if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

							// Get the Message
							console.log("Message: " + scoringRule.getMessage().getValue());
						}
                    })
                }
					
				
				// Check if the request returned an exception
				else if (responseObject instanceof APIException)
                {
					// Get the Status
					console.log("Status: " + responseObject.getStatus().getValue());

					// Get the Code
					console.log("Code: " + responseObject.getCode().getValue());

                    let details = responseObject.getDetails();

					console.log("Details: ");

					// Get the details map
					if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

					// Get the Message
					console.log("Message: " + responseObject.getMessage().getValue());
				}
			}
			
		}

    }

    static async updateScoringRule(id) 
    {
      let scoringRulesOperations = new ScoringRulesOperations();

      let bodyWrapper = new BodyWrapper();

      let ZCRMScoringRule = [];

      let  scoringRule = new ZCRMScoringRule();

      scoringRule.setName("Rule 10");

      scoringRule.setDescription("Rule for Module Leads");

      let module = new Module();

      module.setAPIName("Leads");

	  module.setId(34770612175n);

	  scoringRule.setModule(module);

      let layout = new Layout();

      layout.setAPIName("Standard");

      layout.setId(34770610091055n);

      scoringRule.setLayout(layout);

      scoringRule.setActive(false);

      let fieldRules =[];

      let fieldRule = new FieldRule();

      fieldRule.setScore(10);

      let criteria = new Criteria();

      criteria.setGroupOperator(new Choice("or"));

      let group = [];
      
      let criteria1 = new Criteria();

      let field = new Field();

      field1.setAPIName("Company");

	  criteria1.setField(field1);

	  criteria1.setComparator(new Choice("equal"));

	  criteria1.setValue("zoho");

	  group.add(criteria1);

      let criteria2 = new Criteria();

      field1 = new Field();

      field1.setAPIName("Designation");

	  criteria2.setField(field1);

	  criteria2.setComparator(new Choice("equal"));

	  criteria2.setValue("review");

	  group.add(criteria2);

      let criteria3 = new Criteria();

      field = new Field();

      field1.setAPIName("Last_Name");

		criteria3.setField(field1);

		criteria3.setComparator(new Choice("equal"));

		criteria3.setValue("SDK");

		group.add(criteria3);

		criteria.setGroup(group);

		fieldRule.setCriteria(criteria);

		fieldRules.add(fieldRule);

		scoringRule.setFieldRules(fieldRules);

		scoringRules.add(scoringRule);

		bodyWrapper.setScoringRules(scoringRules);

        let response = scoringRulesOperations.updateScoringRule(id, bodyWrapper);

        if (response != null)
		{
			// Get the status code from response
			console.log("Status Code: " + response.getStatusCode());

            let responseObject = response.getObject();

			if (responseObject != null)
		    {

				if (responseObject instanceof ActionWrapper)
				{

					// Get the list of obtained ActionResponse instances
					let scoringRules = responseObject.getScoringRules();

                    scoringRules.forEach(scoringRule=>{

                        if (responseObject instanceof SuccessResponse)
						{
							// Get the Status
							console.log("Status: " + responseObject.getStatus().getValue());

							// Get the Code
							console.log("Code: " + responseObject.getCode().getValue());

                            let details = responseObject.getDetails();

                            console.log("Details: ");
        
                            // Get the details map
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

							// Get the Message
							console.log("Message: " + responseObject.getMessage().getValue());
						}
						// Check if the request returned an exception
						else if (responseObject instanceof APIException)
						{
							// Get the Status
							console.log("Status: " + responseObject.getStatus().getValue());

							// Get the Code
							console.log("Code: " + responseObject.getCode().getValue());
  
                            let details = responseObject.getDetails();

                            console.log("Details: ");
        
                            // Get the details map
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
        
                            // Get the Message
                            console.log("Message: " + responseObject.getMessage().getValue());
							
						}
                    });
					
				}
				// Check if the request returned an exception
				else if (responseObject instanceof APIException)
				{
					// Get the Status
					console.log("Status: " + responseObject.getStatus().getValue());

					// Get the Code
					console.log("Code: " + responseObject.getCode().getValue());

                    let details = responseObject.getDetails();

					console.log("Details: ");

					// Get the details map
					if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

					// Get the Message
					console.log("Message: " + responseObject.getMessage().getValue());
				}

			}
		}
     }

     static async deleteScoringRules()
     {
         let scoringRulesOperations = new ScoringRulesOperations();

         let paramInstance = new ParameterMap();

         paramInstance.add(DeleteScoringRulesParam.IDS, "312938000000332004");

         let response = await scoringRulesOperations.deleteScoringRules(paramInstance);

         if (response != null)
         {
           console.log("Status Code: " + response.getStatusCode());

           let responseObject = response.getObject();

			if (responseObject != null)
            {
                if (responseObject instanceof ActionWrapper)
                {
                    let ScoringRules = responseObject.getScoringRules();

                    ScoringRules.forEach(scoringRule=>{

                        if (scoringRule instanceof SuccessResponse)
						{
							// Get the Status
							console.log("Status: " + scoringRule.getStatus().getValue());

							// Get the Code
							console.log("Code: " + scoringRule.getCode().getValue());

                            let details = scoringRule.getDetails();

                            console.log("Details: ");
        
                            // Get the details map
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

							// Get the Message
							console.log("Message: " + scoringRule.getMessage().getValue());
						}
						// Check if the request returned an exception
						else if (scoringRule instanceof APIException)
						{
							// Get the Status
							console.log("Status: " + scoringRule.getStatus().getValue());

							// Get the Code
							console.log("Code: " + scoringRule.getCode().getValue());
  
                            let details = scoringRule.getDetails();

                            console.log("Details: ");
        
                            // Get the details map
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
        
                            // Get the Message
                            console.log("Message: " + scoringRule.getMessage().getValue());
							
						}
                    });
                }

                else if (responseObject instanceof APIException)
				{
					// Get the Status
					console.log("Status: " + responseObject.getStatus().getValue());

					// Get the Code
					console.log("Code: " + responseObject.getCode().getValue());

                    let details = responseObject.getDetails();

					console.log("Details: ");

					// Get the details map
					if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

					// Get the Message
					console.log("Message: " + responseObject.getMessage().getValue());
				}
                

            }
         }
     }

     static async deleteScoringRule()
     {
         let scoringRulesOperations = new ScoringRulesOperations();

         let response = scoringRulesOperations.deleteScoringRule(id);

         if (response != null)
         {
           console.log("Status Code: " + response.getStatusCode());

           let responseObject = response.getObject();

			if (responseObject != null)
            {
                if (responseObject instanceof ActionWrapper)
                {
                    let ScoringRules = responseObject.getScoringRules();

                    ScoringRules.forEach(scoringRule=>{

                        if (scoringRule instanceof SuccessResponse)
						{
							// Get the Status
							console.log("Status: " + scoringRule.getStatus().getValue());

							// Get the Code
							console.log("Code: " + scoringRule.getCode().getValue());

                            let details = scoringRule.getDetails();

                            console.log("Details: ");
        
                            // Get the details map
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

							// Get the Message
							console.log("Message: " + scoringRule.getMessage().getValue());
						}
						// Check if the request returned an exception
						else if (scoringRule instanceof APIException)
						{
							// Get the Status
							console.log("Status: " + scoringRule.getStatus().getValue());

							// Get the Code
							console.log("Code: " + scoringRule.getCode().getValue());
  
                            let details = scoringRule.getDetails();

                            console.log("Details: ");
        
                            // Get the details map
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
        
                            // Get the Message
                            console.log("Message: " + scoringRule.getMessage().getValue());
							
						}
                    });
                }

                else if (responseObject instanceof APIException)
				{
					// Get the Status
					console.log("Status: " + responseObject.getStatus().getValue());

					// Get the Code
					console.log("Code: " + responseObject.getCode().getValue());

                    let details = responseObject.getDetails();

					console.log("Details: ");

					// Get the details map
					if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

					// Get the Message
					console.log("Message: " + responseObject.getMessage().getValue());
				}
                

            }
         }

     }
  static async scoringRuleExecutionUsingLayoutId(moduleAPIName)
  {
     let scoringRulesOperations = new ScoringRulesOperations();
     
     let bodyWrapper = new LayoutRequestWrapper();

     let layout = new Layout();

     layout.setId(312938000000000167n);

	 bodyWrapper.setLayout(layout);

     let response = await scoringRulesOperations.scoringRuleExecutionUsingLayoutId(moduleAPIName, bodyWrapper);


     if (response != null)
         {   
           console.log("Status Code: " + response.getStatusCode());

           let actionResponse = response.getObject();

			if (actionResponse != null)
            {
                     
            if (actionResponse instanceof SuccessResponse)
			{
				// Get the Status
				console.log("Status: " + actionResponse.getStatus().getValue());

				// Get the Code
        		console.log("Code: " + actionResponse.getCode().getValue());

                 let details = actionResponse.getDetails();

                 console.log("Details: ");
        
                 // Get the details map
                if (details != null)
                 {
                     Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                        });
                }

							// Get the Message
				console.log("Message: " + actionResponse.getMessage().getValue());
			}
						// Check if the request returned an exception
			else if (actionResponse instanceof APIException)
			{
				// Get the Status
			    console.log("Status: " + actionResponse.getStatus().getValue());

				// Get the Code
				console.log("Code: " + actionResponse.getCode().getValue());
  
                 let details = actionResponse.getDetails();

                console.log("Details: ");
        
                // Get the details map
                if (details != null) 
                {
                     Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                }
        
                 // Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
							
			}   

            }
        }
  }

    static async scoringRuleExecutionUsingRuleIds(moduleAPIName)
    {
       let scoringRulesOperations = new ScoringRulesOperations();

       let bodyWrapper = new RoleRequestWrapper();

       let scoringRules =[];

       scoringRules.push("312938000000325026");

	  // scoringRules.add("347706114913001");

	   bodyWrapper.setScoringRules(scoringRules);

       let response = await scoringRulesOperations.scoringRuleExecutionUsingRuleIds(moduleAPIName, bodyWrapper);

       if (response != null)
         {
           console.log("Status Code: " + response.getStatusCode());

           let responseObject = response.getObject();

			if (responseObject != null)
            {
                if (responseObject instanceof ActionWrapper)
                {
                    let actionResponses = responseObject.getScoringRules();

                    actionResponses.forEach(actionResponse=>{

                        if (actionResponse instanceof SuccessResponse)
						{
							// Get the Status
							console.log("Status: " + actionResponse.getStatus().getValue());

							// Get the Code
							console.log("Code: " + actionResponse.getCode().getValue());

                            let details = actionResponse.getDetails();

                            console.log("Details: ");
        
                            // Get the details map
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

							// Get the Message
							console.log("Message: " + actionResponse.getMessage().getValue());
						}
						// Check if the request returned an exception
						else if (actionResponse instanceof APIException)
						{
							// Get the Status
							console.log("Status: " + actionResponse.getStatus().getValue());

							// Get the Code
							console.log("Code: " + actionResponse.getCode().getValue());
  
                            let details = actionResponse.getDetails();

                            console.log("Details: ");
        
                            // Get the details map
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
        
                            // Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
							
						}
                    });
                }

                else if (responseObject instanceof APIException)
				{
					// Get the Status
					console.log("Status: " + responseObject.getStatus().getValue());

					// Get the Code
					console.log("Code: " + responseObject.getCode().getValue());

                    let details = responseObject.getDetails();

					console.log("Details: ");

					// Get the details map
					if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

					// Get the Message
					console.log("Message: " + responseObject.getMessage().getValue());
				}
                

            }
        }
    }
    
    static async activateScoringRule(id)
    {
        let scoringRulesOperations = new ScoringRulesOperations();

        let response = await scoringRulesOperations.activateScoringRule(id);

        if (response != null)
         {
           console.log("Status Code: " + response.getStatusCode());

           let responseObject = response.getObject();

			if (responseObject != null)
            {
                if (responseObject instanceof ActionWrapper)
                {
                    let ScoringRules = responseObject.getScoringRules();

                    ScoringRules.forEach(scoringRule=>{

                        if (scoringRule instanceof SuccessResponse)
						{
							// Get the Status
							console.log("Status: " + scoringRule.getStatus().getValue());

							// Get the Code
							console.log("Code: " + scoringRule.getCode().getValue());

                            let details = scoringRule.getDetails();

                            console.log("Details: ");
        
                            // Get the details map
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

							// Get the Message
							console.log("Message: " + scoringRule.getMessage().getValue());
						}
						// Check if the request returned an exception
						else if (scoringRule instanceof APIException)
						{
							// Get the Status
							console.log("Status: " + scoringRule.getStatus().getValue());

							// Get the Code
							console.log("Code: " + scoringRule.getCode().getValue());
  
                            let details = scoringRule.getDetails();

                            console.log("Details: ");
        
                            // Get the details map
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
        
                            // Get the Message
                            console.log("Message: " + scoringRule.getMessage().getValue());
							
						}
                    });
                }

                else if (responseObject instanceof APIException)
				{
					// Get the Status
					console.log("Status: " + responseObject.getStatus().getValue());

					// Get the Code
					console.log("Code: " + responseObject.getCode().getValue());

                    let details = responseObject.getDetails();

					console.log("Details: ");

					// Get the details map
					if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

					// Get the Message
					console.log("Message: " + responseObject.getMessage().getValue());
				}
                

            }
        }


    }

    static async deactivateScoringRule(id)
    {
        let scoringRulesOperations = new ScoringRulesOperations();

        let response = await scoringRulesOperations.deactivateScoringRule(id);

        if (response != null)
         {
           console.log("Status Code: " + response.getStatusCode());

           let responseObject = response.getObject();

			if (responseObject != null)
            {
                if (responseObject instanceof ActionWrapper)
                {
                    let ScoringRules = responseObject.getScoringRules();

                    ScoringRules.forEach(scoringRule=>{

                        if (scoringRule instanceof SuccessResponse)
						{
							// Get the Status
							console.log("Status: " + scoringRule.getStatus().getValue());

							// Get the Code
							console.log("Code: " + scoringRule.getCode().getValue());

                            let details = scoringRule.getDetails();

                            console.log("Details: ");
        
                            // Get the details map
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

							// Get the Message
							console.log("Message: " + scoringRule.getMessage().getValue());
						}
						// Check if the request returned an exception
						else if (scoringRule instanceof APIException)
						{
							// Get the Status
							console.log("Status: " + scoringRule.getStatus().getValue());

							// Get the Code
							console.log("Code: " + scoringRule.getCode().getValue());
  
                            let details = scoringRule.getDetails();

                            console.log("Details: ");
        
                            // Get the details map
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
        
                            // Get the Message
                            console.log("Message: " + scoringRule.getMessage().getValue());
							
						}
                    });
                }

                else if (responseObject instanceof APIException)
				{
					// Get the Status
					console.log("Status: " + responseObject.getStatus().getValue());

					// Get the Code
					console.log("Code: " + responseObject.getCode().getValue());

                    let details = responseObject.getDetails();

					console.log("Details: ");

					// Get the details map
					if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

					// Get the Message
					console.log("Message: " + responseObject.getMessage().getValue());
				}
                

            }
        }
    }

    static async cloneScoringRule(id)
    {
      let scoringRulesOperations = new ScoringRulesOperations();

      let response = await scoringRulesOperations.cloneScoringRule(id);

      if (response != null)
         {
           console.log("Status Code: " + response.getStatusCode());

           let responseObject = response.getObject();

			if (responseObject != null)
            {
                if (responseObject instanceof ActionWrapper)
                {
                    let ScoringRules = responseObject.getScoringRules();

                    ScoringRules.forEach(scoringRule=>{

                        if (scoringRule instanceof SuccessResponse)
						{
							// Get the Status
							console.log("Status: " + scoringRule.getStatus().getValue());

							// Get the Code
							console.log("Code: " + scoringRule.getCode().getValue());

                            let details = scoringRule.getDetails();

                            console.log("Details: ");
        
                            // Get the details map
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

							// Get the Message
							console.log("Message: " + scoringRule.getMessage().getValue());
						}
						// Check if the request returned an exception
						else if (scoringRule instanceof APIException)
						{
							// Get the Status
							console.log("Status: " + scoringRule.getStatus().getValue());

							// Get the Code
							console.log("Code: " + scoringRule.getCode().getValue());
  
                            let details = scoringRule.getDetails();

                            console.log("Details: ");
        
                            // Get the details map
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
        
                            // Get the Message
                            console.log("Message: " + scoringRule.getMessage().getValue());
							
						}
                    });
                }

                else if (responseObject instanceof APIException)
				{
					// Get the Status
					console.log("Status: " + responseObject.getStatus().getValue());

					// Get the Code
					console.log("Code: " + responseObject.getCode().getValue());

                    let details = responseObject.getDetails();

					console.log("Details: ");

					// Get the details map
					if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

					// Get the Message
					console.log("Message: " + responseObject.getMessage().getValue());
				}
                

            }
        }

    }

    static async getEntityScoreRecords()
    {
        let scoringRulesOperations = new ScoringRulesOperations();

        let paramInstance = new ParameterMap();

        paramInstance.add(GetEntityScoreRecordsParam.FIELDS, "Positive_Score");

        let response = await scoringRulesOperations.getEntityScoreRecords(paramInstance);

        if(response != null)
        {
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) 
            {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();

            if (responseObject != null)
            {
                if(responseObject instanceof EntityResponseWrapper)
                {
                   let entityScores = responseObject.getData();

                   entityScores.forEach(entityScore =>{

                   
						console.log("EntityScore Id: " + entityScore.getId());

						console.log("EntityScore Score: " + entityScore.getScore());
                   })

                   let info = responseObject.getInfo();

                   if (info != null)
					{
						if (info.getPerPage() != null)
						{
							// Get the PerPage of the Info
							console.log("Info PerPage: " + info.getPerPage().toString());
						}

						if (info.getCount() != null)
						{
							// Get the Count of the Info
							console.log("Info Count: " + info.getCount().toString());
						}

						if (info.getPage() != null)
						{
							// Get the Default of the Info
							console.log("Info Page: " + info.getPage());
						}

						if (info.getMoreRecords() != null)
						{
							// Get the Default of the Info
							console.log("Info MoreRecords: " + info.getMoreRecords().toString());
						}
					}

                }

                else if(responseObject instanceof APIException)
                {
                   // Get the Status
					console.log("Status: " + responseObject.getStatus().getValue());

					// Get the Code
					console.log("Code: " + responseObject.getCode().getValue());

                    let details = responseObject.getDetails();

					console.log("Details: ");

					// Get the details map
					if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

					// Get the Message
					console.log("Message: " + responseObject.getMessage().getValue()); 
                }
            }
            
            
        }
    }

    static async getEntityScoreRecord(recordId,moduleAPIName)
    {
        let scoringRulesOperations = new ScoringRulesOperations();

        let paramInstance = new ParameterMap();

        paramInstance.add(GetEntityScoreRecordsParam.FIELDS, "Positive_Score");

        let response = scoringRulesOperations.getEntityScoreRecord(recordId, moduleAPIName, paramInstance);

        if(response != null)
        {
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) 
            {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            let responseObject = response.getObject();

            if (responseObject != null)
            {
                if(responseObject instanceof ResponseWrapper)
                {
                   let scoringRules = responseWrapper.getScoringRules();

                   scoringRules.forEach(scoringRule =>{
 
                     let layout = scoringRule.getLayout();

                     if (layout != null)
						{
							console.log("ScoringRule Layout ID: " + layout.getId());

							console.log("ScoringRule Layout APIName: " + layout.getAPIName());
						}

                        console.log("ScoringRule CreatedTime: " + scoringRule.getCreatedTime());

						// Get the ModifiedTime of each ScoringRule
						console.log("ScoringRule ModifiedTime: " + scoringRule.getModifiedTime());   

                        let fieldRules = scoringRule.getFieldRules();

                        fieldRules.forEach(fieldRule => {

                            console.log("ScoringRule FieldRule Score: " + fieldRule.getScore());

                            let criteria = fieldRule.getCriteria();

                            if (criteria != null)
							{
								printCriteria(criteria);
							}

                            console.log("ScoringRule FieldRule Id: " + fieldRule.getId());

                        })

                            let  module = scoringRule.getModule();

                            if (module != null)
						    {
							 console.log("ScoringRule Module ID: " + module.getId());

							 console.log("ScoringRule Module APIName: " + module.getAPIName());
						    }

                            console.log("ScoringRule Name: " + scoringRule.getName());
                         
                            let modifiedBy = scoringRule.getModifiedBy();

                            if (modifiedBy != null)
						{
							console.log("ScoringRule Modified By Name : " + modifiedBy.getName());

							console.log("ScoringRule Modified By id : " + modifiedBy.getId());
						}
                      
                        console.log("ScoringRule Active: " + scoringRule.getActive());

						console.log("ScoringRule Description: " + scoringRule.getDescription());

						console.log("ScoringRule Id: " + scoringRule.getId());

						let signalRules = scoringRule.getSignalRules();

                        if (signalRules != null)
                        {
                            signalRules.forEach(signalRule =>{

                                console.log("ScoringRule SignalRule Score: " + signalRule.getScore());

                                console.log("ScoringRule SignalRule Id: " + signalRule.getId());

								let  signal = signalRule.getSignal();

								if (signal != null)
								{
									console.log("ScoringRule SignalRule Signal Namespace: " + signal.getNamespace());

									console.log("ScoringRule SignalRule Signal Id: " + signal.getId());
								}
							
                            });
                        }

                        let createdBy = scoringRule.getCreatedBy();

                        if (createdBy != null)
						{
							console.log("ScoringRule Created By Name : " + createdBy.getName());

							console.log("ScoringRule Created By id : " + createdBy.getId());
						}
                    });

                    let info = responseWrapper.getInfo();

                    if (info != null)
					{
						if (info.getPerPage() != null)
						{
							// Get the PerPage of the Info
							console.log("Info PerPage: " + info.getPerPage().toString());
						}

						if (info.getCount() != null)
						{
							// Get the Count of the Info
							console.log("Info Count: " + info.getCount().toString());
						}

						if (info.getPage() != null)
						{
							// Get the Default of the Info
							console.log("Info Page: " + info.getPage());
						}

						if (info.getMoreRecords() != null)
						{
							// Get the Default of the Info
							console.log("Info MoreRecords: " + info.getMoreRecords().toString());
						}
					}

                }

                else if(responseObject instanceof APIException)
                {
                   // Get the Status
					console.log("Status: " + responseObject.getStatus().getValue());

					// Get the Code
					console.log("Code: " + responseObject.getCode().getValue());

                    let details = responseObject.getDetails();

					console.log("Details: ");

					// Get the details map
					if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

					// Get the Message
					console.log("Message: " + responseObject.getMessage().getValue()); 
                }
             }
        }
    }

    

    

}

module.exports={ScoringRule};