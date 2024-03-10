var volunteer_checkbox = document.getElementById("volunteer");
var exchange_checkbox = document.getElementById("exchange");

volunteer_checkbox.addEventListener("change", bothCheckedAlert);
exchange_checkbox.addEventListener("change", bothCheckedAlert);

function bothCheckedAlert() {
  if (volunteer_checkbox.checked && exchange_checkbox.checked) {
      volunteer_checkbox.checked = false;
      exchange_checkbox.checked = false;
      alert("Please check only one of the boxes");
  }
}


function saveProfile() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var volunteer_checkbox = document.getElementById("volunteer");
    var exchange_checkbox = document.getElementById("exchange");

    document.getElementById("profileName").innerText = name;
    document.getElementById("profileEmail").innerText = email;
    if(volunteer_checkbox.checked){
    document.getElementById("status").innerText = "Volunteer"; 
    }else if (exchange_checkbox.checked){
        document.getElementById("status").innerText = "Exchange"; 
    }else{
        document.getElementById("status").innerText = "Unknown"; 
    }
    document.getElementById("profileForm").style.display = "none";
    document.getElementById("profileInfo").style.display = "block";
}

function editProfile() {
    document.getElementById("profileForm").style.display = "block";
    document.getElementById("profileInfo").style.display = "none";
}




var courses = [
    "ADHE", "AFST", "AGEC", "ASL", "ANAT", "AMNE", "ARCL", "ANTH", "AANB", "APBI",
    "APSC", "APPP", "AQUA", "ARCH", "ARST", "ARTH", "ASIC", "ARTC", "ARTS", "ASTU",
    "ACAM", "ASLA", "ASIA", "ASIX", "ASTR", "ATSC", "AUDI", "BIOC", "FSCT", "BIOF",
    "BIOL", "BMEG", "BIOT", "BOTA", "BRDG", "BUSI", "BA", "BAAC", "BABS", "BAIT",
    "BAEN", "BAFI", "BAHR", "BALA", "BAMS", "BAMA", "BAPA", "BASM", "BASC", "BAUL",
    "CDST", "CNTO", "CTLN", "CELL", "PHYL", "CAPS", "CENS", "CCFI", "CHBE", "CHEM",
    "CHIL", "CHIN", "CMST", "CINE", "CIVL", "ARBC", "CLST", "CEEN", "COGS", "COMM",
    "COEC", "COHR", "COMR", "PLAN", "COLX", "CPEN", "CPSC", "CAP", "CSPW", "CNPS",
    "CRWR", "CCST", "CSIS", "EDCP", "DANI", "DSCI", "DHYG", "DENT", "DES", "DMED",
    "MEDD", "ECED", "EOSC", "ECON", "EDUC", "ECPS", "EPSE", "EDST", "ETEC", "EECE",
    "ELEC", "ENPP", "ENPH", "ENGL", "ENST", "ENVE", "ENVR", "IEST", "EXGR", "EXCH",
    "EMBA", "FMPR", "FMST", "FIPR", "FNEL", "FNIS", "FISH", "FRE", "FOOD", "FNH",
    "BEST", "FOPR", "FRST", "FCOR", "FOPE", "FREN", "GRSJ", "GSAT", "GEOS", "GEOG",
    "GEM", "GERN", "GMST", "GRS", "GREK", "HGSE", "HESO", "HEBR", "HPB", "HINU",
    "HIST", "HUNU", "ILS", "INLB", "INDO", "INFO", "IAR", "IGEN", "ISCI", "IWME",
    "RADS", "INDS", "ITAL", "JAPN", "JRNL", "KIN", "KORN", "LFS", "LWS", "LARC",
    "LLED", "LATN", "LAST", "LAW", "LASO", "LIBR", "LAIS", "LING", "MGMT", "MANU",
    "MRNE", "MTRL", "MATH", "MECH", "MDIA", "MEDG", "MEDI", "MDVL", "MICB", "MES",
    "MIDW", "MINE", "ARBM", "MUSC", "NRES", "CONS", "NAME", "NEST", "NEPL", "NRSC",
    "NSCI", "NEUR", "NORD", "NURS", "OBST", "OSOT", "ONCO", "OBMS", "OHS", "ORNT",
    "ORPA", "PATH", "PERS", "PHAR", "PCTH", "PHRM", "PHIL", "PHTH", "PHYS", "PLNT",
    "PLAS", "POLS", "POLI", "PORT", "PSYT", "PSYC", "PPGA", "PUNJ", "RADI", "RHSC",
    "RGLA", "RELG", "RES", "RMST", "RUSS", "SANS", "SPPH", "SPHA", "SCIE", "STS",
    "SLAV", "SGES", "SOWK", "SOCI", "SOIL", "SOAL", "SEAL", "SPAN", "STAT", "RGST",
    "SURG", "SPE", "SWAH", "SWED", "LIBE"
  ];

  var select = document.getElementById("courseName");


  courses.forEach(function(course) {
    var option = document.createElement("option");
    option.value = course;
    option.text = course;
    select.appendChild(option);
  });


  function addCourse() {
    var selectElementName = document.getElementById("courseName");
    var selectElementNum = document.getElementById("courseCode")
    var selectedName = selectElementName.options[selectElementName.selectedIndex].text;
    var selectedValue = selectElementNum.innerText;
    var tagsContainer = document.getElementById("tagsContainer");
    var tag = document.createElement("div");
    tag.classList.add("tag");
    tag.textContent = selectedName + " " + selectedValue;
    tag.onclick = function() {
        this.remove();
    };
    tagsContainer.appendChild(tag);
}

