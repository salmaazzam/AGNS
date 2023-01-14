const express = require("express");
const router = express.Router();
const {getAdmins, getAdmin, createAdmin, deleteAdmin, updateAdmin} = require('../Controllers/adminController');


router.get("/", getAdmins) //("/", name of the function that gets the admins);

router.get("/:id", getAdmin)

router.post("/",createAdmin)

router.delete("/:id",  deleteAdmin)

router.patch("/:id", updateAdmin)

/*router.get("/", (req, res)=>{
    res.status(200).send("Welcome Admin");
});

router.post("/", (req, res)=>{ 
    res.redirect("/admin/addAdmin");
});


router.post("/addAdmin", (req, res)=>{
    var newAdmin = new Admin({ username: req.body.username, password: req.body.password});
    AddAdminHelper(newAdmin).then(flag=>{
        if(flag)
        res.status(200).send(" Admin Inserted");
        else
        res.status(200).send(" Admin exists");
    });
      });

      


router.post("/addInstructor", (req, res)=>{
    var newInstructor = new Instructor({ username: req.body.username, password: req.body.password});
    AddInstructorHelper(newInstructor).then(flag=>{
        if(flag)
        res.status(200).send("Instructor Inserted");
        else
        res.status(200).send("Instructor exists");
    });
})

    
router.get("/addCorporateTrainee", (req, res)=>{
    res.status(200).send("hiiii addCorporateTrainee");
});

router.post("/addCorporateTrainee", (req, res)=>{
    var newCorporateTrainee = new CorporateTrainee({ username: req.body.username, password: req.body.password});
    AddCorpTraineehelper(newCorporateTrainee).then(flag=>{
        if(flag)
        res.status(200).send("CorpTrainee Inserted");
        else
        res.status(200).send("CorpTrainee exists");
    });
})*/


module.exports = router;
