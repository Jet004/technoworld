// Requirements:
    // Aus pport number format alpha !O,S,Q,I + 7 digits [0-9]
    // visa status codes: In effect, Temporarily ceased
    // visa grant numbers are 13 digits long
    // visa types: 

const bcrypt = require('bcrypt')

const jobseekers = [
    {
        email: 'v.b@gmail.com',
        firstName: 'Valentina',
        lastName: 'Bush',
        password: bcrypt.hashSync('kdsvi', 6),
        phone: "0475909888",
        dateJoined: Date.now()/1000,
        skills: [
            {
                // requires email
                skillID: '1',
                skillLevel: "5"
            },
            {
                // requires email
                skillID: '2',
                skillLevel: "4"
            },
            {
                // requires email
                skillID: '12',
                skillLevel: "2"
            },
        ],
        employmentHistory: [
            {
                // requires email
                startDate: new Date("2022 1 12")/1000,
                role: "3",
                details: "Glitch Web Dev"
            },
        ],
        qualifications: [
            {
                // requires email
                qualificationID: "23",
                gradYear: 2021
            },
        ],
        visa: {
            // email
            passport: "K8463720",
            visaNumber: null,
            visaType: null,
            visaStatus: null,
            workingRights: "citizen"
        }
    },{
        email: 'k.bon@gmail.com',
        firstName: 'Kaydon',
        lastName: 'Bonner',
        password: bcrypt.hashSync('sfvewr334', 6),
        phone: "0453786762",
        dateJoined: new Date("2020 4 22")/1000,
        skills: [
            {
                // requires email
                skillID: '1',
                skillLevel: "7"
            },
            {
                // requires email
                skillID: '2',
                skillLevel: "9"
            },
            {
                // requires email
                skillID: '9',
                skillLevel: "9"
            },
            {
                // requires email
                skillID: '10',
                skillLevel: "9"
            },
            {
                // requires email
                skillID: '11',
                skillLevel: "7"
            },
        ],
        employmentHistory: [
            {
                // requires email
                startDate: new Date("2018 3 1")/1000,
                endDate: new Date("2020 3 19")/1000,
                role: "5",
                details: "Jinx Data Solutions"
            },
            {
                // requires email
                startDate: new Date("2020 3 28")/1000,
                role: "5",
                details: "Data Be Good"
            },
        ],
        qualifications: [
            {
                // requires email
                qualificationID: "4",
                gradYear: 2017
            },
        ],
        visa: {
            // email
            passport: null,
            visaNumber: null,
            visaType: null,
            visaStatus: null,
            workingRights: "citizen"
        }
    },{
        email: 'm.glimour@gmail.com',
        firstName: 'Marsha',
        lastName: 'Glimour',
        password: bcrypt.hashSync('fdvef333', 6),
        phone: "0478987676",
        dateJoined: new Date("2022")/1000,
        skills: [
            {
                // requires email
                skillID: '3',
                skillLevel: "6"
            },
            {
                // requires email
                skillID: '4',
                skillLevel: "7"
            },
            {
                // requires email
                skillID: '21',
                skillLevel: "6"
            },
            {
                // requires email
                skillID: '22',
                skillLevel: "7"
            },
        ],
        employmentHistory: [],
        qualifications: [
            {
                // requires email
                qualificationID: "2",
                gradYear: 2019
            },
            {
                // requires email
                qualificationID: "17",
                gradYear: 2021
            }
        ],
        visa: {
            // email
            passport: null,
            visaNumber: null,
            visaType: null,
            visaStatus: null,
            workingRights: "citizen"
        }
    },{
        email: 'ryanFlamingo@gmail.com',
        firstName: 'Ryan',
        lastName: 'Fleming',
        password: bcrypt.hashSync('wdvefv233243', 6),
        phone: "0374261723",
        dateJoined: Date.now()/1000,
        skills: [
            {
                // requires email
                skillID: '8',
                skillLevel: "10"
            },
            {
                // requires email
                skillID: '1',
                skillLevel: "6"
            },
            {
                // requires email
                skillID: '27',
                skillLevel: "9"
            },
        ],
        employmentHistory: [
            {
                // requires email
                startDate: new Date("2010 10 3")/1000,
                endDate: new Date("2020 3 18")/1000,
                role: "4",
                details: "Graphiicz"
            },
            {
                // requires email
                startDate: new Date("2020 4 01")/1000,
                role: "4",
                details: "Good Dezignz"
            },
        ],
        qualifications: [
            {
                // requires email
                qualificationID: "25",
                gradYear: 2009
            },
        ],
        visa: {
            // email
            passport: "P8475032",
            visaNumber: "0098342228563",
            visaType: "Employer Nomination Scheme (subclass 186)",
            visaStatus: "Temporarily ceased",
            workingRights: "Expired"
        }
    },{
        email: 'zealy@gmail.com',
        firstName: 'Zi',
        lastName: 'Healy',
        password: bcrypt.hashSync('kdfgodg000', 6),
        phone: "0787998442",
        dateJoined: new Date("2015 09 30")/1000,
        skills: [
            {
                // requires email
                skillID: '1',
                skillLevel: "5"
            },
            {
                // requires email
                skillID: '2',
                skillLevel: "5"
            },
            {
                // requires email
                skillID: '3',
                skillLevel: "5"
            },
            {
                // requires email
                skillID: '4',
                skillLevel: "5"
            },
            {
                // requires email
                skillID: '7',
                skillLevel: "9"
            },
            {
                // requires email
                skillID: '8',
                skillLevel: "5"
            },
            {
                // requires email
                skillID: '21',
                skillLevel: "5"
            },
            {
                // requires email
                skillID: '22',
                skillLevel: "5"
            },
        ],
        employmentHistory: [
            {
                // requires email
                startDate: new Date("2016 1 15")/1000,
                endDate: new Date("2017 1 30")/1000,
                role: "1",
                details: "AppMan"
            },
            {
                // requires email
                startDate: new Date("2017 2 10")/1000,
                endDate: new Date("2018 8 1")/1000,
                role: "2",
                details: "AppleTron"
            },
            {
                // requires email
                startDate: new Date("2018 9 1")/1000,
                endDate: new Date("2020 12 18")/1000,
                role: "5",
                details: "Statson & Databa"
            },
            {
                // requires email
                startDate: new Date("2021 1 13")/1000,
                endDate: new Date("2022 2 20")/1000,
                role: "1",
                details: "AppMan Incorporated"
            },
        ],
        qualifications: [
            {
                // requires email
                qualificationID: "4",
                gradYear: 2011
            },
            {
                // requires email
                qualificationID: "8",
                gradYear: 2013
            },
            {
                // requires email
                qualificationID: "26",
                gradYear: 2016
            },
        ],
        visa: {
            // email
            passport: "A2834454",
            visaNumber: null,
            visaType: null,
            visaStatus: null,
            workingRights: "citizen"
        }
    },
    {
        email: 'amk@outlook.com',
        firstName: 'Ava-Mae',
        lastName: 'Klein',
        password: bcrypt.hashSync('sfvgrvgwr434', 6),
        phone: "0346574891",
        dateJoined: new Date("2021 11 17")/1000,
        skills: [
            {
                // requires email
                skillID: '1',
                skillLevel: "9"
            },
            {
                // requires email
                skillID: '2',
                skillLevel: "7"
            },
            {
                // requires email
                skillID: '6',
                skillLevel: "9"
            },
            {
                // requires email
                skillID: '7',
                skillLevel: "8"
            },
            {
                // requires email
                skillID: '9',
                skillLevel: "8"
            },
            {
                // requires email
                skillID: '10',
                skillLevel: "9"
            },
            {
                // requires email
                skillID: '11',
                skillLevel: "9"
            },
            {
                // requires email
                skillID: '12',
                skillLevel: "9"
            },
            {
                // requires email
                skillID: '13',
                skillLevel: "9"
            },
            {
                // requires email
                skillID: '14',
                skillLevel: "9"
            },
            {
                // requires email
                skillID: '15',
                skillLevel: "9"
            },
            {
                // requires email
                skillID: '18',
                skillLevel: "8"
            },
            {
                // requires email
                skillID: '19',
                skillLevel: "8"
            },
            {
                // requires email
                skillID: '20',
                skillLevel: "7"
            },
            {
                // requires email
                skillID: '22',
                skillLevel: "7"
            },
        ],
        employmentHistory: [
            {
                // requires email
                startDate: new Date("2011 03 22")/1000,
                endDate: new Date("2015 11 11")/1000,
                role: "3",
                details: "FullyIntegrated"
            },
            {
                // requires email
                startDate: new Date("2016 01 14")/1000,
                endDate: new Date("2019 12 8")/1000,
                role: "3",
                details: "Statement Websites"
            },
            {
                // requires email
                startDate: new Date("2019")/1000,
                role: "3",
                details: "Devtopia"
            },
        ],
        qualifications: [
            {
                // requires email
                qualificationID: "2",
                gradYear: 2010
            },
        ],
        visa: {
            // email
            passport: "J3349321",
            visaNumber: "0023887346599",
            visaType: "Partner(Subclass 801)",
            visaStatus: "In effect",
            workingRights: "Permanent Resident"
        }
    },{
        email: 't.christian@grandios.com',
        firstName: 'Traci',
        lastName: 'Christian',
        password: bcrypt.hashSync('fdvbwf3433', 6),
        phone: "0332178098",
        dateJoined: Date.now()/1000,
        skills: [
            {
                // requires email
                skillID: '3',
                skillLevel: "7"
            },
            {
                // requires email
                skillID: '4',
                skillLevel: "8"
            },
            {
                // requires email
                skillID: '21',
                skillLevel: "9"
            },
            {
                // requires email
                skillID: '22',
                skillLevel: "9"
            },
        ],
        employmentHistory: [
            {
                // requires email
                startDate: new Date("2000 02 22")/1000,
                endDate: new Date("2014 10 7")/1000,
                role: "2",
                details: "Webmaster"
            },
            {
                // requires email
                startDate: new Date("2014 12 01")/1000,
                role: "2",
                details: "Total Solutions"
            },
        ],
        qualifications: [
            {
                // requires email
                qualificationID: "3",
                gradYear: 1999
            },
        ],
        visa: {
            // email
            passport: "M9846753",
            visaNumber: "1217489326584",
            visaType: "PR (Skilled Regional) visa (subclass 191)",
            visaStatus: "In effect",
            workingRights: "Permanent Resident"
        }
    },{
        email: 'ANorton8976@qld.gov.au',
        firstName: 'Anja',
        lastName: 'Norton',
        password: bcrypt.hashSync('sdf3223-@09wyut', 6),
        phone: "0877433678",
        dateJoined: new Date("2012 8 2")/1000,
        skills: [
            {
                // requires email
                skillID: '2',
                skillLevel: "8"
            },
            {
                // requires email
                skillID: '9',
                skillLevel: "8"
            },
            {
                // requires email
                skillID: '24',
                skillLevel: "9"
            },
            {
                // requires email
                skillID: '25',
                skillLevel: "9"
            },
            {
                // requires email
                skillID: '26',
                skillLevel: "9"
            },
        ],
        employmentHistory: [
            {
                // requires email
                startDate: new Date("2012 01 24")/1000,
                endDate: new Date("2017")/1000,
                role: "5",
                details: "Queensland Governement"
            },
            {
                // requires email
                startDate: new Date("2017 01 24")/1000,
                role: "5",
                details: "Queensland Governement"
            },
        ],
        qualifications: [
            {
                // requires email
                qualificationID: "4",
                gradYear: 2010
            },
            {
                // requires email
                qualificationID: "15",
                gradYear: 2011
            },
        ],
        visa: {
            // email
            passport: null,
            visaNumber: null,
            visaType: null,
            visaStatus: null,
            workingRights: "citizen"
        }
    },{
        email: 'omendoza@gmail.com',
        firstName: 'Orion',
        lastName: 'Mendoza',
        password: bcrypt.hashSync('lisdgvi986', 6),
        phone: "0812333098",
        dateJoined: Date.now()/1000,
        skills: [
            {
                // requires email
                skillID: '27',
                skillLevel: "10"
            },
            {
                // requires email
                skillID: '28',
                skillLevel: "10"
            },
            {
                // requires email
                skillID: '29',
                skillLevel: "10"
            },
            {
                // requires email
                skillID: '8',
                skillLevel: "10"
            },
        ],
        employmentHistory: [
            {
                // requires email
                startDate: new Date("2011")/1000,
                role: "4",
                details: "High Impact Designs"
            },
        ],
        qualifications: [
            {
                // requires email
                qualificationID: "31",
                gradYear: 2010
            },
        ],
        visa: {
            // email
            passport: null,
            visaNumber: null,
            visaType: null,
            visaStatus: null,
            workingRights: "citizen"
        }
    },{
        email: 'M.Leech002@gmail.com',
        firstName: 'Marissa',
        lastName: 'Leech',
        password: bcrypt.hashSync('svwd23244', 6),
        phone: "0322898436",
        dateJoined: Date.now()/1000,
        skills: [
            {
                // requires email
                skillID: '1',
                skillLevel: "3"
            },
            {
                // requires email
                skillID: '2',
                skillLevel: "3"
            },
            {
                // requires email
                skillID: '8',
                skillLevel: "3"
            },
            {
                // requires email
                skillID: '12',
                skillLevel: "3"
            },
            {
                // requires email
                skillID: '28',
                skillLevel: "3"
            },
        ],
        employmentHistory: [],
        qualifications: [
            {
                // requires email
                qualificationID: "21",
                gradYear: 2021
            },
        ],
        visa: {
            // email
            passport: null,
            visaNumber: null,
            visaType: null,
            visaStatus: null,
            workingRights: "citizen"
        }
    },{
        email: 'aw202020@outlook.com',
        firstName: 'Ansh',
        lastName: 'Woodcock',
        password: bcrypt.hashSync('kwvfiwe342', 6),
        phone: "0700234334",
        dateJoined: Date.now()/1000,
        skills: [
            {
                // requires email
                skillID: '4',
                skillLevel: "7"
            },
            {
                // requires email
                skillID: '2',
                skillLevel: "7"
            },
            {
                // requires email
                skillID: '9',
                skillLevel: "7"
            },
            {
                // requires email
                skillID: '20',
                skillLevel: "7"
            },
            {
                // requires email
                skillID: '21',
                skillLevel: "7"
            },
            {
                // requires email
                skillID: '22',
                skillLevel: "7"
            },
        ],
        employmentHistory: [
            {
                // requires email
                startDate: new Date("2017 1 28")/1000,
                endDate: new Date("2021 3 4")/1000,
                role: "2",
                details: "Yup Finance"
            },
            {
                // requires email
                startDate: new Date("2021 8 12")/1000,
                endDate: new Date("2022 1 30")/1000,
                role: "2",
                details: "LockDown Network Security"
            },
        ],
        qualifications: [
            {
                // requires email
                qualificationID: "6",
                gradYear: 2016
            },
        ],
        visa: {
            // email
            passport: null,
            visaNumber: null,
            visaType: null,
            visaStatus: null,
            workingRights: "citizen"
        }
    },{
        email: 'aMorgan@hotmail.com',
        firstName: 'Anish',
        lastName: 'Morgan',
        password: bcrypt.hashSync('swet454yyu53', 6),
        phone: "0833345100",
        dateJoined: Date.now()/1000,
        skills: [
            {
                // requires email
                skillID: '1',
                skillLevel: "4"
            },
            {
                // requires email
                skillID: '2',
                skillLevel: "7"
            },
            {
                // requires email
                skillID: '7',
                skillLevel: "5"
            },
            {
                // requires email
                skillID: '8',
                skillLevel: "6"
            },
            {
                // requires email
                skillID: '13',
                skillLevel: "4"
            },
            {
                // requires email
                skillID: '14',
                skillLevel: "5"
            },
        ],
        employmentHistory: [
            {
                // requires email
                startDate: new Date("2020 5 14")/1000,
                endDate: new Date("2022 2 15")/1000,
                role: "3",
                details: "Slick Designs"
            },
        ],
        qualifications: [
            {
                // requires email
                qualificationID: "25",
                gradYear: 2020
            },
        ],
        visa: {
            // email
            passport: "U3472948",
            visaNumber: "9803457292237",
            visaType: "Global Special Humanitarian (subclass 202)",
            visaStatus: "In effect",
            workingRights: "Permanent Resident"
        }
    },{
        email: 'FatmaCullen@cheerio.com',
        firstName: 'Fatma',
        lastName: 'Cullen',
        password: bcrypt.hashSync('w43wr4343', 6),
        phone: "0799445675",
        dateJoined: new Date("2016 9 19")/1000,
        skills: [
            {
                // requires email
                skillID: '4',
                skillLevel: "7"
            },
            {
                // requires email
                skillID: '6',
                skillLevel: "8"
            },
            {
                // requires email
                skillID: '21',
                skillLevel: "7"
            },
        ],
        employmentHistory: [
            {
                // requires email
                startDate: new Date("2016 1 12")/1000,
                endDate: new Date("2022 2 1")/1000,
                role: "1",
                details: "SaaSy"
            },
        ],
        qualifications: [
            {
                // requires email
                qualificationID: "2",
                gradYear: 2012
            },
            {
                // requires email
                qualificationID: "10",
                gradYear: 2015
            },
        ],
        visa: {
            // email
            passport: null,
            visaNumber: null,
            visaType: null,
            visaStatus: null,
            workingRights: "citizen"
        }
    },{
        email: 'r.sparrow@gmail.com',
        firstName: 'Reiss',
        lastName: 'Sparrow',
        password: bcrypt.hashSync('dlvbdsio89ew', 6),
        phone: "0364543111",
        dateJoined: Date.now()/1000,
        skills: [
            {
                // requires email
                skillID: '1',
                skillLevel: "7"
            },
            {
                // requires email
                skillID: '2',
                skillLevel: "8"
            },
            {
                // requires email
                skillID: '3',
                skillLevel: "6"
            },
            {
                // requires email
                skillID: '9',
                skillLevel: "6"
            },
            {
                // requires email
                skillID: '16',
                skillLevel: "6"
            },
            {
                // requires email
                skillID: '17',
                skillLevel: "7"
            },
            {
                // requires email
                skillID: '21',
                skillLevel: "8"
            },
            {
                // requires email
                skillID: '22',
                skillLevel: "7"
            },
            {
                // requires email
                skillID: '26',
                skillLevel: "7"
            },
            {
                // requires email
                skillID: '29',
                skillLevel: "7"
            },
            {
                // requires email
                skillID: '28',
                skillLevel: "7"
            },
            {
                // requires email
                skillID: '27',
                skillLevel: "5"
            },
        ],
        employmentHistory: [
            {
                // requires email
                startDate: new Date("2011 3 7")/1000,
                endDate: new Date("2013 7 18")/1000,
                role: "2",
                details: "Phalanx Limites"
            },
            {
                // requires email
                startDate: new Date("2013 8 2")/1000,
                endDate: new Date("2015 12 9")/1000,
                role: "5",
                details: "DebianTimeShare"
            },
            {
                // requires email
                startDate: new Date("2016 1 3")/1000,
                endDate: new Date("2019 5 30")/1000,
                role: "4",
                details: "CoolPix Web Design"
            },
            {
                // requires email
                startDate: new Date("2019 6 10")/1000,
                endDate: new Date("2022 1 27")/1000,
                role: "3",
                details: "Wordpress Masters"
            },
        ],
        qualifications: [
            {
                // requires email
                qualificationID: "4",
                gradYear: 2010
            },
        ],
        visa: {
            // email
            passport: "G4837585",
            visaNumber: "8493098247853",
            visaType: "Global Special Humanitarian (subclass 202)",
            visaStatus: "In effect",
            workingRights: "Permanent Resident"
        }
    },{
        email: 'LD94@gmail.com',
        firstName: 'Luna',
        lastName: 'Duffy',
        password: bcrypt.hashSync('wlnf9h902u', 6),
        phone: "0789090232",
        dateJoined: new Date("2018 8 8")/1000,
        skills: [
            {
                // requires email
                skillID: '2',
                skillLevel: "7"
            },
            {
                // requires email
                skillID: '9',
                skillLevel: "7"
            },
            {
                // requires email
                skillID: '10',
                skillLevel: "8"
            },
            {
                // requires email
                skillID: '26',
                skillLevel: "7"
            },
            {
                // requires email
                skillID: '25',
                skillLevel: "8"
            },
        ],
        employmentHistory: [
            {
                // requires email
                startDate: new Date("2015 5 23")/1000,
                role: "5",
                details: "Big Data AI"
            },
        ],
        qualifications: [
            {
                // requires email
                qualificationID: "4",
                gradYear: 2010
            },
            {
                // requires email
                qualificationID: "15",
                gradYear: 2013
            },
            {
                // requires email
                qualificationID: "32",
                gradYear: 2015
            },
        ],
        visa: {
            // email
            passport: null,
            visaNumber: null,
            visaType: null,
            visaStatus: null,
            workingRights: "citizen"
        }
    },
    {
        email: 'rbenton@gmail.com',
        firstName: 'Rhiannan',
        lastName: 'Benton',
        password: bcrypt.hashSync('sdf3223-@09wyut', 6),
        phone: "0222334979",
        dateJoined: new Date("2006 9 18")/1000,
        skills: [
            {
                // requires email
                skillID: '2',
                skillLevel: "10"
            },
            {
                // requires email
                skillID: '9',
                skillLevel: "10"
            },
            {
                // requires email
                skillID: '24',
                skillLevel: "8"
            },
            {
                // requires email
                skillID: '25',
                skillLevel: "9"
            },
        ],
        employmentHistory: [
            {
                // requires email
                startDate: new Date("2006 3 4")/1000,
                role: "5",
                details: "QPS"
            },
        ],
        qualifications: [
            {
                // requires email
                qualificationID: "4",
                gradYear: 2003
            },
        ],
        visa: {
            // email
            passport: null,
            visaNumber: null,
            visaType: null,
            visaStatus: null,
            workingRights: "citizen"
        }
    },{
        email: 'm.abbott@gmail.com',
        firstName: 'Mert',
        lastName: 'Abbott',
        password: bcrypt.hashSync('sdf3223-@09wyut', 6),
        phone: "0467899982",
        dateJoined: new Date("2010 11 9")/1000,
        skills: [
            {
                // requires email
                skillID: '2',
                skillLevel: "9"
            },
            {
                // requires email
                skillID: '9',
                skillLevel: "10"
            },
            {
                // requires email
                skillID: '24',
                skillLevel: "7"
            },
        ],
        employmentHistory: [
            {
                // requires email
                startDate: new Date("2010 5 2")/1000,
                endDate: new Date("2013 2 19")/1000,
                role: "5",
                details: "Queensland Libraries"
            },
            {
                // requires email
                startDate: new Date("2013 2 20")/1000,
                role: "5",
                details: "AFP"
            },
        ],
        qualifications: [
            {
                // requires email
                qualificationID: "4",
                gradYear: 2009
            },
        ],
        visa: {
            // email
            passport: null,
            visaNumber: null,
            visaType: null,
            visaStatus: null,
            workingRights: "citizen"
        }
    },{
        email: 'h.leal@outlook.com',
        firstName: 'Hendrix',
        lastName: 'Leal',
        password: bcrypt.hashSync('sdf3223-@09wyut', 6),
        phone: "0204389098",
        dateJoined: new Date("2000 1 1")/1000,
        skills: [
            {
                // requires email
                skillID: '2',
                skillLevel: "10"
            },
            {
                // requires email
                skillID: '9',
                skillLevel: "10"
            },
            {
                // requires email
                skillID: '24',
                skillLevel: "10"
            },
            {
                // requires email
                skillID: '25',
                skillLevel: "10"
            },
            {
                // requires email
                skillID: '26',
                skillLevel: "10"
            },
        ],
        employmentHistory: [
            {
                // requires email
                startDate: new Date("2000 1 2")/1000,
                role: "5",
                details: "KPMG"
            },
        ],
        qualifications: [
            {
                // requires email
                qualificationID: "4",
                gradYear: 1998
            },
        ],
        visa: {
            // email
            passport: null,
            visaNumber: null,
            visaType: null,
            visaStatus: null,
            workingRights: "citizen"
        }
    },{
        email: 'c.burch@gmail.com',
        firstName: 'Caius',
        lastName: 'Burch',
        password: bcrypt.hashSync('fdvbwf3433', 6),
        phone: "0388999674",
        dateJoined: Date.now()/1000,
        skills: [
            {
                // requires email
                skillID: '3',
                skillLevel: "9"
            },
            {
                // requires email
                skillID: '4',
                skillLevel: "8"
            },
            {
                // requires email
                skillID: '21',
                skillLevel: "7"
            },
            {
                // requires email
                skillID: '22',
                skillLevel: "9"
            },
        ],
        employmentHistory: [
            {
                // requires email
                startDate: new Date("2009 02 22")/1000,
                endDate: new Date("2014 10 15")/1000,
                role: "2",
                details: "Total Data Inc."
            },
            {
                // requires email
                startDate: new Date("2014 12 01")/1000,
                role: "2",
                details: "The DB Professionals"
            },
        ],
        qualifications: [
            {
                // requires email
                qualificationID: "3",
                gradYear: 2008
            },
        ],
        visa: {
            // email
            passport: "B9846345",
            visaNumber: "",
            visaType: "",
            visaStatus: "",
            workingRights: "Citizen"
        }
    },{
        email: 'aydan332@gmail.com',
        firstName: 'Aydan',
        lastName: 'Compton',
        password: bcrypt.hashSync('fdvbwf3433', 6),
        phone: "0211783908",
        dateJoined: Date.now()/1000,
        skills: [
            {
                // requires email
                skillID: '3',
                skillLevel: "8"
            },
            {
                // requires email
                skillID: '4',
                skillLevel: "10"
            },
            {
                // requires email
                skillID: '21',
                skillLevel: "7"
            },
            {
                // requires email
                skillID: '22',
                skillLevel: "6"
            },
        ],
        employmentHistory: [
            {
                // requires email
                startDate: new Date("2013 02 22")/1000,
                role: "2",
                details: "Advanced Software Solutions"
            },
        ],
        qualifications: [
            {
                // requires email
                qualificationID: "3",
                gradYear: 2012
            },
        ],
        visa: {
            // email
            passport: "",
            visaNumber: "",
            visaType: "",
            visaStatus: "",
            workingRights: "Citizen"
        }
    },
]

module.exports = jobseekers