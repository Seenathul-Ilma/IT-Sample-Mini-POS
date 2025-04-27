import {students_db} from "../db/db.js";


function loadStudentOnTable() {

    $('#student-tbody').empty();

    students_db.map((item, index) => {
        let fname = item.fname;
        let lname = item.lname;
        let address = item.address;

        let data = `<tr>
              <td>${index + 1}</td>
              <td>${fname}</td>
              <td>${lname}</td>
              <td>${address}</td>
          </tr>`

        $('#student-tbody').append(data);
    });
}

$('#student_save').on('click', function () {
    let fname = $('#fname').val();
    let lname = $('#lname').val();
    let address = $('#address').val();

    // console.log(`fname: ${fname}, lname: ${lname}, address: ${address}`);

    if(fname === '' || lname === '' || address === '') {
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Please enter valid inputs..!"
        });
    } else {
        let student_data = {
            fname: fname,
            lname: lname,
            address: address
        };

        students_db.push(student_data);
        console.log(students_db);

        loadStudentOnTable();


        Swal.fire({
            title: "Successfully Added!",
            icon: "success",
            draggable: true
        });
    }

    $('#fname').val("");
    $('#lname').val("");
    $('#address').val("");
});

$('#student_reset').on('click', function () {
    $('#fname').val("");
    $('#lname').val("");
    $('#address').val("");
});