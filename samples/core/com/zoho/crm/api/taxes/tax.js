const { TaxesOperations} = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/taxes/taxes_operations");
const ResponseWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/taxes/response_wrapper").ResponseWrapper;
const APIException = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/taxes/api_exception").APIException;
const SuccessResponse = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/taxes/success_response").SuccessResponse;
const BodyWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/taxes/body_wrapper").BodyWrapper;
const ActionWrapper = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/taxes/action_wrapper").ActionWrapper;
const ZCRMTax = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/taxes/tax").Tax;
const ParameterMap = require("@zohocrm/nodejs-sdk-3.0/routes/parameter_map").ParameterMap;
const ZCRMOrgTax = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/taxes/org_tax.js").OrgTax;
const Preference = require("@zohocrm/nodejs-sdk-3.0/core/com/zoho/crm/api/taxes/preference.js").Preference;

class Tax {

    /**
     * <h3> Get Taxes </h3>
     * This method is used to get all the Organization Taxes and print the response.
     */
    static async getTaxes() {
        //Get instance of TaxesOperations Class
        let taxesOperations = new TaxesOperations();

        //Call getTaxes method
        let response = await taxesOperations.getTaxes();

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject = response.getObject();

            if (responseObject != null) {
                //Check if expected ResponseWrapper instance is received
                if (responseObject instanceof ResponseWrapper) {
                    //Get the array of obtained Tax instances
                    let orgtaxes = responseObject.getOrgTaxes();

                    let taxes  = orgtaxes.getTaxes()

                    taxes.forEach(tax => {
                        //Get the DisplayLabel of each Tax
                        console.log("Tax DisplayLabel: " + tax.getDisplayLabel());

                        //Get the Name of each Tax
                        console.log("Tax Name: " + tax.getName());

                        //Get the ID of each Tax
                        console.log("Tax ID: " + tax.getId());

                        //Get the Value of each Tax
                        console.log("Tax Value: " + tax.getValue().toString());
                    });

                    let preference = orgtaxes.getPreference();

                    if (preference != null) {
                        //Get the AutoPopulateTax of each Preference
                        console.log("Preference AutoPopulateTax: " + preference.getAutoPopulateTax().toString());

                        //Get the ModifyTaxRates of each Preference
                        
                        console.log("Preference ModifyTaxRates: " + preference.getModifyTaxRates().toString());

                    }
                }
                //Check if the request returned an exception
                else if (responseObject instanceof APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
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

    /**
     * <h3> Update Taxes </h3>
     * This method is used to update Organization Taxes and print the response.
     */
    static async updateTaxes() {
        //Get instance of TaxesOperations Class
        let taxesOperations = new TaxesOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request = new BodyWrapper();

        let orgTax = new ZCRMOrgTax();

        let taxList = [];

        let tax1 = new ZCRMTax(); 

        tax1.setId(312938000000331016n);

        tax1.setName("MyTax113431322355");

		tax1.setSequenceNumber(1);

		tax1.setValue(15.04);

        taxList.push(tax1);

        orgTax.setTaxes(taxList);

        let preference = new Preference();

        preference.setAutoPopulateTax(false);

		preference.setModifyTaxRates(false);

		orgTax.setPreference(preference);

		request.setOrgTaxes(orgTax);

        //Call updateTaxes method that takes BodyWrapper instance as parameter
        let response = await taxesOperations.updateTaxes(request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject = response.getObject();

            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ActionWrapper) 
                {
                    //Get the array of obtained ActionResponse instances
                    let actionResponse = responseObject.getOrgTaxes();

                        //Check if the request is successful
                        if (actionResponse instanceof SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof APIException) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                  
                }
                //Check if the request returned an exception
                else if (responseObject instanceof APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
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

    
    
    /**
     * <h3> Get Tax </h3>
     * This method is used to get the Organization Tax with ID and print the response.
     * @param {BigInt} taxId The ID of the tax to be obtained
     */
    static async getTax(taxId) {
        //example
        //let taxId = 02317003n;

        //Get instance of TaxesOperations Class
        let taxesOperations = new TaxesOperations();

        //Call getTax method that takes taxId as parameter
        let response = await taxesOperations.getTax(taxId);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject = response.getObject();

            if (responseObject != null) {
                //Check if expected ResponseWrapper instance is received
                if (responseObject instanceof ResponseWrapper) {
                    //Get the array of obtained Tax instances

                    let orgtaxes = responseObject.getOrgTaxes();

                    let taxes  = orgtaxes.getTaxes()

                    taxes.forEach(tax => {
                        //Get the DisplayLabel of each Tax
                        console.log("Tax DisplayLabel: " + tax.getDisplayLabel());

                        //Get the Name of each Tax
                        console.log("Tax Name: " + tax.getName());

                        //Get the ID of each Tax
                        console.log("Tax ID: " + tax.getId());

                        //Get the Value of each Tax
                        console.log("Tax Value: " + tax.getValue().toString());
                    });

                    let preference =  orgtaxes.getPreference();

                    if (preference != null) {
                        //Get the AutoPopulateTax of each Preference
                        console.log("Preference AutoPopulateTax: " + preference.getAutoPopulateTax().toString());

                        //Get the ModifyTaxRates of each Preference
                        console.log("Preference ModifyTaxRates: " + preference.getModifyTaxRates());

                    }
                }
                //Check if the request returned an exception
                else if (responseObject instanceof APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
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

    
}

module.exports = { Tax }