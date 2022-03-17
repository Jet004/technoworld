const express = require('express')
const db = require('./database')

const server = express()
const PORT = 8200

const { pushData, deleteDbData } = require('./mock-data/pushData')

server.get('/load-data', (req, res) => {
    const success = pushData()
    console.log(success)
    success === true ? res.status(200).json({message: "Data pushed successfully"}) : res.status(500).json({message: "Data push failed"})
})

//
// Queries required to test the database
//

// 1. List all employers that have more than 2 positions available for software developers
server.get('/query-one/:query', (req, res) => {
    const query = JSON.parse(req.params.query)
    const roleId = query.roleId
    const moreThan = query.moreThan
    db.query(
        `
            SELECT 
                emp.employer_name, 
                count(pos.id) as 'Number of Software Developer Positions'
            FROM employers emp
            JOIN positions pos ON (emp.abn_acn = pos.employer_id)
            JOIN role_requirements rolereq ON (pos.id = rolereq.position_id)
            JOIN roles ON (rolereq.role_id = roles.id)
            WHERE roles.id = ?
            GROUP BY emp.employer_name
            HAVING count(pos.id) > ?
        `,
        [roleId, moreThan]
    )
    .then(results => results[0])
    .then(results => {
        console.log(results)
        res.status(200).json({ data: results })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ error: err })
    })
})


// 2. List all candidates that have more than 5 years’ experience in software testing
server.get('/query-two/:query', (req, res) => {
    const query = JSON.parse(req.params.query)
    const roleId = query.roleId
    const moreThan = query.moreThan

    db.query(
        `
            SELECT
                js.email,
                js.first_name,
                js.last_name,
                roles.role,
                SUM(TIMESTAMPDIFF(YEAR, FROM_UNIXTIME(hist.start_date), FROM_UNIXTIME(IFNULL(hist.end_date, UNIX_TIMESTAMP())))) as Years_of_Experience
            FROM jobseekers js
            JOIN employment_history hist ON (hist.jobseeker_id = js.email)
            JOIN roles ON (hist.role_id = roles.id)
            WHERE roles.id = ?
            AND TIMESTAMPDIFF(YEAR, FROM_UNIXTIME(hist.start_date), FROM_UNIXTIME(IFNULL(hist.end_date, UNIX_TIMESTAMP()))) > ?
            GROUP BY js.email
        `,
        [roleId, moreThan]
    )
    .then(results => results[0])
    .then(results => {
        console.log(results)
        res.status(200).json({ data: results })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ error: err })
    })
})


// 3. List all the positions available for software developers including the 
//    qualifications and years of experience required.
server.get('/query-three/:roleId', (req, res) => {
    const roleId = req.params.roleId
    
    db.query(
        `
            SELECT
                pos.id as "Position ID",
                pos.position_title as "Position Title",
                pos.description as Description,
                roles.role as Role,
                rolereq.required_exp_yrs as "Required Experience",
                qual.qualification as "Required Qualification"
            FROM positions pos
            JOIN role_requirements rolereq ON (rolereq.position_id = pos.id)
            JOIN roles ON (roles.id = rolereq.role_id)
            JOIN qualification_requirements qualreq ON (qualreq.position_id = pos.id)
            JOIN qualifications qual ON (qual.id = qualreq.qualification_id)
            WHERE roles.id = ?
        `,
        [roleId]
    )
    .then(results => results[0])
    .then(results => {
        console.log(results)
        res.status(200).json({ data: results })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ error: err })
    })
})


// 4. Display the ‘best fit’ list of candidates for a specific database analyst position
server.get('/query-four/:positionID', (req, res) => {
    const positionID = req.params.positionID
    
    db.query(
        `
            SELECT
                js.first_name as 'First Name',
                js.last_name as 'Last Name',
                GROUP_CONCAT(DISTINCT roles.role) as Role,
                COUNT(DISTINCT jsquals.qualification_id) + COUNT(DISTINCT skills.skill) as Alpha_Factor,
                GROUP_CONCAT(DISTINCT roles.role) as Role,
                SUM(DISTINCT TIMESTAMPDIFF(YEAR, FROM_UNIXTIME(hist.start_date), FROM_UNIXTIME(IFNULL(hist.end_date, UNIX_TIMESTAMP())))) as Years_of_Experience
            FROM jobseekers js
            JOIN employment_history hist ON (hist.jobseeker_id = js.email)
            JOIN roles ON (roles.id = hist.role_id)
            JOIN jobseeker_qualifications jsquals ON (jsquals.jobseeker_id = js.email)
            JOIN qualifications quals ON (jsquals.qualification_id = quals.id)
            JOIN jobseeker_skills jskills ON (jskills.jobseeker_id = js.email)
            JOIN skills ON (skills.id = jskills.skill_id)
            JOIN role_requirements rolereq ON (rolereq.role_id = roles.id)
            JOIN skill_requirements skillreq ON (skillreq.skill_id = skills.id)
            JOIN qualification_requirements qualreq ON (qualreq.qualification_id = quals.id)
            WHERE hist.role_id = (
                SELECT
                    rolereq.role_id
                FROM positions pos
                JOIN role_requirements rolereq ON (rolereq.position_id = pos.id)
                WHERE pos.id = ?
            )
            AND jskills.skill_id = skillreq.skill_id
            AND jsquals.qualification_id = qualreq.qualification_id
            GROUP BY js.email
            HAVING SUM(DISTINCT TIMESTAMPDIFF(YEAR, FROM_UNIXTIME(hist.start_date), FROM_UNIXTIME(IFNULL(hist.end_date, UNIX_TIMESTAMP())))) >= (
                SELECT
                    rolereq.required_exp_yrs
                FROM positions pos
                JOIN role_requirements rolereq ON (rolereq.position_id = pos.id)
                WHERE pos.id = ?
            )
            ORDER BY Alpha_Factor DESC
           
            
            


        `,
        [positionID, positionID]
    )
    .then(results => results[0])
    .then(results => {
        console.log(results)
        res.status(200).json({ data: results })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ error: err })
    })
    
})


// 5. Display the visa status for all web designers. Include the candidate name, 
//    surname and phone number. 
server.get('/query-five/:roleId', (req, res) => {
    const roleId = req.params.roleId

    db.query(
        `
            SELECT DISTINCT
                js.first_name,
                js.last_name,
                js.phone,
                roles.role,
                visa.passport,
                visa.visa_type,
                visa.visa_status,
                visa.working_rights
            FROM jobseekers js
            JOIN visa ON (js.email = visa.jobseeker_id)
            JOIN employment_history hist ON (hist.jobseeker_id = js.email)
            JOIN roles ON (hist.role_id = roles.id)
            WHERE roles.id = ?
        `,
        [roleId]
    )
    .then(results => results[0])
    .then(results => {
        console.log(results)
        res.status(200).json({ data: results })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ error: err })
    })
})


// 6. List the position title, description, responsibilities, skills requirements, 
//    and years of experience, salary range, location, and contract type for all 
//    positions where the salary is over $150 000. Group the results by position type.
server.get('/query-six/:salary', (req, res) => {
    const salary = req.params.salary

    db.query(
        `
            SELECT
                pos.position_title as "Position Title",
                pos.description as "Position Description",
                pos.responsibilities as "Role Responsibilities",
                CONCAT("$", pos.min_salary, " - $", pos.max_salary) as "Salary Range",
                pos.city as Location,
                pos.contract_type as "Contract Type",
                GROUP_CONCAT(skills.skill SEPARATOR ', ') as "Required Skills",
                GROUP_CONCAT(DISTINCT rolereq.required_exp_yrs) as "Required Experience (years)"
            FROM positions pos
            JOIN skill_requirements skillreq ON(skillreq.position_id = pos.id)
            JOIN skills ON (skills.id = skillreq.skill_id)
            JOIN role_requirements rolereq ON (rolereq.position_id = pos.id)
            JOIN roles ON (roles.id = rolereq.role_id)
            WHERE pos.min_salary >= ?
            GROUP BY pos.id, roles.id
            ORDER BY roles.role
        `,
        [salary]
    )
    .then(results => results[0])
    .then(results => {
        console.log(results)
        res.status(200).json({ data: results })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ error: err })
    })
})



// deleteDbData()

server.listen(PORT, () => {
    console.log(`Server -> Server listening on port ${PORT}`)
})