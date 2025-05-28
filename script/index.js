let schoolForm = document.getElementById("getSchool");


schoolForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const selectedSchool = document.getElementById("school").value;

    switch (selectedSchool) {
        case "UNILAG": 
            window.location.href = "/includedSchool/unilag.html";
            break;

        case "LASU":
            window.location.href = "/includedSchool/lasu.html";
            break;

        case "LASUSTECH":
            window.location.href = "/includedSchool/lasustech.html";
            break;

        case "OAU":
            window.location.href = "/includedSchool/oau.html";
            break;

        case "OOU":
            window.location.href = "/includedSchool/oou.html";
            break;

        case "UNN":
            window.location.href = "/includedSchool/unn.html";
            break;

        case "YCT":
            window.location.href = "/includedSchool/yct.html";
            break;

        case "gaposa":
            window.location.href = "/includedSchool/gaposa.html";
            break;

        case "UNILORIN":
            window.location.href = "/includedSchool/uniilorin.html";
            break;

        case "UI":
            window.location.href = "/includedSchool/ui.html";
            break;

        case "ATBU":
            window.location.href = "/includedSchool/atbu.html";
            break;

        case "ABU":
            window.location.href = "/includedSchool/abu.html";
            break;

        case "BUK":
            window.location.href = "/includedSchool/buk.html";
            break;

        case "FUNAAB":
            window.location.href = "/includedSchool/funaab.html";
            break;

        case "FUTA":
            window.location.href = "/includedSchool/futa.html";
            break;

        case "FUTMIN":
            window.location.href = "/includedSchool/futmin.html";
            break;

        case "UNIZIK":
            window.location.href = "/includedSchool/unizik.html";
            break;

        default:
            alert("Please select a valid school");
    }
})