const db = require('../database')

// Get user data
const jobseekers = require('./jobseekers')

const deleteJobseekers = () => {
    // This will delete all data related to all jobseekers including
    // skills, qualifications and employment history as all of these
    // child tables are set to cascade on update or delete
    db.query(
        "DELETE FROM jobseekers"
    )
}

const pushJobseekerData = () => {
    // Enter jobseekers into database
    let error = false

    jobseekers.forEach(jobseeker => {
        if(error === false){

            // Push profile data
            db.query(
                "INSERT INTO jobseekers(email, first_name, last_name, password, phone, date_joined) VALUES(?, ?, ?, ?, ?, ?)",
                [jobseeker.email, jobseeker.firstName, jobseeker.lastName, jobseeker.password, jobseeker.phone, jobseeker.dateJoined],
            )
            .then(result => {
                // console.log(result[0])
            })
            .then(() => {

                // Push skills data
                jobseeker.skills.forEach(skill => {
                    db.query(
                        "INSERT INTO jobseeker_skills(jobseeker_id, skill_id, skill_level) VALUES(?, ?, ?)",
                        [jobseeker.email, skill.skillID, skill.skillLevel]
                    )
                    // .then(result => console.log(result[0]))
                    .catch(err => {
                        error = true
                        console.log(err)
                    })
                })

                 // Push qualifications data
                jobseeker.qualifications.forEach(qualification => {
                    db.query(
                        "INSERT INTO jobseeker_qualifications(jobseeker_id, qualification_id, grad_year) VALUES(?, ?, ?)",
                        [jobseeker.email, qualification.qualificationID, qualification.gradYear]
                    )
                    // .then(result => console.log(result[0]))
                    .catch(err => {
                        error = true
                        console.log(err)
                    })
                })
           

                // Push employment history data
                jobseeker.employmentHistory.forEach(job => {
                    if(job.endDate === undefined) job.endDate = null
                    db.query(
                        "INSERT INTO employment_history(jobseeker_id, start_date, end_date, role_id, details) VALUES(?, ? ,? , ?, ?)",
                        [jobseeker.email, job.startDate, job.endDate, job.role, job.details]
                    )
                    // .then(results => console.log(results[0]))
                    .catch(err => {
                        error = true
                        console.log(err)
                    })
                })

                // Push visa data
                db.query(
                    "INSERT INTO visa(jobseeker_id, passport, visa_number, visa_type, visa_status, working_rights) VALUES(?, ?, ?, ?, ?, ?)",
                    [jobseeker.email, jobseeker.visa.passport, jobseeker.visa.visaNumber, jobseeker.visa.visaType, jobseeker.visa.visaStatus, jobseeker.visa.workingRights]
                )
                // .then(results => console.log(results[0]))
                .catch(err => {
                    error = true
                    console.log(err)
                })

            })
            .catch(err => {
                error = true
                console.log(err)
            })
            

        }

    })

    console.log(error)
    if (error){
        deleteJobseekers()
        return false
    } else {
        return true
    }
}


// Get employer data
const employers = require('../mock-data/employers')

// Delete employers and all linked child tables - will cascade delete
const deleteEmployers = () => {
    db.query(
        "DELETE FROM employers"
    )
}

// Push employer data
const pushEmployerData = () => {
    // Enter employers into database
    let error = false

    employers.forEach(employer => {
        if(error === false){

            // Push profile data
            db.query(
                "INSERT INTO employers(abn_acn, employer_name, contact_name, contact_email, contact_phone, password, address_line_1, address_line_2, city, state, date_joined) " + 
                "VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                [
                    employer.abn_acn, 
                    employer.employerName, 
                    employer.contactName, 
                    employer.contactEmail, 
                    employer.contactPhone, 
                    employer.password, 
                    employer.addressLine1, 
                    employer.addressLine2, 
                    employer.city, 
                    employer.state, 
                    employer.dateJoined
                ],
            )
            .then(result => {
                console.log(result[0])
            })
            .then(() => {

                // Push position data
                employer.positions.forEach(position => {
                    db.query(
                        "INSERT INTO positions(employer_id, position_title, description, responsibilities, min_salary, max_salary, city, state, contract_type) " + 
                        "VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)",
                        [
                            employer.abn_acn,
                            position.positionTitle,
                            position.description,
                            position.responsibilities,
                            position.minSalary,
                            position.maxSalary,
                            position.city,
                            position.state,
                            position.contractType
                        ]
                    )
                    .then(results => {
                        // console.log("Position Res: ", results[0])
    
                        // Push required skills data
                        position.skillRequirements.forEach(skill => {
                            db.query(
                                "INSERT INTO skill_requirements(position_id, skill_id, required_skill_level) " + 
                                "VALUES(?, ?, ?)",
                                [results[0].insertId, skill.skillID, skill.requiredSkillLevel]
                            )
                            // .then(result => console.log("Skill Res: ", result[0]))
                            .catch(err => {
                                error = true
                                console.log(err)
                            })
                        })

                        // Push required qualifications data
                        position.qualificationRequirements.forEach(qualification => {
                            db.query(
                                "INSERT INTO qualification_requirements(position_id, qualification_id) VALUES(?, ?)",
                                [results[0].insertId, qualification.qualificationID]
                            )
                            // .then(result => console.log(result[0]))
                            .catch(err => {
                                error = true
                                console.log(err)
                            })
                        })
                
                        // Push required experience data
                        position.roleRequirements.forEach(role => {
                            db.query(
                                "INSERT INTO role_requirements(position_id, role_id, required_exp_yrs) VALUES(?, ? ,?)",
                                [results[0].insertId, role.roleID, role.requiredYrsExp]
                            )
                            .then(results => console.log(results[0]))
                            .catch(err => {
                                error = true
                                console.log(err)
                            })
                        })
    
    
                    })
                    .catch(err => {
                        error = true
                        console.log(err)
                    })
                })

            })
            .catch(err => {
                error = true
                console.log(err)
            })
            

        }

    })

    console.log(error)
    if (error){
        deleteEmployers()
        return false
    } else {
        return true
    }
}

module.exports.pushData = () => {
    let success = true
    success = success && pushJobseekerData()
    success = success && pushEmployerData()
    return success
}

module.exports.deleteDbData = () => {
    deleteJobseekers()
    deleteEmployers()
}