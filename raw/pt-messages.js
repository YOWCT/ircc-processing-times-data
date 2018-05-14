var strurl = window.location.pathname; // Get the URL address of the page
strurl = strurl.toLowerCase();

// PROCESSING TIME DATASET START

// WEEKLY PROCESSING TIME PROVIDED BY CPR BEGIN
// Holds the processing times for Visitor visa extension
var visitor_extension = {online:"45", online_working_on:"01/29/2018", paper:"115", paper_working_on:"11/20/2017", lastupdated:"2018/03/18"};

// Holds the processing times for Study permit extension
var study_extension = {online:"34", online_working_on:"02/09/2018", paper:"116", paper_working_on:"11/19/2017", lastupdated:"2018/03/18"};

// Holds the processing times for work permit extension (new employer)
var work_extension_new_employer = {online:"35", online_working_on:"02/08/2018", paper:"105", paper_working_on:"11/30/2017", lastupdated:"2018/03/18"};

// Holds the processing times for work permit extension (same employer)
var work_extension_same_employer = {online:"35", online_working_on:"02/08/2018", paper:"118", paper_working_on:"11/17/2017", lastupdated:"2018/03/18"};

// Holds the processing times for Family Sponsorship in Canada and Assessement
var family_sponsorship = {spouse_can:"26", submit_after:"12", spouse_assessment:"53", parent_grandparent_assessment:"51", lastupdated:"2018/03/18"};

// Holds the processing times for Humanitarian and compassionate cases
var humanitarian_compassionate = {humanitarian:"29", lastupdated:"2018/03/25"};

// Holds the processing times for Live-in Caregivers
// *** I have not applied yet
// *** Before October 1, 2017
// *** On or after October 1, 2017
var highmedical = {highmedical:"3", lastupdated:"2018/03/25"};
var carechildren = {carechildren:"2", lastupdated:"2018/03/25"};
var live_in_caregivers = {not_applied_yet:"12", before_oct_1:"", on_or_after_oct_1:"12", lastupdated:"2018/03/25"};

// Holds the processing times for Protected persons and convention refugees (in Canada)
var refugees_protected = {step1:"18", step2:"10", lastupdated:"2018/03/18"};

// Holds the processing times for PR Card
var pr_card = {new_pr:"57", existing_pr:"79", workingon:"01/02/2018", lastupdated:"2018/03/18"};

// Holds the processing times for Replacing or amending document, verifying status
var rep_documents = {vos:"6", replacement:"1", amend_imm:"6", amend_tr:"1", lastupdated:"2018/03/18"};

// Holds the processing times for Visitor visa (from inside Canada)
var visitor_inside_canada = {online:"4", online_working_on:"03/12/2018", paper:"17", paper_working_on:"02/27/2018", lastupdated:"2018/03/18"};
// WEEKLY PROCESSING TIME PROVIDED BY CPR END

// VISITING, STUDYING, WORKING TEMPORARILY BEGIN
// Holds the processing times for Visitor visa (from outside Canada)

var visitor = {AF:"31",AL:"11",DZ:"21",AD:"15",AO:"4",AI:"15",AG:"8",AR:"4",AM:"9",AW:"15",AU:"14",AT:"16",AZ:"40",BS:"15",BH:"23",BD:"12",BB:"8",BY:"11",BE:"15",BZ:"4",BJ:"13",BM:"13",BT:"15",BO:"9",BQ:"",BA:"7",BW:"6",BR:"12",IO:"15",BN:"15",BG:"15",BF:"23",MM:"10",BI:"15",KH:"9",CM:"21",CA:"6",CV:"15",KY:"22",CF:"15",TD:"25",CL:"5",CN:"9",CO:"14",KM:"15",CG:"20",CR:"11",CI:"23",HR:"15",CU:"11",CY:"8",CZ:"12",CD:"26",DK:"19",DJ:"6",DM:"9",DO:"12",EC:"13",EG:"24",SV:"13",GQ:"15",ER:"38",EE:"15",ET:"7",FJ:"22",FI:"18",FR:"14",GA:"34",GM:"33",GE:"42",DE:"9",GH:"11",GR:"18",GD:"7",GT:"11",GN:"21",GW:"15",GY:"8",HT:"7",VA:"15",HN:"10",HK:"8",HU:"21",IS:"15",IN:"15",ID:"5",IR:"75",IQ:"33",IE:"12",IL:"4",IT:"6",JM:"13",JP:"11",JO:"9",KZ:"10",KE:"6",KI:"",XK:"7",KW:"10",KG:"10",LA:"51",LV:"15",LB:"15",LS:"15",LR:"15",LY:"35",LI:"15",LT:"15",LU:"15",MO:"9",MK:"",MG:"3",MW:"5",MY:"7",MV:"15",ML:"26",MT:"15",MH:"",MQ:"15",MR:"18",MU:"4",MX:"10",FM:"",MD:"5",MC:"15",MN:"9",ME:"9",MA:"12",MZ:"10",NA:"4",NR:"",NP:"18",NL:"10",NC:"15",NZ:"14",NI:"14",NE:"21",NG:"33",KP:"15",NO:"41",OM:"19",PK:"18",PS:"39",WB:"39",PA:"11",PG:"15",PY:"4",PE:"10",PH:"11",PL:"11",PT:"14",PR:"15",QA:"16",RO:"20",RU:"9",RW:"12",LC:"6",WS:"",SM:"",ST:"",SA:"26",SN:"23",RS:"8",SC:"15",SL:"28",SG:"9",SK:"15",SI:"15",SB:"",SO:"15",ZA:"4",KR:"12",SS:"15",ES:"15",LK:"12",KN:"7",VC:"7",SD:"40",SR:"7",SZ:"15",SE:"23",CH:"16",SY:"19",PF:"",TW:"9",TJ:"15",TZ:"13",TH:"5",TL:"15",TG:"13",TO:"",TT:"6",TN:"8",TR:"36",TM:"15",TC:"15",TV:"",UG:"12",UA:"10",AE:"16",GB:"11",US:"12",UY:"4",VI:"15",UZ:"11",VU:"",VE:"10",VN:"48",YE:"36",ZM:"15",ZW:"5",lastupdated:"2018/03/25"};

// Holds the processing times for Super Visa (parent and grandparent)
var supervisa = {AF:"77",AL:"77",DZ:"77",AD:"",AO:"",AI:"",AG:"",AR:"77",AM:"77",AW:"",AU:"77",AT:"",AZ:"",BS:"",BH:"77",BD:"102",BB:"",BY:"",BE:"",BZ:"",BJ:"77",BM:"",BT:"",BO:"",BQ:"",BA:"",BW:"77",BR:"77",IO:"",BN:"77",BG:"",BF:"77",MM:"77",BI:"77",KH:"77",CM:"77",CA:"77",CV:"",KY:"77",CF:"",TD:"",CL:"77",CN:"57",CO:"64",KM:"",CG:"77",CR:"77",CI:"77",HR:"",CU:"77",CY:"",CZ:"",CD:"77",DK:"",DJ:"77",DM:"",DO:"77",EC:"77",EG:"77",SV:"77",GQ:"",ER:"77",EE:"",ET:"77",FJ:"77",FI:"",FR:"77",GA:"",GM:"77",GE:"77",DE:"77",GH:"86",GR:"77",GD:"77",GT:"77",GN:"77",GW:"",GY:"77",HT:"75",VA:"",HN:"77",HK:"77",HU:"",IS:"",IN:"78",ID:"77",IR:"59",IQ:"77",IE:"",IL:"77",IT:"77",JM:"77",JP:"",JO:"77",KZ:"77",KE:"77",KI:"",XK:"77",KW:"77",KG:"",LA:"77",LV:"77",LB:"77",LS:"",LR:"77",LY:"77",LI:"",LT:"",LU:"",MO:"",MK:"",MG:"77",MW:"",MY:"77",MV:"",ML:"",MT:"",MH:"",MQ:"77",MR:"",MU:"77",MX:"77",FM:"",MD:"",MC:"",MN:"77",ME:"",MA:"77",MZ:"",NA:"",NR:"",NP:"97",NL:"",NC:"",NZ:"",NI:"",NE:"77",NG:"96",KP:"",NO:"",OM:"77",PK:"73",PS:"",WB:"",PA:"",PG:"",PY:"",PE:"77",PH:"116",PL:"",PT:"77",PR:"",QA:"77",RO:"77",RU:"77",RW:"77",LC:"77",WS:"",SM:"",ST:"",SA:"77",SN:"",RS:"77",SC:"",SL:"77",SG:"",SK:"",SI:"",SB:"",SO:"",ZA:"77",KR:"77",SS:"",ES:"",LK:"51",KN:"",VC:"",SD:"77",SR:"",SZ:"",SE:"",CH:"77",SY:"77",PF:"",TW:"",TJ:"",TZ:"",TH:"77",TL:"",TG:"77",TO:"",TT:"77",TN:"77",TR:"77",TM:"",TC:"",TV:"",UG:"77",UA:"77",AE:"44",GB:"77",US:"77",UY:"",VI:"",UZ:"77",VU:"77",VE:"77",VN:"224",YE:"",ZM:"77",ZW:"77",lastupdated:"2018/03/25"};

// Holds the processing times for Study permit

var study = {AF:"5",AL:"3",DZ:"4",AD:"",AO:"5",AI:"",AG:"5",AR:"5",AM:"5",AW:"5",AU:"8",AT:"5",AZ:"5",BS:"2",BH:"5",BD:"3",BB:"5",BY:"5",BE:"5",BZ:"5",BJ:"13",BM:"5",BT:"5",BO:"5",BQ:"",BA:"5",BW:"5",BR:"9",IO:"",BN:"5",BG:"5",BF:"7",MM:"5",BI:"9",KH:"5",CM:"4",CA:"9",CV:"5",KY:"5",CF:"5",TD:"5",CL:"1",CN:"3",CO:"3",KM:"",CG:"7",CR:"5",CI:"8",HR:"5",CU:"5",CY:"5",CZ:"5",CD:"6",DK:"5",DJ:"5",DM:"5",DO:"5",EC:"6",EG:"6",SV:"5",GQ:"5",ER:"",EE:"5",ET:"5",FJ:"5",FI:"5",FR:"3",GA:"5",GM:"5",GE:"5",DE:"1",GH:"8",GR:"5",GD:"5",GT:"5",GN:"7",GW:"",GY:"5",HT:"5",VA:"",HN:"5",HK:"5",HU:"5",IS:"5",IN:"5",ID:"3",IR:"20",IQ:"5",IE:"5",IL:"2",IT:"1",JM:"4",JP:"1",JO:"3",KZ:"5",KE:"4",KI:"",XK:"5",KW:"7",KG:"5",LA:"5",LV:"5",LB:"3",LS:"",LR:"5",LY:"5",LI:"",LT:"5",LU:"5",MO:"5",MK:"",MG:"6",MW:"5",MY:"3",MV:"",ML:"7",MT:"5",MH:"",MQ:"5",MR:"5",MU:"3",MX:"1",FM:"",MD:"5",MC:"",MN:"5",ME:"5",MA:"11",MZ:"5",NA:"5",NR:"",NP:"3",NL:"2",NC:"5",NZ:"5",NI:"",NE:"5",NG:"6",KP:"",NO:"5",OM:"5",PK:"8",PS:"5",WB:"5",PA:"6",PG:"",PY:"5",PE:"6",PH:"6",PL:"5",PT:"5",PR:"",QA:"7",RO:"5",RU:"4",RW:"3",LC:"5",WS:"",SM:"",ST:"",SA:"3",SN:"12",RS:"5",SC:"",SL:"5",SG:"4",SK:"5",SI:"",SB:"",SO:"5",ZA:"10",KR:"1",SS:"5",ES:"3",LK:"5",KN:"5",VC:"5",SD:"5",SR:"5",SZ:"5",SE:"5",CH:"3",SY:"5",PF:"5",TW:"5",TJ:"5",TZ:"6",TH:"3",TL:"",TG:"11",TO:"",TT:"5",TN:"7",TR:"6",TM:"5",TC:"5",TV:"",UG:"6",UA:"4",AE:"7",GB:"4",US:"8",UY:"5",VI:"",UZ:"5",VU:"",VE:"3",VN:"15",YE:"5",ZM:"5",ZW:"11",lastupdated:"2018/03/25"};

// Holds the processing times for Work permit

var work = {AF:"5",AL:"5",DZ:"10",AD:"",AO:"5",AI:"",AG:"",AR:"2",AM:"5",AW:"5",AU:"6",AT:"2",AZ:"5",BS:"5",BH:"5",BD:"4",BB:"2",BY:"5",BE:"7",BZ:"",BJ:"5",BM:"5",BT:"5",BO:"5",BQ:"",BA:"5",BW:"",BR:"8",IO:"",BN:"5",BG:"5",BF:"5",MM:"5",BI:"",KH:"5",CM:"5",CA:"6",CV:"",KY:"5",CF:"",TD:"",CL:"5",CN:"6",CO:"4",KM:"",CG:"5",CR:"4",CI:"5",HR:"6",CU:"5",CY:"2",CZ:"7",CD:"5",DK:"3",DJ:"",DM:"1",DO:"4",EC:"4",EG:"6",SV:"5",GQ:"",ER:"",EE:"6",ET:"5",FJ:"",FI:"3",FR:"4",GA:"",GM:"",GE:"5",DE:"4",GH:"20",GR:"5",GD:"5",GT:"1",GN:"5",GW:"",GY:"5",HT:"5",VA:"",HN:"3",HK:"8",HU:"5",IS:"5",IN:"10",ID:"5",IR:"21",IQ:"5",IE:"3",IL:"6",IT:"6",JM:"2",JP:"1",JO:"5",KZ:"5",KE:"5",KI:"",XK:"5",KW:"10",KG:"5",LA:"5",LV:"5",LB:"5",LS:"",LR:"",LY:"",LI:"",LT:"2",LU:"5",MO:"5",MK:"",MG:"4",MW:"",MY:"6",MV:"",ML:"5",MT:"5",MH:"",MQ:"5",MR:"",MU:"25",MX:"1",FM:"",MD:"",MC:"5",MN:"5",ME:"5",MA:"14",MZ:"5",NA:"5",NR:"",NP:"5",NL:"5",NC:"5",NZ:"6",NI:"3",NE:"",NG:"13",KP:"",NO:"6",OM:"5",PK:"30",PS:"5",WB:"5",PA:"5",PG:"5",PY:"5",PE:"6",PH:"8",PL:"2",PT:"5",PR:"",QA:"5",RO:"5",RU:"6",RW:"5",LC:"3",WS:"",SM:"5",ST:"",SA:"6",SN:"5",RS:"5",SC:"",SL:"",SG:"8",SK:"6",SI:"5",SB:"",SO:"5",ZA:"11",KR:"7",SS:"",ES:"2",LK:"8",KN:"5",VC:"1",SD:"",SR:"",SZ:"",SE:"3",CH:"4",SY:"",PF:"5",TW:"8",TJ:"",TZ:"5",TH:"11",TL:"",TG:"5",TO:"",TT:"4",TN:"8",TR:"5",TM:"",TC:"",TV:"",UG:"5",UA:"4",AE:"22",GB:"7",US:"2",UY:"5",VI:"",UZ:"5",VU:"",VE:"5",VN:"18",YE:"",ZM:"5",ZW:"5",lastupdated:"2018/03/25"};

// Holds the processing times for IEC
var iec = {stage1:"8"};

// VISITING, STUDYING, WORKING TEMPORARILY END

// ECONOMIC CLASS BEGIN
// Holds the processing times for Entrepreneur (Federal)
var entrepreneur_federal = {entrepreneur_federal:"", lastupdated:"2018/03/25"};

// Holds the processing times for Entrepreneur (Quebec)
var entrepreneur_quebec = {entrepreneur_quebec:"", lastupdated:"2018/03/25"};



// Holds the processing times for Investor (Federal)
var investor_federal = {investor_federal:"", lastupdated:"2018/03/25"};

// Holds the processing times for Investor (Quebec)
var investor_quebec = {investor_quebec:"44", lastupdated:"2018/03/25"};

// Holds the processing times for provicial nominees
var provincial_nominees = {provincial_nominees:"18", lastupdated:"2018/03/25"};

// Holds the processing times for Self-Employed (Federal)
var self_employed_federal = {self_employed_federal:"26", lastupdated:"2018/03/25"};
// Holds the processing times for Self-Employed (Quebec)
var self_employed_quebec = {self_employed_quebec:"", lastupdated:"2018/03/25"};
// The processing times for Skilled Workers (Federal) | I haven't applied yet is the same as express entry.

// Holds the processing times for Skilled Workers (Federal):
// *** Before February 27, 2008
// *** Between February 27, 2008 and June 25, 2010
// *** Between June 26, 2010 and December 31, 2014
var skilled_workers_pre_2015 = {skilled_workers_pre_feb:"", skilled_workers_betwen_2008_2010:"", skilled_workers_betwen_2010_2014:"38", lastupdated:"2018/03/25"};

// The processing times for Skilled Workers (Federal) | On or after January 1, 2015 is the same as express entry.

// Holds the processing times for Skilled Workers (Quebec)
var skilled_workers_quebec = {skilled_workers_quebec:"15", lastupdated:"2018/03/25"};

// Holds the processing times for CEC | I haven't applied and On or after Jan 1, 2015 processing time is the same as Express Entry.
var cec = {cecprejan:"42", lastupdated:"2018/03/25"};
// ECONOMIC CLASS END

// FAMILY SPONSORSHIP BEGIN
// Holds the processing times for Spouse or common-law partner
var spouse= {spouse:"14", lastupdated:"2018/03/25"};
var family_spousal_inside_commitment = {family_spousal_inside_commitment:"12", lastupdated:"2018/03/18"};

// Holds the processing times for Dependent child
var dependent_child = {dependent_child:"14", lastupdated:"2018/03/25"};

// Holds the processing times for Parent and grandparent
var parent_grandparent = {parent_grandparent:"75", lastupdated:"2018/03/25"};

// Holds the processing times for Adopted child or other relative
var adopted_child = {adopted_child:"22", lastupdated:"2018/03/25"};
// FAMILY SPONSORSHIP END

// REFUGEES BEGIN
// Holds the processing times for Government-assisted refugees
var refugees_gov = {AF:"30",AL:"",DZ:"",AD:"",AO:"30",AI:"",AG:"",AR:"",AM:"",AW:"",AU:"",AT:"30",AZ:"",BS:"",BH:"",BD:"30",BB:"",BY:"",BE:"30",BZ:"",BJ:"30",BM:"",BT:"",BO:"",BQ:"",BA:"",BW:"30",BR:"",IO:"",BN:"",BG:"30",BF:"30",MM:"",BI:"33",KH:"",CM:"30",CA:"",CV:"",KY:"",CF:"30",TD:"30",CL:"",CN:"",CO:"30",KM:"",CG:"30",CR:"30",CI:"30",HR:"",CU:"30",CY:"",CZ:"",CD:"30",DK:"30",DJ:"30",DM:"",DO:"",EC:"19",EG:"18",SV:"",GQ:"",ER:"30",EE:"",ET:"41",FJ:"",FI:"30",FR:"",GA:"30",GM:"",GE:"",DE:"30",GH:"30",GR:"30",GD:"",GT:"",GN:"30",GW:"",GY:"",HT:"",VA:"",HN:"",HK:"30",HU:"",IS:"",IN:"30",ID:"30",IR:"30",IQ:"6",IE:"",IL:"30",IT:"30",JM:"",JP:"",JO:"22",KZ:"",KE:"39",KI:"",XK:"",KW:"30",KG:"",LA:"",LV:"",LB:"23",LS:"",LR:"",LY:"30",LI:"",LT:"",LU:"",MO:"",MK:"",MG:"",MW:"30",MY:"30",MV:"",ML:"30",MT:"30",MH:"",MQ:"",MR:"",MU:"",MX:"30",FM:"",MD:"",MC:"",MN:"",ME:"",MA:"30",MZ:"30",NA:"30",NR:"",NP:"30",NL:"30",NC:"",NZ:"",NI:"",NE:"",NG:"30",KP:"",NO:"",OM:"30",PK:"30",PS:"",WB:"",PA:"",PG:"",PY:"",PE:"",PH:"30",PL:"",PT:"",PR:"",QA:"",RO:"",RU:"30",RW:"30",LC:"",WS:"",SM:"",ST:"",SA:"30",SN:"30",RS:"",SC:"",SL:"30",SG:"30",SK:"",SI:"",SB:"",SO:"30",ZA:"30",KR:"30",SS:"30",ES:"",LK:"30",KN:"",VC:"",SD:"27",SR:"",SZ:"30",SE:"30",CH:"",SY:"23",PF:"",TW:"",TJ:"30",TZ:"31",TH:"30",TL:"",TG:"30",TO:"",TT:"30",TN:"",TR:"24",TM:"",TC:"",TV:"",UG:"31",UA:"30",AE:"30",GB:"",US:"",UY:"",VI:"",UZ:"30",VU:"",VE:"",VN:"",YE:"30",ZM:"30",ZW:"30",lastupdated:"2018/03/25"};

// Holds the processing times for Privately sponsored refugees
var refugees_private = {AF:"28",AL:"28",DZ:"28",AD:"",AO:"28",AI:"",AG:"",AR:"",AM:"28",AW:"",AU:"",AT:"28",AZ:"28",BS:"",BH:"28",BD:"28",BB:"",BY:"28",BE:"",BZ:"",BJ:"28",BM:"",BT:"",BO:"",BQ:"",BA:"",BW:"28",BR:"28",IO:"",BN:"",BG:"",BF:"",MM:"",BI:"28",KH:"",CM:"28",CA:"",CV:"",KY:"",CF:"",TD:"",CL:"",CN:"28",CO:"28",KM:"",CG:"28",CR:"",CI:"",HR:"",CU:"28",CY:"28",CZ:"",CD:"28",DK:"",DJ:"88",DM:"",DO:"28",EC:"28",EG:"65",SV:"",GQ:"",ER:"28",EE:"",ET:"66",FJ:"",FI:"28",FR:"28",GA:"",GM:"28",GE:"",DE:"28",GH:"28",GR:"28",GD:"",GT:"28",GN:"28",GW:"28",GY:"",HT:"",VA:"",HN:"",HK:"28",HU:"",IS:"",IN:"81",ID:"28",IR:"28",IQ:"21",IE:"28",IL:"24",IT:"28",JM:"",JP:"",JO:"23",KZ:"",KE:"61",KI:"",XK:"",KW:"28",KG:"28",LA:"",LV:"",LB:"19",LS:"",LR:"28",LY:"28",LI:"",LT:"28",LU:"",MO:"",MK:"",MG:"",MW:"28",MY:"28",MV:"",ML:"",MT:"",MH:"",MQ:"",MR:"",MU:"",MX:"",FM:"",MD:"28",MC:"",MN:"",ME:"",MA:"28",MZ:"28",NA:"28",NR:"",NP:"28",NL:"28",NC:"",NZ:"",NI:"",NE:"",NG:"28",KP:"",NO:"28",OM:"28",PK:"65",PS:"",WB:"",PA:"",PG:"28",PY:"",PE:"",PH:"28",PL:"28",PT:"28",PR:"",QA:"28",RO:"",RU:"28",RW:"28",LC:"",WS:"",SM:"",ST:"",SA:"21",SN:"",RS:"28",SC:"",SL:"",SG:"",SK:"",SI:"",SB:"",SO:"28",ZA:"67",KR:"",SS:"",ES:"",LK:"28",KN:"",VC:"",SD:"65",SR:"",SZ:"",SE:"28",CH:"28",SY:"20",PF:"",TW:"",TJ:"31",TZ:"28",TH:"28",TL:"",TG:"28",TO:"",TT:"",TN:"28",TR:"22",TM:"",TC:"",TV:"",UG:"27",UA:"",AE:"20",GB:"",US:"28",UY:"",VI:"",UZ:"",VU:"",VE:"28",VN:"",YE:"28",ZM:"28",ZW:"28",lastupdated:"2018/03/25"};

// REFUGEES END




// CITIZENSHIP BEGIN
// Holds the processing times for Citizenship
var citizenship = {grant_noapply:"12", grant_before2015:"", grant_after2015:"12", cit_cert:"5", cit_resumption:"16", cit_renunciation:"6", cit_search:"10", lastupdated:"2018/03/25"};
// CITIZENSHIP END

// EXPRESS ENTRY (EE) BEGIN
// Holds the processing times for Express Entry
var ee = "6";
// EXPRESS ENTRY (EE) END

// FAMILY SPONSORSHIP BEGIN
// Holds the processing times for Family Sponsorship

//Spouses living inside Canada -COR not used yet


//Spouses living outside Canada
var spouse_out = {AF:"22",AL:"15",DZ:"11",AD:"14",AO:"14",AI:"",AG:"14",AR:"14",AM:"14",AW:"",AU:"11",AT:"14",AZ:"14",BS:"14",BH:"14",BD:"14",BB:"14",BY:"14",BE:"14",BZ:"14",BJ:"14",BM:"14",BT:"",BO:"14",BQ:"",BA:"14",BW:"14",BR:"12",IO:"14",BN:"14",BG:"14",BF:"14",MM:"14",BI:"14",KH:"15",CM:"13",CA:"12",CV:"14",KY:"14",CF:"14",TD:"14",CL:"14",CN:"12",CO:"15",KM:"14",CG:"14",CR:"14",CI:"13",HR:"14",CU:"13",CY:"14",CZ:"14",CD:"17",DK:"14",DJ:"14",DM:"14",DO:"17",EC:"14",EG:"13",SV:"17",GQ:"14",ER:"14",EE:"14",ET:"16",FJ:"14",FI:"14",FR:"12",GA:"14",GM:"14",GE:"14",DE:"12",GH:"17",GR:"14",GD:"14",GT:"17",GN:"16",GW:"14",GY:"12",HT:"16",VA:"",HN:"14",HK:"11",HU:"14",IS:"14",IN:"11",ID:"14",IR:"10",IQ:"29",IE:"14",IL:"11",IT:"14",JM:"9",JP:"9",JO:"25",KZ:"14",KE:"16",KI:"",XK:"16",KW:"15",KG:"14",LA:"14",LV:"14",LB:"24",LS:"",LR:"14",LY:"14",LI:"",LT:"14",LU:"14",MO:"14",MK:"",MG:"14",MW:"14",MY:"14",MV:"14",ML:"14",MT:"14",MH:"",MQ:"14",MR:"14",MU:"14",MX:"17",FM:"14",MD:"14",MC:"",MN:"14",ME:"14",MA:"12",MZ:"14",NA:"14",NR:"",NP:"12",NL:"10",NC:"",NZ:"11",NI:"14",NE:"14",NG:"17",KP:"",NO:"14",OM:"14",PK:"17",PS:"14",WB:"14",PA:"14",PG:"14",PY:"14",PE:"15",PH:"10",PL:"14",PT:"14",PR:"14",QA:"14",RO:"14",RU:"11",RW:"12",LC:"14",WS:"",SM:"",ST:"",SA:"17",SN:"13",RS:"14",SC:"14",SL:"14",SG:"9",SK:"14",SI:"14",SB:"",SO:"14",ZA:"14",KR:"10",SS:"14",ES:"13",LK:"18",KN:"14",VC:"14",SD:"15",SR:"14",SZ:"",SE:"17",CH:"14",SY:"15",PF:"",TW:"10",TJ:"14",TZ:"14",TH:"15",TL:"",TG:"14",TO:"",TT:"12",TN:"11",TR:"14",TM:"14",TC:"14",TV:"",UG:"13",UA:"9",AE:"16",GB:"10",US:"11",UY:"14",VI:"14",UZ:"14",VU:"",VE:"14",VN:"16",YE:"14",ZM:"14",ZW:"14",lastupdated:"2018/03/25"};

var spouse_commitment = {AF:"12",AL:"12",DZ:"12",AD:"12",AO:"12",AI:"12",AG:"12",AR:"12",AM:"12",AW:"12",AU:"12",AT:"12",AZ:"12",BS:"12",BH:"12",BD:"12",BB:"12",BY:"12",BE:"12",BZ:"12",BJ:"12",BM:"12",BT:"12",BO:"12",BQ:"12",BA:"12",BW:"12",BR:"12",IO:"12",BN:"12",BG:"12",BF:"12",MM:"12",BI:"12",KH:"12",CM:"12",CA:"12",CV:"12",KY:"12",CF:"12",TD:"12",CL:"12",CN:"12",CO:"12",KM:"12",CG:"12",CR:"12",CI:"12",HR:"12",CU:"12",CY:"12",CZ:"12",CD:"12",DK:"12",DJ:"12",DM:"12",DO:"12",EC:"12",EG:"12",SV:"12",GQ:"12",ER:"12",EE:"12",ET:"12",FJ:"12",FI:"12",FR:"12",GA:"12",GM:"12",GE:"12",DE:"12",GH:"12",GR:"12",GD:"12",GT:"12",GN:"12",GW:"12",GY:"12",HT:"12",VA:"12",HN:"12",HK:"12",HU:"12",IS:"12",IN:"12",ID:"12",IR:"12",IQ:"12",IE:"12",IL:"12",IT:"12",JM:"12",JP:"12",JO:"12",KZ:"12",KE:"12",KI:"12",XK:"12",KW:"12",KG:"12",LA:"12",LV:"12",LB:"12",LS:"12",LR:"12",LY:"12",LI:"12",LT:"12",LU:"12",MO:"12",MK:"12",MG:"12",MW:"12",MY:"12",MV:"12",ML:"12",MT:"12",MH:"12",MQ:"12",MR:"12",MU:"12",MX:"12",FM:"12",MD:"12",MC:"12",MN:"12",ME:"12",MA:"12",MZ:"12",NA:"12",NR:"12",NP:"12",NL:"12",NC:"12",NZ:"12",NI:"12",NE:"12",NG:"12",KP:"12",NO:"12",OM:"12",PK:"12",PS:"12",WB:"12",PA:"12",PG:"12",PY:"12",PE:"12",PH:"12",PL:"12",PT:"12",PR:"12",QA:"12",RO:"12",RU:"12",RW:"12",LC:"12",WS:"12",SM:"12",ST:"12",SA:"12",SN:"12",RS:"12",SC:"12",SL:"12",SG:"12",SK:"12",SI:"12",SB:"12",SO:"12",ZA:"12",KR:"12",SS:"12",ES:"12",LK:"12",KN:"12",VC:"12",SD:"12",SR:"12",SZ:"12",SE:"12",CH:"12",SY:"12",PF:"12",TW:"12",TJ:"12",TZ:"12",TH:"12",TL:"12",TG:"12",TO:"12",TT:"12",TN:"12",TR:"12",TM:"12",TC:"12",TV:"12",UG:"12",UA:"12",AE:"12",GB:"12",US:"12",UY:"12",VI:"12",UZ:"12",VU:"12",VE:"12",VN:"12",YE:"12",ZM:"12",ZW:"12",lastupdated:"2018/03/25"};

//Dependent children
var child_dependent = {AF:"14",AL:"14",DZ:"14",AD:"",AO:"14",AI:"",AG:"",AR:"14",AM:"",AW:"",AU:"14",AT:"",AZ:"14",BS:"14",BH:"14",BD:"14",BB:"14",BY:"14",BE:"14",BZ:"14",BJ:"14",BM:"",BT:"",BO:"14",BQ:"",BA:"14",BW:"14",BR:"14",IO:"",BN:"",BG:"14",BF:"14",MM:"14",BI:"14",KH:"14",CM:"14",CA:"10",CV:"",KY:"14",CF:"14",TD:"14",CL:"14",CN:"11",CO:"14",KM:"",CG:"14",CR:"14",CI:"15",HR:"",CU:"12",CY:"",CZ:"",CD:"14",DK:"14",DJ:"",DM:"14",DO:"14",EC:"14",EG:"14",SV:"14",GQ:"",ER:"14",EE:"",ET:"20",FJ:"14",FI:"14",FR:"14",GA:"14",GM:"14",GE:"14",DE:"14",GH:"14",GR:"14",GD:"14",GT:"14",GN:"14",GW:"",GY:"14",HT:"17",VA:"",HN:"14",HK:"14",HU:"14",IS:"",IN:"9",ID:"14",IR:"14",IQ:"14",IE:"14",IL:"",IT:"14",JM:"12",JP:"14",JO:"14",KZ:"",KE:"14",KI:"",XK:"14",KW:"14",KG:"14",LA:"",LV:"14",LB:"14",LS:"",LR:"14",LY:"14",LI:"",LT:"",LU:"",MO:"",MK:"",MG:"14",MW:"",MY:"14",MV:"",ML:"14",MT:"",MH:"",MQ:"",MR:"",MU:"14",MX:"11",FM:"",MD:"14",MC:"",MN:"",ME:"",MA:"14",MZ:"",NA:"14",NR:"",NP:"14",NL:"14",NC:"",NZ:"14",NI:"14",NE:"",NG:"16",KP:"",NO:"",OM:"14",PK:"19",PS:"14",WB:"14",PA:"",PG:"",PY:"14",PE:"14",PH:"11",PL:"14",PT:"",PR:"",QA:"14",RO:"14",RU:"14",RW:"14",LC:"14",WS:"",SM:"",ST:"",SA:"14",SN:"14",RS:"14",SC:"",SL:"14",SG:"",SK:"",SI:"",SB:"",SO:"14",ZA:"14",KR:"14",SS:"14",ES:"14",LK:"14",KN:"",VC:"14",SD:"14",SR:"",SZ:"14",SE:"14",CH:"14",SY:"14",PF:"",TW:"14",TJ:"14",TZ:"14",TH:"14",TL:"",TG:"14",TO:"",TT:"14",TN:"14",TR:"14",TM:"",TC:"",TV:"",UG:"14",UA:"14",AE:"14",GB:"14",US:"14",UY:"",VI:"",UZ:"14",VU:"",VE:"14",VN:"14",YE:"14",ZM:"14",ZW:"14",lastupdated:"2018/03/25"};

//Adopted children
var child_adopted = {AF:"22",AL:"22",DZ:"22",AD:"",AO:"22",AI:"",AG:"22",AR:"",AM:"22",AW:"",AU:"22",AT:"22",AZ:"",BS:"22",BH:"22",BD:"22",BB:"22",BY:"22",BE:"",BZ:"",BJ:"22",BM:"22",BT:"",BO:"22",BQ:"",BA:"22",BW:"",BR:"",IO:"",BN:"",BG:"",BF:"22",MM:"",BI:"22",KH:"22",CM:"22",CA:"23",CV:"",KY:"",CF:"",TD:"22",CL:"",CN:"22",CO:"22",KM:"",CG:"22",CR:"",CI:"22",HR:"",CU:"22",CY:"",CZ:"",CD:"20",DK:"",DJ:"22",DM:"",DO:"22",EC:"22",EG:"22",SV:"22",GQ:"",ER:"",EE:"22",ET:"22",FJ:"22",FI:"22",FR:"22",GA:"22",GM:"22",GE:"",DE:"22",GH:"22",GR:"22",GD:"22",GT:"22",GN:"22",GW:"",GY:"22",HT:"38",VA:"",HN:"",HK:"22",HU:"22",IS:"",IN:"26",ID:"22",IR:"22",IQ:"22",IE:"22",IL:"22",IT:"22",JM:"22",JP:"22",JO:"22",KZ:"22",KE:"22",KI:"",XK:"",KW:"",KG:"22",LA:"22",LV:"",LB:"22",LS:"",LR:"",LY:"22",LI:"",LT:"",LU:"",MO:"22",MK:"",MG:"22",MW:"22",MY:"22",MV:"22",ML:"22",MT:"",MH:"",MQ:"",MR:"22",MU:"22",MX:"22",FM:"",MD:"",MC:"",MN:"22",ME:"",MA:"22",MZ:"",NA:"22",NR:"",NP:"",NL:"22",NC:"",NZ:"",NI:"",NE:"22",NG:"14",KP:"",NO:"",OM:"",PK:"22",PS:"22",WB:"22",PA:"",PG:"",PY:"",PE:"22",PH:"18",PL:"22",PT:"22",PR:"",QA:"22",RO:"22",RU:"22",RW:"22",LC:"22",WS:"",SM:"",ST:"",SA:"22",SN:"22",RS:"22",SC:"",SL:"22",SG:"22",SK:"",SI:"",SB:"",SO:"22",ZA:"22",KR:"22",SS:"22",ES:"22",LK:"22",KN:"",VC:"",SD:"22",SR:"",SZ:"22",SE:"",CH:"",SY:"",PF:"",TW:"22",TJ:"",TZ:"22",TH:"22",TL:"",TG:"22",TO:"",TT:"22",TN:"",TR:"22",TM:"",TC:"",TV:"",UG:"22",UA:"22",AE:"22",GB:"22",US:"22",UY:"",VI:"",UZ:"",VU:"",VE:"22",VN:"22",YE:"22",ZM:"22",ZW:"22",lastupdated:"2018/03/25"};

// FAMILY SPONSORSHIP END

//eTA just for the last updated
var eta = {lastupdated:"2018/03/25"};





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
var txtnewprcard = "New PR card";
var txtapplied = "Applied: ";
var pgppttime = "<span class=\"glyphicon glyphicon-time\"></span> Working on applications received in January 2014";
var grant_before2015 = "by March 31, 2016 or before";
var careigiver_medical_title = "Caring for people with high medical needs";
var commitment_before2016 = "<p>Submitted before December 7, 2016</p>";
var commitment_after2016 = "<p>Submitted on or after December 7, 2016</p>";
var live_in_caregiver_oct_1 = "We will process your application by December 31, 2018.";

// Processing Times message
var pt_message1 = "<p>Processing times tell you how long it took Immigration, Refugees and Citizenship Canada (IRCC) to process applications in the past after receiving a <a href='/english/helpcentre/answer.asp?q=72&amp;t=3'>complete application package</a>. Processing times can vary, depending on how many applications IRCC receives. Your application may be delayed if it&apos;s not complete.</p>";
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
var pt_message24 = "<p><a href='/english/helpcentre/answer.asp?q=1169&amp;t=5'>Non-routine applications</a> take longer to process than routine applications.</p>";
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
//var pt_message40 = "<p><a href='/english/helpcentre/answer.asp?q=1169&amp;t=5'>Non-routine applications</a> may take longer</p>";
var pt_message41 = "<p>Does not include temporary residents or refugees eligible to apply for their first work permit from within Canada; for these applications select &ldquo;Work permit extensions (New employer)&rdquo;</p>";
var pt_message42 = '<p>Excludes: <strong>Post-grad</strong> and <strong>Co-op</strong> work permits, and <strong>refugees</strong> applying for their first work permit;  instead, select &ldquo;Work permit extensions (New employer)&rdquo;</p>';
var pt_message43 = '<p>If your application is routine, you may <a href="/english/contacts/web-form.asp">contact us</a>. If your application is <a href="/english/helpcentre/answer.asp?q=1169&t=5">non-routine</a> and you haven’t heard from us in six months, you may <a href="/english/contacts/web-form.asp">contact us</a>.</p>';
var pt_message44 = '<p>If you have not received a decision on your application, it is likely because your application is non-routine. <a href="/english/helpcentre/answer.asp?q=1169&t=5">Non-routine applications take longer to process</a>.</p>';
var pt_message45 = '<p>If your application is <a href="/english/helpcentre/answer.asp?q=1169&t=5">non-routine</a> and you haven&rsquo;t heard from us in six months, you may <a href="/english/contacts/web-form.asp">contact us</a>. If you believe your application is not described under <a href="/english/helpcentre/answer.asp?q=1169&t=5">non-routine</a>, you may <a href="/english/contacts/web-form.asp">contact&nbsp;us</a>.</p>';
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
var pt_message56 = "<p>Find out more about <a href=\"https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-outside-canada/private-sponsorship-program/how-we-process-applications.html\">how we process privately sponsored refugee applications</a>.</p>";
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
var txtnewprcard = "New PR card";
var txtapplied = "Applied: ";
var pgppttime = "<span class=\"glyphicon glyphicon-time\"></span> Working on applications received in January 2014";
var grant_before2015 = "by March 31, 2016 or before";
var careigiver_medical_title = "Caring for people with high medical needs";
var commitment_before2016 = "<p>Submitted before December 7, 2016</p>";
var commitment_after2016 = "<p>Submitted on or after December 7, 2016</p>";
var live_in_caregiver_oct_1 = "We will process your application by December 31, 2018.";

// Processing Times message
var pt_message1 = "<p>Processing times tell you how long it took Immigration, Refugees and Citizenship Canada (IRCC) to process applications in the past after receiving a <a href='/english/helpcentre/answer.asp?q=72&amp;t=3'>complete application package</a>. Processing times can vary, depending on how many applications IRCC receives. Your application may be delayed if it’s not complete.</p>";
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
var pt_message24 = "<p><a href='/english/helpcentre/answer.asp?q=1169&amp;t=5'>Non-routine applications</a> take longer to process than routine applications.</p>";
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
//var pt_message40 = "<p><a href='/english/helpcentre/answer.asp?q=1169&amp;t=5'>Non-routine applications</a> may take longer</p>";
var pt_message41 = "<p>Does not include temporary residents or refugees eligible to apply for their first work permit from within Canada; for these applications select &ldquo;Work permit extensions (New employer)&rdquo;</p>";
var pt_message42 = '<p>Excludes: <strong>Post-grad</strong> and <strong>Co-op</strong> work permits, and <strong>refugees</strong> applying for their first work permit;  instead, select “Work permit extensions (New employer)”</p>';
var pt_message43 = '<p>If your application is routine, you may <a href="/english/contacts/web-form.asp">contact us</a>. If your application is <a href="/english/helpcentre/answer.asp?q=1169&t=5">non-routine</a> and you haven’t heard from us in six months, you may <a href="/english/contacts/web-form.asp">contact us</a>.</p>';
var pt_message44 = '<p>If you have not received a decision on your application, it is likely because your application is non-routine. <a href="/english/helpcentre/answer.asp?q=1169&t=5">Non-routine applications take longer to process</a>.</p>';
var pt_message45 = '<p>If your application is <a href="/english/helpcentre/answer.asp?q=1169&t=5">non-routine</a> and you haven&rsquo;t heard from us in six months, you may <a href="/english/contacts/web-form.asp">contact us</a>. If you believe your application is not described under <a href="/english/helpcentre/answer.asp?q=1169&t=5">non-routine</a>, you may <a href="/english/contacts/web-form.asp">contact&nbsp;us</a>.</p>';
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
var txtnewprcard = "Nouvelle carte RP";
var txtapplied = "Appliquer : "
var pgppttime = "<span class=\"glyphicon glyphicon-time\"></span> Nous travaillons actuellement sur les demandes reçues en janvier 2014";
var grant_before2015 = "par le 31 mars 2016 ou avant";
var careigiver_medical_title = "Soins aux personnes ayant des besoins médicaux élevés";
var commitment_before2016 = "<p>Présentées avant le 7 décembre, 2016</p>";
var commitment_after2016 = "<p>Présentées le 7 décembre, 2016 ou après cette date</p>";
var live_in_caregiver_oct_1 = "Nous aurons traité votre demande d’ici le 31 décembre 2018.";

var pt_message1 = "<p>Les délais de traitement vous indiquent le temps qu’il a fallu à Immigration, Réfugiés et Citoyenneté Canada (IRCC) pour traiter des demandes dans le passé, après avoir reçu une <a href='/francais/centre-aide/reponse.asp?q=72&amp;t=3'>trousse de demande complète</a>. Les délais de traitement peuvent varier selon le nombre de demandes reçues par IRCC. Le traitement de votre demande peut prendre plus de temps si elle n’est pas complète.</p>";
var pt_message2 = "<p>Si plus de six semaines se sont écoulées depuis le délai indiqué, soit la date de soumission de votre demande, et que vous avez besoin de plus de renseignements concernant l’état de votre demande, utilisez le <a href='https://secure.cic.gc.ca/enquiries-renseignements/canada-case-cas-fra.aspx'>Formulaire de demande de renseignements propre à un cas</a>.</p>";
var pt_message3 = "<p>Si cela fait plus longtemps que le délai indiqué ci-dessus que vous avez soumis votre demande, et que vous ne pouvez pas <a href='/francais/ma_demande/etat.asp'>vérifier l’état de votre demande en ligne</a>, utilisez ce <a href='/francais/contacts/formulaire-web.asp'>formulaire Web</a>.</p>";
var pt_message4 = "<p>Si cela fait plus longtemps que le délai indiqué ci-dessus que vous avez soumis votre demande, et que vous ne pouvez pas <a href='/francais/ma_demande/etat.asp'>vérifier l’état de votre demande en ligne</a>, utilisez ce <a href='/francais/contacts/formulaire-web.asp'>formulaire Web</a>.</p>";
//var pt_message4 = "<p>Si cela fait plus longtemps que le délai indiqué ci-dessus que vous avez soumis votre demande, et que vous ne pouvez pas <a href='/francais/ma_demande/etat.asp'>vérifier l’état de votre demande en ligne</a>, utilisez ce <a href='/francais/contacts/formulaire-web.asp'>formulaire Web</a>.</p>";
var pt_message5 = "<p>Ce délai est fondé sur une norme de service convenue entre EIC et les pays partenaires. Après la présentation de votre demande de permis de travail et de tous les documents finaux, votre demande sera traitée selon le principe du premier arrivé, premier servi.</p><p> Il peut y avoir des retards dans le traitement de votre demande ou celle-ci peut être refusée si&nbsp;:</p><ul><li>votre demande n'est pas dûment remplie;</li><li>vous ne payez pas les frais exigés;</li><li>vous devez fournir des documents supplémentaires ou subir un examen médical, comme l'aura déterminé l'agent qui aura examiné votre demande.</li></ul>";
var pt_message6 = "<p>Ces délais de traitement s’appliquent seulement au volet <strong>fédéral</strong> du traitement (au bureau des visas). Ils ne comprennent pas le temps nécessaire à la province de Québec pour traiter le <em>Certificat de sélection du Québec (CSQ)</em>.</p>";
var pt_message7 = "<p>Ces délais de traitement s’appliquent seulement au volet <strong>fédéral</strong> du traitement (au bureau des visas), après la réception de la demande complète. Ils ne comprennent pas le temps nécessaire à la province ou au territoire pour traiter le certificat de désignation.</p>";
var pt_message8 = "<p>Les répondants des réfugiés parrainés par le secteur privé comprennent :</p><ul><li>les groupes de cinq;</li><li>les répondants communautaires;</li><li>les signataires d’entente de parrainage et leurs groupes constitutifs.</li></ul>";
var pt_message9 = "<p>Vous pouvez <a href='/francais/information/demandes/copieconf.asp'>présenter une demande de vérification du statut</a> pour les documents d’immigration suivants :</p><ul><li>fiche relative au droit d’établissement (IMM 1000);</li><li>visa d’immigrant et fiche relative au droit d’établissement (IMM 1000) / Confirmation de résidence permanente (IMM 5292 ou IMM 5688);</li><li>Attestation de départ (IMM 0056);</li><li>mesure d’expulsion (IMM 1213);</li><li>mesure d’interdiction de séjour (IMM 5238);</li><li>permis de séjour temporaire (1442);</li><li>autorisation de revenir au Canada (IMM 1203);</li><li>fiche du visiteur (IMM 1097 ou IMM 1442);</li><li>permis de travail (IMM 1102 ou IMM 1442);</li><li>permis d’études (IMM 1208 ou IMM 1442);</li><li>mesure d’exclusion (IMM 1214);</li><li>document de personne protégée.</li></ul>";
var pt_message10 = "<p>Vous pouvez présenter une demande de <a href='/francais/information/demandes/copieconf.asp'>remplacement d’un document de résident temporaire actuel et valide</a> si vous l’avez perdu, ou s’il a été volé ou détruit. Nous pouvons délivrer un document de remplacement pour les documents suivants :</p><ul><li>fiche du visiteur (IMM 1442);</li><li>permis de travail (IMM 1442);</li><li>permis d’études (IMM 1442);</li><li>permis de séjour temporaire (IMM 1442).</li></ul>";
var pt_message11 = "<p>Vous pouvez présenter une demande de <a href='/francais/information/demandes/modification.asp'>modification de documents sur les antécédents</a> si les agents d’immigration ont commis des erreurs dans la saisie de l’information fournie dans votre demande d’immigration au Canada :</p><ul><li>fiche relative au droit d’établissement (IMM 1000);</li><li>confirmation de résidence permanente (IMM 5292 ou IMM 5688).</li></ul>";
var pt_message12 = "<p>Vous pouvez présenter une demande pour <a href='/francais/information/demandes/modification.asp'>corriger une erreur commise par un agent d'immigration dans la saisie de certains de vos renseignements personnels</a>, si les documents de résident temporaire suivants sont encore valides et n’ont pas expirés :</p><ul><li>fiche du visiteur (IMM 1442);</li><li>permis de travail (IMM 1442);</li><li>permis d’études (IMM 1442);</li><li>permis pour entrer au Canada ou y demeurer (IMM 1263);</li><li>permis de séjour temporaire (IMM 1442).</li></ul>";
var pt_message13 = "<p>Si vous résidez à l’extérieur du Canada et des États-Unis, et que vous présentez une demande à une ambassade, à un haut commissariat ou à un consulat du Canada, veuillez ajouter de <strong>3 à 4 mois supplémentaires</strong> aux délais de traitement.</p><p>Si vous présentez une demande au nom d’un enfant mineur qui réside à l’extérieur du Canada et des États-Unis, et que la demande est présentée directement au Centre de traitement des demandes de Sydney, en Nouvelle-Écosse, veuillez ajouter de <strong>6 à 8 mois supplémentaires</strong> aux délais de traitement.</p><p><strong>Si cela fait plus longtemps que le délai indiqué ci-dessus que vous avez soumis votre demande, que vous avez besoin de plus de renseignements, et que vous résidez : </strong></p><ul><li><strong>au Canada</strong>, communiquez avec le <a href='/francais/contacts/index.asp'>Télécentre</a>. Les agents du Télécentre ne peuvent pas accélérer le traitement de votre demande ou prendre une décision concernant votre cas;</li><li><strong>aux États-Unis</strong>, vous pouvez envoyer par la poste une lettre au <a href='/francais/information/bureaux/canada/sydney.asp'>CTD-Sydney</a> pour demander une mise à jour. Vous pouvez également : <ul><li>consulter l’accusé de réception que vous avez reçu de notre part pour savoir comment obtenir de plus amples renseignements, si vous avez présenté votre demande le 2 septembre, 2013 ou à une date ultérieure;</li><li>communiquer avec <a href='http://www.international.gc.ca/cip-pic/embassies-ambassades.aspx?lang=fra'>l’ambassade ou le consulat du Canada</a> où vous avez présenté votre demande, si vous l’avez présentée avant le 2 septembre, 2013;</li></ul></li><li><strong>à l’extérieur du Canada et des États-Unis</strong>, utilisez le <a href='/francais/contacts/formulaire-web.asp'>formulaire de demande de renseignements propre à un cas</a>.</li></ul>";
var pt_message14 = "<p>Les délais de traitement indiqués ne comprennent pas les <strong>3 ou 4 mois</strong> nécessaires aux missions à l’extérieur du Canada pour préparer votre demande et l’envoyer aux fins de traitement au Canada.</p><p><strong>Si cela fait plus longtemps que le délai indiqué ci-dessus que vous avez soumis votre demande, que vous avez besoin de plus de renseignements, et que vous résidez : </strong></p><ul><li><strong>au Canada</strong>, communiquez avec le <a href='/francais/contacts/index.asp'>Télécentre</a>. Les agents du Télécentre ne peuvent pas accélérer le traitement de votre demande ou prendre une décision concernant votre cas;</li><li><strong>aux États-Unis</strong>, vous pouvez envoyer par la poste une lettre au <a href='/francais/information/bureaux/canada/sydney.asp'>CTD-Sydney</a> pour demander une mise à jour. Vous pouvez également : <ul><li>consulter l’accusé de réception que vous avez reçu de notre part pour savoir comment obtenir de plus amples renseignements, si vous avez présenté votre demande le 2 septembre, 2013 ou à une date ultérieure;</li><li>communiquer avec <a href='http://www.international.gc.ca/cip-pic/embassies-ambassades.aspx?lang=fra'>l’ambassade ou le consulat du Canada</a> où vous avez présenté votre demande, si vous l’avez présentée avant le 2 septembre, 2013;</li></ul></li><li><strong>à l’extérieur du Canada et des États-Unis</strong>, utilisez le <a href='/francais/contacts/formulaire-web.asp'>formulaire de demande de renseignements propre à un cas</a>.</li></ul>";
var pt_message15 = "<p>Cela comprend les catégories Vacances-travail, Jeunes professionnels et Stage coop international.</p>";
var pt_message16 = "<p>Ils ne comprennent pas les délais d’expédition des documents.</p><p>Seules les personnes titulaires d’un permis d’études ou de travail valide peuvent présenter une demande pour obtenir un nouveau visa de résident temporaire à partir du Canada.</p>";
var pt_message17 = "<p>Vérifiez l’état de votre demande dans <a href='/francais/services-e/moncic.asp'>votre compte</a></p>";
var pt_message18 = "<p>Vérifiez <a href='https://services3.cic.gc.ca/ecas/security.do?lang=fr'>l’état de votre demande en ligne</a></p>";
var pt_message19 = "<p>Il se peut que des <a href='/francais/ministere/media/avis/avis-retour.asp'>modifications apportées à la loi</a> touchent votre demande</p>";
var pt_message20 = "<p>Ils comprennent l’évaluation du répondant : " + family_sponsorship["spouse_assessment"] + " jours</p>";
var pt_message21 = "<p>Ils comprennent l’évaluation du répondant : " + family_sponsorship["parent_grandparent_assessment"] + " mois</p>";
var pt_message22 = "<p>Ils comprennent l’évaluation du répondant.</p>";
var pt_message23 = "";
var pt_message24 = "<p>Il faut plus de temps pour traiter les <a href='/francais/centre-aide/reponse.asp?q=1169&amp;t=5'>demandes inhabituelles</a>.</p>";
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
//var pt_message40 = "<p>Le traitement des <a href='/francais/centre-aide/reponse.asp?q=1169&amp;t=5'>demandes qui posent des difficultés</a> peut prendre plus de temps.</p>";
var pt_message41 = "<p>Ne comprend pas les résidents temporaires ni les réfugiés admissibles à demander leur premier permis de travail depuis le Canada; dans le cadre de ces demandes, il faut sélectionner «&nbsp;Prorogation d&rsquo;un permis de travail (nouvel employeur)&nbsp;».</p>";
var pt_message42 = '<p>Exclus : les permis de travail <strong>coop</strong> et <strong>post diplôme</strong>, et les <strong>réfugiés</strong> qui demandent leur premier permis de travail; sélectionnez plutôt «&nbsp;Prorogation d’un permis de travail (nouvel employeur)&nbsp;».</p>';
var pt_message43 = '<p>S’il s’agit d’une demande courante, vous pouvez <a href="/francais/contacts/formulaire-web.asp">communiquer avec nous</a>. Si votre <a href="/francais/centre-aide/reponse.asp?q=1169&t=5">demande est complexe</a> et que vous n’avez pas eu de nos nouvelles dans les six derniers mois, vous pouvez <a href="/francais/contacts/formulaire-web.asp">communiquer avec nous</a>.</p>';
var pt_message44 = '<p>Si vous n’avez pas reçu une décision au sujet de votre demande, il est probable qu&rsquo;elle soit complexe. <a href="/francais/centre-aide/reponse.asp?q=1169&t=5">Les demandes complexes prennent plus de temps à traiter</a>.</p>';
var pt_message45 = '<p>Si votre <a href="/francais/centre-aide/reponse.asp?q=1169&t=5">demande est complexe</a> et que vous n&rsquo;avez pas eu de nos nouvelles dans les six derniers mois, vous pouvez <a href="/francais/contacts/formulaire-web.asp">communiquer avec nous</a>. Si vous pensez que votre demande n&rsquo;est pas <a href="/francais/centre-aide/reponse.asp?q=1169&t=5">complexe</a>, vous pouvez <a href="/francais/contacts/formulaire-web.asp">communiquer avec nous</a>.</p>';
var pt_message46 = '<div class="alert alert-info"><p class="mrgn-lft-md"><strong>Changements apportés au Programme de parrainage des époux ou conjoints de fait&nbsp;: le traitement accéléré et la <a href="/francais/information/demandes/conjoint.asp">nouvelle trousse de demande</a> sont maintenant disponibles.</strong></p><p class="mrgn-lft-md"><a href="/francais/ministere/media/avis/2016-12-15.asp">Découvrez les changements importants</a> que nous avons apportés afin de traiter votre demande de parrainage dans un délai de douze&nbsp;mois.</p></div>';
var pt_message47 = '<p>Ne comprend pas le temps de transit entre le CRDV et le bureau d’IRCC.</p>';
var pt_message48 = '<p><em>Si vous avez présenté une demande avant janvier 2014, assurez-vous d’avoir répondu à toutes les communications d’IRCC.</em></p>';
var pt_message49 = "<p>Inclus l’évaluation initiale de la recevabilité (approbation de principe).</p>";
var pt_message50 = "<p><strong><a href=\"/francais/centre-aide/reponse.asp?qnum=354&top=14\">Découvrez les changements</a> que nous apportons afin de traiter les demandes dans un délai de 12 mois.</strong></p>";
var pt_message51 = "<p><strong>Nous nous efforçons de <a href=\"/francais/centre-aide/reponse.asp?qnum=354&top=14\">terminer le traitement des demandes</a> reçues avant le 7 décembre 2016 au plus tard à la fin de décembre 2017.</strong></p>";
var pt_message52 = "<p>Une fois que votre visa aura été approuvé, il vous faudra peut-être un peu plus de temps pour obtenir les documents nécessaires à votre départ.</p>";
var pt_message53 = "<p>Vérifiez <a href=\"https://services3.cic.gc.ca/ecas/security.do?lang=fr\">l’état de votre demande en ligne</a></p><p>Ce délai de traitement concerne les demandes de statut de résident permanent présentées par des personnes protégées et des réfugiés au sens de la Convention. </p>";
var pt_message54 = "<p>Nous prévoyons de traiter dans les 12 mois les demandes que nous avons reçues <a href=\"https://www.canada.ca/fr/immigration-refugies-citoyennete/nouvelles/2017/12/la_reunificationdesfamillesdemeureuneprioritepourlegouvernementf.html\">depuis le 1<sup>er</sup> octobre 2017</a>. </p>"
var pt_message55 = "<p>Nous prévoyons de traiter d’ici <a href=\"https://www.canada.ca/fr/immigration-refugies-citoyennete/nouvelles/2017/12/la_reunificationdesfamillesdemeureuneprioritepourlegouvernementf.html\">le 31 décembre 2018 les demandes que nous avons reçues avant le 1<sup>er</sup> octobre 2017</a>. Les délais seront plus longs si votre demande est <a href=\"/francais/centre-aide/reponse.asp?qnum=1379&top=28\">complexe</a>.";
var pt_message56 = "<p>Apprenez-en plus sur <a href=\"https://www.canada.ca/fr/immigration-refugies-citoyennete/services/refugies/aide-exterieur-canada/programme-parrainage-prive/comment-nous-traitons-demandes.html\">la façon dont nous traitons les demandes de parrainage privé de réfugiés</a>.";
};