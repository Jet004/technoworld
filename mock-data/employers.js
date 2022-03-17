// Requirements:
    //abn is an 11 digit number


const bcrypt = require('bcrypt')

const employers = [
    {
        abn_acn: Math.floor(100000000 + Math.random() * 900000000),
        employerName: 'Architech',
        contactName: 'Kamila Thomas',
        contactEmail: 'kthomas@architech.com',
        contactPhone: '0473898212',
        password: bcrypt.hashSync("isobfou489wehf2h", 6),
        addressLine1: 'Shop 2 1293 Milton Rd',
        addressLine2: '',
        city: 'Brisbane',
        state: 'QLD',
        dateJoined: new Date("2022 1 20")/1000,
        positions: [
            {
                // position id auto generated - access with results.insertId
                // require employer abn as employerID
                positionTitle: "Lead Software Developer",
                description: "Lead a team of 5 in a fresh SaaS company",
                responsibilities: "Lead projects from start to finish",
                minSalary: "160000",
                maxSalary: "180000",
                city: "Brisbane",
                state: "QLD",
                contractType: "permanent",
                roleRequirements: [
                    {
                        // require position id
                        roleID: "1",
                        requiredYrsExp: 6
                    },
                ],
                skillRequirements: [
                    {
                        // require position id
                        skillID: "3",
                        requiredSkillLevel: "8",
                    },
                    {
                        // require position id
                        skillID: "4",
                        requiredSkillLevel: "8",
                    },
                    {
                        // require position id
                        skillID: "5",
                        requiredSkillLevel: "8",
                    },
                ],
                qualificationRequirements: [
                    {
                        // require position id
                        qualificationID: "17",
                    },
                ],
            },
            {
                // position id auto generated - access with results.insertId
                // require employer abn as employerID
                positionTitle: "Software Developer",
                description: "Join a small cutting edge SaaS team",
                responsibilities: "IOS application development, test driven development",
                minSalary: "120000",
                maxSalary: "140000",
                city: "Brisbane",
                state: "QLD",
                contractType: "permanent",
                roleRequirements: [
                    {
                        // require position id
                        roleID: "1",
                        requiredYrsExp: 4
                    },
                ],
                skillRequirements: [
                    {
                        // require position id
                        skillID: "3",
                        requiredSkillLevel: "6",
                    },
                    {
                        // require position id
                        skillID: "5",
                        requiredSkillLevel: "6",
                    },
                ],
                qualificationRequirements: [
                    {
                        // require position id
                        qualificationID: "2",
                    },
                ],
            },
            {
                // position id auto generated - access with results.insertId
                // require employer abn as employerID
                positionTitle: "Software Developer",
                description: "Join a small cutting edge SaaS team",
                responsibilities: "IOS application development, test driven development",
                minSalary: "120000",
                maxSalary: "140000",
                city: "Brisbane",
                state: "QLD",
                contractType: "permanent",
                roleRequirements: [
                    {
                        // require position id
                        roleID: "1",
                        requiredYrsExp: 4
                    },
                ],
                skillRequirements: [
                    {
                        // require position id
                        skillID: "3",
                        requiredSkillLevel: "6",
                    },
                    {
                        // require position id
                        skillID: "5",
                        requiredSkillLevel: "6",
                    },
                ],
                qualificationRequirements: [
                    {
                        // require position id
                        qualificationID: "2",
                    },
                ],
            },
            {
                // position id auto generated - access with results.insertId
                // require employer abn as employerID
                positionTitle: "Software Developer",
                description: "Join a small cutting edge SaaS team",
                responsibilities: "IOS application development, test driven development",
                minSalary: "120000",
                maxSalary: "140000",
                city: "Brisbane",
                state: "QLD",
                contractType: "permanent",
                roleRequirements: [
                    {
                        // require position id
                        roleID: "1",
                        requiredYrsExp: 4
                    },
                ],
                skillRequirements: [
                    {
                        // require position id
                        skillID: "3",
                        requiredSkillLevel: "6",
                    },
                    {
                        // require position id
                        skillID: "5",
                        requiredSkillLevel: "6",
                    },
                ],
                qualificationRequirements: [
                    {
                        // require position id
                        qualificationID: "2",
                    },
                ],
            },
        ],
    },
    {
        abn_acn: Math.floor(100000000 + Math.random() * 900000000),
        employerName: 'Digion Corporation',
        contactName: 'Jozef Whitmore',
        contactEmail: 'j.whitmore@digion.com',
        contactPhone: '0733455213',
        password: bcrypt.hashSync("isobfou489wehf2h", 6),
        addressLine1: 'Suite 502/232 Albert Street',
        addressLine2: '',
        city: 'Brisbane',
        state: 'QLD',
        dateJoined: new Date("2020 10 9")/1000,
        positions: [
            {
                // position id auto generated - access with results.insertId
                // require employer abn as employerID
                positionTitle: "Software Tester",
                description: "Testing for JavaScript frontend and backend. Integration testing, unit testing, everything testing.",
                responsibilities: "Building robust tests to thoroughly stress test our systems.",
                minSalary: "80000",
                maxSalary: "100000",
                city: "Brisbane",
                state: "QLD",
                contractType: "permanent",
                roleRequirements: [
                    {
                        // require position id
                        roleID: "2",
                        requiredYrsExp: 2
                    },
                ],
                skillRequirements: [
                    {
                        // require position id
                        skillID: "1",
                        requiredSkillLevel: "7",
                    },
                    {
                        // require position id
                        skillID: "2",
                        requiredSkillLevel: "7",
                    },
                    {
                        // require position id
                        skillID: "20",
                        requiredSkillLevel: "7",
                    },
                    {
                        // require position id
                        skillID: "21",
                        requiredSkillLevel: "7",
                    },
                    {
                        // require position id
                        skillID: "22",
                        requiredSkillLevel: "7",
                    },
                ],
                qualificationRequirements: [
                    {
                        // require position id
                        qualificationID: "23",
                    },
                ],
            },
            {
                // position id auto generated - access with results.insertId
                // require employer abn as employerID
                positionTitle: "QA Lead",
                description: "Lead a strong team of software testers to build robust testing solutions for our clients",
                responsibilities: "Unit testing, integration testing, testing lead",
                minSalary: "120000",
                maxSalary: "140000",
                city: "Brisbane",
                state: "QLD",
                contractType: "permanent",
                roleRequirements: [
                    {
                        // require position id
                        roleID: "2",
                        requiredYrsExp: 5
                    },
                ],
                skillRequirements: [
                    {
                        // require position id
                        skillID: "1",
                        requiredSkillLevel: "9",
                    },
                    {
                        // require position id
                        skillID: "2",
                        requiredSkillLevel: "9",
                    },
                    {
                        // require position id
                        skillID: "20",
                        requiredSkillLevel: "9",
                    },
                    {
                        // require position id
                        skillID: "21",
                        requiredSkillLevel: "9",
                    },
                    {
                        // require position id
                        skillID: "22",
                        requiredSkillLevel: "9",
                    },
                ],
                qualificationRequirements: [
                    {
                        // require position id
                        qualificationID: "2",
                    },
                ],
            },
            {
                // position id auto generated - access with results.insertId
                // require employer abn as employerID
                positionTitle: "Testing Intermediate",
                description: "Testing in JavaScript",
                responsibilities: "Lots of testing",
                minSalary: "100000",
                maxSalary: "120000",
                city: "Brisbane",
                state: "QLD",
                contractType: "permanent part-time",
                roleRequirements: [
                    {
                        // require position id
                        roleID: "2",
                        requiredYrsExp: 3
                    },
                ],
                skillRequirements: [
                    {
                        // require position id
                        skillID: "1",
                        requiredSkillLevel: "7",
                    },
                    {
                        // require position id
                        skillID: "2",
                        requiredSkillLevel: "7",
                    },
                    {
                        // require position id
                        skillID: "20",
                        requiredSkillLevel: "7",
                    },
                    {
                        // require position id
                        skillID: "21",
                        requiredSkillLevel: "7",
                    },
                    {
                        // require position id
                        skillID: "22",
                        requiredSkillLevel: "7",
                    },
                ],
                qualificationRequirements: [
                    {
                        // require position id
                        qualificationID: "4",
                    },
                ],
            },
            {
                // position id auto generated - access with results.insertId
                // require employer abn as employerID
                positionTitle: "Data Analyst",
                description: "Prepare robust testing suites and triggers to meet our client's data needs",
                responsibilities: "Analyse data needs, build appropriate testing suites and triggers to ensure data integrity",
                minSalary: "150000",
                maxSalary: "170000",
                city: "Brisbane",
                state: "QLD",
                contractType: "permanent",
                roleRequirements: [
                    {
                        // require position id
                        roleID: "5",
                        requiredYrsExp: 5
                    },
                ],
                skillRequirements: [
                    {
                        // require position id
                        skillID: "2",
                        requiredSkillLevel: "5",
                    },
                    {
                        // require position id
                        skillID: "9",
                        requiredSkillLevel: "5",
                    },
                    {
                        // require position id
                        skillID: "21",
                        requiredSkillLevel: "6",
                    },
                    {
                        // require position id
                        skillID: "22",
                        requiredSkillLevel: "6",
                    },
                ],
                qualificationRequirements: [
                    {
                        // require position id
                        qualificationID: "4",
                    },
                ],
            },
        ],
    },
    {
        abn_acn: Math.floor(100000000 + Math.random() * 900000000),
        employerName: 'Webio',
        contactName: 'Chaya Hurley',
        contactEmail: 'ch@webio.com',
        contactPhone: '0321787454',
        password: bcrypt.hashSync("isobfou489wehf2h", 6),
        addressLine1: '103/60 Queen Street',
        addressLine2: '',
        city: 'Brisbane',
        state: 'QLD',
        dateJoined: new Date("2015 6 30")/1000,
        positions: [
            {
                // position id auto generated - access with results.insertId
                // require employer abn as employerID
                positionTitle: "Website developer",
                description: "develop websites",
                responsibilities: "Frontend Next.js development",
                minSalary: "80000",
                maxSalary: "100000",
                city: "Brisbane",
                state: "QLD",
                contractType: "permanent",
                roleRequirements: [
                    {
                        // require position id
                        roleID: "3",
                        requiredYrsExp: 2
                    },
                ],
                skillRequirements: [
                    {
                        // require position id
                        skillID: "1",
                        requiredSkillLevel: "3",
                    },
                    {
                        // require position id
                        skillID: "2",
                        requiredSkillLevel: "3",
                    },
                    {
                        // require position id
                        skillID: "13",
                        requiredSkillLevel: "3",
                    },
                ],
                qualificationRequirements: [
                    {
                        // require position id
                        qualificationID: "3",
                    },
                ],
            },
            {
                // position id auto generated - access with results.insertId
                // require employer abn as employerID
                positionTitle: "Website developer",
                description: "develop websites",
                responsibilities: "Backend Node.js development",
                minSalary: "80000",
                maxSalary: "100000",
                city: "Brisbane",
                state: "QLD",
                contractType: "permanent",
                roleRequirements: [
                    {
                        // require position id
                        roleID: "3",
                        requiredYrsExp: 2
                    },
                ],
                skillRequirements: [
                    {
                        // require position id
                        skillID: "1",
                        requiredSkillLevel: "3",
                    },
                    {
                        // require position id
                        skillID: "2",
                        requiredSkillLevel: "3",
                    },
                    {
                        // require position id
                        skillID: "14",
                        requiredSkillLevel: "3",
                    },
                ],
                qualificationRequirements: [
                    {
                        // require position id
                        qualificationID: "3",
                    },
                ],
            },
            {
                // position id auto generated - access with results.insertId
                // require employer abn as employerID
                positionTitle: "Web Designer",
                description: "Design and graphic work for websites",
                responsibilities: "Image manipulation, CSS, Theme development",
                minSalary: "80000",
                maxSalary: "100000",
                city: "Brisbane",
                state: "QLD",
                contractType: "permanent",
                roleRequirements: [
                    {
                        // require position id
                        roleID: "4",
                        requiredYrsExp: 2
                    },
                ],
                skillRequirements: [
                    {
                        // require position id
                        skillID: "8",
                        requiredSkillLevel: "3",
                    },
                    {
                        // require position id
                        skillID: "27",
                        requiredSkillLevel: "3",
                    },
                    {
                        // require position id
                        skillID: "28",
                        requiredSkillLevel: "3",
                    },
                ],
                qualificationRequirements: [
                    {
                        // require position id
                        qualificationID: "31",
                    },
                ],
            },
        ],
    },
    {
        abn_acn: Math.floor(100000000 + Math.random() * 900000000),
        employerName: 'Dev AI',
        contactName: 'Elin Mccabe',
        contactEmail: 'elin.m@devai.com',
        contactPhone: '0467898341',
        password: bcrypt.hashSync("isobfou489wehf2h", 6),
        addressLine1: '300 Margaret Street',
        addressLine2: '',
        city: 'Brisbane',
        state: 'QLD',
        dateJoined: new Date("2011 5 20")/1000,
        positions: [
            {
                // position id auto generated - access with results.insertId
                // require employer abn as employerID
                positionTitle: "Software Developer",
                description: "Build AI accounting and law software",
                responsibilities: "Create dummy data...",
                minSalary: "160000",
                maxSalary: "180000",
                city: "Brisbane",
                state: "QLD",
                contractType: "permanent",
                roleRequirements: [
                    {
                        // require position id
                        roleID: "1",
                        requiredYrsExp: 3
                    },
                ],
                skillRequirements: [
                    {
                        // require position id
                        skillID: "4",
                        requiredSkillLevel: "4",
                    },
                    {
                        // require position id
                        skillID: "2",
                        requiredSkillLevel: "4",
                    },
                    {
                        // require position id
                        skillID: "3",
                        requiredSkillLevel: "4",
                    },
                ],
                qualificationRequirements: [
                    {
                        // require position id
                        qualificationID: "2",
                    },
                ],
            },
            {
                // position id auto generated - access with results.insertId
                // require employer abn as employerID
                positionTitle: "Software Developer",
                description: "Build AI accounting and law software",
                responsibilities: "Create dummy data...",
                minSalary: "80000",
                maxSalary: "90000",
                city: "Brisbane",
                state: "QLD",
                contractType: "permanent",
                roleRequirements: [
                    {
                        // require position id
                        roleID: "1",
                        requiredYrsExp: 3
                    },
                ],
                skillRequirements: [
                    {
                        // require position id
                        skillID: "4",
                        requiredSkillLevel: "4",
                    },
                    {
                        // require position id
                        skillID: "2",
                        requiredSkillLevel: "4",
                    },
                    {
                        // require position id
                        skillID: "3",
                        requiredSkillLevel: "4",
                    },
                ],
                qualificationRequirements: [
                    {
                        // require position id
                        qualificationID: "2",
                    },
                ],
            },
        ],
    },
    {
        abn_acn: Math.floor(100000000 + Math.random() * 900000000),
        employerName: 'Systemic',
        contactName: 'Ayyan Velesquez',
        contactEmail: 'ayyan@systemic.com',
        contactPhone: '0465748291',
        password: bcrypt.hashSync("isobfou489wehf2h", 6),
        addressLine1: '1343 Logan Road',
        addressLine2: '',
        city: 'Brisbane',
        state: 'QLD',
        dateJoined: new Date("2010 2 9")/1000,
        positions: [
            {
                // position id auto generated - access with results.insertId
                // require employer abn as employerID
                positionTitle: "Software Development",
                description: "Build IOS apps with an awesome company!",
                responsibilities: "Build backend APIs for a world class travel app.",
                minSalary: "90000",
                maxSalary: "100000",
                city: "Brisbane",
                state: "QLD",
                contractType: "permanent",
                roleRequirements: [
                    {
                        // require position id
                        roleID: "1",
                        requiredYrsExp: 3
                    },
                ],
                skillRequirements: [
                    {
                        // require position id
                        skillID: "5",
                        requiredSkillLevel: "4",
                    },
                    {
                        // require position id
                        skillID: "2",
                        requiredSkillLevel: "5",
                    },
                    {
                        // require position id
                        skillID: "19",
                        requiredSkillLevel: "4",
                    },
                ],
                qualificationRequirements: [
                    {
                        // require position id
                        qualificationID: "2",
                    },
                ],
            },
            {
                // position id auto generated - access with results.insertId
                // require employer abn as employerID
                positionTitle: "Software Development",
                description: "Build IOS apps with an awesome company!",
                responsibilities: "Build backend APIs for a world class travel app.",
                minSalary: "90000",
                maxSalary: "100000",
                city: "Brisbane",
                state: "QLD",
                contractType: "permanent",
                roleRequirements: [
                    {
                        // require position id
                        roleID: "1",
                        requiredYrsExp: 3
                    },
                ],
                skillRequirements: [
                    {
                        // require position id
                        skillID: "5",
                        requiredSkillLevel: "4",
                    },
                    {
                        // require position id
                        skillID: "2",
                        requiredSkillLevel: "5",
                    },
                    {
                        // require position id
                        skillID: "19",
                        requiredSkillLevel: "4",
                    },
                ],
                qualificationRequirements: [
                    {
                        // require position id
                        qualificationID: "2",
                    },
                ],
            },
            {
                // position id auto generated - access with results.insertId
                // require employer abn as employerID
                positionTitle: "Software Development",
                description: "Build IOS apps with an awesome company!",
                responsibilities: "Build backend APIs for a world class travel app.",
                minSalary: "90000",
                maxSalary: "100000",
                city: "Brisbane",
                state: "QLD",
                contractType: "permanent",
                roleRequirements: [
                    {
                        // require position id
                        roleID: "1",
                        requiredYrsExp: 3
                    },
                ],
                skillRequirements: [
                    {
                        // require position id
                        skillID: "5",
                        requiredSkillLevel: "4",
                    },
                    {
                        // require position id
                        skillID: "2",
                        requiredSkillLevel: "5",
                    },
                    {
                        // require position id
                        skillID: "19",
                        requiredSkillLevel: "4",
                    },
                ],
                qualificationRequirements: [
                    {
                        // require position id
                        qualificationID: "2",
                    },
                ],
            },
        ],
    },
    {
        abn_acn: Math.floor(100000000 + Math.random() * 900000000),
        employerName: 'Innova',
        contactName: 'Luther Dunn',
        contactEmail: 'lexluther@innova.com',
        contactPhone: '0436589583',
        password: bcrypt.hashSync("isobfou489wehf2h", 6),
        addressLine1: '66 Stanley Street',
        addressLine2: '',
        city: 'Brisbane',
        state: 'QLD',
        dateJoined: Date.now()/1000,
        positions: [
            {
                // position id auto generated - access with results.insertId
                // require employer abn as employerID
                positionTitle: "Software Development Lead",
                description: "Build IOS apps with an awesome company!",
                responsibilities: "Lead a backend team for a world class travel app.",
                minSalary: "150000",
                maxSalary: "160000",
                city: "Brisbane",
                state: "QLD",
                contractType: "permanent",
                roleRequirements: [
                    {
                        // require position id
                        roleID: "1",
                        requiredYrsExp: 5
                    },
                ],
                skillRequirements: [
                    {
                        // require position id
                        skillID: "5",
                        requiredSkillLevel: "6",
                    },
                    {
                        // require position id
                        skillID: "2",
                        requiredSkillLevel: "7",
                    },
                    {
                        // require position id
                        skillID: "19",
                        requiredSkillLevel: "8",
                    },
                ],
                qualificationRequirements: [
                    {
                        // require position id
                        qualificationID: "2",
                    },
                ],
            },
        ],
    },
    {
        abn_acn: Math.floor(100000000 + Math.random() * 900000000),
        employerName: 'Agile',
        contactName: 'Cohan Thatcher',
        contactEmail: 'cthatcher@agile.com',
        contactPhone: '0743261783',
        password: bcrypt.hashSync("isobfou489wehf2h", 6),
        addressLine1: '1333 Moggil Road',
        addressLine2: '',
        city: 'Brisbane',
        state: 'QLD',
        dateJoined: new Date("2014 9 9")/1000,
        positions: [
            {
                // position id auto generated - access with results.insertId
                // require employer abn as employerID
                positionTitle: "Web designer",
                description: "Design modern bold style websites",
                responsibilities: "Work directly with clients to design awesome modern styles",
                minSalary: "90000",
                maxSalary: "110000",
                city: "Brisbane",
                state: "QLD",
                contractType: "permanent part-time",
                roleRequirements: [
                    {
                        // require position id
                        roleID: "4",
                        requiredYrsExp: 3
                    },
                ],
                skillRequirements: [
                    {
                        // require position id
                        skillID: "8",
                        requiredSkillLevel: "8",
                    },
                    {
                        // require position id
                        skillID: "27",
                        requiredSkillLevel: "8",
                    },
                    {
                        // require position id
                        skillID: "28",
                        requiredSkillLevel: "7",
                    },
                    {
                        // require position id
                        skillID: "29",
                        requiredSkillLevel: "7",
                    },
                ],
                qualificationRequirements: [
                    {
                        // require position id
                        qualificationID: "31",
                    },
                ],
            },
        ],
    },
    {
        abn_acn: Math.floor(100000000 + Math.random() * 900000000),
        employerName: 'Transio',
        contactName: 'Donnie Colley',
        contactEmail: 'd.colley@transio.com',
        contactPhone: '0324758983',
        password: bcrypt.hashSync("isobfou489wehf2h", 6),
        addressLine1: '402 Lutwych Road',
        addressLine2: '',
        city: 'Brisbane',
        state: 'QLD',
        dateJoined: new Date("2019 4 4")/1000,
        positions: [
            {
                // position id auto generated - access with results.insertId
                // require employer abn as employerID
                positionTitle: "Elite Database Analyst",
                description: "Build scalable client solutions",
                responsibilities: "Integrate with out application development team, you will be respobsible for building out the database and queries in our elite dev team",
                minSalary: "155000",
                maxSalary: "175000",
                city: "Brisbane",
                state: "QLD",
                contractType: "permanent",
                roleRequirements: [
                    {
                        // require position id
                        roleID: "5",
                        requiredYrsExp: 7
                    },
                ],
                skillRequirements: [
                    {
                        // require position id
                        skillID: "2",
                        requiredSkillLevel: "8",
                    },
                    {
                        // require position id
                        skillID: "9",
                        requiredSkillLevel: "8",
                    },
                    {
                        // require position id
                        skillID: "24",
                        requiredSkillLevel: "9",
                    },
                    {
                        // require position id
                        skillID: "25",
                        requiredSkillLevel: "9",
                    },
                    {
                        // require position id
                        skillID: "26",
                        requiredSkillLevel: "9",
                    },
                ],
                qualificationRequirements: [
                    {
                        // require position id
                        qualificationID: "4",
                    },
                    {
                        // require position id
                        qualificationID: "15",
                    },
                ],
            },
        ],
    },
    {
        abn_acn: Math.floor(100000000 + Math.random() * 900000000),
        employerName: 'Immersive',
        contactName: 'Nabeel Bullock',
        contactEmail: 'nabeel@immersive.com',
        contactPhone: '0478909099',
        password: bcrypt.hashSync("isobfou489wehf2h", 6),
        addressLine1: 'Shop 103/40 Kessels Road',
        addressLine2: '',
        city: 'Brisbane',
        state: 'QLD',
        dateJoined: new Date("2010 5 15")/1000,
        positions: [
            {
                // position id auto generated - access with results.insertId
                // require employer abn as employerID
                positionTitle: "Junior Web Developer",
                description: "Web dev junior",
                responsibilities: "Initally you will be responsible for writing integration tests and populating databases with dummy data.",
                minSalary: "55000",
                maxSalary: "65000",
                city: "Brisbane",
                state: "QLD",
                contractType: "permanent",
                roleRequirements: [
                    {
                        // require position id
                        roleID: "3",
                        requiredYrsExp: 0
                    },
                ],
                skillRequirements: [
                    {
                        // require position id
                        skillID: "1",
                        requiredSkillLevel: "3",
                    },
                    {
                        // require position id
                        skillID: "2",
                        requiredSkillLevel: "3",
                    },
                    {
                        // require position id
                        skillID: "8",
                        requiredSkillLevel: "3",
                    },
                    {
                        // require position id
                        skillID: "12",
                        requiredSkillLevel: "3",
                    },
                    {
                        // require position id
                        skillID: "28",
                        requiredSkillLevel: "3",
                    },
                ],
                qualificationRequirements: [
                    {
                        // require position id
                        qualificationID: "21",
                    },
                ],
            },
        ],
    },
    {
        abn_acn: Math.floor(100000000 + Math.random() * 900000000),
        employerName: 'Minify',
        contactName: 'Kerys Holding',
        contactEmail: 'k.holding@minify.net',
        contactPhone: '0798333870',
        password: bcrypt.hashSync("isobfou489wehf2h", 6),
        addressLine1: '300 Albert Street',
        addressLine2: '',
        city: 'Brisbane',
        state: 'QLD',
        dateJoined: new Date("2018 8 18")/1000,
        positions: [
            {
                // position id auto generated - access with results.insertId
                // require employer abn as employerID
                positionTitle: "Junior Software Developer",
                description: "Join an agile team of developers working in the shipping industry",
                responsibilities: "Support the existing team as necessary",
                minSalary: "45000",
                maxSalary: "55000",
                city: "Brisbane",
                state: "QLD",
                contractType: "part-time",
                roleRequirements: [
                    {
                        // require position id
                        roleID: "1",
                        requiredYrsExp: 0
                    },
                ],
                skillRequirements: [
                    {
                        // require position id
                        skillID: "1",
                        requiredSkillLevel: "1",
                    },
                ],
                qualificationRequirements: [
                    {
                        // require position id
                        qualificationID: "21",
                    },
                ],
            },
        ],
    },
]

module.exports = employers