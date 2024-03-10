
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
  // Get the select element
  var select = document.getElementById("courseName");

  // Loop through the courses array and create an option for each abbreviation
  courses.forEach(function(course) {
    var option = document.createElement("option");
    option.value = course;
    option.text = course;
    select.appendChild(option);
  });

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



