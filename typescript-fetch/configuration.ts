// tslint:disable
/**
 * Official Assignee Service Information System v4 (OASIS4)
 *  ____ # Version 1.4.6 - Date finalised: XX-Feb-2018 ____    ### Change log: | Version| Thing | Notes | Classification | |----|-----|------| ----| | 1.4.3 | Added /creditor-claims/{claim_number}/claim-registration resource | missing resource  | bug | | 1.4.3 | Addtional creditor-claims search criteria added  | ui mismatch | bug | | 1.4.3 | Added ui mappings to creditor-claims search | clarity / documentation | enhancement | | 1.4.3 | Changed name of Claim Application to Claim Registration | ui mismatch| enhancement | | 1.4.4 | Removed allOf: containers | codegen didn't like it | bug | | 1.4.5 | added /organisaions/claims resource | missing path | bug | | 1.4.5 | re-ordered claims paths | improving swagger readability | enhancement | | 1.4.5 | Changed claim-applications/modify to /save | semantically more accurate | enahncement | | 1.4.6 | Added assets HATEOAS links and placeholders | future-proofing | enhancement | | 1.4.6 | Added resticted search contacts implementation for creditors | semantically clearer |  enhancement | | 1.4.6 | Wrapped enums in double quotes |stop codegen from escaping | bug, kind of | | 1.4.6 | Backed out allOf change  | incorrect defninition | bug |  | 1.4.6 | Tidied up RegistrationRecord Model | enhanced understanding of audit and some incomplete definitions | bug |   <br /> **** <br />  ### Future version backlog *THings that need to be changed for future iteration.*   | Thing I should do |  Likelihood it will ever get done | Version implemented | |----|:----:|:-----:| | Add distinct link models for everything - would allow more accurate HATEOAS examples | **Somewhat likely** |  nope  | | Refactor out claim notifcation options| **Possible but later** |  not needed  | | Refactor out the estate details from the claims resources (so the read only stuff for creditors)| **Possible but later** |  nope  | | Modify style of claims to include  a /new activity | **Almost definitely** |  done.. right or wrong| | Add audit resources / actions for all_the_things | **Definitely** but not just yet. |  nope  | | Add NZBN as search critea to estates, claims & contacts| **definitely** | |   **** <br /> 
 *
 * OpenAPI spec version: 1.4.7
 * Contact: sam@pxp.nz
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface ConfigurationParameters {
    apiKey?: string | ((name: string) => string);
    username?: string;
    password?: string;
    accessToken?: string | ((name: string, scopes?: string[]) => string);
    basePath?: string;
}

export class Configuration {
    /**
     * parameter for apiKey security
     * @param name security name
     * @memberof Configuration
     */
    apiKey?: string | ((name: string) => string);
    /**
     * parameter for basic security
     * 
     * @type {string}
     * @memberof Configuration
     */
    username?: string;
    /**
     * parameter for basic security
     * 
     * @type {string}
     * @memberof Configuration
     */
    password?: string;
    /**
     * parameter for oauth2 security
     * @param name security name
     * @param scopes oauth2 scope
     * @memberof Configuration
     */
    accessToken?: string | ((name: string, scopes?: string[]) => string);
    /**
     * override base path
     * 
     * @type {string}
     * @memberof Configuration
     */
    basePath?: string;

    constructor(param: ConfigurationParameters = {}) {
        this.apiKey = param.apiKey;
        this.username = param.username;
        this.password = param.password;
        this.accessToken = param.accessToken;
        this.basePath = param.basePath;
    }
}
