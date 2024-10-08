const express = require("express");//นำเข้าโมดูล Express เพื่อสร้างเราเตอร์ Express
const router = express.Router();//Express เราเตอร์นี้จะใช้เพื่อกำหนดเส้นทางต่างๆ ที่เกี่ยวข้องกับการดำเนินการผลิตภัณฑ์
const adminticateToken = require("../middlewares/admin");/*นำเข้าฟังก์ชันมิดเดิลแวร์authenticateTokenจากไฟล์ที่อยู่ที่
../middlewares/authมิดเดิลแวร์นี้ใช้เพื่อตรวจสอบคำขอโดยยืนยันโทเค็น เพื่อให้แน่ใจว่าผู้ใช้ที่ได้รับอนุญาตเท่านั้นที่สามารถเข้าถึงเส้นทางได้*/
const { getSchool, getSchoolID, postSchool, updateSchool, deleteSchool,} = require("../controller/SchoolController");

 router.get("/", adminticateToken, getSchool);
 router.get("/:id", adminticateToken, getSchoolID);
 router.post("/", adminticateToken, postSchool);
 router.put("/:id", adminticateToken, updateSchool);
 router.delete("/:id", adminticateToken, deleteSchool);



module.exports = router;
