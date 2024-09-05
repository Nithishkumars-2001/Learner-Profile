
var section_1 = document.querySelector(".section1")
var courses = document.querySelector(".courses")

function show_profile(){
    section_1.style.display = "block"
    courses.style.display = "none"
}

function show_courses(){
    section_1.style.display = "none"
}


var course_option1 = document.querySelector(".course-option1")
var course_option2 = document.querySelector(".course-option2")
var course_option3 = document.querySelector(".course-option3")
var course_option4 = document.querySelector(".course-option4")

var courses_item = document.querySelector(".courses-item")
var combo = document.querySelector(".combo-items")
var free_library = document.querySelector(".free-library-items")
var webinars_items = document.querySelector(".webinars-items")

var line_1 = document.querySelector(".line1")
var line_2 = document.querySelector(".line2")
var line_3 = document.querySelector(".line3")
var line_4 = document.querySelector(".line4")

course_option1.addEventListener("click", () => {
    courses_item.style.display = "flex"
    combo.style.display = "none"
    free_library.style.display = "none"
    webinars_items.style.display = "none"
    line_1.style.display = "block"
    line_2.style.display = "none"
    line_3.style.display = "none"
    line_4.style.display = "none"
})

course_option2.addEventListener("click", () => {
    combo.style.display = "flex"
    courses_item.style.display = "none"
    free_library.style.display = "none" 
    webinars_items.style.display = "none"
    line_1.style.display = "none"
    line_2.style.display = "block"
    line_3.style.display = "none"
    line_4.style.display = "none"
})

course_option3.addEventListener("click", (event) => {
    event.preventDefault();
    combo.style.display = "none"
    courses_item.style.display = "none"
    free_library.style.display = "flex"
    webinars_items.style.display = "none"
    line_1.style.display = "none"
    line_2.style.display = "none"
    line_3.style.display = "block"
    line_4.style.display = "none"
})

course_option4.addEventListener("click", (event) => {
    event.preventDefault();
    combo.style.display = "none"
    courses_item.style.display = "none"
    free_library.style.display = "none"
    webinars_items.style.display = "flex"
    line_1.style.display = "none"
    line_2.style.display = "none"
    line_3.style.display = "none"
    line_4.style.display = "block"
})