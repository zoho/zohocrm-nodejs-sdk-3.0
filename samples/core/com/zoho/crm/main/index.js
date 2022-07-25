const { UpdateRecordHeader } = require("zohocrm-nodejs-sdk-3.0/core/com/zoho/crm/api/record/record_operations");

const { CustomView } = require("../core/com/zoho/crm/api/custom_views/custom_views.js");

const Attachments = require("../core/com/zoho/crm/api/attachments/attachements.js").Attachment;
const ContactRoles = require("../core/com/zoho/crm/api/contact_roles/contact_role.js").ContactRole;
const Initializer= require("../../initialize").Initializer
const Roles = require("../core/com/zoho/crm/api/roles/role.js").Role;
const Records = require("../core/com/zoho/crm/api/records/record.js").Record;
const UsersUnavailability = require("../core/com/zoho/crm/api/users_unavailability/users_unavailability.js").UsersUnavailability;
const Modules = require("../core/com/zoho/crm/api/modules/module.js").Module;
const Users = require("../core/com/zoho/crm/api/users/user").User;
const ScoringRules = require("../core/com/zoho/crm/api/scoring_rules/scoring_rules.js").ScoringRule;
const SendMail = require("../core/com/zoho/crm/api/send_mail/send_mail.js").SendMail;
const Tags = require("../core/com/zoho/crm/api/tags/tag.js").Tag;
const FieldAttachment = require("../core/com/zoho/crm/api/field_attachments/field_attachments.js").FieldAttachment;
const Fields = require("../core/com/zoho/crm/api/fields/fields.js").Field; 
const Profiles = require("../core/com/zoho/crm/api/profiles/profile.js").Profile;
const AssignmentRules = require("../core/com/zoho/crm/api/assignment_rules/assignment_rules.js").AssignmentRules;
const Wizards = require("../core/com/zoho/crm/api/wizards/wizard.js").Wizard;
const ChangeOwner = require("../core/com/zoho/crm/api/change_owner/change_owner.js").ChangeOwner;
const EmailTemplate = require("../core/com/zoho/crm/api/email_templates/email_templates.js").EmailTemplate;
const Pipeline = require("../core/com/zoho/crm/api/pipe_line/pipe_line.js").PipeLine;
const Layout = require("../core/com/zoho/crm/api/layouts/layout.js").Layout;
const customView = require("../core/com/zoho/crm/api/custom_views/custom_views.js").CustomView;
const RelatedList = require("../core/com/zoho/crm/api/related_lists/related_list.js").RelatedList;
const Currency = require("../core/com/zoho/crm/api/currencies/currency.js").Currency;
const BulkRead = require("../core/com/zoho/crm/api/bulk_read/bulk_read.js").BulkRead;
const ShareRecord =require("../core/com/zoho/crm/api/share_records/share_record.js").ShareRecord;
const Territory = require("../core/com/zoho/crm/api/territories/territory.js").Territory;
const VariableGroups = require("../core/com/zoho/crm/api/variable_groups/variable_group.js").VariableGroup;
const Query = require("../core/com/zoho/crm/api/query/query.js").Query;
const BulkWrite = require("../core/com/zoho/crm/api/bulk_write/bulk_write.js").BulkWrite;
const File = require("../core/com/zoho/crm/api/files/file.js").File;
const Taxes = require("../core/com/zoho/crm/api/taxes/tax.js").Tax;
const Organization = require("../core/com/zoho/crm/api/organization/organization.js").Organization
const Territories = require("../core/com/zoho/crm/api/territories/territory.js").Territory;
const Notes = require("../core/com/zoho/crm/api/notes/note.js").Note;
const Notification = require("../core/com/zoho/crm/api/notification/notification.js").Notification;
const RelatedRecord = require("../core/com/zoho/crm/api/related_records/related_record.js").RelatedRecord;
const BluePrint = require("../core/com/zoho/crm/api/blue_print/blue_print.js").BluePrint;
const Variable = require("../core/com/zoho/crm/api/variables/variable.js").Variable;
const InventoryTemplates = require("../core/com/zoho/crm/api/inventory_templates/inventory_templates.js").InventoryTemplate;
class Test
{
    
    static async call()
    {
        await Initializer.initialize();
        
        this.bluePrint();

        this.contactRole()

        this.role();

        this.record();
       
        this.usersUnavailability();

        this.module();

        this.user();

        this.scoringRule();

        this.sendMail();

        this.tag();

        this.tax();

        this.fieldAttachment();

        this.profile();

        this.assignmentRule();

        this.wizard();

        this.changeowner();

        this.field();

        this.emailTemplate()

        this.pipeline();

        this.layout();

        this.customView();

        this.relatedList();

        this.currency();

        this.bulkRead();

        this.shareRecord();

        this.variableGroups();

        this.bulkWrite();

        this.query()

        this.file();

        this.organization();

        this.territory();

        this.note();

        this.notification();

        this.relatedRecord();

        this.variable();

        this.attachement();

        this.inventoryTemplates();

}

  static async inventoryTemplates()
  {
      let inventoryTemplateId = 5247206000000366000n;

      console.log("----Calling getInventoryTemplates----");
      await InventoryTemplates.getInventoryTemplates();

      console.log("----Calling getInventoryTemplateById----")
      await InventoryTemplates.getInventoryTemplateById(5247206000000366000n);
      
  }

  static async attachement()
  {
    let moduleAPIName = "Leads";

    let recordId = 5247206000000661000n;

    let attachmentId = 5247206000000673000n;

    let destinationFolder = "/Users/user_name/Documents";

    let absoluteFilePath = "/home/Pictures/Screenshot.png";

    console.log("-----Calling getAttachments()-----");
    await Attachments.getAttachments(moduleAPIName, recordId);

    console.log("-----Calling uploadAttachments()-----");
    await Attachments.uploadAttachments(moduleAPIName, recordId, absoluteFilePath);

    console.log("-----Calling uploadLinkAttachment()-----");
    await Attachments.uploadLinkAttachment(moduleAPIName , recordId, "https://drones2.com");

    console.log("-----Calling deleteAttachments()-----");
    await Attachments.deleteAttachments(moduleAPIName, recordId, [347706110603001n, 347706110604001n,739487589374589n,89358395n])

    console.log("-----Calling deleteAttachment()-----");
    await Attachments.deleteAttachment(moduleAPIName, recordId, attachmentId);

    console.log("-----Calling downloadAttachment()-----");
    await Attachments.downloadAttachment(moduleAPIName, recordId, attachmentId, destinationFolder)
  }
 static async variable()
 {
     let variableId = 5247206000000672000n;

     let variableIds = ["5247206000000672000"];

     console.log("----Calling getVariables----");
     await Variable.getVariables();

     console.log("----Calling createVariables----");
     await Variable.createVariables() ;

     console.log("----Calling updateVariables----");
     await Variable.updateVariables();

    console.log("-----Calling deleteVariables()-----")
    await Variable.deleteVariables(variableIds);

    console.log("-----Calling deleteVariable()-----")
    await Variable.deleteVariable(5247206000000672000n)

    console.log("-----Calling getVariableById()-----")
    await Variable.getVariableById(7022000n);

    console.log("-----Calling getVariableForAPIName()-----")
    await Variable.getVariableForAPIName("Variable66100");

    console.log("-----Calling updateVariableByAPIName()-----")
    await Variable.updateVariableByAPIName("Variable66100");


    console.log("-----Calling deleteVariables()-----")
    await Variable.deleteVariables(variableIds);

    console.log("-----Calling deleteVariable()-----")
    await Variable.deleteVariable(7022000n);

 }

static async bluePrint()
{
    let moduleAPIName = "Leads";

    let transitionId = 5247206000000687000n;
    
    let recordId = 5247206000000672000n;

    console.log("----Calling  getBlueprint----");
    await BluePrint.getBlueprint(moduleAPIName,recordId);

    console.log("----Calling printPickListValue----");
    await BluePrint.updateBlueprint(moduleAPIName,recordId,transitionId);


}  
static async notification()
 {
     let channelId = 1004400000n;

    let channelIds = [100044800000n, 100044400000n];

    console.log("-----Calling enableNotifications()-----")
    await Notification.enableNotifications();

    console.log("-----Calling getNotificationDetails()-----")
    await Notification.getNotificationDetails();

    console.log("-----Calling updateNotifications()-----")
    await Notification.updateNotifications();

    console.log("-----Calling updateNotification()-----")
    await Notification.updateNotification();

    console.log("-----Calling disableNotifications()-----")
    await Notification.disableNotifications(channelIds);

    console.log("-----Calling getNotificationDetails()-----")
    await Notification.disableNotification();
}

  static async note()
  {
      let noteId = 5247206000000387000n;

      let noteIds= [5247206000000387000n,5247206000000387000n,5247206000000387000n];

      console.log("-----Calling getNotes()-----")
      await Notes.getNotes();
 
      console.log("-----Calling getNote()-----")
      await Notes.getNote(noteId);

      console.log("-----Calling createNotes()-----")
      await Notes.createNotes();

      console.log("-----Calling updateNotes()-----")
      await Notes.updateNotes();

      console.log("-----Calling updateNote()-----")
      await Notes.updateNote(noteId);

      console.log("-----Calling deleteNotes()-----")
      await Notes.deleteNotes(noteIds);

      console.log("-----Calling deleteNote()-----")
      await Notes.deleteNote(noteId);
   }


    static async organization()
    {
        let organizationId= 773700000n;

        console.log("----Calling getOrganization----")
        await Organization.getOrganization();

        console.log("----Calling uploadOrganizationPhoto----")
        await Organization.uploadOrganizationPhoto();

    }

    static async contactRole()
     {
        let contactRoleId = 5247206000000006000n;
        let contactRoleIds = ["5247206000000006000", "5247206000000006800", "5247206000000006000"];
        let contactId = 5247206000000648000n;
        let dealId = 5247206000000387200n;

        console.log("-----Calling getContactRole()-----")
        await ContactRoles.getContactRoles();

        console.log("-----Calling createContactRoles()-----")
        await ContactRoles.createContactRoles();

        console.log("-----Calling updateContactRoles()-----")
        await ContactRoles.updateContactRoles();

        console.log("-----Calling deleteContactRoles()-----")
        await ContactRoles.deleteContactRoles(contactRoleIds);

        console.log("-----Calling getContactRole()-----")
        await ContactRoles.getContactRole(contactRoleId);

        console.log("-----Calling updateContactRole()-----")
        await ContactRoles.updateContactRole(contactRoleId);

        console.log("-----Calling deleteContactRole()-----")
        await ContactRoles.deleteContactRole(contactRoleId);

        console.log("----Calling getAllContactRolesOfDeal----")
        await ContactRoles.getAllContactRolesOfDeal(dealId);

		console.log("----Calling getContactRolesOfDeal----")
        await ContactRoles.getContactRoleOfDeal(contactId, dealId);

        console.log("----Calling getAllContactRolesOfDeal----")
		await ContactRoles.addContactRoleToDeal(contactId, dealId);

        console.log("----Calling removeContactRoleFromDeal----");
		await ContactRoles.removeContactRoleFromDeal(contactId, dealId);
    }

    static async role() 
    {
        let roleId = 312938000000307000n;

        console.log("-----Calling getRoles()-----")
        await Roles.getRoles();

        console.log("-----Calling getRole()-----")
        await Roles.getRole(roleId);

        console.log("----Calling createRoles()----")
        await Roles.createRoles();

        console.log("----Calling updateRoles()----")
        await Roles.updateRoles();

        console.log("----Calling deleteRole----");
        await Roles.deleteRole(roleId);

        console.log("----Calling updateRoles()----")
        await Roles.updateRoles(roleId);

    }

    static async record()
    {
 
        let jobId ="5247206000000641000";

        let moduleAPIName = "Leads";

        let filePath = "/home/Pictures/Screenshot.png";

        let recordId =  5247206000000661000n;

        let recordIds = ["5247206000000387400","5247206000000387400"]
        
        // externalId ="1234567890"
        let externalFieldValue = "1234567800";

        let destinationFolder = "/home/Documents/destination2";
       
         console.log("----Calling leadConversionOptions") 
         await Records.leadConversionOptions( 5247206000000661000n);

        console.log("-----Calling getRecord()-----")
        await Records.getRecord(moduleAPIName, recordId, filePath);

        console.log("----Calling updateRecord----");
        await Records.updateRecord(moduleAPIName, recordId);

        console.log("----Calling deleteRecord----");
        await Records.deleteRecord(moduleAPIName, recordId);

        console.log("----Calling getRecordUsingExternalId");
        await Records.getRecordUsingExternalId(moduleAPIName, externalFieldValue, destinationFolder);

		console.log("----Calling updateRecordUsingExternalId----");
        await Records.updateRecordUsingExternalId(moduleAPIName, externalFieldValue);
		
		console.log("----Calling deleteRecordUsingExternalId----")
        await Records.deleteRecordUsingExternalId(moduleAPIName, externalFieldValue);

        console.log("-----Calling getRecords()-----")
        await Records.getRecords(moduleAPIName);

        console.log("-----Calling createRecords()-----");
        await Records.createRecords(moduleAPIName);

        console.log("----Calling updateRecords----");
        await Records.updateRecords(moduleAPIName);

        console.log("----Calling deleteRecords----");
        await Records.deleteRecords(moduleAPIName, recordIds);

        console.log("----Calling upsertRecords----"); 
        await Records.upsertRecords(moduleAPIName);

        console.log("----Calling getDeletedRecords----")
        await Records.getDeletedRecords(moduleAPIName);

        console.log("----Calling searchRecords----");
        await Records.searchRecords(moduleAPIName);

        console.log("----Calling convertLead----")
        await Records.convertLead(5247206000000670000n);

        console.log("-----Calling uploadPhoto()-----");
        await Records.uploadPhoto(moduleAPIName, recordId, filePath);

        console.log("-----Calling getPhoto()-----");
        await Records.getPhoto(moduleAPIName, recordId, destinationFolder);

        console.log("----Calling deletePhoto----")
        await Records.deletePhoto(moduleAPIName, recordId);

        console.log("----Calling massUpdateRecords----");
        await Records.massUpdateRecords(moduleAPIName);

        console.log("Calling getMassUpdateStatus----")
        await Records.getMassUpdateStatus(moduleAPIName,"5247206000000670000");

        
    }

    static async usersUnavailability()
    {
        let userId = 312938000000232000n;

        let unavailableId = 312938000000343000n;

        console.log("----Calling getUsersUnavailabilityHours");
        await UsersUnavailability.getUserUnavailabilityHours(userId);

        console.log("----Calling usersUnavailabilityHours----");
        await UsersUnavailability.usersUnavailabilityHours();

        console.log("----Calling updateUsersUnavailabilityHours----")
        await UsersUnavailability.updateUsersUnavailabilityHours();

        console.log("----Calling deleteUsersUnavailabilityHour----")
        await UsersUnavailability.deleteUsersUnavailabilityHour(userId);

        console.log("----Calling getUsersUnavailabilityHours----");
        await UsersUnavailability.getUsersUnavailabilityHours();


    }

    static async module() {

        
        let moduleAPIName = "Leads";

        let moduleId = 312938000000000030n;

         console.log("-----Calling getModules()-----")
         await Modules.getModules();

          console.log("-----Calling getModule()-----")
          await Modules.getModule(moduleAPIName);

        console.log("-----Calling updateModuleByAPIName()-----")
        await Modules.updateModuleByAPIName(moduleAPIName);

        console.log("-----Calling updateModuleById()-----")
        await Modules.updateModuleById(moduleId);
    }

    static async user() 
    {
        let userId =  5247206000000361000n;

        let territoryId = 312938000000321000n;

        console.log("-----Calling getUsers()-----")
        await Users.getUsers();

         console.log("-----Calling getUser2()-----")
         await Users.getuser(userId);

         console.log("-----Calling updateUsers()-----")
         await Users.updateUsers();

         console.log("-----Calling updateUser()-----")
         await Users.updateUser(userId);

        console.log("-----Calling deleteUser()-----")
         await Users.deleteUser(userId);

        console.log("-----Calling createUser()-----")
        await Users.createUser();

        console.log("----Calling getTerritoriesOfUser----")
        await Users.getTerritoriesOfUser(userId);

        console.log("----Calling UpdateTerrotoriesOfUser----")
        await Users.updateTerritoriesOfUser(userId);

        console.log("---Calling getSpecificTerritoryOfUser----")
        await Users.getSpecificTerritoryOfUser(userId,territoryId);

        console.log("----Calling getValidateTerritoriesBeforeTransferring----")
        await Users.getValidateTerritoriesBeforeTransferring(userId);

        console.log("----Calling delinkAndTransferSpecificTerritoryOfUser----")  
         await Users.delinkAndTransferSpecificTerritoryOfUser(userId,territoryId);

        console.log("----Calling delinkAndTransferTerritoriesOfUser----");
        await Users.delinkAndTransferTerritoriesOfUser(userId);

        console.log("----Calling getValidateSpecificTerritoryBeforeTransferring----")
        await Users.getValidateSpecificTerritoryBeforeTransferring(userId,territoryId);

    }

    static async scoringRule()
    {
        let scoringRuleId = 312938000000325000n;

        console.log("----Calling getScoringRules----")
        await ScoringRules.getScoringRules();

        console.log("-----Calling getScoringRule----")
        await ScoringRules.getScoringRule(scoringRuleId);

        console.log("----Calling createScoringRules ----");
        await ScoringRules.createScoringRules();

        console.log("----Calling deleteScoringRules----")
        await ScoringRules.deleteScoringRules();

        console.log("----Calling scoringRuleExecutionUsingLayoutId----")
        await ScoringRules.scoringRuleExecutionUsingLayoutId("Leads");

        console.log("----Calling  activateScoringRule----")
        await ScoringRules.activateScoringRule(scoringRuleId);

        console.log("----Calling deactivateScoringRule----")
        await ScoringRules.deactivateScoringRule(scoringRuleId);

        console.log("----getEntityScoreRecords----")
        await ScoringRules.getEntityScoreRecords();

        console.log("----scoringRuleExecutionUsingRuleIds----")
        await ScoringRules.scoringRuleExecutionUsingRuleIds("Leads");

        console.log("----Calling cloneScoringRule----");
        await ScoringRules.cloneScoringRule(scoringRuleId);
     }

    static async sendMail()
    {
        console.log("----Calling getEmailAddress----")
        await SendMail.getEmailAddresses();

        console.log("----Calling sendMail----")
        await SendMail.sendMail(312938000000000000n, "Deals");
    }

    static async tag()
     {
        let moduleAPIName = "Leads";

        let tagId = 5247206000000658000n;

        let recordId = 312938000000241000n;

        let tagNames = ["Tag11,Tag11"];

        let recordIds = [5247206000000661000n,5247206000000661000n];

        let conflictId = "5247206000000658000";

        console.log("-----Calling getTags()-----")
        await Tags.getTags(moduleAPIName);

        console.log("-----Calling createTags()-----")
        await Tags.createTags(moduleAPIName);

        console.log("-----Calling updateTags()-----")
        await Tags.updateTags(moduleAPIName);

        console.log("-----Calling updateTag()-----")
        await Tags.updateTag(moduleAPIName, tagId);

        console.log("-----Calling mergeTags()-----")
        await Tags.mergeTags(tagId, conflictId);

        console.log("-----Calling addTagsToRecord()-----")
        await Tags.addTagsToRecord(moduleAPIName, recordId, tagNames);

        console.log("-----Calling removeTagsFromRecord()-----")
        await Tags.removeTagsFromRecord(moduleAPIName, recordId, tagNames);

        console.log("-----Calling addTagsToMultipleRecords()-----")
        await Tags.addTagsToMultipleRecords(moduleAPIName, recordIds, tagNames);

        console.log("-----Calling removeTagsFromMultipleRecords()-----")
        await Tags.removeTagsFromMultipleRecords(moduleAPIName, recordIds, tagNames);

        console.log("-----Calling getRecordCountForTag()-----")
        await Tags.getRecordCountForTag(moduleAPIName, tagId);

        console.log("-----Calling deleteTag()-----")
        await Tags.deleteTag(tagId);
    }

    static async tax() 
    {
        let taxId = 312938000000020000n;

        console.log("-----Calling getTaxes()-----")
        await Taxes.getTaxes();

        console.log("-----Calling getTax()-----")
        await Taxes.getTax(taxId);

        console.log("-----Calling updateTaxes()-----")
        await Taxes.updateTaxes();
    }

    static async fieldAttachment()
    {
      let destinationFolder = "/home/ajeet-zt678/Documents/destination";
       
      console.log("----Calling getFieldAttachments----")
      await FieldAttachment.getFieldAttachments("Leads", 312938000000241000n, 312938000000241200n, destinationFolder);
    }

    static async field() {
        let moduleAPIName = "Contacts"

        let fieldId = 5247206000000480055n;

        let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes", "Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events", "Purchase_Orders", "Accounts", "Cases", "Notes" ];

        for(let name of names) {
            await Fields.getFields(name);
        }

        console.log("-----Calling getFields()-----")
        await Fields.getFields(moduleAPIName);

        console.log("-----Calling getField()-----")
        await Fields.getField(moduleAPIName, fieldId);
    }

    static async profile()
    {
       console.log("----Calling getProfiles----")
       await Profiles.getProfiles();
    }

    static async assignmentRule()
    {
        let assignmentRuleId = 5247206000000699002n; 
        console.log("----Calling getAssignmentRules----")
        await AssignmentRules.getAssignmentRules(); 

        console.log("----Calling getAssignmentRule----")
        await AssignmentRules.getAssignmentRule(assignmentRuleId);
    }

    static async wizard()
    {
        console.log("----Calling getWizards----")
        await Wizards.getWizards();
    }

    static async changeowner()
    {
        console.log("----Calling updateRecordsOwner----")
         await ChangeOwner.updateRecordsOwner("Leads");

        console.log("----Calling updateRecordOwner----")
        await ChangeOwner.updateRecordOwner("Leads",312938000000241000n)
    }


    static async emailTemplate()
    {
        console.log("----Calling  getEmailTemplates----");
        await EmailTemplate.getEmailTemplates("Leads");

        console.log("----Calling getEmailTemplatesbyId----");
        await EmailTemplate.getEmailTemplateById();
    }

    static async pipeline()
    {
        let layoutId =  52472060000000910000n;

        let PipelineID = 5247206000000731000n;

        let moduleAPIName = "Leads";

        console.log("----Calling createPipelines----");
        Pipeline.createPipelines(layoutId);

        console.log("----Calling updatePipelines----");
        Pipeline.updatePipelines(layoutId);

        console.log("----Calling getPipelines----");
        Pipeline.getPipelines(layoutId);

        console.log("----Calling getPipeline----");
        Pipeline.getPipeline(layoutId, PipelineID);

        console.log("----Calling updatePipeline----");
        Pipeline.updatePipeline(layoutId, PipelineID);

        console.log("----Calling transferandDelete----");
        Pipeline.transferAndDelete(layoutId);
    }

    static async layout()
    {
        let layoutID =  5247206000000091000n;
        let moduleAPIName = "Leads";

        let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes", 
		"Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events",
		 "Purchase_Orders", "Accounts", "Cases", "Notes"];
        
         names.forEach(async name => {
			await Layout.getLayouts(name);
		 });

        console.log("-----Calling getLayouts()-----")
        await Layout.getLayouts(moduleAPIName);

        console.log("-----Calling getLayout()-----")
        await Layout.getLayout(moduleAPIName,layoutID);
    }

    static async customView()
    {
        let customViewId = 5247206000000087000n;

        let moduleAPIName ="Leads";
    
        let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes", "Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events", "Purchase_Orders", "Accounts", "Cases", "Notes" ];

        names.forEach(async name => {
        	await CustomView.getCustomViews(name);
        });

        console.log("-----Calling getCustomViews()-----")
        await CustomView.getCustomViews(moduleAPIName);

        console.log("-----Calling getCustomView()-----")
        await CustomView.getCustomView(moduleAPIName, customViewId);
      
    }

    static async relatedList()
    {
        let relatedListId = 312938000000292000n;

        let moduleAPIName = "Leads";

        console.log("----Calling getRelatedLists----");
        await RelatedList.getRelatedLists("Leads");

        console.log("----Calling getRelatedList----");
        await RelatedList.getRelatedList(moduleAPIName,relatedListId);


    }

    static async currency()
    {
        let currencyId = 5247206000000642000n;

      console.log("----Calling getCurrencies----");
      await Currency.getCurrencies();

      console.log("-----Calling enableMultipleCurrencies()-----")
      await Currency.enableMultipleCurrencies();

      console.log("-----Calling getCurrency()-----")
      await Currency.getCurrency(currencyId);

      console.log("-----Calling addCurrency()-----")
      await Currency.addCurrencies();

      console.log("-----Calling updateCurrency()-----")
      await Currency.updateCurrencies();

      console.log("-----Calling updateCurrency()-----")
      await Currency.updateCurrency(currencyId);

      console.log("-----Calling updateBaseCurrency()-----")
      await Currency.updateBaseCurrency();
    }

      static async bulkRead() 
      {
        let moduleAPIName = "Leads";

        let jobId = 5247206000000641000n;

        console.log("-----Calling createBulkReadJob()-----")
        await BulkRead.createBulkReadJob(moduleAPIName);

        console.log("-----Calling getBulkReadJobDetails()-----")
        await BulkRead.getBulkReadJobDetails(jobId);

        console.log("-----Calling downloadResult()-----")
        await BulkRead.downloadResult(5247206000000641000n, "/home/ajeet-zt678/Documents/destination")
    }

    static async bulkWrite() 
    {
        let fileId= "5247206000000684000";

        let filePath = "/home/Videos/ZCRM.zip";

        let orgId = "773700000";

        let downloadUrl = "https://download-accl.zoho.com/v3/crm/673573045/bulk-write/3477061125051/3477061125051.zip";

        console.log("----Calling uploadFile----");
        await BulkWrite.uploadFile(orgId, filePath);

        console.log("----Calling createBulkWriteJob----");
        await BulkWrite.createBulkWriteJob("Leads", fileId);

        console.log("----Calling getBulkWriteJobDetails----");
        await BulkWrite.getBulkWriteJobDetails(3477061125000n);

        console.log("----Calling downloadBulkWriteResult----");
        await BulkWrite.downloadBulkWriteResult(downloadUrl, "/Users/Documents/file")
    }

    static async shareRecord() 
    {
        let moduleAPIName = "Leads";

        let recordId = 5247206000000666000n;

        console.log("-----Calling updateSharePermissions()-----")
        await ShareRecord.updateSharePermissions(moduleAPIName, recordId);

        console.log("-----Calling shareRecord()-----")
        await ShareRecord.shareRecord(moduleAPIName, recordId);

        console.log("-----Calling getSharedRecordDetails()-----")
        await ShareRecord.getSharedRecordDetails(moduleAPIName, recordId);

        console.log("-----Calling revokeSharedRecord()-----")
        await ShareRecord.revokeSharedRecord(moduleAPIName, recordId);
    }

    static async territory() {
        let territoryId = 312938000000321000n;

        console.log("-----Calling getTerritories()-----")
        await Territories.getTerritories();

        console.log("-----Calling getTerritory()-----")
        await Territories.getTerritory(territoryId);
    }

    static async variableGroup() 
    {
        let variableGroupId = 6130000n;

        let variableGroupAPIName = "General";

        console.log("-----Calling getVariableGroups()-----")
        await VariableGroups.getVariableGroups();

        console.log("-----Calling getVariableGroupById()-----")
        await VariableGroups.getVariableGroupById(variableGroupId);

        console.log("-----Calling getVariableGroupByAPIName()-----")
        await VariableGroups.getVariableGroupByAPIName(variableGroupAPIName);
    }

    static async query()
    {   
        console.log("----Calling getRecord----")
        await Query.getRecords();
        
    }

    static async file() {
        let destinationFolder = "/home/Documents/destination";

        let fileId = " 9620042926854f3067586f6507d77119e19f5cf1299274a9b5a72740439ab863";

        console.log("-----Calling uploadFile()-----");
        await File.uploadFiles();

        console.log("-----Calling getFile()-----");
        await File.getFile(fileId, destinationFolder);
    }

    static async relatedRecord()
    {
        let moduleAPIName = "Leads";

        let recordId = 5247206000000666000n;

        let relatedModuleAPIName = "Products";

        let relatedId = 347706110665000n;

        // let relatedIds = [347706110640000n, 347706110538000n];

        let externalValue = "TestExternalLead";

		let externalFieldValue = "TestExternalProduct";

        let destinationFolder = "";

        console.log("-----Calling getRelatedRecords()-----")
        await RelatedRecord.getRelatedRecords(moduleAPIName, recordId, relatedModuleAPIName);

        console.log("-----Calling updateRelatedRecords()-----")
        await RelatedRecord.updateRelatedRecords(moduleAPIName, recordId, relatedModuleAPIName);

        console.log("-----Calling deLinkRecords()-----")
        await RelatedRecord.deLinkRecords(moduleAPIName, recordId, relatedModuleAPIName, relatedIds);

        await RelatedRecord.getRelatedRecordsUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName);
		
		await RelatedRecord.updateRelatedRecordsUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName);
		
		await RelatedRecord.deleteRelatedRecordsUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName, relatedIds);

        console.log("-----Calling getRelatedRecord()-----")
        await RelatedRecord.getRelatedRecord(moduleAPIName, recordId, relatedModuleAPIName, relatedId)

        console.log("-----Calling updateRelatedRecord()-----")
        await RelatedRecord.updateRelatedRecord(moduleAPIName, recordId, relatedModuleAPIName, relatedId);

        console.log("-----Calling deLinkRecord()-----")
        await RelatedRecord.deLinkRecord(moduleAPIName, recordId, relatedModuleAPIName, relatedId);

        console.log("-----Calling getRelatedRecordUsingExternalId()-----");
        await RelatedRecord.getRelatedRecordUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName, externalFieldValue, destinationFolder);
		
        console.log("-----Calling updateRelatedRecordUsingExternalId()-----");
        await RelatedRecord.updateRelatedRecordUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName, externalFieldValue);
		
        console.log("-----Calling deleteRelatedRecordUsingExternalId()-----");
        await RelatedRecord.deleteRelatedRecordUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName, externalFieldValue);
    }

}

Test.call();

module.exports = {Test};