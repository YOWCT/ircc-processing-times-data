var strurl = window.location.pathname; // Get the URL address of the page
strurl = strurl.toLowerCase();

// PROCESSING TIME DATASET BEGIN

// WEEKLY PROCESSING TIME PROVIDED BY CPR BEGIN
// Holds the processing times for Visitor visa extension
var visitor_extension = {online:"30", online_working_on:"04/03/2018", paper:"103", paper_working_on:"01/20/2018", lastupdated:"2018/05/06"};

// Holds the processing times for Study permit extension
var study_extension = {online:"35", online_working_on:"03/29/2018", paper:"116", paper_working_on:"01/07/2018", lastupdated:"2018/05/06"};

// Holds the processing times for work permit extension (new employer)
var work_extension_new_employer = {online:"45", online_working_on:"03/19/2018", paper:"105", paper_working_on:"01/18/2018", lastupdated:"2018/05/06"};

// Holds the processing times for work permit extension (same employer)
var work_extension_same_employer = {online:"45", online_working_on:"03/19/2018", paper:"118", paper_working_on:"01/05/2018", lastupdated:"2018/05/06"};

// Holds the processing times for Family Sponsorship in Canada and Assessement
var family_sponsorship = {spouse_can:"26", submit_after:"12", spouse_assessment:"40", parent_grandparent_assessment:"52", lastupdated:"2018/05/06"};

// Holds the processing times for Humanitarian and compassionate cases
var humanitarian_compassionate = {humanitarian:"30", lastupdated:"2018/05/06"};

// Holds the processing times for Live-in Caregivers
// *** I have not applied yet
// *** Before October 1, 2017
// *** On or after October 1, 2017
var highmedical = {highmedical:"2", lastupdated:"2018/05/06"};
var carechildren = {carechildren:"2", lastupdated:"2018/05/06"};
var live_in_caregivers = {not_applied_yet:"12", before_oct_1:"", on_or_after_oct_1:"12", lastupdated:"2018/05/06"};

// Holds the processing times for Protected persons and convention refugees (in Canada)
var refugees_protected = {step1:"19", step2:"10", lastupdated:"2018/05/06"};

// Holds the processing times for PR Card
var pr_card = {new_pr:"57", existing_pr:"104", workingon:"01/25/2018", lastupdated:"2018/05/06"};

// Holds the processing times for Replacing or amending document, verifying status
var rep_documents = {vos:"6", replacement:"1", amend_imm:"6", amend_tr:"1", lastupdated:"2018/05/06"};

// Holds the processing times for Visitor visa (from inside Canada)
var visitor_inside_canada = {online:"11", online_working_on:"04/24/2018", paper:"20", paper_working_on:"04/15/2018", lastupdated:"2018/05/06"};
// WEEKLY PROCESSING TIME PROVIDED BY CPR END

// VISITING, STUDYING, WORKING TEMPORARILY BEGIN
// Holds the processing times for Visitor visa (from outside Canada)

var visitor = {AF:"27",AL:"8",DZ:"23",AD:"19",AO:"10",AI:"19",AG:"9",AR:"4",AM:"10",AW:"19",AU:"17",AT:"16",AZ:"35",BS:"37",BH:"19",BD:"13",BB:"9",BY:"12",BE:"18",BZ:"6",BJ:"12",BM:"22",BT:"19",BO:"13",BQ:"",BA:"9",BW:"17",BR:"13",IO:"",BN:"13",BG:"19",BF:"16",MM:"12",BI:"23",KH:"14",CM:"17",CA:"13",CV:"19",KY:"19",CF:"19",TD:"18",CL:"6",CN:"11",CO:"16",KM:"19",CG:"18",CR:"9",CI:"16",HR:"19",CU:"14",CY:"23",CZ:"8",CD:"18",DK:"30",DJ:"9",DM:"8",DO:"10",EC:"15",EG:"17",SV:"9",GQ:"19",ER:"27",EE:"19",ET:"9",FJ:"22",FI:"25",FR:"18",GA:"17",GM:"16",GE:"31",DE:"9",GH:"12",GR:"12",GD:"8",GT:"10",GN:"17",GW:"19",GY:"8",HT:"9",VA:"",HN:"8",HK:"7",HU:"32",IS:"19",IN:"22",ID:"5",IR:"129",IQ:"33",IE:"16",IL:"4",IT:"6",JM:"14",JP:"14",JO:"14",KZ:"9",KE:"9",KI:"19",XK:"9",KW:"14",KG:"8",LA:"14",LV:"19",LB:"24",LS:"19",LR:"23",LY:"42",LI:"19",LT:"19",LU:"19",MO:"7",MK:"",MG:"11",MW:"8",MY:"11",MV:"19",ML:"15",MT:"19",MH:"",MQ:"19",MR:"18",MU:"8",MX:"9",FM:"",MD:"6",MC:"19",MN:"8",ME:"8",MA:"14",MZ:"10",NA:"11",NR:"19",NP:"25",NL:"8",NC:"19",NZ:"17",NI:"13",NE:"18",NG:"33",KP:"",NO:"34",OM:"16",PK:"18",PS:"38",WB:"38",PA:"8",PG:"19",PY:"5",PE:"14",PH:"13",PL:"13",PT:"14",PR:"19",QA:"16",RO:"15",RU:"9",RW:"23",LC:"8",WS:"",SM:"",ST:"",SA:"27",SN:"15",RS:"7",SC:"19",SL:"23",SG:"12",SK:"19",SI:"19",SB:"",SO:"19",ZA:"10",KR:"16",SS:"19",ES:"18",LK:"13",KN:"9",VC:"8",SD:"45",SR:"6",SZ:"19",SE:"34",CH:"19",SY:"23",PF:"",TW:"7",TJ:"10",TZ:"22",TH:"6",TL:"19",TG:"13",TO:"19",TT:"7",TN:"12",TR:"27",TM:"19",TC:"19",TV:"",UG:"24",UA:"8",AE:"16",GB:"20",US:"14",UY:"5",VI:"",UZ:"11",VU:"19",VE:"9",VN:"37",YE:"62",ZM:"23",ZW:"11",lastupdated:"2018/05/06"};

// Holds the processing times for Super Visa (parent and grandparent)
var supervisa = {AF:"66",AL:"66",DZ:"66",AD:"",AO:"",AI:"",AG:"",AR:"66",AM:"66",AW:"",AU:"66",AT:"66",AZ:"66",BS:"",BH:"",BD:"33",BB:"",BY:"66",BE:"",BZ:"",BJ:"66",BM:"",BT:"",BO:"",BQ:"",BA:"66",BW:"",BR:"66",IO:"",BN:"",BG:"",BF:"66",MM:"",BI:"66",KH:"66",CM:"66",CA:"66",CV:"",KY:"",CF:"",TD:"",CL:"",CN:"95",CO:"43",KM:"",CG:"66",CR:"",CI:"66",HR:"",CU:"66",CY:"",CZ:"",CD:"66",DK:"",DJ:"66",DM:"66",DO:"66",EC:"66",EG:"66",SV:"66",GQ:"",ER:"66",EE:"",ET:"66",FJ:"66",FI:"",FR:"66",GA:"",GM:"",GE:"66",DE:"66",GH:"66",GR:"",GD:"",GT:"66",GN:"66",GW:"",GY:"66",HT:"51",VA:"",HN:"66",HK:"66",HU:"",IS:"",IN:"57",ID:"66",IR:"98",IQ:"66",IE:"",IL:"66",IT:"66",JM:"66",JP:"",JO:"66",KZ:"66",KE:"66",KI:"",XK:"66",KW:"66",KG:"66",LA:"66",LV:"",LB:"66",LS:"",LR:"66",LY:"66",LI:"",LT:"",LU:"",MO:"",MK:"",MG:"66",MW:"66",MY:"66",MV:"",ML:"",MT:"",MH:"",MQ:"",MR:"",MU:"66",MX:"66",FM:"",MD:"66",MC:"",MN:"66",ME:"",MA:"66",MZ:"",NA:"",NR:"",NP:"92",NL:"",NC:"",NZ:"66",NI:"66",NE:"",NG:"67",KP:"",NO:"",OM:"66",PK:"110",PS:"66",WB:"66",PA:"66",PG:"",PY:"",PE:"66",PH:"117",PL:"66",PT:"",PR:"",QA:"66",RO:"66",RU:"66",RW:"",LC:"66",WS:"",SM:"",ST:"",SA:"66",SN:"",RS:"66",SC:"",SL:"66",SG:"66",SK:"",SI:"",SB:"",SO:"",ZA:"66",KR:"",SS:"",ES:"",LK:"49",KN:"",VC:"",SD:"66",SR:"",SZ:"",SE:"",CH:"66",SY:"66",PF:"",TW:"",TJ:"",TZ:"66",TH:"66",TL:"",TG:"66",TO:"",TT:"",TN:"66",TR:"66",TM:"66",TC:"",TV:"",UG:"66",UA:"46",AE:"66",GB:"66",US:"66",UY:"",VI:"",UZ:"66",VU:"",VE:"66",VN:"124",YE:"66",ZM:"66",ZW:"66",lastupdated:"2018/05/06"};

// Holds the processing times for Study permit

var study = {AF:"6",AL:"3",DZ:"6",AD:"",AO:"6",AI:"6",AG:"6",AR:"6",AM:"6",AW:"6",AU:"8",AT:"6",AZ:"6",BS:"1",BH:"6",BD:"3",BB:"6",BY:"6",BE:"6",BZ:"6",BJ:"8",BM:"6",BT:"6",BO:"6",BQ:"",BA:"6",BW:"6",BR:"8",IO:"",BN:"",BG:"6",BF:"7",MM:"6",BI:"7",KH:"6",CM:"3",CA:"6",CV:"6",KY:"6",CF:"6",TD:"6",CL:"1",CN:"4",CO:"4",KM:"6",CG:"9",CR:"6",CI:"5",HR:"6",CU:"6",CY:"6",CZ:"6",CD:"6",DK:"6",DJ:"6",DM:"6",DO:"6",EC:"6",EG:"4",SV:"6",GQ:"",ER:"6",EE:"",ET:"4",FJ:"6",FI:"6",FR:"1",GA:"6",GM:"6",GE:"6",DE:"1",GH:"6",GR:"6",GD:"6",GT:"6",GN:"5",GW:"6",GY:"6",HT:"4",VA:"6",HN:"6",HK:"5",HU:"6",IS:"6",IN:"6",ID:"3",IR:"20",IQ:"5",IE:"6",IL:"5",IT:"1",JM:"4",JP:"1",JO:"4",KZ:"4",KE:"4",KI:"",XK:"6",KW:"6",KG:"6",LA:"6",LV:"6",LB:"5",LS:"",LR:"6",LY:"6",LI:"",LT:"6",LU:"6",MO:"6",MK:"",MG:"5",MW:"6",MY:"4",MV:"6",ML:"6",MT:"6",MH:"",MQ:"6",MR:"6",MU:"2",MX:"1",FM:"",MD:"6",MC:"6",MN:"6",ME:"6",MA:"11",MZ:"6",NA:"6",NR:"",NP:"5",NL:"1",NC:"6",NZ:"6",NI:"",NE:"6",NG:"8",KP:"6",NO:"6",OM:"6",PK:"10",PS:"6",WB:"6",PA:"5",PG:"6",PY:"6",PE:"6",PH:"6",PL:"6",PT:"6",PR:"6",QA:"7",RO:"6",RU:"3",RW:"8",LC:"6",WS:"",SM:"",ST:"",SA:"5",SN:"8",RS:"6",SC:"",SL:"6",SG:"4",SK:"6",SI:"",SB:"",SO:"",ZA:"7",KR:"2",SS:"",ES:"3",LK:"4",KN:"",VC:"6",SD:"6",SR:"6",SZ:"6",SE:"6",CH:"1",SY:"6",PF:"6",TW:"5",TJ:"6",TZ:"6",TH:"3",TL:"",TG:"7",TO:"",TT:"3",TN:"6",TR:"5",TM:"6",TC:"",TV:"",UG:"7",UA:"4",AE:"6",GB:"1",US:"4",UY:"6",VI:"",UZ:"6",VU:"",VE:"3",VN:"16",YE:"6",ZM:"6",ZW:"4",lastupdated:"2018/05/06"};

// Holds the processing times for Work permit

var work = {AF:"4",AL:"4",DZ:"11",AD:"",AO:"4",AI:"4",AG:"4",AR:"3",AM:"4",AW:"4",AU:"5",AT:"4",AZ:"4",BS:"4",BH:"4",BD:"5",BB:"1",BY:"4",BE:"9",BZ:"4",BJ:"4",BM:"4",BT:"4",BO:"4",BQ:"",BA:"4",BW:"4",BR:"8",IO:"",BN:"",BG:"4",BF:"4",MM:"4",BI:"",KH:"",CM:"4",CA:"5",CV:"4",KY:"4",CF:"",TD:"4",CL:"2",CN:"6",CO:"6",KM:"4",CG:"4",CR:"3",CI:"4",HR:"6",CU:"4",CY:"3",CZ:"8",CD:"4",DK:"5",DJ:"",DM:"1",DO:"6",EC:"4",EG:"7",SV:"4",GQ:"",ER:"",EE:"5",ET:"4",FJ:"4",FI:"4",FR:"4",GA:"",GM:"",GE:"4",DE:"4",GH:"12",GR:"4",GD:"2",GT:"1",GN:"4",GW:"",GY:"4",HT:"4",VA:"",HN:"8",HK:"9",HU:"4",IS:"4",IN:"9",ID:"4",IR:"21",IQ:"4",IE:"3",IL:"6",IT:"6",JM:"2",JP:"1",JO:"4",KZ:"4",KE:"4",KI:"",XK:"4",KW:"12",KG:"4",LA:"4",LV:"5",LB:"4",LS:"",LR:"",LY:"4",LI:"",LT:"5",LU:"4",MO:"4",MK:"",MG:"5",MW:"4",MY:"5",MV:"4",ML:"4",MT:"4",MH:"",MQ:"4",MR:"",MU:"9",MX:"1",FM:"",MD:"4",MC:"4",MN:"4",ME:"4",MA:"19",MZ:"4",NA:"4",NR:"",NP:"10",NL:"4",NC:"4",NZ:"5",NI:"4",NE:"4",NG:"12",KP:"4",NO:"5",OM:"4",PK:"29",PS:"",WB:"",PA:"4",PG:"4",PY:"4",PE:"4",PH:"8",PL:"4",PT:"4",PR:"4",QA:"4",RO:"4",RU:"6",RW:"4",LC:"2",WS:"",SM:"4",ST:"",SA:"6",SN:"4",RS:"7",SC:"",SL:"",SG:"7",SK:"11",SI:"5",SB:"",SO:"4",ZA:"5",KR:"2",SS:"",ES:"5",LK:"7",KN:"4",VC:"1",SD:"",SR:"",SZ:"",SE:"4",CH:"4",SY:"4",PF:"4",TW:"8",TJ:"",TZ:"4",TH:"8",TL:"4",TG:"4",TO:"",TT:"4",TN:"11",TR:"8",TM:"",TC:"4",TV:"",UG:"4",UA:"6",AE:"22",GB:"7",US:"3",UY:"4",VI:"",UZ:"4",VU:"",VE:"4",VN:"12",YE:"",ZM:"4",ZW:"4",lastupdated:"2018/05/06"};

// Holds the processing times for IEC
var iec = {stage1:"8"};

// VISITING, STUDYING, WORKING TEMPORARILY END

// ECONOMIC CLASS BEGIN
// Holds the processing times for Entrepreneur (Federal)
var entrepreneur_federal = {entrepreneur_federal:"", lastupdated:"2018/05/06"};

// Holds the processing times for Entrepreneur (Quebec)
var entrepreneur_quebec = {entrepreneur_quebec:"", lastupdated:"2018/05/06"};

// Holds the processing times for Investor (Federal)
var investor_federal = {investor_federal:"", lastupdated:"2018/05/06"};

// Holds the processing times for Investor (Quebec)
var investor_quebec = {investor_quebec:"44", lastupdated:"2018/05/06"};

// Holds the processing times for provicial nominees
var provincial_nominees = {provincial_nominees:"18", lastupdated:"2018/05/06"};

// Holds the processing times for Self-Employed (Federal)
var self_employed_federal = {self_employed_federal:"24", lastupdated:"2018/05/06"};

// Holds the processing times for Atlantic Immigration Pilot
// right now hardcoded at 6 months. Need to add variable

// Holds the processing times for Start-up Visa
// need to confirm with Alina

// Holds the processing times for Federal Skilled Trades
// doesn't exist, copy from EE

// Holds the processing times for Self-Employed (Quebec)	
var self_employed_quebec = {self_employed_quebec:"", lastupdated:"2018/05/06"};	
// The processing times for Skilled Workers (Federal) | I haven't applied yet is the same as express entry.	
	
// Holds the processing times for Skilled Workers (Federal):	
// *** Before February 27, 2008	
// *** Between February 27, 2008 and June 25, 2010	
// *** Between June 26, 2010 and December 31, 2014	
var skilled_workers_pre_2015 = {skilled_workers_pre_feb:"", skilled_workers_betwen_2008_2010:"", skilled_workers_betwen_2010_2014:"39", lastupdated:"2018/05/06"};	
	
// The processing times for Skilled Workers (Federal) | On or after January 1, 2015 is the same as express entry.	
	
// Holds the processing times for Skilled Workers (Quebec)	
var skilled_workers_quebec = {skilled_workers_quebec:"16", lastupdated:"2018/05/06"};	
	
// Holds the processing times for CEC | I haven't applied and On or after Jan 1, 2015 processing time is the same as Express Entry.	
var cec = {cecprejan:"42", lastupdated:"2018/05/06"};	
// ECONOMIC CLASS END	
	
// FAMILY SPONSORSHIP BEGIN	
// Holds the processing times for Spouse or common-law partner	
var spouse= {spouse:"14", lastupdated:"2018/05/06"};	
var family_spousal_inside_commitment = {family_spousal_inside_commitment:"12", lastupdated:"2018/05/06"};	
	
// Holds the processing times for Dependent child	
var dependent_child = {dependent_child:"14", lastupdated:"2018/05/06"};	
	
// Holds the processing times for Parent and grandparent	
var parent_grandparent = {parent_grandparent:"76", lastupdated:"2018/05/06"};	
	
// Holds the processing times for Adopted child or other relative	
var adopted_child = {adopted_child:"22", lastupdated:"2018/05/06"};	
// FAMILY SPONSORSHIP END	
	
// REFUGEES BEGIN	
// Holds the processing times for Government-assisted refugees	
var refugees_gov = {AF:"30",AL:"",DZ:"",AD:"",AO:"30",AI:"",AG:"",AR:"",AM:"",AW:"",AU:"",AT:"30",AZ:"",BS:"",BH:"",BD:"30",BB:"",BY:"",BE:"30",BZ:"",BJ:"30",BM:"",BT:"",BO:"",BQ:"",BA:"",BW:"30",BR:"",IO:"",BN:"",BG:"30",BF:"30",MM:"30",BI:"35",KH:"",CM:"30",CA:"",CV:"",KY:"",CF:"30",TD:"30",CL:"",CN:"",CO:"30",KM:"",CG:"30",CR:"30",CI:"30",HR:"",CU:"30",CY:"30",CZ:"",CD:"30",DK:"30",DJ:"30",DM:"",DO:"",EC:"18",EG:"18",SV:"",GQ:"",ER:"30",EE:"",ET:"40",FJ:"",FI:"30",FR:"",GA:"30",GM:"",GE:"",DE:"30",GH:"30",GR:"30",GD:"",GT:"",GN:"30",GW:"",GY:"",HT:"",VA:"",HN:"",HK:"30",HU:"",IS:"",IN:"30",ID:"30",IR:"30",IQ:"8",IE:"",IL:"30",IT:"30",JM:"",JP:"",JO:"23",KZ:"",KE:"38",KI:"",XK:"",KW:"30",KG:"",LA:"",LV:"",LB:"24",LS:"",LR:"",LY:"30",LI:"",LT:"",LU:"",MO:"",MK:"",MG:"",MW:"30",MY:"30",MV:"",ML:"30",MT:"",MH:"",MQ:"",MR:"30",MU:"",MX:"30",FM:"",MD:"",MC:"",MN:"",ME:"",MA:"30",MZ:"30",NA:"30",NR:"",NP:"30",NL:"30",NC:"",NZ:"",NI:"",NE:"",NG:"30",KP:"",NO:"",OM:"30",PK:"30",PS:"",WB:"",PA:"",PG:"",PY:"",PE:"",PH:"30",PL:"",PT:"",PR:"",QA:"",RO:"",RU:"30",RW:"30",LC:"",WS:"",SM:"",ST:"",SA:"30",SN:"30",RS:"",SC:"",SL:"30",SG:"30",SK:"",SI:"",SB:"",SO:"30",ZA:"30",KR:"30",SS:"",ES:"",LK:"30",KN:"",VC:"",SD:"29",SR:"",SZ:"30",SE:"30",CH:"",SY:"23",PF:"",TW:"",TJ:"",TZ:"34",TH:"30",TL:"",TG:"30",TO:"",TT:"30",TN:"",TR:"26",TM:"",TC:"",TV:"",UG:"31",UA:"30",AE:"30",GB:"",US:"",UY:"",VI:"",UZ:"",VU:"",VE:"",VN:"30",YE:"",ZM:"30",ZW:"30",lastupdated:"2018/05/06"};	
	
// Holds the processing times for Privately sponsored refugees	
var refugees_private = {AF:"26",AL:"26",DZ:"26",AD:"",AO:"26",AI:"",AG:"",AR:"",AM:"26",AW:"",AU:"26",AT:"26",AZ:"26",BS:"",BH:"26",BD:"26",BB:"",BY:"",BE:"",BZ:"",BJ:"26",BM:"",BT:"",BO:"",BQ:"",BA:"",BW:"26",BR:"26",IO:"",BN:"",BG:"",BF:"",MM:"",BI:"26",KH:"",CM:"",CA:"",CV:"",KY:"",CF:"",TD:"",CL:"",CN:"26",CO:"26",KM:"",CG:"26",CR:"",CI:"26",HR:"",CU:"26",CY:"26",CZ:"",CD:"26",DK:"",DJ:"89",DM:"",DO:"",EC:"26",EG:"65",SV:"",GQ:"",ER:"26",EE:"",ET:"46",FJ:"",FI:"26",FR:"26",GA:"",GM:"",GE:"",DE:"29",GH:"26",GR:"26",GD:"",GT:"26",GN:"26",GW:"26",GY:"",HT:"",VA:"",HN:"",HK:"26",HU:"",IS:"",IN:"47",ID:"26",IR:"26",IQ:"26",IE:"",IL:"25",IT:"26",JM:"",JP:"",JO:"24",KZ:"",KE:"35",KI:"",XK:"",KW:"21",KG:"",LA:"",LV:"",LB:"20",LS:"",LR:"26",LY:"26",LI:"",LT:"26",LU:"",MO:"",MK:"",MG:"",MW:"26",MY:"22",MV:"",ML:"",MT:"",MH:"",MQ:"",MR:"",MU:"",MX:"",FM:"",MD:"26",MC:"",MN:"",ME:"",MA:"26",MZ:"26",NA:"26",NR:"",NP:"26",NL:"26",NC:"",NZ:"",NI:"",NE:"",NG:"26",KP:"",NO:"26",OM:"26",PK:"64",PS:"",WB:"",PA:"",PG:"26",PY:"",PE:"",PH:"26",PL:"26",PT:"26",PR:"",QA:"21",RO:"",RU:"26",RW:"26",LC:"",WS:"",SM:"",ST:"",SA:"21",SN:"",RS:"26",SC:"",SL:"26",SG:"",SK:"",SI:"",SB:"",SO:"26",ZA:"63",KR:"",SS:"",ES:"26",LK:"26",KN:"",VC:"",SD:"66",SR:"",SZ:"",SE:"26",CH:"26",SY:"26",PF:"",TW:"",TJ:"30",TZ:"26",TH:"26",TL:"",TG:"",TO:"",TT:"",TN:"26",TR:"23",TM:"",TC:"",TV:"",UG:"27",UA:"",AE:"20",GB:"",US:"26",UY:"",VI:"",UZ:"",VU:"",VE:"26",VN:"",YE:"26",ZM:"26",ZW:"26",lastupdated:"2018/05/06"};	
	
// REFUGEES END	
	
	
	
	
// CITIZENSHIP BEGIN	
// Holds the processing times for Citizenship	
var citizenship = {grant_noapply:"12", grant_before2015:"", grant_after2015:"12", cit_cert:"5", cit_resumption:"16", cit_renunciation:"6", cit_search:"10", lastupdated:"2018/05/06"};	
// CITIZENSHIP END	
	
// EXPRESS ENTRY (EE) BEGIN	
// Holds the processing times for Express Entry	
var ee = "6";	
// EXPRESS ENTRY (EE) END	
	
// FAMILY SPONSORSHIP BEGIN	
// Holds the processing times for Family Sponsorship	
	
//Spouses living inside Canada -COR not used yet	
	
	
//Spouses living outside Canada	
var spouse_out = {AF:"22",AL:"15",DZ:"12",AD:"14",AO:"14",AI:"",AG:"14",AR:"14",AM:"14",AW:"",AU:"11",AT:"14",AZ:"14",BS:"14",BH:"14",BD:"12",BB:"14",BY:"14",BE:"14",BZ:"14",BJ:"14",BM:"14",BT:"",BO:"14",BQ:"",BA:"14",BW:"14",BR:"12",IO:"",BN:"14",BG:"14",BF:"14",MM:"14",BI:"14",KH:"16",CM:"13",CA:"12",CV:"14",KY:"14",CF:"14",TD:"14",CL:"14",CN:"12",CO:"14",KM:"14",CG:"14",CR:"14",CI:"13",HR:"14",CU:"14",CY:"14",CZ:"14",CD:"17",DK:"14",DJ:"14",DM:"14",DO:"16",EC:"14",EG:"14",SV:"16",GQ:"14",ER:"14",EE:"14",ET:"16",FJ:"14",FI:"14",FR:"12",GA:"14",GM:"14",GE:"14",DE:"12",GH:"17",GR:"14",GD:"14",GT:"17",GN:"19",GW:"14",GY:"12",HT:"16",VA:"",HN:"14",HK:"11",HU:"14",IS:"14",IN:"11",ID:"14",IR:"10",IQ:"29",IE:"14",IL:"11",IT:"14",JM:"9",JP:"10",JO:"23",KZ:"14",KE:"16",KI:"",XK:"14",KW:"16",KG:"14",LA:"14",LV:"14",LB:"24",LS:"",LR:"14",LY:"14",LI:"",LT:"14",LU:"14",MO:"14",MK:"",MG:"14",MW:"14",MY:"14",MV:"14",ML:"14",MT:"14",MH:"",MQ:"14",MR:"14",MU:"14",MX:"17",FM:"",MD:"14",MC:"",MN:"14",ME:"14",MA:"12",MZ:"14",NA:"14",NR:"",NP:"13",NL:"12",NC:"",NZ:"11",NI:"14",NE:"14",NG:"17",KP:"",NO:"14",OM:"14",PK:"16",PS:"14",WB:"14",PA:"14",PG:"14",PY:"14",PE:"15",PH:"10",PL:"14",PT:"14",PR:"14",QA:"15",RO:"14",RU:"12",RW:"11",LC:"14",WS:"",SM:"",ST:"",SA:"17",SN:"13",RS:"10",SC:"14",SL:"14",SG:"9",SK:"14",SI:"14",SB:"",SO:"14",ZA:"15",KR:"10",SS:"14",ES:"13",LK:"17",KN:"14",VC:"14",SD:"15",SR:"14",SZ:"",SE:"17",CH:"14",SY:"15",PF:"",TW:"10",TJ:"14",TZ:"14",TH:"14",TL:"",TG:"14",TO:"",TT:"13",TN:"12",TR:"15",TM:"",TC:"14",TV:"",UG:"13",UA:"9",AE:"17",GB:"10",US:"11",UY:"14",VI:"14",UZ:"14",VU:"",VE:"14",VN:"17",YE:"14",ZM:"14",ZW:"14",lastupdated:"2018/05/06"};	
	
var spouse_commitment = {AF:"12",AL:"12",DZ:"12",AD:"12",AO:"12",AI:"12",AG:"12",AR:"12",AM:"12",AW:"12",AU:"12",AT:"12",AZ:"12",BS:"12",BH:"12",BD:"12",BB:"12",BY:"12",BE:"12",BZ:"12",BJ:"12",BM:"12",BT:"12",BO:"12",BQ:"12",BA:"12",BW:"12",BR:"12",IO:"12",BN:"12",BG:"12",BF:"12",MM:"12",BI:"12",KH:"12",CM:"12",CA:"12",CV:"12",KY:"12",CF:"12",TD:"12",CL:"12",CN:"12",CO:"12",KM:"12",CG:"12",CR:"12",CI:"12",HR:"12",CU:"12",CY:"12",CZ:"12",CD:"12",DK:"12",DJ:"12",DM:"12",DO:"12",EC:"12",EG:"12",SV:"12",GQ:"12",ER:"12",EE:"12",ET:"12",FJ:"12",FI:"12",FR:"12",GA:"12",GM:"12",GE:"12",DE:"12",GH:"12",GR:"12",GD:"12",GT:"12",GN:"12",GW:"12",GY:"12",HT:"12",VA:"12",HN:"12",HK:"12",HU:"12",IS:"12",IN:"12",ID:"12",IR:"12",IQ:"12",IE:"12",IL:"12",IT:"12",JM:"12",JP:"12",JO:"12",KZ:"12",KE:"12",KI:"12",XK:"12",KW:"12",KG:"12",LA:"12",LV:"12",LB:"12",LS:"12",LR:"12",LY:"12",LI:"12",LT:"12",LU:"12",MO:"12",MK:"12",MG:"12",MW:"12",MY:"12",MV:"12",ML:"12",MT:"12",MH:"12",MQ:"12",MR:"12",MU:"12",MX:"12",FM:"12",MD:"12",MC:"12",MN:"12",ME:"12",MA:"12",MZ:"12",NA:"12",NR:"12",NP:"12",NL:"12",NC:"12",NZ:"12",NI:"12",NE:"12",NG:"12",KP:"12",NO:"12",OM:"12",PK:"12",PS:"12",WB:"12",PA:"12",PG:"12",PY:"12",PE:"12",PH:"12",PL:"12",PT:"12",PR:"12",QA:"12",RO:"12",RU:"12",RW:"12",LC:"12",WS:"12",SM:"12",ST:"12",SA:"12",SN:"12",RS:"12",SC:"12",SL:"12",SG:"12",SK:"12",SI:"12",SB:"12",SO:"12",ZA:"12",KR:"12",SS:"12",ES:"12",LK:"12",KN:"12",VC:"12",SD:"12",SR:"12",SZ:"12",SE:"12",CH:"12",SY:"12",PF:"12",TW:"12",TJ:"12",TZ:"12",TH:"12",TL:"12",TG:"12",TO:"12",TT:"12",TN:"12",TR:"12",TM:"12",TC:"12",TV:"12",UG:"12",UA:"12",AE:"12",GB:"12",US:"12",UY:"12",VI:"12",UZ:"12",VU:"12",VE:"12",VN:"12",YE:"12",ZM:"12",ZW:"12",lastupdated:"2018/05/06"};	
	
//Dependent children	
var child_dependent = {AF:"14",AL:"14",DZ:"14",AD:"",AO:"",AI:"",AG:"",AR:"14",AM:"",AW:"",AU:"14",AT:"",AZ:"14",BS:"14",BH:"14",BD:"14",BB:"14",BY:"14",BE:"14",BZ:"14",BJ:"14",BM:"",BT:"",BO:"14",BQ:"",BA:"14",BW:"14",BR:"14",IO:"",BN:"",BG:"14",BF:"14",MM:"14",BI:"14",KH:"14",CM:"13",CA:"10",CV:"",KY:"14",CF:"14",TD:"14",CL:"14",CN:"10",CO:"13",KM:"",CG:"14",CR:"14",CI:"13",HR:"",CU:"11",CY:"",CZ:"",CD:"14",DK:"14",DJ:"",DM:"14",DO:"12",EC:"14",EG:"14",SV:"14",GQ:"",ER:"14",EE:"",ET:"20",FJ:"14",FI:"14",FR:"14",GA:"14",GM:"14",GE:"14",DE:"14",GH:"14",GR:"14",GD:"14",GT:"14",GN:"14",GW:"14",GY:"14",HT:"16",VA:"",HN:"14",HK:"14",HU:"14",IS:"",IN:"9",ID:"14",IR:"14",IQ:"14",IE:"14",IL:"14",IT:"14",JM:"12",JP:"14",JO:"14",KZ:"",KE:"14",KI:"",XK:"14",KW:"14",KG:"14",LA:"",LV:"",LB:"14",LS:"14",LR:"14",LY:"14",LI:"",LT:"",LU:"",MO:"",MK:"",MG:"14",MW:"",MY:"14",MV:"",ML:"14",MT:"",MH:"",MQ:"",MR:"",MU:"14",MX:"11",FM:"",MD:"14",MC:"",MN:"",ME:"",MA:"14",MZ:"",NA:"14",NR:"",NP:"14",NL:"14",NC:"",NZ:"14",NI:"14",NE:"",NG:"14",KP:"",NO:"",OM:"14",PK:"13",PS:"",WB:"",PA:"",PG:"",PY:"14",PE:"14",PH:"11",PL:"",PT:"",PR:"",QA:"14",RO:"14",RU:"14",RW:"14",LC:"14",WS:"",SM:"",ST:"",SA:"14",SN:"14",RS:"14",SC:"",SL:"14",SG:"",SK:"",SI:"",SB:"",SO:"14",ZA:"14",KR:"14",SS:"14",ES:"14",LK:"14",KN:"",VC:"14",SD:"14",SR:"",SZ:"",SE:"14",CH:"14",SY:"14",PF:"",TW:"14",TJ:"14",TZ:"14",TH:"14",TL:"",TG:"14",TO:"14",TT:"14",TN:"14",TR:"14",TM:"",TC:"",TV:"",UG:"14",UA:"14",AE:"14",GB:"14",US:"17",UY:"",VI:"",UZ:"14",VU:"",VE:"14",VN:"14",YE:"14",ZM:"14",ZW:"14",lastupdated:"2018/05/06"};	
	
//Adopted children	
var child_adopted = {AF:"22",AL:"22",DZ:"22",AD:"",AO:"22",AI:"",AG:"22",AR:"",AM:"",AW:"",AU:"22",AT:"22",AZ:"",BS:"22",BH:"22",BD:"22",BB:"22",BY:"22",BE:"",BZ:"",BJ:"22",BM:"22",BT:"",BO:"22",BQ:"",BA:"22",BW:"",BR:"",IO:"",BN:"",BG:"",BF:"22",MM:"",BI:"22",KH:"22",CM:"22",CA:"22",CV:"",KY:"",CF:"",TD:"",CL:"",CN:"22",CO:"22",KM:"",CG:"22",CR:"",CI:"22",HR:"",CU:"22",CY:"",CZ:"",CD:"18",DK:"",DJ:"22",DM:"",DO:"22",EC:"22",EG:"22",SV:"22",GQ:"",ER:"",EE:"22",ET:"22",FJ:"22",FI:"22",FR:"22",GA:"22",GM:"22",GE:"",DE:"22",GH:"22",GR:"22",GD:"",GT:"22",GN:"22",GW:"",GY:"22",HT:"35",VA:"",HN:"",HK:"22",HU:"22",IS:"",IN:"27",ID:"22",IR:"22",IQ:"22",IE:"22",IL:"22",IT:"22",JM:"22",JP:"22",JO:"22",KZ:"22",KE:"22",KI:"",XK:"",KW:"22",KG:"22",LA:"22",LV:"",LB:"22",LS:"",LR:"",LY:"22",LI:"",LT:"",LU:"",MO:"22",MK:"",MG:"22",MW:"22",MY:"22",MV:"22",ML:"22",MT:"",MH:"",MQ:"",MR:"22",MU:"22",MX:"22",FM:"",MD:"",MC:"",MN:"22",ME:"",MA:"22",MZ:"22",NA:"22",NR:"",NP:"22",NL:"22",NC:"",NZ:"",NI:"",NE:"22",NG:"17",KP:"",NO:"",OM:"",PK:"22",PS:"22",WB:"22",PA:"",PG:"",PY:"",PE:"22",PH:"19",PL:"22",PT:"22",PR:"",QA:"22",RO:"22",RU:"22",RW:"22",LC:"22",WS:"",SM:"",ST:"",SA:"22",SN:"22",RS:"22",SC:"",SL:"22",SG:"22",SK:"",SI:"",SB:"",SO:"22",ZA:"22",KR:"22",SS:"22",ES:"22",LK:"22",KN:"",VC:"22",SD:"22",SR:"",SZ:"",SE:"",CH:"",SY:"",PF:"",TW:"22",TJ:"",TZ:"22",TH:"22",TL:"",TG:"22",TO:"",TT:"22",TN:"22",TR:"22",TM:"",TC:"22",TV:"",UG:"22",UA:"22",AE:"22",GB:"22",US:"22",UY:"",VI:"",UZ:"",VU:"",VE:"22",VN:"22",YE:"22",ZM:"",ZW:"22",lastupdated:"2018/05/06"};	
	
// FAMILY SPONSORSHIP END	
	
//eTA just for the last updated	
var eta = {lastupdated:"2018/05/06"};	



// PROCESSING TIME DATASET END

// Create each different ENG Processing Times messages & common text
if (strurl.indexOf("english") > -1) {  

var monthNames = [
	"January", "February", "March",
	"April", "May", "June", "July",
	"August", "September", "October",
	"November", "December"
];

// Common text
var txtsubmittedto = "From ";
var txtprocessedin = "Processed in ";
var txtsubmitted = "Submitted ";
var txtmonths = " month(s)";
var txtdays = " days";
var txtweeks = " week(s)";
var txtlastupdate = "Last update: ";
var txtquarterly = "Updated weekly"; // Originally "quarterly" but changed to weekly because Kathryn
var txtweekly = "Updated weekly";
var txtee = "Online via Express Entry ";
var txtworkingon = "Working on applications received on ";
var txtonline = "Online";
var txtpaper = "Paper";
var txtstage1 = "Stage 1: Conditional acceptance letter";
var txtstage2 = "Stage 2: Work permit";
var txtstep1 = "Step 1: Initial assessment";
var txtstep2 = "Step 2: Final decision";
var passporturl = "http://www.cic.gc.ca/english/passport/times.asp";
var txtprcard = "Renewing or replacing a PR card";
var txtnewprcard = "First PR card";
var txtapplied = "Applied: ";
var pgppttime = "<span class=\"glyphicon glyphicon-time\"></span> Working on applications received in January 2014";
var grant_before2015 = "by March 31, 2016 or before";
var careigiver_medical_title = "Caring for people with high medical needs";
var commitment_before2016 = "<p>Submitted before December 7, 2016</p>";
var commitment_after2016 = "<p>Submitted on or after December 7, 2016</p>";
var live_in_caregiver_oct_1 = "We will process your application by December 31, 2018.";

// Processing Times message
var pt_message1 = "<p>Processing times tell you how long it took us to process applications in the past after receiving a <a href='/english/helpcentre/answer.asp?qnum=72&top=3'>complete application package</a>. Processing times vary depending on how many applications we receive.</p><ul><li>Your application may be delayed or returned if it’s not complete</li></ul>";
var pt_message2 = "<p>If it has been more than six weeks longer than the time shown since you applied, and you need more information concerning the status of your application, use the <a href='https://secure.cic.gc.ca/enquiries-renseignements/canada-case-cas-eng.aspx'>Case Specific Enquiry form</a>.</p>"
var pt_message3 = "";
var pt_message4 = "<p><strong>If it’s been longer than the time shown above since you applied</strong>, and you don’t see an update in your <a href='https://services3.cic.gc.ca/ecas/security.do?app=ecas&lang=en'>online application status</a>, contact us using the&nbsp;<a href='https://secure.cic.gc.ca/enquiries-renseignements/canada-case-cas-eng.aspx'>Web form</a>.</p>";
var pt_message5 = "<p>This is based on a service standard set out between IEC and its partner countries. After you submit your work permit application with all your final documents, your application will be processed on a &ldquo;first-in, first-out&rdquo; basis.</p><p>Delays in processing times or refusals may occur if:</p><ul><li>you do not submit a complete application.</li><li>you do not pay the required fees.</li><li>you do not provide additional documentation or complete a medical exam as determined by the officer reviewing your application.</li></ul>";
var pt_message6 = "<p>These processing times only apply to the <strong>federal</strong> part of the processing (at the visa office). It does not include the time it  takes for the province of Quebec to process the <em>Certificat de sélection du  Québec</em> (CSQ).</p>";
var pt_message7 = "<p>These processing times only apply to the <strong>federal</strong> part of the processing (at the visa office) once we have received the complete application. It does not include the time it takes for the province or  territory to process the nomination certificate.</p>";
var pt_message8 = "<p>Privately sponsored refugees include:</p><ul><li>Group of five</li><li>Community sponsors</li><li>Sponsorship agreement holders and their  constituent groups</li></ul>";
var pt_message9 = "<p>You can <a href='/english/information/applications/certcopy.asp'>apply for a Verification of Status document</a> for the following immigration documents:</p><ul><li>Record of Landing (IMM 1000)</li><li>Immigrant Visa and Record of Landing (IMM 1000) / Confirmation of Permanent Residence (IMM 5292 or IMM 5688)</li><li>Certificate of Departure (IMM 0056)</li><li>Deportation Order (IMM 1213)</li><li>Departure Order (IMM 5238)</li><li>Temporary Resident Permit (1442)</li><li>Authorization to Return to Canada (IMM 1203)</li><li>Visitor Record (IMM 1097 or IMM 1442)</li><li>Work Permit&nbsp; (IMM 1102 or IMM 1442)</li><li>Study Permit (IMM 1208 or IMM 1442)</li><li>Exclusion Order (IMM 1214)</li><li>Protected Persons</li></ul>";
var pt_message10 = "<p>You can apply to <a href='/english/information/applications/certcopy.asp'>replace your current and valid temporary  resident document</a> if it has been  lost, stolen or destroyed. We may issue you a replacement document for any of  these documents:</p><ul><li>Visitor Record (IMM 1442)</li><li>Work Permit&nbsp; (IMM 1442)</li><li>Study Permit (IMM 1442)</li><li>Temporary Resident Permit (IMM&nbsp;1442)</li></ul>";
var pt_message11 = "<p>You can apply  to <a href='/english/information/applications/amend.asp'>change the following historical documents</a> if mistakes were made by immigration officials in recording the information you gave when you applied to come to Canada:</p><ul><li>Record of Landing (IMM 1000)</li><li>Confirmation  of Permanent Residence (IMM&nbsp;5292 or IMM&nbsp;5688)</li></ul>";
var pt_message12 = "<p>You can apply to <a href='/english/information/applications/amend.asp'>fix a mistake made by immigration officials in recording some of your personal information</a> if the following valid temporary resident documents have not expired:</p><ul><li>Visitor Record (IMM 1442)</li><li>Work Permit&nbsp; (IMM 1442)</li><li>Study Permit (IMM 1442)</li><li>Permit to Come Into or Remain in Canada (IMM&nbsp;1263)</li><li>Temporary  Resident Permit (IMM&nbsp;1442)</li></ul>";
var pt_message13 = "<ul class='lst-spcd'><li>If you live outside Canada and the United States and are applying through a Canadian embassy, high commission or consulate, <strong>add 3 to 4 months</strong> to the processing time to account for mailing time</li><li>If you are applying on behalf of a minor residing outside Canada and the United States, and you send the application directly to the Case Processing Centre in Sydney, Nova Scotia, <strong>add 6 to 8 months</strong> to the processing time</li></ul><p><strong>If it’s been longer than the time shown above since you applied,</strong> you don’t see an update in your <a href=https://services3.cic.gc.ca/ecas/security.do?app=ecas&lang=en'>online application status</a>, and you are:</p><ul><li><strong>inside Canada</strong>, contact the <a href='https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc/client-support-centre.html'>Client Support Centre</a></li><li><strong>outside Canada</strong>, use the <a href='https://secure.cic.gc.ca/enquiries-renseignements/canada-case-cas-eng.aspx'>Web form</a> to contact us</li></ul>";
var pt_message14 = "<ul><li>If you live outside Canada and the United States and are applying through a Canadian embassy, high commission or consulate, <strong>add 3 to 4 months</strong> to the processing time to account for mailing time</li></ul><p><strong>If it’s been longer than the time shown above since you applied</strong>, you don’t see an update in your <a href='https://services3.cic.gc.ca/ecas/security.do?app=ecas&lang=en'>online application status</a> and you are:</p><ul><li><strong>inside Canada</strong>, contact the <a href='https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc/client-support-centre.html'>Client Support Centre</a></li><li><strong>outside Canada</strong>, use the <a href='https://secure.cic.gc.ca/enquiries-renseignements/canada-case-cas-eng.aspx'>Web form</a> to contact us</li></ul>";
var pt_message15 = "<p>This includes Working Holiday, Young Professionals and International Co-op Internship.</p>";
var pt_message16 = "<p>Does not include document mailing time.</p><p>Only valid Study or Work Permit holders can apply for new temporary resident visas from inside Canada.</p>";
var pt_message17 = "<p>View your application status in <a href='/english/e-services/mycic.asp'>your account</a></p>";
var pt_message18 = "<p>View your <a href='https://services3.cic.gc.ca/ecas/security.do?app=ecas&lang=en'>application status online</a></p>";
var pt_message19 = "<p><a href='/english/department/media/notices/notice-returns.asp'>Changes to the law</a> may affect your application</p>";
var pt_message20 = "<p>Includes assessment of sponsor: " + family_sponsorship["spouse_assessment"] + " days</p>";
var pt_message21 = "<p>Includes assessment of sponsor: " + family_sponsorship["parent_grandparent_assessment"] + " months</p>";
var pt_message22 = "<p>Includes assessment of sponsor.</p>";
var pt_message23 = "";
var pt_message24 = "<ul><li>Non-routine applications</a> take longer to process than routine applications.</li></ul>";
var pt_message25 = "<p>These applications can be submitted online or by paper.</p>";
var pt_message27 = "<p>Not enough data is available.</p>";
var pt_message28 = "<p>Processing times are unavailable.</p>";
var pt_message30 = "<p>If you require your PR card urgently, <a href='/english/information/pr-card/apply-urgent-processing.asp'>follow these instructions</a>.</p>";
var pt_message31 = "<p>Visit Canada sooner with a <a href='/english/visit/supervisa.asp'>Super Visa</a>!</p>";
var pt_message32 = "<p>Since <a href='/english/immigrate/express/express-entry.asp'>Express Entry</a> is a new system and not enough applications have been received yet, processing times are not available but we have committed to process the majority of applications in six months or less.</p>";
var pt_message33 = "<p>Includes assessment of sponsor and person being sponsored.</p>";
var pt_message34 = "<p>Once you have submitted a complete application package.</p>";
var pt_message35 = "<p>Work while you wait with an <a href='/english/resources/tools/updates/2014/2014-12-22.asp'>open work permit</a>.</p>";
var pt_message36 = "";
var pt_message37 = "<p>Includes initial eligibility assessment (approval in principle): " + family_sponsorship["submit_after"] + " months.</p>";
var pt_message38 = "However, some requests may need several days to process. If this is the case for your application, you can expect an email from IRCC within 72 hours that tells you what your next steps are.";
var pt_message39 = "Most eTA applications are approved within minutes of applying";
//var pt_message40 = "<p><a href='/english/helpcentre/answer.asp?qnum=1169&amp;top=5'>Non-routine applications</a> may take longer</p>";
var pt_message41 = "<p>Does not include temporary residents or refugees eligible to apply for their first work permit from within Canada; for these applications select &ldquo;Work permit extensions (New employer)&rdquo;</p>";
var pt_message42 = '<p>Excludes: <strong>Post-grad</strong> and <strong>Co-op</strong> work permits, and <strong>refugees</strong> applying for their first work permit;  instead, select &ldquo;Work permit extensions (New employer)&rdquo;</p>';
var pt_message43 = '<p>If your application is routine, you may <a href="/english/contacts/web-form.asp">contact us</a>. If your application is <a href="/english/helpcentre/answer.asp?qnum=1169&top=5">non-routine</a> and you haven’t heard from us in six months, you may <a href="/english/contacts/web-form.asp">contact us</a>.</p>';
var pt_message44 = '<p>If you have not received a decision on your application, it is likely because your application is non-routine. <a href="/english/helpcentre/answer.asp?qnum=1169&top=5">Non-routine applications take longer to process</a>.</p>';
var pt_message45 = '<p>If your application is <a href="/english/helpcentre/answer.asp?qnum=1169&top=5">non-routine</a> and you haven&rsquo;t heard from us in six months, you may <a href="/english/contacts/web-form.asp">contact us</a>. If you believe your application is not described under <a href="/english/helpcentre/answer.asp?qnum=1169&top=5">non-routine</a>, you may <a href="/english/contacts/web-form.asp">contact&nbsp;us</a>.</p>';
var pt_message46 = '<div class="alert alert-info"><p class="mrgn-lft-md"><strong>Spousal sponsorship program changes: Faster processing and the <a href="/english/information/applications/spouse.asp">new  application package</a> are available now.</strong></p><p class="mrgn-lft-md">Find out about <a href="/english/department/media/notices/2016-12-15.asp">important changes</a> we&rsquo;ve made to process your spousal sponsorship application within 12 months.</p></div>';
var pt_message47 = '<p>Does not include transit time between the VAC and IRCC office.</p>';
var pt_message48 = '<p><em>If you applied before January, 2014 be sure you have responded to all communication from IRCC.</em></p>';
var pt_message49 = "<p>Includes initial eligibility assessment (approval in principle).</p>";
var pt_message50 = "<p><strong><a href=\"/english/helpcentre/answer.asp?qnum=1320&top=14\">Find out about changes</a> we’re making to process applications within 12 months.</strong></p>";
var pt_message51 = "<p><strong><a href=\"/english/helpcentre/answer.asp?qnum=354&top=14\"><strong>We’re working to finalize applications</strong></a> received before December&nbsp;7, 2016 by the end of December 2017.</strong></p>";
var pt_message52 = "<p>After your visa is approved, you may need more time to get departure documents.</p>";
var pt_message53 = "<p>View your <a href=\"https://services3.cic.gc.ca/ecas/security.do?app=ecas&lang=en\">application status online</a></p><p>This processing time refers to applications for permanent resident status from protected persons and Convention refugees.</p>";
var pt_message54 = "<p>We plan to process applications received on or <a href=\"https://www.canada.ca/en/immigration-refugees-citizenship/news/2017/12/federal_governmentcontinuestomakefamilyreunificationapriority.html\">after October 1, 2017 within 12 months</a>.</p>";
var pt_message55 = "<p>We plan to process applications we received <a href=\"https://www.canada.ca/en/immigration-refugees-citizenship/news/2017/12/federal_governmentcontinuestomakefamilyreunificationapriority.html\">before October 1, 2017 by December 31, 2018</a>. Your application may take longer to process if it is <a href=\"/english/helpcentre/answer.asp?qnum=1379&top=28\">complex</a>.</p>";
var pt_message56 = "<p>Find out more about <a href=\"https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-outside-canada/private-sponsorship-program/how-we-process-applications.html\">how we process privately sponsored refugee applications</a>.</p>";
var pt_message57 = "<ul><li>If you live outside Canada and the United States and are applying through a Canadian embassy, high commission or consulate, <strong>add 3 to 4 months</strong> to the processing time to account for mailing time</li></ul><p><strong>If it’s been longer than the time shown above since you applied</strong>, you need more information, and you are:</p><ul><li><strong>inside Canada</strong>, contact the <a href='https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc/client-support-centre.html'>Client Support Centre</a></li><li><strong>outside Canada</strong>, use the <a href='https://secure.cic.gc.ca/enquiries-renseignements/canada-case-cas-eng.aspx'>Web form</a> to contact us</li></ul>";
var pt_message58 = "<p><strong>If it’s been longer than the time shown above since you applied</strong>, you don’t see an update in your&nbsp;<a href='https://services3.cic.gc.ca/ecas/security.do?app=ecas&lang=en'>online application status</a> and you are:</p><ul><li><strong>inside Canada</strong>, contact the&nbsp;<a href='https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc/client-support-centre.html'>Client Support Centre</a></li><li><strong>outside Canada</strong>, use the&nbsp;<a href='https://secure.cic.gc.ca/enquiries-renseignements/canada-case-cas-eng.aspx'>Web form</a>&nbsp;to contact us</li></ul>";
};

// Create each different FRA Prcoessing Times messages
/*
if (strurl.indexOf("francais") > -1) { 

var monthNames = [
	"janvier", "février", "mars",
	"avril", "mai", "juin", "juillet",
	"aoÃ»t", "septembre", "octobre",
	"novembre", "décembre"
];

// Common text
var txtsubmittedto = "From ";
var txtprocessedin = "Processed in ";
var txtsubmitted = "Submitted ";
var txtmonths = " month(s)";
var txtdays = " days";
var txtweeks = " week(s)";
var txtlastupdate = "Last update: ";
var txtquarterly = "Updated weekly"; // Originally "quarterly" but changed to weekly because Kathryn
var txtweekly = "Updated weekly";
var txtee = "Online via Express Entry ";
var txtworkingon = "Working on applications received on ";
var txtonline = "Online";
var txtpaper = "Paper";
var txtstage1 = "Stage 1: Conditional acceptance letter";
var txtstage2 = "Stage 2: Work permit";
var txtstep1 = "Step 1: Initial assessment";
var txtstep2 = "Step 2: Final decision";
var passporturl = "http://www.cic.gc.ca/english/passport/times.asp";
var txtprcard = "Renewing or replacing a PR card";
var txtnewprcard = "First PR card";
var txtapplied = "Applied: ";
var pgppttime = "<span class=\"glyphicon glyphicon-time\"></span> Working on applications received in January 2014";
var grant_before2015 = "by March 31, 2016 or before";
var careigiver_medical_title = "Caring for people with high medical needs";
var commitment_before2016 = "<p>Submitted before December 7, 2016</p>";
var commitment_after2016 = "<p>Submitted on or after December 7, 2016</p>";
var live_in_caregiver_oct_1 = "We will process your application by December 31, 2018.";

// Processing Times message
var pt_message1 = "<p>Processing times tell you how long it took Immigration, Refugees and Citizenship Canada (IRCC) to process applications in the past after receiving a <a href='/english/helpcentre/answer.asp?qnum=72&amp;top=3'>complete application package</a>. Processing times can vary, depending on how many applications IRCC receives. Your application may be delayed if it’s not complete.</p>";
var pt_message2 = "<p>If it has been more than six weeks longer than the time shown since you applied, and you need more information concerning the status of your application, use the <a href='https://secure.cic.gc.ca/enquiries-renseignements/canada-case-cas-eng.aspx'>Case Specific Enquiry form</a>.</p>"
var pt_message3 = "";
var pt_message4 = "<p>If it has been longer than the time shown since you applied, and you cannot <a href='/english/my_application/status.asp'>check the status of your application online</a>, you may contact us by using this <a href='/english/contacts/web-form.asp'>Web form</a>.</p>";
var pt_message5 = "<p>This is based on a service standard set out between IEC and its partner countries. After you submit your work permit application with all your final documents, your application will be processed on a &ldquo;first-in, first-out&rdquo; basis.</p><p>Delays in processing times or refusals may occur if:</p><ul><li>you do not submit a complete application.</li><li>you do not pay the required fees.</li><li>you do not provide additional documentation or complete a medical exam as determined by the officer reviewing your application.</li></ul>";
var pt_message6 = "<p>These processing times only apply to the <strong>federal</strong> part of the processing (at the visa office). It does not include the time it  takes for the province of Quebec to process the <em>Certificat de sélection du  Québec</em> (CSQ).</p>";
var pt_message7 = "<p>These processing times only apply to the <strong>federal</strong> part of the processing (at the visa office) once we have received the complete application. It does not include the time it takes for the province or  territory to process the nomination certificate.</p>";
var pt_message8 = "<p>Privately sponsored refugees include:</p><ul><li>Group of five</li><li>Community sponsors</li><li>Sponsorship agreement holders and their  constituent groups</li></ul>";
var pt_message9 = "<p>You can <a href='/english/information/applications/certcopy.asp'>apply for a Verification of Status document</a> for the following immigration documents:</p><ul><li>Record of Landing (IMM 1000)</li><li>Immigrant Visa and Record of Landing (IMM 1000) / Confirmation of Permanent Residence (IMM 5292 or IMM 5688)</li><li>Certificate of Departure (IMM 0056)</li><li>Deportation Order (IMM 1213)</li><li>Departure Order (IMM 5238)</li><li>Temporary Resident Permit (1442)</li><li>Authorization to Return to Canada (IMM 1203)</li><li>Visitor Record (IMM 1097 or IMM 1442)</li><li>Work Permit&nbsp; (IMM 1102 or IMM 1442)</li><li>Study Permit (IMM 1208 or IMM 1442)</li><li>Exclusion Order (IMM 1214)</li><li>Protected Persons</li></ul>";
var pt_message10 = "<p>You can apply to <a href='/english/information/applications/certcopy.asp'>replace your current and valid temporary  resident document</a> if it has been  lost, stolen or destroyed. We may issue you a replacement document for any of  these documents:</p><ul><li>Visitor Record (IMM 1442)</li><li>Work Permit&nbsp; (IMM 1442)</li><li>Study Permit (IMM 1442)</li><li>Temporary Resident Permit (IMM&nbsp;1442)</li></ul>";
var pt_message11 = "<p>You can apply  to <a href='/english/information/applications/amend.asp'>change the following historical documents</a> if mistakes were made by immigration officials in recording the information you gave when you applied to come to Canada:</p><ul><li>Record of Landing (IMM 1000)</li><li>Confirmation  of Permanent Residence (IMM&nbsp;5292 or IMM&nbsp;5688)</li></ul>";
var pt_message12 = "<p>You can apply to <a href='/english/information/applications/amend.asp'>fix a mistake made by immigration officials in recording some of your personal information</a> if the following valid temporary resident documents have not expired:</p><ul><li>Visitor Record (IMM 1442)</li><li>Work Permit&nbsp; (IMM 1442)</li><li>Study Permit (IMM 1442)</li><li>Permit to Come Into or Remain in Canada (IMM&nbsp;1263)</li><li>Temporary  Resident Permit (IMM&nbsp;1442)</li></ul>";
var pt_message13 = "<p>If you live outside Canada and outside the United States and are applying through a Canadian embassy, high commission or consulate, add an <strong>additional 3 to 4 months</strong> to the total processing time.</p><p>If you are applying on behalf of a minor child residing outside Canada and outside the United States and the application is submitted directly to the Case Processing Centre in Sydney, Nova Scotia, add an <strong>additional 6 to 8 months</strong> to the total processing time.</p><p><strong>If it has been longer than the time shown above since you applied, you need more information, and you live:</strong></p><ul><li><strong>inside Canada</strong>, contact the <a href='/english/contacts/index.asp'>Call Centre</a>. Call Centre agents cannot speed up the processing  of your application or make decisions on your case.</li><li><strong>inside the United States</strong>, you can mail a letter to <a href='/english/information/offices/canada/sydney.asp'>CPC-Sydney</a> asking for an update. You can also:<ul><li>Find how to get more information in the acknowledgement letter we sent you if you submitted your application on or after September 2, 2013.</li><li>Contact the <a href='http://www.international.gc.ca/cip-pic/embassies-ambassades.aspx?lang=eng'>Canadian embassy or consulate</a> where you sent your application if you submitted it before September 2, 2013.</li></ul></li><li><strong>outside Canada and outside the United States</strong>, use the <a href='/english/contacts/web-form.asp'>Case Specific Enquiry form</a>.</li></ul>";
var pt_message14 = "<p>The stated processing time does not include <strong>3-4 months</strong> that is needed for missions outside Canada to prepare and send your application for processing in Canada.</p><p><strong>If it has been  longer than the time shown above since you applied, you need more information, and you live:</strong></p><ul><li><strong>inside Canada</strong>, contact the <a href='/english/contacts/index.asp'>Call Centre</a>. Call Centre agents cannot speed up the processing of your application or make decisions on your case.</li><li><strong>inside the United States</strong>, you can mail a letter to <a href='/english/information/offices/canada/sydney.asp'>CPC-Sydney</a> asking for an update. You can also:<ul><li>Find how to get more information in the acknowledgement letter we sent you if you submitted your application on or after September 2, 2013.</li><li>Contact the <a href='http://www.international.gc.ca/cip-pic/embassies-ambassades.aspx?lang=eng'>Canadian embassy or consulate</a> where you sent your application if you submitted it before September 2, 2013.</li></ul></li><li><strong>outside Canada and outside the United States</strong>, use the <a href='/english/contacts/web-form.asp'>Case Specific Enquiry form</a>.</li></ul>";
var pt_message15 = "<p>This includes Working Holiday, Young Professionals and International Co-op Internship.</p>";
var pt_message16 = "<p>Does not include document mailing time.</p><p>Only valid Study or Work Permit holders can apply for new temporary resident visas from inside Canada.</p>";
var pt_message17 = "<p>View your application status in <a href='/english/e-services/mycic.asp'>your account</a></p>";
var pt_message18 = "<p>View your <a href='https://services3.cic.gc.ca/ecas/security.do?lang=en'>application status online</a></p>";
var pt_message19 = "<p><a href='/english/department/media/notices/notice-returns.asp'>Changes to the law</a> may affect your application</p>";
var pt_message20 = "<p>Includes assessment of sponsor: " + family_sponsorship["spouse_assessment"] + " days</p>";
var pt_message21 = "<p>Includes assessment of sponsor: " + family_sponsorship["parent_grandparent_assessment"] + " months</p>";
var pt_message22 = "<p>Includes assessment of sponsor.</p>";
var pt_message23 = "";
var pt_message24 = "<p><a href='/english/helpcentre/answer.asp?qnum=1169&amp;top=5'>Non-routine applications</a> take longer to process than routine applications.</p>";
var pt_message25 = "<p>These applications can be submitted online or by paper.</p>";
var pt_message27 = "<p>Not enough data is available.</p>";
var pt_message28 = "<p>Processing times are unavailable.</p>";
var pt_message30 = "<p>If you require your PR card urgently, <a href='/english/information/pr-card/apply-urgent-processing.asp'>follow these instructions</a>.</p>";
var pt_message31 = "<p>Visit Canada sooner with a <a href='/english/visit/supervisa.asp'>Super Visa</a>!</p>";
var pt_message32 = "<p>Since <a href='/english/immigrate/express/express-entry.asp'>Express Entry</a> is a new system and not enough applications have been received yet, processing times are not available but we have committed to process the majority of applications in six months or less.</p>";
var pt_message33 = "<p>Includes assessment of sponsor and person being sponsored.</p>";
var pt_message34 = "<p>Once you have submitted a complete application package.</p>";
var pt_message35 = "<p>Work while you wait with an <a href='/english/resources/tools/updates/2014/2014-12-22.asp'>open work permit</a>.</p>";
var pt_message36 = "";
var pt_message37 = "<p>Includes initial eligibility assessment (approval in principle): " + family_sponsorship["submit_after"] + " months.</p>";
var pt_message38 = "However, some requests may need several days to process. If this is the case for your application, you can expect an email from IRCC within 72 hours that tells you what your next steps are.";
var pt_message39 = "Most eTA applications are approved within minutes of applying";
//var pt_message40 = "<p><a href='/english/helpcentre/answer.asp?qnum=1169&amp;top=5'>Non-routine applications</a> may take longer</p>";
var pt_message41 = "<p>Does not include temporary residents or refugees eligible to apply for their first work permit from within Canada; for these applications select &ldquo;Work permit extensions (New employer)&rdquo;</p>";
var pt_message42 = '<p>Excludes: <strong>Post-grad</strong> and <strong>Co-op</strong> work permits, and <strong>refugees</strong> applying for their first work permit;  instead, select “Work permit extensions (New employer)”</p>';
var pt_message43 = '<p>If your application is routine, you may <a href="/english/contacts/web-form.asp">contact us</a>. If your application is <a href="/english/helpcentre/answer.asp?qnum=1169&top=5">non-routine</a> and you haven’t heard from us in six months, you may <a href="/english/contacts/web-form.asp">contact us</a>.</p>';
var pt_message44 = '<p>If you have not received a decision on your application, it is likely because your application is non-routine. <a href="/english/helpcentre/answer.asp?qnum=1169&top=5">Non-routine applications take longer to process</a>.</p>';
var pt_message45 = '<p>If your application is <a href="/english/helpcentre/answer.asp?qnum=1169&top=5">non-routine</a> and you haven&rsquo;t heard from us in six months, you may <a href="/english/contacts/web-form.asp">contact us</a>. If you believe your application is not described under <a href="/english/helpcentre/answer.asp?qnum=1169&top=5">non-routine</a>, you may <a href="/english/contacts/web-form.asp">contact&nbsp;us</a>.</p>';
var pt_message46 = '<div class="alert alert-info"><p class="mrgn-lft-md"><strong>Spousal sponsorship program changes: Faster processing and the <a href="/english/information/applications/spouse.asp">new  application package</a> are available now.</strong></p><p class="mrgn-lft-md">Find out about <a href="/english/department/media/notices/2016-12-15.asp">important changes</a> we&rsquo;ve made to process your spousal sponsorship application within 12 months.</p></div>';
var pt_message47 = '<p>Does not include transit time between the VAC and IRCC office.</p>';
var pt_message48 = '<p><em>If you applied before January, 2014 be sure you have responded to all communication from IRCC.</em></p>';
var pt_message49 = "<p>Includes initial eligibility assessment (approval in principle).</p>";
var pt_message50 = "<p><strong><a href=\"/english/helpcentre/answer.asp?qnum=1320&top=14\">Find out about changes</a> we’re making to process applications within 12 months.</strong></p>";
var pt_message51 = "<p><strong><a href=\"/english/helpcentre/answer.asp?qnum=354&top=14\"><strong>We’re working to finalize applications</strong></a> received before December&nbsp;7, 2016 by the end of December 2017.</strong></p>";
var pt_message52 = "<p>After your visa is approved, you may need more time to get departure documents.</p>";
var pt_message53 = "<p>View your <a href=\"https://services3.cic.gc.ca/ecas/security.do?lang=en\">application status online</a></p><p>This processing time refers to applications for permanent resident status from protected persons and Convention refugees.</p>";
var pt_message54 = "<p>We plan to process applications received on or <a href=\"https://www.canada.ca/en/immigration-refugees-citizenship/news/2017/12/federal_governmentcontinuestomakefamilyreunificationapriority.html\">after October 1, 2017 within 12 months</a>.</p>";
var pt_message55 = "<p>We plan to process applications we received <a href=\"https://www.canada.ca/en/immigration-refugees-citizenship/news/2017/12/federal_governmentcontinuestomakefamilyreunificationapriority.html\">before October 1, 2017 by December 31, 2018</a>. Your application may take longer to process if it is <a href=\"/english/helpcentre/answer.asp?qnum=1379&top=28\">complex</a>.</p>";
};
*/

// Create each different FRA Prcoessing Times messages
if (strurl.indexOf("francais") > -1) { 

var monthNames = [
	"janvier", "février", "mars",
	"avril", "mai", "juin", "juillet",
	"août", "septembre", "octobre",
	"novembre", "décembre"
];

// Common text
var txtsubmittedto = "À partir de ";
var txtprocessedin = "Traitées dans ";
var txtsubmitted = "Présentées ";
var txtmonths = " mois";
var txtdays = " jours";
var txtweeks = " semaine(s)";
var txtlastupdate = "Dernière mise à jour : ";
var txtquarterly = "Mise à jour sur une base hebdomadaire"; // Used to be "Mise à jour trimestrielle"
var txtweekly = "Mise à jour sur une base hebdomadaire";
var txtee = "En ligne en passant par Entrée express ";
var txtworkingon = "Nous travaillons actuellement sur les demandes reçues ";
var txtonline = "En ligne";
var txtpaper = "Papier";
var txtstage1 = "Étape 1 : Lettre d’acceptation conditionnelle";
var txtstage2 = "Étape 2 : Permis de travail";
var txtstep1 = "Étape 1 - Évaluation initiale";
var txtstep2 = "Étape 2 - Décision finale"; 
var passporturl = "http://www.cic.gc.ca/francais/passeport/delais.asp";
var txtprcard = "Renouveler ou remplacer une carte RP";
var txtnewprcard = "Première carte RP";
var txtapplied = "Appliquer : "
var pgppttime = "<span class=\"glyphicon glyphicon-time\"></span> Nous travaillons actuellement sur les demandes reçues en janvier 2014";
var grant_before2015 = "par le 31 mars 2016 ou avant";
var careigiver_medical_title = "Soins aux personnes ayant des besoins médicaux élevés";
var commitment_before2016 = "<p>Présentées avant le 7 décembre, 2016</p>";
var commitment_after2016 = "<p>Présentées le 7 décembre, 2016 ou après cette date</p>";
var live_in_caregiver_oct_1 = "Nous aurons traité votre demande d’ici le 31 décembre 2018.";

var pt_message1 = "<p>Les délais de traitement indiquent le temps qu’il nous a fallu pour traiter des demandes dans le passé, après avoir reçu une <a href='/francais/centre-aide/reponse.asp?qnum=72&top=3'>trousse de demande complète</a>. Les délais de traitement varient en fonction du nombre de demandes que nous recevons.</p><ul><li>Si votre demande n’est pas complète, elle peut vous être retournée et son traitement peut prendre plus de temps.</li></ul>";
var pt_message2 = "<p>Si plus de six semaines se sont écoulées depuis le délai indiqué, soit la date de soumission de votre demande, et que vous avez besoin de plus de renseignements concernant l’état de votre demande, utilisez le <a href='https://secure.cic.gc.ca/enquiries-renseignements/canada-case-cas-fra.aspx'>Formulaire de demande de renseignements propre à un cas</a>.</p>";
var pt_message3 = "<p>Si cela fait plus longtemps que le délai indiqué ci-dessus que vous avez soumis votre demande, et que vous ne pouvez pas <a href='/francais/ma_demande/etat.asp'>vérifier l’état de votre demande en ligne</a>, utilisez ce <a href='/francais/contacts/formulaire-web.asp'>formulaire Web</a>.</p>";
var pt_message4 = "<p><strong>Si cela fait plus longtemps que le délai indiqué ci-dessus que vous avez soumis votre demande,</strong> et que vous ne voyez pas de mise à jour dans <a href='https://services3.cic.gc.ca/ecas/security.do?app=ecas&lang=fr'>l’état de votre demande en ligne</a>, utilisez ce <a href='https://secure.cic.gc.ca/enquiries-renseignements/canada-case-cas-fra.aspx'>formulaire Web</a>.</p>";
//var pt_message4 = "<p>Si cela fait plus longtemps que le délai indiqué ci-dessus que vous avez soumis votre demande, et que vous ne pouvez pas <a href='/francais/ma_demande/etat.asp'>vérifier l’état de votre demande en ligne</a>, utilisez ce <a href='/francais/contacts/formulaire-web.asp'>formulaire Web</a>.</p>";
var pt_message5 = "<p>Ce délai est fondé sur une norme de service convenue entre EIC et les pays partenaires. Après la présentation de votre demande de permis de travail et de tous les documents finaux, votre demande sera traitée selon le principe du premier arrivé, premier servi.</p><p> Il peut y avoir des retards dans le traitement de votre demande ou celle-ci peut être refusée si&nbsp;:</p><ul><li>votre demande n'est pas dûment remplie;</li><li>vous ne payez pas les frais exigés;</li><li>vous devez fournir des documents supplémentaires ou subir un examen médical, comme l'aura déterminé l'agent qui aura examiné votre demande.</li></ul>";
var pt_message6 = "<p>Ces délais de traitement s’appliquent seulement au volet <strong>fédéral</strong> du traitement (au bureau des visas). Ils ne comprennent pas le temps nécessaire à la province de Québec pour traiter le <em>Certificat de sélection du Québec (CSQ)</em>.</p>";
var pt_message7 = "<p>Ces délais de traitement s’appliquent seulement au volet <strong>fédéral</strong> du traitement (au bureau des visas), après la réception de la demande complète. Ils ne comprennent pas le temps nécessaire à la province ou au territoire pour traiter le certificat de désignation.</p>";
var pt_message8 = "<p>Les répondants des réfugiés parrainés par le secteur privé comprennent :</p><ul><li>les groupes de cinq;</li><li>les répondants communautaires;</li><li>les signataires d’entente de parrainage et leurs groupes constitutifs.</li></ul>";
var pt_message9 = "<p>Vous pouvez <a href='/francais/information/demandes/copieconf.asp'>présenter une demande de vérification du statut</a> pour les documents d’immigration suivants :</p><ul><li>fiche relative au droit d’établissement (IMM 1000);</li><li>visa d’immigrant et fiche relative au droit d’établissement (IMM 1000) / Confirmation de résidence permanente (IMM 5292 ou IMM 5688);</li><li>Attestation de départ (IMM 0056);</li><li>mesure d’expulsion (IMM 1213);</li><li>mesure d’interdiction de séjour (IMM 5238);</li><li>permis de séjour temporaire (1442);</li><li>autorisation de revenir au Canada (IMM 1203);</li><li>fiche du visiteur (IMM 1097 ou IMM 1442);</li><li>permis de travail (IMM 1102 ou IMM 1442);</li><li>permis d’études (IMM 1208 ou IMM 1442);</li><li>mesure d’exclusion (IMM 1214);</li><li>document de personne protégée.</li></ul>";
var pt_message10 = "<p>Vous pouvez présenter une demande de <a href='/francais/information/demandes/copieconf.asp'>remplacement d’un document de résident temporaire actuel et valide</a> si vous l’avez perdu, ou s’il a été volé ou détruit. Nous pouvons délivrer un document de remplacement pour les documents suivants :</p><ul><li>fiche du visiteur (IMM 1442);</li><li>permis de travail (IMM 1442);</li><li>permis d’études (IMM 1442);</li><li>permis de séjour temporaire (IMM 1442).</li></ul>";
var pt_message11 = "<p>Vous pouvez présenter une demande de <a href='/francais/information/demandes/modification.asp'>modification de documents sur les antécédents</a> si les agents d’immigration ont commis des erreurs dans la saisie de l’information fournie dans votre demande d’immigration au Canada :</p><ul><li>fiche relative au droit d’établissement (IMM 1000);</li><li>confirmation de résidence permanente (IMM 5292 ou IMM 5688).</li></ul>";
var pt_message12 = "<p>Vous pouvez présenter une demande pour <a href='/francais/information/demandes/modification.asp'>corriger une erreur commise par un agent d'immigration dans la saisie de certains de vos renseignements personnels</a>, si les documents de résident temporaire suivants sont encore valides et n’ont pas expirés :</p><ul><li>fiche du visiteur (IMM 1442);</li><li>permis de travail (IMM 1442);</li><li>permis d’études (IMM 1442);</li><li>permis pour entrer au Canada ou y demeurer (IMM 1263);</li><li>permis de séjour temporaire (IMM 1442).</li></ul>";
var pt_message13 = "<ul class='lst-spcd'><li>Si vous résidez à l’extérieur du Canada et des États-Unis, et que vous présentez une demande à une ambassade, à un haut-commissariat ou à un consulat du Canada, <strong>veuillez ajouter de 3 à 4 mois</strong> aux délais de traitement afin de tenir compte du délai de livraison par la poste.</li><li>Si vous présentez une demande au nom d’un enfant mineur qui réside à l’extérieur du Canada et des États-Unis, et que vous envoyez la demande directement au Centre de traitement des demandes de Sydney, en Nouvelle-Écosse, <strong>veuillez ajouter de 6 à 8 mois</strong> aux délais de traitement.</li></ul><p><strong>Si cela fait plus longtemps que le délai indiqué ci-dessus que vous avez soumis votre demande,</strong> que vous ne voyez pas de mise à jour dans l’<a href='https://services3.cic.gc.ca/ecas/security.do?app=ecas&lang=fr'>état de votre demande en ligne</a>, et que vous êtes&nbsp;:</p><ul><li><strong>au Canada</strong>, communiquez avec le <a href='https://www.canada.ca/fr/immigration-refugies-citoyennete/organisation/contactez-ircc/centre-soutien-clientele.html'>Centre de soutien à la clientèle</a></li><li><strong>à l’extérieur du Canada</strong>, utilisez le <a href='https://secure.cic.gc.ca/enquiries-renseignements/canada-case-cas-fra.aspx'>formulaire Web</a></li></ul>";
var pt_message14 = "<ul><li>Si vous résidez à l’extérieur du Canada et des États-Unis, et que vous présentez une demande à une ambassade, à un haut-commissariat ou à un consulat du Canada, <strong>veuillez ajouter de 3 à 4&nbsp;mois</strong> aux délais de traitement afin de tenir compte du délai de livraison par la poste.</li></ul><p><strong>Si cela fait plus longtemps que le délai indiqué ci-dessus que vous avez soumis votre demande,</strong> que vous ne voyez pas de mise à jour dans <a href='https://services3.cic.gc.ca/ecas/security.do?app=ecas&lang=fr'>l’état de votre demande en ligne</a> et que vous êtes&nbsp;:</p><ul><li><strong>au Canada</strong>, communiquez avec le <a href='https://www.canada.ca/fr/immigration-refugies-citoyennete/organisation/contactez-ircc/centre-soutien-clientele.html'>Centre de soutien à la clientèle</a></li><li><strong>à l’extérieur du Canada</strong>, utilisez le <a href='https://secure.cic.gc.ca/enquiries-renseignements/canada-case-cas-fra.aspx'>formulaire Web</a></li></ul>";
var pt_message15 = "<p>Cela comprend les catégories Vacances-travail, Jeunes professionnels et Stage coop international.</p>";
var pt_message16 = "<p>Ils ne comprennent pas les délais d’expédition des documents.</p><p>Seules les personnes titulaires d’un permis d’études ou de travail valide peuvent présenter une demande pour obtenir un nouveau visa de résident temporaire à partir du Canada.</p>";
var pt_message17 = "<p>Vérifiez l’état de votre demande dans <a href='/francais/services-e/moncic.asp'>votre compte</a></p>";
var pt_message18 = "<p>Vérifiez <a href='https://services3.cic.gc.ca/ecas/security.do?app=ecas&lang=fr'>l’état de votre demande en ligne</a></p>";
var pt_message19 = "<p>Il se peut que des <a href='/francais/ministere/media/avis/avis-retour.asp'>modifications apportées à la loi</a> touchent votre demande</p>";
var pt_message20 = "<p>Ils comprennent l’évaluation du répondant : " + family_sponsorship["spouse_assessment"] + " jours</p>";
var pt_message21 = "<p>Ils comprennent l’évaluation du répondant : " + family_sponsorship["parent_grandparent_assessment"] + " mois</p>";
var pt_message22 = "<p>Ils comprennent l’évaluation du répondant.</p>";
var pt_message23 = "";
var pt_message24 = "<ul><li>Il faut plus de temps pour traiter les demandes inhabituelles</a>.</li></ul>";
var pt_message25 = "<p>Il est possible de présenter ces demandes en ligne ou sur papier.</p>";
var pt_message27 = "<p>Les données sont insuffisantes.</p>";
var pt_message28 = "<p>Les délais de traitement ne sont pas disponibles.</p>";
var pt_message30 = "<p>Si vous avez besoin de votre carte RP en urgence, veuillez <a href='/francais/information/carte-rp/demande-traiter-durgence.asp'>suivre ces instructions</a>.</p>";
var pt_message31 = "<p>Visitez le Canada plus tôt grâce au <a href='/francais/visiter/supervisa.asp'>super visa</a>!</p>";
var pt_message32 = "<p>Étant donné qu’<a href='/francais/immigrer/express/entree-express.asp'>Entrée express</a> est un nouveau système et que nous n’avons pas encore reçu suffisamment de demandes, les délais de traitement ne sont pas disponibles; cependant, nous nous sommes engagés à traiter la majorité des demandes en six mois ou moins.</p>";
var pt_message33 = "<p>Ils comprennent l’évaluation du répondant et de la personne parrainée.</p>";
var pt_message34 = "<p>Une fois que vous avez transmis une trousse de demande complète.</p>";
var pt_message35 = "<p>Travail dans l’attente d’une décision sur votre demande avec un <a href='/francais/ressources/outils/misesajour/2014/2014-12-22.asp'>permis de travail ouvert</a>.</p>"
var pt_message36 = "";
var pt_message37 = "<p>Inclus l’évaluation initiale de la recevabilité (approbation de principe) : " + family_sponsorship["submit_after"] + " mois.</p>";
var pt_message38 = "<p>Toutefois, certaines demandes peuvent nécessiter plusieurs jours à traiter. Si c’est le cas pour votre demande, vous recevrez, dans les 72 heures suivant la présentation de votre demande, un courriel d'IRCC vous indiquant comment procéder pour la suite.</p>";
var pt_message39 = "La plupart des demandes d’AVE sont approuvées dans les minutes qui suivent l’envoi de la demande";
//var pt_message40 = "<p>Le traitement des <a href='/francais/centre-aide/reponse.asp?qnum=1169&amp;top=5'>demandes qui posent des difficultés</a> peut prendre plus de temps.</p>";
var pt_message41 = "<p>Ne comprend pas les résidents temporaires ni les réfugiés admissibles à demander leur premier permis de travail depuis le Canada; dans le cadre de ces demandes, il faut sélectionner «&nbsp;Prorogation d&rsquo;un permis de travail (nouvel employeur)&nbsp;».</p>";
var pt_message42 = '<p>Exclus : les permis de travail <strong>coop</strong> et <strong>post diplôme</strong>, et les <strong>réfugiés</strong> qui demandent leur premier permis de travail; sélectionnez plutôt «&nbsp;Prorogation d’un permis de travail (nouvel employeur)&nbsp;».</p>';
var pt_message43 = '<p>S’il s’agit d’une demande courante, vous pouvez <a href="/francais/contacts/formulaire-web.asp">communiquer avec nous</a>. Si votre <a href="/francais/centre-aide/reponse.asp?qnum=1169&top=5">demande est complexe</a> et que vous n’avez pas eu de nos nouvelles dans les six derniers mois, vous pouvez <a href="/francais/contacts/formulaire-web.asp">communiquer avec nous</a>.</p>';
var pt_message44 = '<p>Si vous n’avez pas reçu une décision au sujet de votre demande, il est probable qu&rsquo;elle soit complexe. <a href="/francais/centre-aide/reponse.asp?qnum=1169&top=5">Les demandes complexes prennent plus de temps à traiter</a>.</p>';
var pt_message45 = '<p>Si votre <a href="/francais/centre-aide/reponse.asp?qnum=1169&top=5">demande est complexe</a> et que vous n&rsquo;avez pas eu de nos nouvelles dans les six derniers mois, vous pouvez <a href="/francais/contacts/formulaire-web.asp">communiquer avec nous</a>. Si vous pensez que votre demande n&rsquo;est pas <a href="/francais/centre-aide/reponse.asp?qnum=1169&top=5">complexe</a>, vous pouvez <a href="/francais/contacts/formulaire-web.asp">communiquer avec nous</a>.</p>';
var pt_message46 = '<div class="alert alert-info"><p class="mrgn-lft-md"><strong>Changements apportés au Programme de parrainage des époux ou conjoints de fait&nbsp;: le traitement accéléré et la <a href="/francais/information/demandes/conjoint.asp">nouvelle trousse de demande</a> sont maintenant disponibles.</strong></p><p class="mrgn-lft-md"><a href="/francais/ministere/media/avis/2016-12-15.asp">Découvrez les changements importants</a> que nous avons apportés afin de traiter votre demande de parrainage dans un délai de douze&nbsp;mois.</p></div>';
var pt_message47 = '<p>Ne comprend pas le temps de transit entre le CRDV et le bureau d’IRCC.</p>';
var pt_message48 = '<p><em>Si vous avez présenté une demande avant janvier 2014, assurez-vous d’avoir répondu à toutes les communications d’IRCC.</em></p>';
var pt_message49 = "<p>Inclus l’évaluation initiale de la recevabilité (approbation de principe).</p>";
var pt_message50 = "<p><strong><a href=\"/francais/centre-aide/reponse.asp?qnum=354&top=14\">Découvrez les changements</a> que nous apportons afin de traiter les demandes dans un délai de 12 mois.</strong></p>";
var pt_message51 = "<p><strong>Nous nous efforçons de <a href=\"/francais/centre-aide/reponse.asp?qnum=354&top=14\">terminer le traitement des demandes</a> reçues avant le 7 décembre 2016 au plus tard à la fin de décembre 2017.</strong></p>";
var pt_message52 = "<p>Une fois que votre visa aura été approuvé, il vous faudra peut-être un peu plus de temps pour obtenir les documents nécessaires à votre départ.</p>";
var pt_message53 = "<p>Vérifiez <a href=\"https://services3.cic.gc.ca/ecas/security.do?app=ecas&lang=fr\">l’état de votre demande en ligne</a></p><p>Ce délai de traitement concerne les demandes de statut de résident permanent présentées par des personnes protégées et des réfugiés au sens de la Convention.</p>";
var pt_message54 = "<p>Nous prévoyons de traiter dans les 12 mois les demandes que nous avons reçues <a href=\"https://www.canada.ca/fr/immigration-refugies-citoyennete/nouvelles/2017/12/la_reunificationdesfamillesdemeureuneprioritepourlegouvernementf.html\">depuis le 1<sup>er</sup> octobre 2017</a>. </p>"
var pt_message55 = "<p>Nous prévoyons de traiter d’ici <a href=\"https://www.canada.ca/fr/immigration-refugies-citoyennete/nouvelles/2017/12/la_reunificationdesfamillesdemeureuneprioritepourlegouvernementf.html\">le 31 décembre 2018 les demandes que nous avons reçues avant le 1<sup>er</sup> octobre 2017</a>. Les délais seront plus longs si votre demande est <a href=\"/francais/centre-aide/reponse.asp?qnum=1379&top=28\">complexe</a>.";
var pt_message56 = "<p>Apprenez-en plus sur <a href=\"https://www.canada.ca/fr/immigration-refugies-citoyennete/services/refugies/aide-exterieur-canada/programme-parrainage-prive/comment-nous-traitons-demandes.html\">la façon dont nous traitons les demandes de parrainage privé de réfugiés</a>.";
var pt_message57 = "<ul><li>Si vous résidez à l’extérieur du Canada et des États-Unis, et que vous présentez une demande à une ambassade, à un haut-commissariat ou à un consulat du Canada, <strong>veuillez ajouter de 3 à 4&nbsp;mois</strong> aux délais de traitement afin de tenir compte du délai de livraison par la poste.</li></ul><p><strong>Si cela fait plus longtemps que le délai indiqué ci-dessus que vous avez soumis votre demande</strong>, que vous avez besoin de plus de renseignements, et que vous êtes&nbsp;:</p><ul><li><strong>au Canada</strong>, communiquez avec le <a href='https://www.canada.ca/fr/immigration-refugies-citoyennete/organisation/contactez-ircc/centre-soutien-clientele.html'>Centre de soutien à la clientèle</a></li><li><strong>à l’extérieur du Canada</strong>, utilisez le <a href='https://secure.cic.gc.ca/enquiries-renseignements/canada-case-cas-fra.aspx'>formulaire Web</a></li></ul>";
var pt_message58 = "<p><strong>Si cela fait plus longtemps que le délai indiqué ci-dessus que vous avez soumis votre demande</strong>,&nbsp;que vous ne voyez pas de mise à jour dans&nbsp;<a href='https://services3.cic.gc.ca/ecas/security.do?app=ecas&lang=fr'>l’état de votre demande en ligne</a>&nbsp;et que vous êtes&nbsp;:</p><ul><li><strong>au Canada</strong>, communiquez avec le&nbsp;<a href='https://www.canada.ca/fr/immigration-refugies-citoyennete/organisation/contactez-ircc/centre-soutien-clientele.html'>Centre de soutien à la clientèle</a></li><li><strong>à l’extérieur du Canada</strong>, utilisez le&nbsp;<a href='https://secure.cic.gc.ca/enquiries-renseignements/canada-case-cas-fra.aspx'>formulaire Web</a></li></ul>";
};