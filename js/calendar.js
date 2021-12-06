function myFunction() {
  let year = document.getElementById("year-input").value;

  function checkLeap(year) {
    let leap = false;

    if (year % 4 == 0) {
      //divided by 4

      if (year % 100 == 0) {
        //check if century end

        if (year % 400 == 0)
          //divided by 400 means leap year
          leap = true;
        else leap = false;
      } //not a century
      else leap = true;
    } //not divided by 4
    else leap = false;
    return leap;
  }

  let months = [
    {
      name: "January",
      maxDays: 31,
    },
    {
      name: "February",
      maxDays: 28,
    },
    {
      name: "March",
      maxDays: 31,
    },
    {
      name: "April",
      maxDays: 30,
    },
    {
      name: "May",
      maxDays: 31,
    },
    {
      name: "June",
      maxDays: 30,
    },
    {
      name: "July",
      maxDays: 31,
    },
    {
      name: "August",
      maxDays: 31,
    },
    {
      name: "September",
      maxDays: 30,
    },
    {
      name: "October",
      maxDays: 31,
    },
    {
      name: "November",
      maxDays: 30,
    },
    {
      name: "December",
      maxDays: 31,
    },
  ];
  let dayOfWeek = year % 7;

  if (checkLeap(year)) {
    months[1].maxDays = 29;
  } else {
    months[1].maxDays = 28; //set February max days depending if leap year
  }

  function checkYear() {
    let x = parseInt(year.toString().slice(-2));
    let y = parseInt(year.toString().slice(0, 2));
    let a = Math.floor(x / 4);

    a += 1; // january
    a += 1; //day 1
    if (checkLeap(year)) {
      a = a - 1;
    }
    for (; y < 17 || y > 20; ) {
      if (y < 17) {
        y += 4;
      } else if (y > 20) {
        y -= 4;
      }
    }
    switch (y) {
      case 17:
        a += 4;
        break;

      case 18:
        a += 2;
        break;

      case 19:
        a += 0;
        break;

      case 20:
        a += 6;
        break;

      default:
        break;
    }
    let val = (a += x);

    let startDay = (val % 7) - 1;
    if (startDay == -1) {
      startDay = 6;
    }
    return startDay;
  }
  checkYear(year);

  function changeValue() {
    let startDay = checkYear(year);
    let myTable = document.getElementsByTagName("table");
    let dayOfWeek = startDay; //0 - 6 Sun - Sat

    for (i = 0; i != 12; i++) {
      // 12 month loop

      let y = myTable[i].getElementsByTagName("th");

      for (j = 0; j != 42; j++) {
        //clear all cells
        let x = myTable[i].getElementsByClassName("day");
        x[j].innerHTML = "&nbsp;";
      }

      for (
        j = dayOfWeek % 7, day = 0;
        day < months[i].maxDays;
        dayOfWeek++, j++, day++
      ) {
        try {
          let x = myTable[i].getElementsByClassName("day");
          x[j].innerHTML = day + 1;
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
  changeValue();
}
