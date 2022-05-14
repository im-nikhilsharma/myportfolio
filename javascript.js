const calculateAge = () => {
    let date=document.getElementById("date").value;
    let month=document.getElementById("month").value;
    let year=document.getElementById("year").value;
    
    if(date>31) {
        alert("input valid date");
        return;
    }
    //parse
    let dob = new Date(`${date} ${month} ${year}`);
    console.log(dob);
}